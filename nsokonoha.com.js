const CryptoJS = require('crypto-js');
function decryptAES(ciphertext, key) {
    return CryptoJS.AES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8).replace(/^"(.*)"$/, "$1");
}

function generateKey() {
    return CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex);
}

function encryptAES(data, key) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
}

function registerUser(e, t, n) {
    
    let key = generateKey();
    let encryptedData = encryptAES(e, key);
    let encryptedPasswords = encryptAES({
        password: t,
        confirmPassword: n
    }, key);
    
    let response = {
        ct: encryptedData,
        s: encryptedPasswords,
        iv: key  
    };
    
    return response;
}


let data = {
    "ct": "U2FsdGVkX18TFStrodjBzfoOCjsKagmAWtlxDoGf9SXdGlPUs9IUPiOoH41MPLHvr2IBt1g3IW46es66BsRPykifXSBiWnSFe8GhzTHHLRc=",
    "iv": "adc763cf0aa7dd04b90b63c6fd216138",
    "s": "17d3e600beff972fbe8b0666997d50dd64de4fca85cb19c20bda5025d771e760"
}

console.log(decryptAES(data.ct, data.iv));
console.log(registerUser("user name", "matkhau", "matkhau2"));



