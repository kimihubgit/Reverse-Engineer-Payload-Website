// const t = {
//     "provisionData": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYyI6dHJ1ZSwidXAiOiJjcGkiLCJkcyI6IndjNTIzNTAyMC04MjkxLTExZjAtOTcxOS0yZGRlNzExNDdkNjYiLCJpYXQiOjE3NTYyMjIzNzUsImRlIjoiYnJhbmRNYXBwaW5nIiwiYnIiOiJ2c3R2In0.wx8heSmDj2pwaTQOB2Q-mMiDjVCCGM5rA3PeihHQ_qQ",
//     "deviceInfo": {
//         "osVersion": "Windows 10",
//         "deviceModel": "Chrome",
//         "deviceType": "PC",
//         "deviceSerial": "wc5235020-8291-11f0-9719-2dde71147d66",
//         "deviceOem": "Chrome",
//         "devicePrettyName": "Chrome 139.0.0.0",
//         "appVersion": "12.6",
//         "language": "vi_VN",
//         "brand": "vstv"
//     }
// }

// const CryptoJS = require('crypto-js');
// function generateAuthHeader() {  
//     let clientKey  = 'web.NhFyz4KsZ54'
//     let clientSecret = "OXh0-pIwu3gEXz1UiJtqLPscZQot3a0q"
//     let url = 'https://vstvlogin.solocoo.tv/demo'
//     // const timestamp = Math.floor(Date.now() / 1000); 
//     const timestamp = 1756222511
//     const dataString = JSON.stringify(t);
//     const dataHash = CryptoJS.SHA256(dataString);  // X() = SHA256
//     let contentHash = CryptoJS.enc.Base64.stringify(dataHash);
//     contentHash = contentHash.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
//     console.log(contentHash);

//     // b8: url + contentHash + timestamp
//     const signString = url + contentHash + timestamp;
//     // Chuẩn bị secret key
//     const secretStandardBase64 = clientSecret.replace(/_/g, '/').replace(/-/g, '+');
//     const hmacKey = CryptoJS.enc.Base64.parse(secretStandardBase64);
//     const hmacSignature = CryptoJS.HmacSHA256(signString, hmacKey);
//     let signatureBase64 = CryptoJS.enc.Base64.stringify(hmacSignature);
//     signatureBase64 = signatureBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
//     return `Client key=${clientKey},time=${timestamp},sig=${signatureBase64}`;
// }

// console.log(generateAuthHeader());


const express = require('express');
const CryptoJS = require('crypto-js');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Sử dụng body-parser để parse JSON body
app.use(bodyParser.json());

// Endpoint POST /generate-auth, nhận body là t
app.post('/generate-auth', (req, res) => {
    const t = req.body.data;  // Lấy data t từ body request
    const url = req.body.url;
    console.log(url);
    

    // Kiểm tra nếu t hợp lệ
    // if (!t || !t.ticket || !t.userInput) {
    //     return res.status(400).json({ error: 'Invalid data: t must contain ticket and userInput' });
    // }

    // Các giá trị cố định như trong code gốc
    const clientKey = 'web.NhFyz4KsZ54';
    const clientSecret = "OXh0-pIwu3gEXz1UiJtqLPscZQot3a0q";
    const timestamp = Math.floor(Date.now() / 1000);

    // Tạo contentHash dạng base64url
    const dataString = JSON.stringify(t);
    const dataHash = CryptoJS.SHA256(dataString);
    let contentHash = CryptoJS.enc.Base64.stringify(dataHash);
    contentHash = contentHash.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    // Tạo signString (b8)
    const signString = url + contentHash + timestamp;

    // Chuẩn bị secret key
    const secretStandardBase64 = clientSecret.replace(/_/g, '/').replace(/-/g, '+');
    const hmacKey = CryptoJS.enc.Base64.parse(secretStandardBase64);

    // Tạo signature (b9)
    const hmacSignature = CryptoJS.HmacSHA256(signString, hmacKey);
    let signatureBase64 = CryptoJS.enc.Base64.stringify(hmacSignature);
        signatureBase64 = signatureBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')  // Loại bỏ padding =

    // Tạo chuỗi header
    const authHeader = `Client key=${clientKey},time=${timestamp},sig=${signatureBase64}`;

    // Trả về kết quả
    res.json({ authHeader });
});

// Khởi động server
app.listen(port, () => {
    console.log(`API server running at http://localhost:${port}`);
});

