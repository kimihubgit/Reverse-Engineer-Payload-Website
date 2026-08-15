const data = "account=wdf34535&activitySource=&checked=true&code=werwwe&device=H5&email=ddfg56%40gmail.com&inviteCode=&password=6c62130de6d17d7d087e178276b95e02&phone=5655645645&region=%2B84&registerSource=H5&uuid=6445e428-8916-4820-b774-cf9f15f6aaf9"
const crypto = require('crypto');

// function generateSignature(e, n) {
//     try {
//         const x = Object.keys(e).sort().map(q => `${q}=${n ? encodeURIComponent(e[q]) : e[q]}`).join("&")
//           , $ = "okvip-yes";
//         return CryptoJS.HmacSHA256(x, $).toString(CryptoJS.enc.Base64)
//     } catch (x) {
//         return console.log("生成签名失败: " + (x == null ? void 0 : x.message)),
//         ""
//     }
// }


function generateSignature(e, n) {
    try {
        const keys = Object.keys(e).sort();
        const params = keys.map(q => `${q}=${n ? encodeURIComponent(e[q]) : e[q]}`).join("&");
        const secret = "okvip-yes";
        const hmac = crypto.createHmac('sha256', secret);
        hmac.update(params);
        return hmac.digest('base64');
    } catch (error) {
        console.log("生成签名失败: " + (error ? error.message : ''));
        return "";
    }
}

console.log(generateSignature(data));

