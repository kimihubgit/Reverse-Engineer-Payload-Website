
function generateFakeFingerprint() {
  const locales = ['en-US', 'vi-VN', 'fr-FR', 'de-DE', 'ja-JP']; // Đa dạng ngôn ngữ
  const randomLocale = locales[Math.floor(Math.random() * locales.length)];

  const currentDate = new Date();
  const randomOffsetMs = Math.floor(Math.random() * 3600000); // Random 0-1 giờ
  const fakeCurrentTime = new Date(currentDate.getTime() + randomOffsetMs);

  const hasDST = Math.random() > 0.5; // 50% có DST
  const baseOffsetHours = Math.floor(Math.random() * 27) - 12; // -12 đến +14 giờ
  const baseOffsetMin = baseOffsetHours * 60;
  const winterOffset = -baseOffsetMin; // Offset mùa đông (dấu ngược vì getTimezoneOffset)
  let summerOffset = winterOffset;
  if (hasDST) {
    summerOffset = winterOffset - 60; // Giả lập +1 giờ DST
  }

  const dstDiff = Math.abs(winterOffset - summerOffset) !== 0;
  const isDSTNow = hasDST && Math.random() > 0.5; // Ngẫu nhiên đang DST hay không

  const utcTimestamp = fakeCurrentTime.getTime(); // @UTC@
  const ctTime = Math.floor(Math.random() * 1000000) + 100000; // Fake thời gian tính toán 100k-1M ms
  
  

  // Fake locale string cho ngày mẫu
  const sampleDate = new Date(2005, 5, 7, 21, 33, 44, 888);
  let sampleLocaleStr = sampleDate.toLocaleString(randomLocale).replace(/ /g, '%20').replace(/,/g, '%2C').replace(/:/g, '%3A');
  // Fake current locale string
  let currentLocaleStr = fakeCurrentTime.toLocaleString(randomLocale).replace(/ /g, '%20').replace(/,/g, '%2C').replace(/:/g, '%3A');
  
  

  // Fake offset height (20-30)
  const offsetHeight = Math.floor(Math.random() * 11) + 20;

  // Fake một số plugin version (ngẫu nhiên có hoặc rỗng)
  const plugins = ['', '10.0 r32', '11.0', '9.0', '']; // Đa dạng, đa số rỗng
  const randomPlugin = () => plugins[Math.floor(Math.random() * plugins.length)];

  // Mảng giá trị (tương tự code gốc, khoảng 100 phần)
  const values = [
    'TF1', '020',
    ...Array(38).fill(''), // Các phần rỗng đầu (script engine, ActiveX)
    String(dstDiff), // false/true cho DST diff
    String(isDSTNow), // false/true cho DST now
    utcTimestamp.toString(), // @UTC@
    Math.abs(baseOffsetHours).toString(), // Timezone giờ (dương)
    sampleLocaleStr, // Ngày mẫu
    ...Array(8).fill(''), // Rỗng
    randomPlugin(), // Fake plugin Acrobat
    randomPlugin(), // Flash
    randomPlugin(), // QuickTime
    randomPlugin(), // Java
    randomPlugin(), // Director
    randomPlugin(), // Office
    ctTime.toString(), // @CT@
    winterOffset.toString(), // h (mùa đông)
    summerOffset.toString(), // g (mùa hè)
    currentLocaleStr, // Current toLocaleString
    ...Array(20).fill(''), // Rỗng (mime types, plugins)
    offsetHeight.toString(), // Offset height
    ...Array(14).fill(''), // Rỗng cuối
    '5.6.1-0',
    ...Array(2).fill('') // ;;
  ];

  return values.join(';');
}


function data(e) {
    var t, n = {};
    n.U = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36"
    if ("number" != typeof (t = (new Date).getTimezoneOffset()) || null === t)
        t = "";
    else {
        var r = Math.abs(parseInt(t / 60, 10))
            , i = Math.abs(t % 60);
        t = "GMT" + (0 < t ? "-" : "+") + (10 > r ? "0" + r : r) + ":" + (10 > i ? "0" + i : i)
    }
    return n.Z = t,
    n.V = "1.1",
    null != e && (n.F = e),
    JSON.stringify(n)
}
const A = ".0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
const y = ["%20", ";;;", "%3B", "%2C", "und", "fin", "ed;", "%28", "%29", "%3A", "/53", "ike", "Web", "0;", ".0", "e;", "on", "il", "ck", "01", "in", "Mo", "fa", "00", "32", "la", ".1", "ri", "it", "%u", "le"];
const w = {
    1: [4, 15], 110: [8, 239], 74: [8, 238], 57: [7, 118], 56: [7, 117], 71: [8, 233], 25: [8, 232], 101: [5, 28], 104: [7, 111], 4: [7, 110], 105: [6, 54], 5: [7, 107], 109: [7, 106], 103: [9, 423], 82: [9, 422], 26: [8, 210], 6: [7, 104], 46: [6, 51], 97: [6, 50], 111: [6, 49], 7: [7, 97], 45: [7, 96], 59: [5, 23], 15: [7, 91], 11: [8, 181], 72: [8, 180], 27: [8, 179], 28: [8, 178], 16: [7, 88], 88: [10, 703], 113: [11, 1405], 89: [12, 2809], 107: [13, 5617], 90: [14, 11233], 42: [15, 22465], 64: [16, 44929], 0: [16, 44928], 81: [9, 350], 29: [8, 174], 118: [8, 173], 30: [8, 172], 98: [8, 171], 12: [8, 170], 99: [7, 84], 117: [6, 41], 112: [6, 40], 102: [9, 319], 68: [9, 318], 31: [8, 158], 100: [7, 78], 84: [6, 38], 55: [6, 37], 17: [7, 73], 8: [7, 72], 9: [7, 71], 77: [7, 70], 18: [7, 69], 65: [7, 68], 48: [6, 33], 116: [6, 32], 10: [7, 63], 121: [8, 125], 78: [8, 124], 80: [7, 61], 69: [7, 60], 119: [7, 59], 13: [8, 117], 79: [8, 116], 19: [7, 57], 67: [7, 56], 114: [6, 27], 83: [6, 26], 115: [6, 25], 14: [6, 24], 122: [8, 95], 95: [8, 94], 76: [7, 46], 24: [7, 45], 37: [7, 44], 50: [5, 10], 51: [5, 9], 108: [6, 17], 22: [7, 33], 120: [8, 65], 66: [8, 64], 21: [7, 31], 106: [7, 30], 47: [6, 14], 53: [5, 6], 49: [5, 5], 86: [8, 39], 85: [8, 38], 23: [7, 18], 75: [7, 17], 20: [7, 16], 2: [5, 3], 73: [8, 23], 43: [9, 45], 87: [9, 44], 70: [7, 10], 3: [6, 4], 52: [5, 1], 54: [5, 0]
};

// === Hàm l: mã hóa custom base64 ===
function l(str) {
    let output = "", r = 0, i = 0;
    const t = (bits, value) => {
        r = r << bits[0] | bits[1];
        i += bits[0];
        while (i >= 6) {
            const idx = (r >> (i - 6)) & 63;
            output += A[idx];
            r ^= idx << (i -= 6);
        }
    };
    t([6, (7 & str.length) << 3 | 0]);
    t([6, 56 & str.length | 1]);
    for (let o = 0; o < str.length; o++) {
        const code = str.charCodeAt(o);
        if (w[code] === undefined) return null;
        t(w[code]);
    }
    t(w[0]);
    if (i > 0) t([6 - i, 0]);
    return output;
}

// === Hàm f: thay thế + mã hóa + checksum ===
function f(raw) {
    let n = raw;
    for (let r = 0; y[r]; r++) {
        n = n.split(y[r]).join(String.fromCharCode(r + 1));
    }
    const encoded = l(n);
    if (encoded === null) return raw;

    let checksum = 65535;
    for (let r = 0; r < raw.length; r++) {
        checksum = 65535 & (checksum >>> 8 | checksum << 8);
        checksum ^= 255 & raw.charCodeAt(r);
        checksum ^= (255 & checksum) >> 4;
        checksum ^= checksum << 12 & 65535;
        checksum ^= (255 & checksum) << 5 & 65535;
    }
    checksum &= 65535;

    return encoded + A.charAt(checksum >>> 12) + A.charAt((checksum >>> 6) & 63) + A.charAt(checksum & 63);
}

const Fingerprint = generateFakeFingerprint()
// console.log(Fingerprint);
console.log(f(Fingerprint));
// let X_Apple_I_FD_Client_Info = data(Fingerprint)
// console.log(X_Apple_I_FD_Client_Info);

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
    // get buffer() {
    //     if (this._buffer) return this._buffer;
    //     if (this._hex) {
    //         const cleanHex = this._hex.replace(/[^0-9a-fA-F]/g, '');
    //         const buffer = new Uint8Array(cleanHex.length / 2);
    //         for (let i = 0; i < buffer.length; i++) {
    //             buffer[i] = parseInt(cleanHex.substr(i * 2, 2), 16);
    //         }
    //         this._buffer = buffer;
    //         return buffer;
    //     }
    //     if (this._bi !== undefined) {
    //         // ← THÊM ĐOẠN NÀY: BigInt → Uint8Array
    //         let hex = this._bi.toString(16);
    //         if (hex.length % 2 !== 0) hex = '0' + hex;
    //         const buffer = new Uint8Array(hex.length / 2);
    //         for (let i = 0; i < buffer.length; i++) {
    //             buffer[i] = parseInt(hex.substr(i * 2, 2), 16);
    //         }
    //         this._buffer = buffer;
    //         return buffer;
    //     }
    //     return null;
    // }
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

    // get bi() {
    //     if (this._bi === undefined) {
    //         if (!this._hex) {
    //             throw new Error("Không có dữ liệu hex để chuyển đổi");
    //         }
    //         this._bi = BigInt("0x" + this._hex);
    //     }
    //     return this._bi;
    // }
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

const crypto = require("crypto")

// Public Key
const seedDefault = new Uint8Array([172,107,219,65,50,74,154,155,241,102,222,94,19,137,88,47,175,114,182,101,25,135,238,7,252,49,146,148,61,181,96,80,163,115,41,203,180,160,153,237,129,147,224,117,119,103,161,61,213,35,18,171,75,3,49,13,205,127,72,169,218,4,253,80,232,8,57,105,237,183,103,176,207,96,149,23,154,22,58,179,102,26,5,251,213,250,170,232,41,24,169,150,47,11,147,184,85,249,121,147,236,151,94,234,168,13,116,10,219,244,255,116,115,89,208,65,213,195,62,167,29,40,30,68,107,20,119,59,202,151,180,58,35,251,128,22,118,189,32,122,67,108,100,129,241,210,185,7,135,23,70,26,91,157,50,230,136,248,119,72,84,69,35,181,36,176,213,125,94,167,122,39,117,210,236,250,3,44,251,219,245,47,179,120,97,96,39,144,4,229,122,230,175,135,78,115,3,206,83,41,156,204,4,28,123,195,8,216,42,86,152,243,168,208,195,130,113,174,53,248,233,219,251,182,148,181,200,3,216,159,122,228,53,222,35,109,82,95,84,117,155,101,227,114,252,214,142,242,15,167,17,31,158,74,255,115]);
// Privatte Key
const seedRandom = new Uint8Array([248,168,154,77,141,179,238,203,87,44,232,249,191,22,235,17,20,112,82,132,210,117,63,183,36,56,131,243,8,220,153,36,135,247,58,160,103,159,196,164,126,58,56,96,185,223,6,0,176,8,40,220,108,48,27,33,119,81,134,128,17,171,105,115,170,16,116,209,115,230,178,2,172,185,191,10,118,1,211,129,244,58,194,79,183,182,118,0,187,90,122,116,195,109,232,57,204,212,148,82,72,236,209,130,236,20,13,62,132,199,55,127,123,20,46,241,205,211,46,16,58,104,34,19,230,62,59,247,218,126,219,65,133,88,18,214,133,100,173,0,209,221,17,113,40,165,129,176,179,144,224,55,143,92,49,110,163,63,197,69,160,43,63,158,80,9,114,50,73,161,25,192,186,168,253,46,137,56,128,39,133,44,175,45,111,194,232,73,74,93,200,89,44,183,203,85,197,49,223,189,33,249,107,149,209,114,171,146,192,222,253,154,233,213,0,130,61,80,153,77,204,94,147,24,9,174,11,83,195,170,207,114,168,163,171,217,224,193,187,30,196,229,235,122,139,195,99,254,248,98,135,55,190,227,54,11]);

function createTwoSeedsAndGetBigInts(seedArray1, seedArray2) {
    // const SEED_SIZE = 256;
    // const CryptoSeed = crypto.randomBytes(SEED_SIZE);
    const seed1 = new SecureRandomSeed(seedArray1);
    const seed2 = new SecureRandomSeed(seedArray2);
    console.log("Seed 1 (hex đầu):", seed1.toHex().substring(0, 20) + "...");
    console.log("Seed 2 (hex đầu):", seed2.toHex().substring(0, 20) + "...");
    const bi1 = seed1.bi;
    const bi2 = seed2.bi;
    console.log("BigInt 1:", bi1);
    console.log("BigInt 2:", bi2);
    return { bi1, bi2, seed1, seed2 };
}
const { bi1, bi2 , seed1, seed2} = createTwoSeedsAndGetBigInts(seedDefault, seedRandom);
// const { bi1, bi2 , seed1, seed2} = createTwoSeedsAndGetBigInts(seedDefault);
console.log(seed2);
console.log(seed1);
// console.log("bitDefault: ", n);
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
const result = powMod(BigInt(2n), bi2, bi1);
result.buffer

const publicKey = seed1.pad(result);

console.log("Public Key (hex):", publicKey.toHex());
console.log("Public Key (BigInt):", publicKey.bi);
console.log("powMod:", result);

function uint8ArrayToBase64(uint8Array) {
    return Buffer.from(uint8Array).toString('base64');
}

const base64 = uint8ArrayToBase64(new Uint8Array(publicKey.buffer));
console.log("a:", base64);

let dataa = {
    "iterations": 20989,
    "serverPublicValue": "abIApAn8FQkXfGaysSwchL+pHKvkay9eik7IjnlILGKcFrwqh55mRRryUFAHf9cP7YjIeNBGFJ91qUyR2zhLk0UsC1R1Wzk1sLWzodmtdh16EcnZtZyybK4W03NakNPrUfS5la8yxCtXNGQLMSSB17qrLfoxEles0Eo5YZrZGNZm2KQMrx45sLoZq6allQRaU5HHTR8STenp27E4M5Xd/6fZBwPNJG1VoY1QmHIuk9X/kwwUTj0hTkv4chV/N5FLN52ZeEVyuzOkW10DaHHi9Try1TO3VrCLhMDqX4cGHrlJuFVZJnrEZmryxjG60MxK1NmXPE0sqYawT0S7IF/Dpg==",
    "salt": "tDhvO8VAkMABulG4TZrEOQ==",
    "c": "d-cc-449aea6e-d71a-11f0-8700-77b08668102c:NC",
    "protocol": "s2k",
    "password": "vkhai26sdsfsdss"
}

function prepareSrpConfig(serverData) {
    const serverPublicBuffer = Buffer.from(serverData.serverPublicValue, 'base64');
    const saltBuffer = Buffer.from(serverData.salt, 'base64');

    return {
        iterations: serverData.iterations,
        serverPublicValue: new Uint8Array(serverPublicBuffer),
        salt: new Uint8Array(saltBuffer),
        password: new TextEncoder("utf-8").encode(serverData.password),
        protocol: serverData.protocol
    };
}
let bufferr = prepareSrpConfig(dataa)
console.log(prepareSrpConfig(dataa));


// BigInt USER
let v = "vkhai2603@gmail.com".toLocaleLowerCase()
const userEnc = new TextEncoder("utf-8").encode(v)
console.log(userEnc);
let userUnit = new Uint8Array(userEnc);
const userBugint = new SecureRandomSeed(userUnit);
console.log("userBigint: ",userBugint);

// BigInt PASSS
function sha256(uint8Array) {
    return crypto.createHash('sha256').update(uint8Array).digest();
}

function sha256Uint8(uint8Array) {
    return new Uint8Array(crypto.createHash('sha256').update(uint8Array).digest());
}
let PassUnit = new Uint8Array(bufferr.password);
const PassBigint = new SecureRandomSeed(PassUnit);
// Tính SHA-256 PASS
const hashBuffer = sha256(PassBigint.buffer);           // Buffer
const hashUint8 = sha256Uint8(PassBigint.buffer);       // Uint8Array
console.log("SHA-256 (hex):", hashUint8.reduce((s, b) => s + b.toString(16).padStart(2, '0'), ''));
function subtleDigestSha256(uint8Array) {
    const hash = crypto.createHash('sha256').update(uint8Array).digest();
    return new Uint8Array(hash); // Trả về Uint8Array giống web
}
const passwordHash = subtleDigestSha256(PassBigint.buffer);
const passwordHashs = new SecureRandomSeed(passwordHash);
passwordHashs.toHex()
console.log("Bigint của password (hex)", passwordHashs);
console.log("SHA-256 của password (hex)", passwordHashs.toHex());


// Import Key

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
const key = importPbkdf2KeySync(passwordHashs.buffer);
console.log(key);
const x = key.deriveBitsSync(
    { name: "PBKDF2", salt: bufferr.salt, iterations: dataa.iterations, hash: "SHA-256" },
    256
);
x.toHex()
x.bi
console.log("haha: ",x);





// Giả sử: 
const k = new SecureRandomSeed(seedDefault); // N
const D = new SecureRandomSeed(2n);          // g = 2
const padded_D = k.pad(D); // 000...002
const concatBuffer = new Uint8Array(512);
concatBuffer.set(k.buffer, 0);
concatBuffer.set(padded_D.buffer, 256);

// Bước 3: hash SHA-256
const hashBufferz = crypto.createHash('sha256').update(concatBuffer).digest();
const k_multiplier = new SecureRandomSeed(new Uint8Array(hashBufferz));

console.log("k (multiplier) hex:", k_multiplier.toHex());
console.log(k_multiplier);




const N = new SecureRandomSeed(seedDefault);     // modulus
const g = new SecureRandomSeed(2n);              // g = 2
const padded_g = N.pad(g);

const concatSeed = new SecureRandomSeed().concat(N, padded_g);
const kk = concatSeed.getHash(); // ← TÍNH k = H(N ‖ g)

console.log("k (multiplier):", kk.toHex());
console.log(kk);

// === HÀM E ===
function E({ s, P }) {
    console.log({ s, P });
    
    
    const empty = new SecureRandomSeed(new Uint8Array(0));
    const colon = new SecureRandomSeed(new Uint8Array([58]));
    const step1 = SecureRandomSeed.concat(empty, colon, P);
    const hash1 = step1.getHash();
    console.log(hash1);
    
    
    const step2 = SecureRandomSeed.concat(new SecureRandomSeed(s), hash1);
    console.log(step2);
    let xsSeed =  step2.getHash()
    return { xsSeed, step1, step2 };
}

// === TÍNH x ===

const s = bufferr.salt;
const P = x

let { xsSeed, step1, step2 } = E({ s, P});
console.log({ xsSeed, step1, step2 } );

console.log(xsSeed);

console.log("x (BigInt):", x.bi);


function calculateU(A_seed, B_uint8, N_seed) {
    const N = N_seed
    const padded_A = N.pad(A_seed);
    padded_A.toHex()
    padded_A.bi
    console.log(padded_A);
    
    const padded_B = N.pad(B_uint8);
    padded_B.toHex()
    padded_B.bi
    console.log(padded_B);
    
    const u_seed = SecureRandomSeed.concat(padded_A, padded_B).getHash();
    
    new SecureRandomSeed(new Uint8Array(u_seed))
    u_seed.buffer
    u_seed.toHex()
    console.log(u_seed);
    
    return {u_seed, padded_A, padded_B}
}

// === TEST ===
const serverPublicBase64 = dataa.serverPublicValue
const B_uint8 = Buffer.from(serverPublicBase64, 'base64');

const dd = new SecureRandomSeed(new Uint8Array(B_uint8))
console.log("dddd:" ,dd.toHex());
console.log("dddd:" ,dd.bi);
let {u_seed, padded_A, padded_B} = calculateU(result,  dd, seed1);
console.log("u (BigInt):", u_seed.bi);




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
    console.log({ B, k, x, a, u, N, g });
    
    const l = c(a, uu(u, x));
    const gx = f(g, x, N);
    const kv = uu(gx, k);
    const p = ss(kv, N);
    const diff = ss(c(B, -p), N);
    const S = f(diff, l, N);
    return new SecureRandomSeed(S);
}
console.log(new SecureRandomSeed(2n).bi);
console.log(dd.bi);
console.log("ddd34534");
console.log(k_multiplier.bi);
console.log("ddd34534");
xsSeed.toHex()
console.log(xsSeed.bi);

// === TEST ===
const S_seed = calculateS({
    B: dd.bi,
    k: k_multiplier.bi,
    x: xsSeed.bi,
    a: seed2.bi,
    u: u_seed.bi,
    N: seed1.bi,
    g: new SecureRandomSeed(2n).bi
});

// console.log("Shared Secret S (hex):", S_seed.toHex());
S_seed.toHex()
S_seed.bi
console.log(S_seed)


function calculateK(S_seed, N_seed) {
    const padded_S = N_seed.pad(S_seed);
    return padded_S.getHash(); // K = H(pad(S))
}

// === TEST ===
const K_seed = calculateK(S_seed, seed1);
K_seed.toHex()
K_seed.bi
console.log("K (hex):",K_seed );

console.log(padded_B);




// function calculateM1({ I, s, A, B, K, N, g }) {

//     const g_seed = new SecureRandomSeed(g);
//     const padded_g = N.pad(g_seed);

//     console.log("pass");
    
//     const Ng = padded_g.getHash();
 
//     console.log(Ng);
//     const Nhash = N.getHash();
 
//     console.log(Nhash);
//     const xor = Nhash.bi ^ Ng.bi;
//     console.log(xor);
//     const h = new SecureRandomSeed(xor);

//     console.log(h);
    
//     const Ihash = I.getHash();
//     console.log(Ihash);
//     console.log({h, Ihash, s, A, B, K});
    
//     const concattt = SecureRandomSeed.concat(h, Ihash, s, A, B, K);
//     console.log(concattt);
    
//     return concattt.getHash();
// }

function calculateM1({ I, s, A, B, K, N, g }) {
    console.log({ I, s, A, B, K, N, g });
    
    const g_seed = new SecureRandomSeed(g);
    const padded_g = N.pad(g_seed);
    const Ng = padded_g.getHash();
    console.log(Ng); // 51,  15,  19, 136
    
    const Nhash = N.getHash();
    console.log(Nhash); // 15, 183
    
    const xor = Nhash.bi ^ Ng.bi;
    const h = new SecureRandomSeed(xor);
    h.toHex()
    h.buffer
    h.bi
    console.log("hhhhhh nek:",h );
    
    const Ihash = I.getHash();
    console.log(Ihash); // 26,9, 223, 0, 
    
    const concat = SecureRandomSeed.concat(h, Ihash, s, A, B, K);
    console.log(concat);
    
    return concat.getHash();
}

let gefgertt = 2n
const daatasalt = Buffer.from(dataa.salt, 'base64')
let sarl2 = new SecureRandomSeed(new Uint8Array(daatasalt))
// console.log({
//     I: userBugint,
//     s: sarl2,
//     A: result,
//     B: padded_B,
//     K: K_seed,
//     N: seed1,
//     g: gefgertt
// });

const M1 = calculateM1({
    I: userBugint,
    s: sarl2,
    A: result,
    B: padded_B,
    K: K_seed,
    N: seed1,
    g: gefgertt
});
M1.bi
console.log("M1:", M1.toHex());
console.log("M1:",M1);


function calculateM2(A, M1, K) {
    const concat = SecureRandomSeed.concat(A, M1, K);
    return concat.getHash();
}

// === TEST ===
const M2 = calculateM2(result, M1, K_seed);
console.log("M2:", M2.toHex());
console.log(M2);



console.log({
    M1: M1.getBase64(),
    M2: M2.getBase64(),
    K: K_seed.getBase64()
});


// l = e = iteration
// this.publicValue  là powMod
// Privatevalue la seed2

// X-Apple-Auth-Attributes sinh ra từ mothod get trong trình duyệt có thể tự lấy đc


