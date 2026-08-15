const crypto = require("crypto")


class SecureRandomSeed {
    constructor(input) {
        this._bi = undefined;
        this._buffer = undefined;
        this._hex = undefined;
        this._hash = undefined;
        this._base64 = undefined;

        if (typeof input === 'string') {
            this._hex = input;
        } else if (input instanceof ArrayBuffer) {
            this._buffer = new Uint8Array(input);
        } else if (input instanceof Uint8Array || (input && input.buffer instanceof ArrayBuffer)) {
            this._buffer = input instanceof Uint8Array ? input : new Uint8Array(input);
        } else {
            this._bi = input;
        }
    }
    get buffer() {
        if (this._buffer) return this._buffer;

        if (this._bi !== undefined) {
            let hex = this._bi.toString(16);
            if (hex.length % 2) hex = '0' + hex;
            const buf = new Uint8Array(hex.length / 2);
            for (let i = 0; i < buf.length; i++) {
                buf[i] = parseInt(hex.substr(i * 2, 2), 16);
            }
            this._buffer = buf;
            return buf;
        }

        return new Uint8Array(0);
    }
    get bi() {
        if (this._bi !== undefined) return this._bi;

        if (this._hex) {
            this._bi = BigInt("0x" + this._hex);
            return this._bi;
        }

        if (this.buffer) {
            this._hex = Array.from(this.buffer)
                .map(b => b.toString(16).padStart(2, '0'))
                .join('');
            this._bi = BigInt("0x" + this._hex);
            return this._bi;
        }

        throw new Error("Không có dữ liệu để chuyển đổi thành BigInt");
    }
    get hex() {
        if (this._hex !== undefined) return this._hex;

        if (this._bi !== undefined) {
            let hex = this._bi.toString(16);
            if (hex.length % 2 !== 0) hex = '0' + hex;
            this._hex = hex;
        } else {
            const buf = this.buffer;
            if (buf) {
                this._hex = Array.from(buf)
                    .map(b => b.toString(16).padStart(2, '0'))
                    .join('');
            }
        }
        return this._hex || '';
    }

    toHex() {
        if (this._hex) return this._hex;
        const buffer = this.buffer;
        if (!buffer) return null;
        this._hex = Array.from(buffer)
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');
        return this._hex;
    }
    pad(value) {
        const targetLength = this.buffer.length;
        const data = value.buffer;
        if (!data) throw new Error("Value has no buffer");
        const padded = new Uint8Array(targetLength);
        padded.set(data, targetLength - data.length);
        return new SecureRandomSeed(padded);
    }
    getHash() {
        if (!this.buffer) throw new Error("No buffer to hash");
        const hash = crypto.createHash('sha256').update(this.buffer).digest();
        return new SecureRandomSeed(new Uint8Array(hash));
    }
    concat(...seeds) {
        const totalLength = seeds.reduce((sum, s) => sum + (s.buffer?.length || 0), 0);
        const result = new Uint8Array(totalLength);
        let offset = 0;
        for (const seed of seeds) {
            if (seed.buffer) {
                result.set(seed.buffer, offset);
                offset += seed.buffer.length;
            }
        }
        return new SecureRandomSeed(result);
    }

    getBase64() {
        if (this._base64) return this._base64;
        const buffer = Buffer.from(this.buffer);
        this._base64 = buffer.toString('base64');
        return this._base64;
    }

    static concat(...seeds) {
        const buffers = seeds
            .map(s => s instanceof SecureRandomSeed ? s.buffer : null)
            .filter(b => b !== null && b !== undefined);

        const totalLength = buffers.reduce((sum, b) => sum + b.length, 0);
        const result = new Uint8Array(totalLength);
        let offset = 0;
        for (const buf of buffers) {
            result.set(buf, offset);
            offset += buf.length;
        }
        return new SecureRandomSeed(result);
    }
}


// Data Test

const g = new SecureRandomSeed(2n);
// publicKey
const seedDefault = new Uint8Array([172,107,219,65,50,74,154,155,241,102,222,94,19,137,88,47,175,114,182,101,25,135,238,7,252,49,146,148,61,181,96,80,163,115,41,203,180,160,153,237,129,147,224,117,119,103,161,61,213,35,18,171,75,3,49,13,205,127,72,169,218,4,253,80,232,8,57,105,237,183,103,176,207,96,149,23,154,22,58,179,102,26,5,251,213,250,170,232,41,24,169,150,47,11,147,184,85,249,121,147,236,151,94,234,168,13,116,10,219,244,255,116,115,89,208,65,213,195,62,167,29,40,30,68,107,20,119,59,202,151,180,58,35,251,128,22,118,189,32,122,67,108,100,129,241,210,185,7,135,23,70,26,91,157,50,230,136,248,119,72,84,69,35,181,36,176,213,125,94,167,122,39,117,210,236,250,3,44,251,219,245,47,179,120,97,96,39,144,4,229,122,230,175,135,78,115,3,206,83,41,156,204,4,28,123,195,8,216,42,86,152,243,168,208,195,130,113,174,53,248,233,219,251,182,148,181,200,3,216,159,122,228,53,222,35,109,82,95,84,117,155,101,227,114,252,214,142,242,15,167,17,31,158,74,255,115]);
// Privatte Key
const seedRandom = new Uint8Array([60,246,82,98,48,159,70,13,19,121,41,4,54,173,246,158,19,208,217,116,167,130,115,184,242,168,254,169,83,249,52,18,155,210,88,45,198,176,231,128,120,81,255,252,67,184,223,12,236,172,139,137,241,173,207,5,12,141,34,227,4,214,214,213,171,164,185,116,243,228,151,38,142,56,135,194,222,68,250,71,75,48,217,216,106,250,235,132,246,3,128,82,109,238,16,153,151,68,77,121,131,138,254,179,108,31,165,172,238,77,119,231,3,166,5,53,162,192,77,200,184,66,212,95,214,145,189,73,187,21,207,49,42,78,35,244,154,82,52,199,6,57,241,125,198,85,167,173,40,227,105,2,146,22,228,11,246,147,196,46,246,66,145,1,221,91,60,243,80,119,113,252,145,55,219,108,244,238,184,122,252,79,68,191,103,51,145,13,182,239,28,233,60,229,246,103,190,47,176,67,13,83,55,255,199,82,251,62,41,167,153,48,64,192,37,195,84,169,170,18,144,175,57,50,69,130,61,110,167,130,79,66,146,4,162,235,253,39,68,195,88,10,169,101,90,8,220,242,238,243,11,27,223,248,249,254]);
// console.log(Buffer.from(seedRandom));
// const seedrandome2 = Buffer.from(seedRandom)
  

function createTwoSeedsAndGetBigInts(seedArray1, seedArray2) {
    const seed1 = new SecureRandomSeed(seedArray1);
    const seed2 = new SecureRandomSeed(seedArray2);
    const bi1 = seed1.bi;
    const bi2 = seed2.bi;
    return { bi1, bi2, seed1, seed2 };
}

function powMod(t, r, e) {
    if (e === 1n) return 0n;
    let n = 1n;
    t = t % e;
    while (r > 0n) {
        if (r % 2n === 1n) n = (n * t) % e;
        r >>= 1n;
        t = (t * t) % e;
    }
    return new SecureRandomSeed(n);
}

function uint8ArrayToBase64(uint8Array) {
    return Buffer.from(uint8Array).toString('base64');
}
function PrivateKey(SEED_SIZE = 256){ 
    const CryptoSeed = crypto.randomBytes(SEED_SIZE);
    return CryptoSeed
}
function sha256Uint8(uint8Array) {
    return new Uint8Array(crypto.createHash('sha256').update(uint8Array).digest());
}

function textEnc(input) {
    return new TextEncoder("utf-8").encode(input)
}

function importPbkdf2KeySync(passwordUint8Array) {
    return {
        _password: passwordUint8Array,
        deriveBitsSync: (params, length) => {
            const { salt, iterations, hash } = params;
            const derivedKey = crypto.pbkdf2Sync(

                passwordUint8Array,
                salt,
                iterations,
                length/ 8,
                hash.replace("SHA-", "sha").toLowerCase()
            );
            const xUint8 = new Uint8Array(derivedKey);
            return new SecureRandomSeed(xUint8);
        }
    };
}


function E({ s, P }) {
    // console.log("ket quaa:", { s, P });
    
    const empty = new SecureRandomSeed(new Uint8Array(0));
    const colon = new SecureRandomSeed(new Uint8Array([58]));
    const step1 = SecureRandomSeed.concat(empty, colon, P);
    const hash1 = step1.getHash();
    // console.log(hash1);
    
    
    const step2 = SecureRandomSeed.concat(new SecureRandomSeed(s), hash1);
    // console.log(step2);
    let xsSeed =  step2.getHash()
    return { xsSeed, step1, step2 };
}

function calculateU(A_seed, B_uint8, N_seed) {
    const N = N_seed
    const padded_A = N.pad(A_seed);
    padded_A.toHex()
    padded_A.bi
    const padded_B = N.pad(B_uint8);
    padded_B.toHex()
    padded_B.bi
    const u_seed = SecureRandomSeed.concat(padded_A, padded_B).getHash();
    new SecureRandomSeed(new Uint8Array(u_seed))
    u_seed.buffer
    u_seed.toHex()
    return {u_seed, padded_A, padded_B}
}


function c(t, r) { return t + r; }
function f(t, r, e) {
    if (e === 1n) return 0n;
    let n = 1n;
    t = t % e;
    while (r > 0n) {
        if (r % 2n === 1n) n = (n * t) % e;
        r >>= 1n;
        t = (t * t) % e;
    }
    return n;
}
function ss(t, r) {
    const mod = t % r;
    return mod < 0n ? mod + r : mod;
}

function uu(t, r) { 
    return t * r; 
}
function calculateS({ B, k, x, a, u, N, g }) {
    // console.log({ B, k, x, a, u, N, g });
    const l = c(a, uu(u, x));
    const gx = f(g, x, N);
    const kv = uu(gx, k);
    const p = ss(kv, N);
    const diff = ss(c(B, -p), N);
    const S = f(diff, l, N);
    return new SecureRandomSeed(S);
}

function calculateK(S_seed, N_seed) {
    const padded_S = N_seed.pad(S_seed);
    return padded_S.getHash(); // K = H(pad(S))
}


function calculateM1({ I, s, A, B, K, N, g }) {
    const padded_g = N.pad(g);
    const Ng = padded_g.getHash();
    // console.log(Ng); // 51,  15,  19, 136
    
    const Nhash = N.getHash();
    // console.log(Nhash); // 15, 183
    
    const xor = Nhash.bi ^ Ng.bi;
    const h = new SecureRandomSeed(xor);
    h.toHex()
    h.buffer
    h.bi
    // console.log("hhhhhh nek:",h );
    
    const Ihash = I.getHash();
    // console.log(Ihash); // 26,9, 223, 0, 
    
    const concat = SecureRandomSeed.concat(h, Ihash, s, A, B, K);
    // console.log(concat);
    
    return concat.getHash();
}

function calculateM2(A, M1, K) {
    const concat = SecureRandomSeed.concat(A, M1, K);
    return concat.getHash();
}

// +++++++++++++++++++++++++++++++++ Hàm Chính  +++++++++++++++++++++++ Các hàm phụ bên trên 
// const PrivateValue = PrivateKey()

function agenerate(){ 
    const PrivateValue = PrivateKey()
    // const { bi1, bi2 , seed1, seed2} = createTwoSeedsAndGetBigInts(seedDefault, seedRandom);
    const { bi1, bi2 , seed1, seed2} = createTwoSeedsAndGetBigInts(seedDefault, PrivateValue);
    const powModResult = powMod(g.bi, bi2, bi1);
    powModResult.buffer
    const publicKey = seed1.pad(powModResult);
    const A = uint8ArrayToBase64(new Uint8Array(publicKey.buffer));
    const a = Buffer.from(PrivateValue).toString('base64');
    console.log("A:" ,A);
    return {A, a}
}


function srpApple({ password, salt, serverPublicValue, iterations, email, a}) {
    const PrivateValue = Buffer.from(a, 'base64');
    const saltUnit = new Uint8Array(Buffer.from(salt, 'base64')) 
    const saltBigint = new SecureRandomSeed(saltUnit);
    const serverPublicValueUnit = new Uint8Array(Buffer.from(serverPublicValue, 'base64'))
    
    const { bi1, bi2 , seed1, seed2 } = createTwoSeedsAndGetBigInts(seedDefault, PrivateValue);
    // console.log(seed2);
    // console.log(seed1);
    const powModResult = powMod(g.bi, bi2, bi1);
    powModResult.buffer
    // console.log("powModResult: ", powModResult);
    const publicKey = seed1.pad(powModResult);
    // console.log("PublicKey Mod (hex):", publicKey.toHex());
    // console.log("Public Key Mod (BigInt):", publicKey.bi);
// Email

    let v = email.toLocaleLowerCase()
    const userEnc = new TextEncoder("utf-8").encode(v)
    // console.log(userEnc);
    let userUnit = new Uint8Array(userEnc);
    const userBugint = new SecureRandomSeed(userUnit);
    // console.log("userBigint: ",userBugint);

// PassBigint

    let PassUnit = new Uint8Array(textEnc(password));
    const PassBigint = new SecureRandomSeed(PassUnit);
// Tính SHA-256 PASS
    const hashUint8 = sha256Uint8(PassBigint.buffer);
    // console.log(hashUint8);
    // console.log("SHA-256 PASS (hex):", hashUint8.reduce((s, b) => s + b.toString(16).padStart(2, '0'), ''));

    const passwordHashs = new SecureRandomSeed(hashUint8);
    passwordHashs.toHex()
    passwordHashs.bi
    // console.log("Bigint của password (hex)", passwordHashs);
    // console.log("SHA-256 của password (hex)", passwordHashs.toHex());


// Import Key

    const key = importPbkdf2KeySync(passwordHashs.buffer);
    // console.log(key);
    const x = key.deriveBitsSync(
        { name: "PBKDF2", salt: saltUnit, iterations: iterations, hash: "SHA-256" },
        256
    );
    x.toHex()
    x.bi
    // console.log("key Pbkdf: ",x);

// Tính Pad Default
       // g = 2
    const padded_D = seed1.pad(g); // 000...002
    const concatBuffer = new Uint8Array(512);
    concatBuffer.set(seed1.buffer, 0);
    concatBuffer.set(padded_D.buffer, 256);

// Bước 3: hash SHA-256
    const k_multiplier = new SecureRandomSeed(sha256Uint8(concatBuffer))
    // console.log("k (multiplier) hex:", k_multiplier.toHex());
    k_multiplier.toHex()
    k_multiplier.bi
    k_multiplier.buffer
    // console.log(k_multiplier);


    const concatSeed = new SecureRandomSeed().concat(seed1, padded_D);
    const kk = concatSeed.getHash(); // ← TÍNH k = H(N ‖ g)

    // console.log("k (multiplier):", kk);
    // console.log(kk);

// === HÀM E ===

    let { xsSeed, step1, step2 } = E({ s: saltUnit, P: x });
    // console.log({ xsSeed, step1, step2 } );

//  ==== Tính Hàm U
// // === TEST ===
    // const serverPublicBase64 = dataa.serverPublicValue
    // const B_uint8 = Buffer.from(serverPublicValue, 'base64');

    const dd = new SecureRandomSeed(serverPublicValueUnit)
    dd.toHex()
    dd.bi
    let {u_seed, padded_A, padded_B} = calculateU(powModResult,  dd, seed1);
    // console.log({u_seed, padded_A, padded_B});
    
    // console.log("u (BigInt):", u_seed.bi);

// ==== Caculate S

    const S_seed = calculateS({
        B: dd.bi,
        k: k_multiplier.bi,
        x: xsSeed.bi,
        a: seed2.bi,
        u: u_seed.bi,
        N: seed1.bi,
        g: g.bi
    });
    S_seed.toHex()
    S_seed.bi
    // console.log(S_seed)

// ==== Caculate K

    const K = calculateK(S_seed, seed1);
    K.toHex()
    K.bi
    // console.log("K (hex):",K );

// ==== Caculate M1

    const M1 = calculateM1({
        I: userBugint,
        s: saltBigint,
        A: powModResult,
        B: padded_B,
        K: K,
        N: seed1,
        g: g
    });
    M1.bi
    // console.log("M1:", M1.toHex());
    // console.log("M1:",M1);

// ===== Caculate M2
    const M2 = calculateM2(powModResult, M1, K);
    // console.log("M2:", M2.toHex());
    // console.log(M2);
    return {M1, M2, K}

}

console.log("a: " ,agenerate())

// const dataa = {
//     iterations: 20416,
//     serverPublicValue: "fCVcPzBzWcXdSwWVgCRYxry/vPijaOkJ7H384bjH+/tHSL+6Rv/IdU+LwsbW5P5BsZn03nOVBUYCejv62XhGQZJ+465EM3lquvy30KP+Vp0Kleo6y9rZkKbZP0z3WYTv/tCm5AzzHOSdugV4nYt8joHdoK87RQdmhqwTfZXGZ48E0EcasqrxxPlxYvTvYBV1iLqUjy/uD5Ig56fC6QPzZBsmSnp3SAVxr08dMwki+L6lU+vAOTsuDyBqPNKYjNCgLf1CGumuthWgj4S214Bwq/E2RumNiFnAbupvbnvKweTJE4iXcuKrn2m9E5eeTlc3PpkKQepwUOG0YCvScS9UBw==",
//     salt: "CQmZ0rtHv8vN61ClBifXOg==",
//     password: "vkhai26sdsfsdss",
//     email: "vkhai2603@gmail.com"
// };  

// const {M1, M2, K} = srpApple({
//     password: dataa.password,
//     salt: dataa.salt,
//     serverPublicValue: dataa.serverPublicValue,
//     iterations: dataa.iterations,
//     email: dataa.email
// });


// const {M1, M2, K} = srpApple({
//     password: this.password,
//     salt: this.salt,
//     serverPublicValue: this.serverPublicValue,
//     iterations: this.iterations,
//     email: this.email
// });

// console.log({
//     M1: M1.getBase64(),
//     M2: M2.getBase64(),
//     K: K.getBase64()
// });

module.exports = {
    agenerate,
    srpApple
};
