// for (var t = [], n = "shopEeSHOPkrIJ45KL02/376BM+NQcdRntquvU1VW89XDFTACGYwxZabfgijlmyz", E = 0, _ = n.length; E < _; ++E)
//         t[E] = n[E],
//         n.charCodeAt(E)
// function d(c) {
//     for (var K, n = c.length, E = n % 3, _ = [], u = 0, e = n - E; u < e; u += 16383)
//         _.push(( (c, K, n) => {
//             for (var E = [], _ = K; _ < n; _ += 3) {
//                 let K;
//                 E.push(t[(K = (c[_] << 16 & 0xff0000) + (c[_ + 1] << 8 & 65280) + (255 & c[_ + 2])) >> 18 & 63] + t[K >> 12 & 63] + t[K >> 6 & 63] + t[63 & K])
//             }
//             return E.join("")
//         }
//         )(c, u, e < u + 16383 ? e : u + 16383));
//     return 1 == E ? _.push(t[(K = c[n - 1]) >> 2] + t[K << 4 & 63] + "==") : 2 == E && _.push(t[(K = (c[n - 2] << 8) + c[n - 1]) >> 10] + t[K >> 4 & 63] + t[K << 2 & 63] + "="),
//     _.join("")
// };

// console.log(d("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"));



const fs = require("fs")
function decode(encoded) {
    const O = 'shopEeSHOPkrIJ45KL02/376BM+NQcdRntquvU1VW89XDFTACGYwxZabfgijlmyz';
    const S = [];
    for (let i = 0; i < 64; ++i) {
        S[i] = O[i];
    }
    const reverseS = {};
    for (let i = 0; i < 64; i++) {
        reverseS[S[i]] = i;
    }
    let result = [];
    let t = 0;
    for (let i = 0; i < encoded.length; i += 4) {
        let chars = encoded.slice(i, i + 4);
        let values = [];
        for (let j = 0; j < 4; j++) {
            if (chars[j] !== '=') {
                values.push(reverseS[chars[j]]);
            } else {
                values.push(0);
            }
        }
        let num = (values[0] << 18) + (values[1] << 12) + (values[2] << 6) + values[3];
        let byte1 = (num >> 16) & 255;
        let byte2 = (num >> 8) & 255;
        let byte3 = num & 255;
        result.push(byte1);
        if (chars[2] !== '=') result.push(byte2);
        if (chars[3] !== '=') result.push(byte3);
    }

    return result;
}

const encoded = '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'
const decoded = decode(encoded);

console.log(decoded);

