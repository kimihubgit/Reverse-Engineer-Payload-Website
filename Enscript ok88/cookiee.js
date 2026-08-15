// Nhập thư viện JSEncrypt
const { JSEncrypt } = require('jsencrypt');

// Set your private key (for decryption)


// Nhập thư viện JSEncrypt
const { JSEncrypt } = require('jsencrypt');

function encryptPassword(password, publicKey) {
    // Khởi tạo đối tượng JSEncrypt
    const encryptor = new JSEncrypt();
    
    // Thiết lập khóa công khai
    encryptor.setPublicKey(publicKey);
    
    // Mã hóa mật khẩu và trả về kết quả
    const encryptedPassword = encryptor.encrypt(password);
    
    return encryptedPassword;
}

// Ví dụ sử dụng
const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzf4YxyymMba7wWLxDq2T
X2GinqdFwMaGn+O9vZws7LYrsiCnjP/siIyBbRoRcuEBZArW5kPgmHbYgWKJbsnu
CCHhQDQ5X9C2bGn4AqZAd5smX72WMjCkShkBBKGy+9N/LdlYzIt2d/9Xo1myE1fQ
bcxG/ZJkxDAh/XNY39/cDgBDVgm4XJ+gahRksirv9Hlf+3UJCOX8DHE/33draapg
+Pj2n6o1yezUSe3I6NDm+QVfgfafO46yukG5qJWFYCg3PW72HsButaxwctzlu7iA
xVXqYOK2J6hsp9Ofu+3A5XErIB4cSLbOb6E1QBzX+Uvtgl3UDLRA9ZvL34Ms4vkj
VwIDAQAB
-----END PUBLIC KEY-----`; // Thay bằng khóa công khai thực tế
const password = "ksdjfhHHH9827";
const encrypted = encryptPassword(password, publicKey);
console.log(encrypted);

// Decrypt data
// const decrypted = crypt.decrypt(encrypted);
