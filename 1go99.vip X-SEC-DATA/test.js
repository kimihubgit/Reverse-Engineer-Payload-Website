const crypto = require('crypto');

function timeX(){ 
    const X = crypto.randomBytes(16)
        , ie = Buffer.from(X).toString('hex')
    return [ie.substring(0, 8), ie.substring(8, 12), "4" + ie.substring(13, 16), (3 & parseInt(ie.substring(16, 17), 16) | 8).toString(16) + ie.substring(17, 20), ie.substring(20, 32)].join("-")
}

let key = 'Ci0tLS0tQkVHSU4gUFVCTElDIEtFWS0tLS0tCk1JR2ZNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0R05BRENCaVFLQmdRQ0tjV1grcksyMjlMaTJ6WER0QjVLSk9FU3YKUnJDVE5pVUl3Wi9JbGprZm05bFNudDIyTjhJcXp2L2g4TzEreFRNcWxPUlNKTTFYcTN0UnRSSVVOTUpNVEV2OApvcVVPSmVzSkZQRStWMGFnQ1E1Q09oS3JVa1Rxako3MWl6RFVHSm9rZUNJTDR6U1YxeTdaSkkxUEtjUCtCSDVvCk5NNkJWR2hBcFBGUWVEckkvUUlEQVFBQgotLS0tLUVORCBQVUJMSUMgS0VZLS0tLS0K'

function encryptData(input, data = key) {
    const key =  Buffer.from(data, 'base64').toString('binary')
    const buffer = Buffer.from(input, 'utf8');
    const CHUNK_SIZE = 117; // RSA 1024 + PKCS1 v1.5
    const encryptedParts = [];
    for (let i = 0; i < buffer.length; i += CHUNK_SIZE) {
        const chunk = buffer.slice(i, i + CHUNK_SIZE);

        const encrypted = crypto.publicEncrypt(
            {
                key: key,
                padding: crypto.constants.RSA_PKCS1_PADDING
            },
            chunk
        );
        encryptedParts.push(encrypted);
    }

    return Buffer.concat(encryptedParts).toString('base64');
}

const unit = Date.now()
const privateKey = 'm.1go99.vip'
let UserAgent = "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36"

// key cố định
let data = `${unit}:${timeX()}:${privateKey}:${UserAgent}`

console.log(encryptData(data));


module.exports = encryptData;
