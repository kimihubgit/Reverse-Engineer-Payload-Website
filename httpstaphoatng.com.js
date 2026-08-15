const crypto = require('crypto');

function evpBytesToKey(passphrase, salt, keySize, ivSize) {
  const pass = Buffer.from(passphrase, 'utf8');
  let keyBuf = Buffer.alloc(0);
  let prev = Buffer.alloc(0);
  while (keyBuf.length < keySize + ivSize) {
    const hash = crypto.createHash('md5');
    hash.update(prev);
    hash.update(pass);
    hash.update(salt);
    prev = hash.digest();
    keyBuf = Buffer.concat([keyBuf, prev]);
  }
  const key = keyBuf.slice(0, keySize);
  const iv = keyBuf.slice(keySize, keySize + ivSize);
  return { key, iv };
}

const encrypt = (data, passphrase) => {
  // Chuyển data thành chuỗi JSON nếu là object
  const text = typeof data === 'object' ? JSON.stringify(data) : String(data || '');

  const salt = crypto.randomBytes(8);
  const { key, iv } = evpBytesToKey(passphrase, salt, 32, 16); // AES-256: key 32 bytes, IV 16 bytes

  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'binary');
  encrypted += cipher.final('binary');

  // Tạo format như CryptoJS: "Salted__" + salt + ciphertext
  const salted = Buffer.concat([Buffer.from('Salted__'), salt, Buffer.from(encrypted, 'binary')]);
  let base64 = salted.toString('base64');

  // Thay + bằng . như mã gốc
  return base64.replace(/\+/g, '.');
};

const passphrase = "U2FsdGVkX1/9C9SpUnD3VIgJGj6GOMVMHHn6i/9qbvXHlaTNurpJvsE+MHpFvegB";

const originalText = {
    "username": "vkhai2603",
    "password": "vkhai2603",
    "sso": "U2FsdGVkX1.laocDuwyqT.qMub.rkzQRFQQrmpMANkrEIVQme.oAnHx9gzzUjd5v",
    "login_type": "local"
};

const encryptedText = encrypt(originalText, passphrase);
console.log("Encrypted:", encryptedText);