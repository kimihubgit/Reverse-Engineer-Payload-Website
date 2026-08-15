// decode_base64.js - Chương trình decode Base64

const base64Str = "KkZWxsdJg0I9f7q7a7bbaqrJwTWzA8dj2UbyQLH8hqKJh1QJ30nN3xHJu0bfr53P/xntz4kymlksS0OV6Hmrw44b8tzRQbR1HqEWTt71F6GIhl6vDAWSMPy599/sa+OgLKnlbzUMoMQJNfYoEJp9ROw78mWZOe6nPHpqtu0+P91i8tDFJ2OXFsDmn+1YLK6pHUpqyx8kaHhfgJP7g8863PWvuzsG2RoBVYa/NkESbbrOE04Z6Tba7Oy+yWDxSiKtr1LjxkNRwW2pfaE/bah6hQQLW+n4gu/WeB+I12GcMKTfvwI8RFGVi5lttvqhiANmMzV4LclOH9d0FT9C3/b/aOSfWQNUoJ2S1qfJs1Gm1AiJCjMEIVe3SZ2QmHgksBQH9wpWbqUg0ZBx8XwY4xJrHXyOiGhVqk9yE1wBUEb6bqxvjcOx4Zxi2Dq5PJQkfO+GsbJJBx1ZysG/ugtGfKEMvfZDHjHQGkExZPd2ilQBgC7eZYB8b/SMNx4zIWQOtKU=";

// Decode Base64 thành Buffer (bytes)
const buffer = Buffer.from(base64Str, 'base64');

// Dump dưới dạng hex (dữ liệu gốc binary)
function hexDump(buffer) {
    let hex = '';
    for (let i = 0; i < buffer.length; i++) {
        hex += buffer[i].toString(16).padStart(2, '0').toUpperCase() + ' ';
        if ((i + 1) % 16 === 0) hex += '\n';
    }
    return hex.trim();
}

// Dump dưới dạng text (printable chars only, non-printable thành '.')
function textDump(buffer) {
    let text = '';
    for (let i = 0; i < buffer.length; i++) {
        const char = (buffer[i] >= 32 && buffer[i] <= 126) ? String.fromCharCode(buffer[i]) : '.';
        text += char;
    }
    return text;
}

// Thử decode thành text UTF-8 (nếu không phải binary thuần)
let text;
try {
    text = buffer.toString('utf-8');
} catch (e) {
    text = 'Không phải text UTF-8 hợp lệ.';
}

// In kết quả
console.log('Dữ liệu gốc (hex dump):');
console.log(hexDump(buffer));
console.log('\nDữ liệu gốc (text dump, printable only):');
console.log(textDump(buffer));
console.log('\nThử decode thành text UTF-8:');
console.log(text);
console.log('\nĐộ dài bytes:', buffer.length);