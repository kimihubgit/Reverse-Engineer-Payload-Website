let data = {
    "command": "loginWebHash",
    "username": "erwe4356456",
    "password": "sdfwerr345",
    "platformId": 4,
    "advId": "",
    "deviceId": "70aaV5nPcpKioa3QyW59",
    "hash": "3f14cdd9c31491f574cac829a838b6a0",
    "brand": "sun.win",
    "sessionId": "",
    "timestamp": "1761233734734"
}
let data2 = {
    "type": "login",
    "username": "erwe4356456",
    "password": "sdfwerr345",
    "brand": "sun.win",
    "deviceId": "70aaV5nPcpKioa3QyW59",
    "platformId": 4,
    "timestamp": "1761233734734",
    "codeChallenge": "LARcEZ7KymZpkdCuDLdfnkDiuTj_RmwgHmBbJ41s8Yg",
    "clientId": "sun.win",
    "redirectUri": "https://web.sun.win/callback.html",
    "origin": "https://web.sun.win",
    "nonce": "ZXJBy0fC97XDYMg2iMqPAJ3d2BbipA4G"
}

Object({"type":"login","username":"erwe4356456","password":"sdfwerr345","brand":"sun.win","deviceId":"70aaV5nPcpKioa3QyW59","platformId":4,"timestamp":"1761233734734","codeChallenge":"LARcEZ7KymZpkdCuDLdfnkDiuTj_RmwgHmBbJ41s8Yg","clientId":"sun.win","redirectUri":"https://web.sun.win/callback.html","origin":"https://web.sun.win","nonce":"ZXJBy0fC97XDYMg2iMqPAJ3d2BbipA4G"})
let nonce = "RsoHhgsIMIPdR6qCzNuZxTB1ssTt2CBW"
let none2 = "ZXJBy0fC97XDYMg2iMqPAJ3d2BbipA4G"


function uint8ArrayToArrayOfStrings(uint8Arr, encoding = 'utf-8', chunkSize = null) {
    const buffer = Buffer.from(uint8Arr); // Chuyển Uint8Array thành Buffer
    if (chunkSize) {
        // Nếu biết độ dài mỗi string, cắt theo chunk
        const result = [];
        for (let i = 0; i < buffer.length; i += chunkSize) {
            const chunk = buffer.slice(i, i + chunkSize);
            result.push(chunk.toString(encoding));
        }
        return result;
    } else {
        return [buffer.toString(encoding)];
    }
}

let listtt = [
    127,
    114,
    129,
    223,
    62,
    5,
    190,
    52,
    85,
    153,
    210,
    76,
    157,
    16,
    73,
    193,
    25,
    99,
    162,
    103,
    138,
    4,
    172,
    116,
    110,
    44,
    135,
    211,
    95,
    161,
    202,
    16
]

// Ví dụ test
const uint8Example = new Uint8Array(listtt);
const originalArray = uint8ArrayToArrayOfStrings(uint8Example, 'utf-8');
console.log(originalArray); // Output: ['Áo%Yñ'] hoặc tương tự