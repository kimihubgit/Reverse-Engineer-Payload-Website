const crypto = require('crypto');

let key = "df488e087ca531ee" // key 16 bytes ( các mã hóa này đã login nên dùng dạng mã hóa là TokenAndUid )
// let key = "tgJt2ol!^E)E8(%P"



// data dùng cho API verifyWithdrawPass
let data = {
    "withdraw_pass": "112233",
    "time": 1767608424
}
// 9GLC0mHbbWvs1cEMLmOPcYVJ6bBEtSTQOBo8Y0pxqYM655o9MEg4prEqSgnAFWMd


// data Dùng cho api modifyWithdrawPass
let data2 = {"withdraw_pass":"112233","secondVerify":{"type":0,"withdraw_pass":"112233"},"time":1767608856}
// 9GLC0mHbbWvs1cEMLmOPceywEICfNu/3T7bT2ZZ6Fd9+oN7KP3vBVMTMxLTpM9zcoS/76n94p1To7M45r3Qz1qz9qkAPbRtTqWG66x5Q3y/eRkkc9CiSWxVd7vaY22YB

// ============================================================================== Ngân Hàng

// Data dùng cho API verifyWithdrawalPasswordV2
let data3 = {
    "withdrawalPassword": "112233",
    "addWithdrawAccountType": 1,
    "time": 1767609245
}
// "0nAsQJEv6KxopqHDmPd/mB5oEnt0jvCWAC5CWvxwjhhF+sF2OTEJdI5WUtjdpURrDkAfg9bXbMLTASh5MkfBZax2YIKzUr9tbZtIn661UGc="


// Data dùng cho API api/finance/certify/bindcard

let data4 = {
    "name": "AWSDASD ASDASD ASDASD",
    "number": "2234234234",
    "bank": "MBBANK",
    "addr": "",
    "default": "0",
    "accountType": 1,
    "currencyCode": "VND",
    "pinNumberType": 0,
    "pinNumber": "",
    "extendedField": {
        "bankCardType": 1,
        "CCINumber": ""
    },
    "time": 1767609605
}


// ============================================================================== SMS
// Data dùng cho api member/user/security/createSms
let data5 =  {
    "phone_number": "+84-234234234",
    "create_mode": 3,
    "username": "fffghtyutyu34",
    "time": 1767612922
}


function encrypto(t, n) {
    const o = typeof t === 'string' ? t : JSON.stringify(t);
    const data = Buffer.from(o, 'utf8');
    const blockSize = 16;
    const paddingLength = (blockSize - (data.length % blockSize)) % blockSize;
    const pad = Buffer.alloc(paddingLength, 0);
    const paddedData = Buffer.concat([data, pad]);
    const key = Buffer.from(n, 'utf8');
    const iv = Buffer.from('5421698523412578', 'utf8');
    const keyLengthBits = key.length * 8;
    if (![128, 192, 256].includes(keyLengthBits)) {
        throw new Error('16, 24 hoặc 32 bytes.');
    }
    const algorithm = `aes-${keyLengthBits}-cbc`;
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    cipher.setAutoPadding(false);
    const encrypted = Buffer.concat([cipher.update(paddedData), cipher.final()]);
    return encrypted.toString('base64');
}

console.log(encrypto(data4, key));



function decrypt(t, n, o = {}) {
    const encryptedData = Buffer.from(t, 'base64');
    
    const key = Buffer.from(n, 'utf8');
    const iv = Buffer.from('5421698523412578', 'utf8');
    
    // Xác định algorithm dựa trên độ dài key (128, 192, hoặc 256 bits)
    const keyLengthBits = key.length * 8;
    if (![128, 192, 256].includes(keyLengthBits)) {
        throw new Error('Độ dài khóa không hợp lệ. Phải là 16, 24 hoặc 32 bytes.');
    }
    const algorithm = `aes-${keyLengthBits}-cbc`;
    
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    decipher.setAutoPadding(false); // Tắt padding tự động để xử lý zero padding thủ công
    
    const decrypted = Buffer.concat([decipher.update(encryptedData), decipher.final()]);
    
    // Loại bỏ zero padding ở cuối
    let paddingEnd = decrypted.length;
    while (paddingEnd > 0 && decrypted[paddingEnd - 1] === 0) {
        paddingEnd--;
    }
    const unpaddedDecrypted = decrypted.slice(0, paddingEnd);
    
    return unpaddedDecrypted.toString('utf8');
}

console.log(decrypt("OEvajN+q//Juq8qBCSq5o+Lq3r/0INHf2T417MmsLDQUGnrWV+c5VNf8XDpmgIZDVEcvigh3DLZGLkT2hJuzFZ8E/n+Py90KVu8FFW7eLYwPkWyNeWo8gFVdLNaJLH8oDMrmzsDS3NL/irDXudePspoxM7r8vzvAswtyZMKE2gXuunsN8By10t+fhA7Pm0m1Vj9qEx3e5Ezc4tRZ8IBSuGEHTDgl60OMPNbJ1Rg6iwtwGJJUw4WhtGQLHgXp5ePwiVtKM2RFrHrxh6XkDkUOMXPMdw4MF4JZmtRnk6qTW/cLZ5szoS7Ig1v2JgRiif5H", "8216df1871686eb1"));
