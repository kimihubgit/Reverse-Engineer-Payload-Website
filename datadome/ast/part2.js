const { parse } = require("@babel/parser");
const generator = require("@babel/generator").default;
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const fs = require("fs");

// Đọc code từ file input.js (copy full code obfuscated vào đây)
const code = fs.readFileSync('output.js', { encoding: 'utf-8' });
const ast = parse(code, { sourceType: "script" }); // "script" cho code không module

// Optional: Eval phần decoder nếu có (tương tự script gốc của bạn)
// Giả sử phần đầu AST định nghĩa decoder, extract và eval chúng
let decoderCode = '';
// Ví dụ: Lấy các statement đầu tiên định nghĩa hàm r, pA, v.v. (adjust index dựa trên code bạn)
for (let i = 0; i < 10; i++) { // Giả sử 10 statement đầu là decoder
  if (ast.program.body[i]) {
    decoderCode += generator(ast.program.body[i]).code + '\n';
  }
}
try {
  eval(decoderCode); // Eval để define r, pA, Na, v.v. trong global (nguy hiểm, chỉ dùng dev)
} catch (e) {
  console.warn('Không eval được decoder:', e);
}

traverse(ast, {
  // Thử evaluate và thay thế CallExpression nếu computable (như r(134) -> "someString")
  CallExpression(path) {
    const evaluated = path.evaluate();
    if (evaluated.confident) {
      path.replaceWith(types.valueToNode(evaluated.value));
    } else if (path.node.arguments.every(types.isLiteral) && typeof eval(path.toString()) !== 'undefined') {
      // Nếu eval được (sau khi eval decoder), thay thế
      try {
        const value = eval(path.toString());
        path.replaceWith(types.valueToNode(value));
      } catch (e) {}
    }
  },

  // Hợp nhất BinaryExpression (nếu + giữa literals)
  BinaryExpression(path) {
    if (path.node.operator === '+' && types.isLiteral(path.node.left) && types.isLiteral(path.node.right)) {
      const leftVal = path.node.left.value;
      const rightVal = path.node.right.value;
      path.replaceWith(types.valueToNode(leftVal + rightVal)); // Hỗ trợ string + number nếu cần
    }
  },

  // Clean StringLiteral (xóa escaped)
  StringLiteral(path) {
    if (path.node.extra) {
      delete path.node.extra;
    }
  },

  // Chuyển MemberExpression computed sang dot nếu property là identifier valid
  MemberExpression(path) {
    if (path.node.computed && types.isStringLiteral(path.node.property)) {
      const propValue = path.node.property.value;
      if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(propValue)) {
        path.node.property = types.identifier(propValue);
        path.node.computed = false;
      }
    }
  },

  // Xử lý concat nếu là string.concat(...)
  CallExpression(path) {
    if (types.isMemberExpression(path.node.callee) && 
        path.node.callee.property.name === 'concat' && 
        types.isStringLiteral(path.node.callee.object) &&
        path.node.arguments.every(types.isStringLiteral)) {
      let result = path.node.callee.object.value;
      path.node.arguments.forEach(arg => result += arg.value);
      path.replaceWith(types.stringLiteral(result));
    }
  }
});

// Generate code mới (giữ format readable)
const output = generator(ast, { compact: false, retainLines: true }).code;

// Ghi vào output.js
fs.writeFileSync('output.js', output, { encoding: 'utf-8' });

console.log('Đã xử lý và ghi vào output.js');