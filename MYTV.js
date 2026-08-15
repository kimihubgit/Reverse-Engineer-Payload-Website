const crypto = require('crypto');
function createHmacHelper(algorithm) {
    return (data, key) => crypto.createHmac(algorithm, key).update(data).digest('hex');
}

// Thử với SHA512
let time = Date.now()
time = time.toString()
console.log(time);

const hmacSHA512 = createHmacHelper('sha512');
const testKey = "6847f1a4fc2f4eb6ab13f9<SDT>"; // 6847f1a4fc2f4eb6ab13f9<Số đIỆN tHOẠI>
const result = hmacSHA512(time, testKey);
console.log(result); // Kiểm tra xem có khớp không