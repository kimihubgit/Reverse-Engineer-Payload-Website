const crypto = require('crypto');

function hashFunction(input) {

    const md5Hash = crypto.createHash('md5').update(input).digest('hex');
    const sha256Hash = crypto.createHash('sha256').update(md5Hash).digest('hex');
    return sha256Hash;
}

const result = hashFunction('sdffsdfsdfwwer');
console.log(result);


// async function C({phone: e, email: t, username: r, password: a, captchaSignature: n, supportIVS: i=!0, authId: s, formattedPhoneForServer: l}) {
//     let[c,_] = await Promise.all([S.E(a), T(e)]);
//     console.log(c, _);
//     return o.AV.post("/api/v4/account/login_by_password", {
//         phone: e ? l || _ : e,
//         email: t,
//         username: r,
//         password: c,
//         captcha_signature: n,
//         support_ivs: i,
//         auth_id: s
//     }, {
//         antiFraudConfig: {
//             deviceFingerPrint: {
//                 dataFormatter: e => ({
//                     client_identifier: {
//                         security_device_fingerprint: e
//                     }
//                 })
//             }
//         }
//     })
// }



// function(c, K) {
//     K.Xto = function(c) {
//         for (var K, n = c.length, E = n % 3, _ = [], u = 0, e = n - E; u < e; u += 16383)
//             _.push(( (c, K, n) => {
//                 for (var E = [], _ = K; _ < n; _ += 3) {
//                     let K;
//                     E.push(t[(K = (c[_] << 16 & 0xff0000) + (c[_ + 1] << 8 & 65280) + (255 & c[_ + 2])) >> 18 & 63] + t[K >> 12 & 63] + t[K >> 6 & 63] + t[63 & K])
//                 }
//                 return E.join("")
//             }
//             )(c, u, e < u + 16383 ? e : u + 16383));
//         return 1 == E ? _.push(t[(K = c[n - 1]) >> 2] + t[K << 4 & 63] + "==") : 2 == E && _.push(t[(K = (c[n - 2] << 8) + c[n - 1]) >> 10] + t[K >> 4 & 63] + t[K << 2 & 63] + "="),
//         _.join("")
//     }
//     ;
//     for (var t = [], n = "shopEeSHOPkrIJ45KL02/376BM+NQcdRntquvU1VW89XDFTACGYwxZabfgijlmyz", E = 0, _ = n.length; E < _; ++E)
//         t[E] = n[E],
//         n.charCodeAt(E)
// }


// // p4sgrymWTJjdnN1VTO04bA==|+1m2+83GIM4f9UzmtR8YPlyVNV3bWVNb67JpfieqAizvKdGzjCHB0VNcRn4d0JjesfQEzTo1HyXM/A==|NTkwVPknGaBOmKQf|08|3
// // mIw9TaINPsUN6R9ZggXYeA==|+lm2+83GIM4f9UzmtR8YPlyVNV3bWVNb67JpflKzAizvKdGzjCHB0VNcRn4d0JjesfQEzTo1HyXM/A==|NTkwVPknGaBOmKQf|08|3

// let i = {
//     "type": "click",
//     "timestamp": 1760455604092,
//     "info": {
//         "targetType": "LoginByPassword.RequirePasswordLoginByPassword.SubmitButton",
//         "targetData": {
//             "context": {
//                 "next": "https://shopee.vn/"
//             },
//             "loginKey": "sdf23424@gmail.com",
//             "state": "REQUIRE_PASSWORD",
//             "lkppSSOState": null,
//             "lkppEmail": null,
//             "history": {
//                 "length": 3,
//                 "action": "PUSH",
//                 "location": {
//                     "pathname": "/buyer/login",
//                     "search": "?next=https%3A%2F%2Fshopee.vn%2F",
//                     "hash": "",
//                     "key": "qf8l32"
//                 }
//             },
//             "location": {
//                 "pathname": "/buyer/login",
//                 "search": "?next=https%3A%2F%2Fshopee.vn%2F",
//                 "hash": "",
//                 "key": "qf8l32"
//             },
//             "match": {
//                 "path": "/buyer/login",
//                 "url": "/buyer/login",
//                 "isExact": true,
//                 "params": {}
//             }
//         },
//         "componentType": "SubmitButton"
//     },
//     "unique_id": "2a51282077aaa3fb5b283f98c5009092b1603736133a8191dc7b001062508218-1760455604092",
//     "source": "pc"
// }