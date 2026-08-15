const { parse } = require("@babel/parser");
const generator = require("@babel/generator").default;
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const fs = require("fs");

// Đọc code từ file input.js
const code = fs.readFileSync('demo.js', { encoding: 'utf-8' });
const ast = parse(code, { sourceType: "script" });

traverse(ast, {
  // Xử lý StringLiteral: Xóa extra để output plain string (không escaped)
  StringLiteral(path) {
    if (path.node.extra) {
      delete path.node.extra;
    }
  },

  // Xử lý MemberExpression: Chuyển property StringLiteral thành Identifier nếu hợp lệ
  MemberExpression(path) {
    if (path.node.computed && types.isStringLiteral(path.node.property)) {
      const propValue = path.node.property.value;
      // Kiểm tra identifier hợp lệ (bắt đầu bằng chữ cái/_/$, theo sau chữ cái/số/_/$)
      if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(propValue)) {
        path.node.property = types.identifier(propValue);
        path.node.computed = false;
      }
    }
  },

  // Xử lý BinaryExpression: Hợp nhất chuỗi nối (+) nếu cả hai bên là StringLiteral
  BinaryExpression(path) {
    if (path.node.operator === '+' && types.isStringLiteral(path.node.left) && types.isStringLiteral(path.node.right)) {
      path.replaceWith(types.stringLiteral(path.node.left.value + path.node.right.value));
    }
  },

  // Xử lý CallExpression: Nếu là .concat() với chuỗi, hợp nhất nếu có thể
  CallExpression(path) {
    if (types.isMemberExpression(path.node.callee) && 
        types.isStringLiteral(path.node.callee.object) && 
        path.node.callee.property.name === 'concat' && 
        path.node.arguments.every(arg => types.isStringLiteral(arg))) {
      let concatenated = path.node.callee.object.value;
      path.node.arguments.forEach(arg => {
        concatenated += arg.value;
      });
      path.replaceWith(types.stringLiteral(concatenated));
    }
  }
});

// Generate code mới (compact: false để dễ đọc)
const output = generator(ast, { compact: false, retainLines: true }).code;

// Ghi vào file output.js
fs.writeFileSync('output.js', output, { encoding: 'utf-8' });

console.log('Đã xử lý và ghi vào output.js');