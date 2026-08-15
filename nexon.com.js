
// ngb-hash-nodejs.js
// Phiên bản Node.js hiện đại của thư viện NgbHash cũ (giữ nguyên logic HMAC-SHA256)
const crypto = require('crypto');

class NgbHash {
  constructor() {
    this.SHA256_K = new Uint32Array([
      0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
      0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
      0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
      0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
      0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
      0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
      0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
      0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
    ]);

    this.H = new Uint32Array(8);
    this.buf = new Uint8Array(64);
    this.bufLen = 0;
    this.totalLen = 0;
    this.finalized = false;
  }

  // === SHA-256 core functions ===
  _rotr(x, y) {
    return (x >>> y) | (x << (32 - y));
  }

  _sigma0(x) {
    return this._rotr(x, 7) ^ this._rotr(x, 18) ^ (x >>> 3);
  }

  _sigma1(x) {
    return this._rotr(x, 17) ^ this._rotr(x, 19) ^ (x >>> 10);
  }

  _Sigma0(x) {
    return this._rotr(x, 2) ^ this._rotr(x, 13) ^ this._rotr(x, 22);
  }

  _Sigma1(x) {
    return this._rotr(x, 6) ^ this._rotr(x, 11) ^ this._rotr(x, 25);
  }

  _Ch(x, y, z) {
    return (x & y) ^ (~x & z);
  }

  _Maj(x, y, z) {
    return (x & y) ^ (x & z) ^ (y & z);
  }

  _transform(block) {
    const W = new Uint32Array(64);
    for (let i = 0; i < 16; i++) {
      const offset = i * 4;
      W[i] = (block[offset] << 24) | (block[offset + 1] << 16) | (block[offset + 2] << 8) | block[offset + 3];
    }

    for (let i = 16; i < 64; i++) {
      W[i] = (this._sigma1(W[i - 2]) + W[i - 7] + this._sigma0(W[i - 15]) + W[i - 16]) >>> 0;
    }

    let [a, b, c, d, e, f, g, h] = this.H;

    for (let i = 0; i < 64; i++) {
      const T1 = (h + this._Sigma1(e) + this._Ch(e, f, g) + this.SHA256_K[i] + W[i]) >>> 0;
      const T2 = (this._Sigma0(a) + this._Maj(a, b, c)) >>> 0;
      h = g;
      g = f;
      f = e;
      e = (d + T1) >>> 0;
      d = c;
      c = b;
      b = a;
      a = (T1 + T2) >>> 0;
    }

    this.H[0] = (this.H[0] + a) >>> 0;
    this.H[1] = (this.H[1] + b) >>> 0;
    this.H[2] = (this.H[2] + c) >>> 0;
    this.H[3] = (this.H[3] + d) >>> 0;
    this.H[4] = (this.H[4] + e) >>> 0;
    this.H[5] = (this.H[5] + f) >>> 0;
    this.H[6] = (this.H[6] + g) >>> 0;
    this.H[7] = (this.H[7] + h) >>> 0;
  }

  // === Public SHA256 methods ===
  SHA256_init() {
    this.H.set([
      0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
      0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
    ]);
    this.buf.fill(0);
    this.bufLen = 0;
    this.totalLen = 0;
    this.finalized = false;
  }

  SHA256_write(data) {
    if (this.finalized) throw new Error("Already finalized");

    let bytes;
    if (typeof data === "string") {
      bytes = Buffer.from(data, "utf8");
    } else if (Array.isArray(data)) {
      bytes = new Uint8Array(data);
    } else {
      bytes = new Uint8Array(data);
    }

    this.totalLen += bytes.length;

    let pos = 0;
    while (pos < bytes.length) {
      const space = 64 - this.bufLen;
      const take = Math.min(space, bytes.length - pos);
      this.buf.set(bytes.subarray(pos, pos + take), this.bufLen);
      this.bufLen += take;
      pos += take;

      if (this.bufLen === 64) {
        this._transform(this.buf);
        this.bufLen = 0;
      }
    }
  }

  SHA256_finalize() {
    if (this.finalized) throw new Error("Already finalized");

    // Padding
    this.buf[this.bufLen++] = 0x80;
    if (this.bufLen > 56) {
      this.buf.fill(0, this.bufLen);
      this._transform(this.buf);
      this.bufLen = 0;
    }
    this.buf.fill(0, this.bufLen, 56);

    // Length in bits
    const bitLen = this.totalLen * 8;
    this.buf[56] = bitLen >>> 56;
    this.buf[57] = bitLen >>> 48;
    this.buf[58] = bitLen >>> 40;
    this.buf[59] = bitLen >>> 32;
    this.buf[60] = bitLen >>> 24;
    this.buf[61] = bitLen >>> 16;
    this.buf[62] = bitLen >>> 8;
    this.buf[63] = bitLen >>> 0;

    this._transform(this.buf);

    const result = new Uint8Array(32);
    for (let i = 0; i < 8; i++) {
      result[i * 4]     = this.H[i] >>> 24;
      result[i * 4 + 1] = (this.H[i] >>> 16) & 0xff;
      result[i * 4 + 2] = (this.H[i] >>> 8)  & 0xff;
      result[i * 4 + 3] = this.H[i] & 0xff;
    }

    this.finalized = true;
    return result;
  }

  SHA256_hash(msg) {
    this.SHA256_init();
    this.SHA256_write(msg);
    return this._toHexString(this.SHA256_finalize());
  }

  // === HMAC-SHA256 (giống hệt code cũ) ===
  HMAC_SHA256_init(key) {
    this._hmacInit(key, false);
  }

  HMAC_SHA256_init2(key) {
    this._hmacInit(key, true);  // true = key là hex string
  }

  _hmacInit(key, isHexKey = false) {
    let keyBytes;
    if (isHexKey) {
      // key là hex string → chuyển thành mảng byte
      keyBytes = this._hexStringToBytes(key);
    } else if (typeof key === "string") {
      keyBytes = Buffer.from(key, "utf8");
    } else {
      keyBytes = new Uint8Array(key);
    }

    // Nếu key > 64 byte → hash trước
    if (keyBytes.length > 64) {
      const temp = new NgbHash();
      temp.SHA256_init();
      temp.SHA256_write(keyBytes);
      keyBytes = temp.SHA256_finalize();
    }

    // Pad key về 64 byte
    const paddedKey = new Uint8Array(64);
    paddedKey.set(keyBytes.slice(0, 64));

    // ipad = key XOR 0x36
    const ipad = new Uint8Array(64);
    for (let i = 0; i < 64; i++) {
      ipad[i] = paddedKey[i] ^ 0x36;
    }

    // Lưu lại để dùng cho opad sau
    this._hmacKey = paddedKey;

    // Bắt đầu hash với ipad
    this.SHA256_init();
    this.SHA256_write(ipad);
  }

  HMAC_SHA256_write(msg) {
    this.SHA256_write(msg);
  }

  HMAC_SHA256_finalize() {
    const innerHash = this.SHA256_finalize();

    // opad = key XOR 0x5c
    const opad = new Uint8Array(64);
    for (let i = 0; i < 64; i++) {
      opad[i] = this._hmacKey[i] ^ 0x5c;
    }

    const outer = new NgbHash();
    outer.SHA256_init();
    outer.SHA256_write(opad);
    outer.SHA256_write(innerHash);
    return outer.SHA256_finalize();
  }

  HMAC_SHA256_MAC(key, msg) {
    this.HMAC_SHA256_init(key);
    this.HMAC_SHA256_write(msg);
    return this._toHexString(this.HMAC_SHA256_finalize()).toUpperCase();
  }

  HMAC_SHA256_MAC2(keyHex, msg) {
    this.HMAC_SHA256_init2(keyHex);
    this.HMAC_SHA256_write(msg);
    return this._toHexString(this.HMAC_SHA256_finalize()).toUpperCase();
  }

  // === Helper ===
  _hexStringToBytes(hex) {
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
      bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
    }
    return bytes;
  }

  _toHexString(bytes) {
    const hex = "0123456789abcdef";
    let str = "";
    for (let i = 0; i < bytes.length; i++) {
      str += hex[bytes[i] >> 4] + hex[bytes[i] & 15];
    }
    return str;
  }
}

// Export cho Node.js
// module.exports = NgbHash;

// === Ví dụ sử dụng ===

// const NgbHash = require('./ngb-hash-nodejs');

const hash = new NgbHash();

hash.HMAC_SHA256_init2("4E65786F6E55736572");  // key dạng hex string
hash.HMAC_SHA256_write("rv*3?^EZhWS*7#F");
const mac = hash.HMAC_SHA256_finalize();
console.log(Buffer.from(mac).toString('hex').toUpperCase());

