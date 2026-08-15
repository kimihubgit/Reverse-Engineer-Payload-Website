const crypto = require('crypto');

const passphrase = "U2FsdGVkX1/9C9SpUnD3VIgJGj6GOMVMHHn6i/9qbvXHlaTNurpJvsE+MHpFvegB";

const encrypt = (text = "") => {
  const cipher = crypto.createCipher('aes-256-cbc', passphrase);
  let encrypted = cipher.update(text, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted.replace(/\+/g, '.');
};

// const decrypt = (encrypted = "") => {
//   encrypted = encrypted.replace(/\./g, '+');
//   const decipher = crypto.createDecipher('aes-256-cbc', passphrase);
//   let decrypted = decipher.update(encrypted, 'base64', 'utf8');
//   decrypted += decipher.final('utf8');
//   return decrypted;
// };

// Ví dụ sử dụng:
const originalText = {
    "username": "wdsfsdf",
    "password": "sdfsdf",
    "sso": "U2FsdGVkX1.laocDuwyqT.qMub.rkzQRFQQrmpMANkrEIVQme.oAnHx9gzzUjd5v",
    "login_type": "local"
};
const encryptedText = encrypt(originalText);
console.log("Encrypted:", encryptedText);

// const decryptedText = decrypt(encryptedText);
// console.log("Decrypted:", decryptedText);