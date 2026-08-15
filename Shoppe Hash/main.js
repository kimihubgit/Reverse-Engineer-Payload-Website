const fs = require('fs'); // Thêm module fs để lưu file
const crypto = require('crypto');


let e = "dRgUkXp2r5u8x/A?D(G+KbPeShVmYq3t"

// Tái tạo EVP_BytesToKey (KDF OpenSSL-style, default MD5)
function evpBytesToKey(password, salt, keySize, ivSize, hashAlgorithm = 'md5') {
    password = Buffer.from(password, 'utf8'); // Chuyển passphrase thành Buffer
    let block = Buffer.alloc(0);
    let d = Buffer.alloc(0);
    while (block.length < keySize + ivSize) {
        const hasher = crypto.createHash(hashAlgorithm);
        hasher.update(d);
        hasher.update(password);
        if (salt) hasher.update(salt);
        d = hasher.digest();
        block = Buffer.concat([block, d]);
    }
    return {
        key: block.slice(0, keySize),
        iv: block.slice(keySize, keySize + ivSize)
    };
}

// Padding PKCS7
function pkcs7Pad(data, blockSize) {
    const padLength = blockSize - (data.length % blockSize);
    const padding = Buffer.alloc(padLength, padLength);
    return Buffer.concat([data, padding]);
}

// Unpadding PKCS7
function pkcs7Unpad(data) {
    const padLength = data[data.length - 1];
    return data.slice(0, data.length - padLength);
}

// Format OpenSSL: stringify (tạo Base64 "Salted__" + salt + ciphertext)
function opensslStringify({ ciphertext, salt }) {
    const salted = Buffer.from('Salted__');
    const formatted = salt ? Buffer.concat([salted, salt, ciphertext]) : ciphertext;
    return formatted.toString('base64');
}

// Format OpenSSL: parse (giải Base64 và trích xuất salt + ciphertext)
function opensslParse(base64String) {
    const buffer = Buffer.from(base64String, 'base64');
    if (buffer.slice(0, 8).toString() !== 'Salted__') {
        throw new Error('Không phải định dạng OpenSSL hợp lệ');
    }
    const salt = buffer.slice(8, 16);
    const ciphertext = buffer.slice(16);
    return { ciphertext, salt };
}

// PasswordBasedCipher: encrypt (mã hóa với passphrase)
function passwordBasedEncrypt(plaintext, passphrase, options = {}) {
    const { keySize = 32, ivSize = 16, hasher = 'md5', salt = crypto.randomBytes(8) } = options;
    
    // Derive key và IV dùng EVP KDF
    const { key, iv } = evpBytesToKey(passphrase, salt, keySize, ivSize, hasher);
    
    // Mã hóa AES-256-CBC với padding PKCS7
    let data = Buffer.from(plaintext, 'utf8');
    data = pkcs7Pad(data, 16); // Block size 16 bytes
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let ciphertext = cipher.update(data);
    ciphertext = Buffer.concat([ciphertext, cipher.final()]);
    
    // Trả về dưới dạng object, hoặc stringify nếu cần
    const result = {
        ciphertext,
        key,
        iv,
        salt,
        toString: () => opensslStringify({ ciphertext, salt })
    };
    return result;
}

// PasswordBasedCipher: decrypt (giải mã với passphrase)
function passwordBasedDecrypt(encrypted, passphrase, options = {}) {
    const { keySize = 32, ivSize = 16, hasher = 'md5' } = options;
    
    // Nếu encrypted là string Base64, parse trước
    const parsed = typeof encrypted === 'string' ? opensslParse(encrypted) : encrypted;
    const { ciphertext, salt } = parsed;
    
    // Derive key và IV dùng EVP KDF
    const { key, iv } = evpBytesToKey(passphrase, salt, keySize, ivSize, hasher);
    
    // Giải mã AES-256-CBC
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let data = decipher.update(ciphertext);
    data = Buffer.concat([data, decipher.final()]);
    
    // Unpad PKCS7
    data = pkcs7Unpad(data);
    return data.toString('utf8');
}

let enc = "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"

let filepath = "encrypted.txt"
const decrypted = passwordBasedDecrypt(enc, e);

 fs.writeFileSync(filepath, decrypted, 'utf8');
console.log('Decrypted:', decrypted); // Output: Hello, World!