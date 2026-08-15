let key =  {
    "publicKey": "ad79be7f6b3c56305154e6ff4051451ebf5bf16186357d2a190747fd315c3b62",
    "keyId": 197
}
// let i = Math.floor(Date.now() / 1e3).toString();
let i = 1766754251

let pass = "asdasdasdasdsads"
// function encryptPassword(keyId, publicKey, Password, i){

//     const encoder = new TextEncoder(); // Mặc định là 'utf-8'
//     const passUTF = encoder.encode(Password);
//     const unitUTF = encoder.encode(i);
//     console.log(unitUTF);
    
//     console.log(passUTF);
// }

function y(e) {
        for (var t = [], n = 0; n < e.length; n += 2)
            t.push(parseInt(e.slice(n, n + 2), 16));
        return new Uint8Array(t)
    }

function C(t, o, a, i) {
        var l = 100 + a.length;
        if (o.length != 64)
            throw new Error("public key is not a valid hex sting");
        var C = y(o);
        console.log(C);
        
        if (!C)
            throw new Error("public key is not a valid hex string");
        var b = new Uint8Array(l)
          , v = 0;
        b[v] = 1,
        v += 1,
        b[v] = t,
        v += 1;
        var S = {
            name: "AES-GCM",
            length: 32 * 8
        }
          , R = {
            name: "AES-GCM",
            iv: new Uint8Array(12),
            additionalData: i,
            tagLen: 16
        };
        return s.subtle.generateKey(S, !0, ["encrypt", "decrypt"]).then(function(t) {
            var r = s.subtle.exportKey("raw", t)
              , o = s.subtle.encrypt(R, t, a.buffer);
            return (e || (e = n("Promise"))).all([r, o])
        }).then(function(e) {
            var t = new Uint8Array(e[0])
              , n = h(t, C);
            if (b[v] = n.length & 255,
            b[v + 1] = n.length >> 8 & 255,
            v += p,
            b.set(n, v),
            v += _,
            v += r("tweetnacl-sealedbox-js").overheadLength,
            n.length !== _ + r("tweetnacl-sealedbox-js").overheadLength)
                throw new Error("encrypted key is the wrong length");
            var o = new Uint8Array(e[1])
              , a = o.slice(-f)
              , i = o.slice(0, -f);
            return b.set(a, v),
            v += f,
            b.set(i, v),
            b
        }).catch(function(e) {
            throw e
        })
    }

console.log(C(key.keyId, key.publicKey, pass, i));
