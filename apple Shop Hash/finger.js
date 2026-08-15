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
    // let sampleLocaleStr = sampleDate.toLocaleString(randomLocale).replace(/ /g, '%20').replace(/,/g, '%2C').replace(/:/g, '%3A');
    // let currentLocaleStr = fakeCurrentTime.toLocaleString(randomLocale).replace(/ /g, '%20').replace(/,/g, '%2C').replace(/:/g, '%3A');
    let sampleLocaleStr = sampleDate.toLocaleString(randomLocale);
    let currentLocaleStr = fakeCurrentTime.toLocaleString(randomLocale);
    
  
    // Fake offset height (20-30)
    const offsetHeight = Math.floor(Math.random() * 11) + 20;
  
    // Fake một số plugin version (ngẫu nhiên có hoặc rỗng)
    const plugins = ['', '10.0 r32', '11.0', '9.0', ''];
    const randomPlugin = () => plugins[Math.floor(Math.random() * plugins.length)];
  
    // Mảng giá trị (tương tự code gốc, khoảng 100 phần)
    const values = [
      'TF1', '020',
      ...Array(39).fill(''), // Các phần rỗng đầu (script engine, ActiveX)
      String(dstDiff), // false/true cho DST diff
      String(isDSTNow), // false/true cho DST now
    //   utcTimestamp.toString(), // @UTC@
        "@UTC@",
      Math.abs(baseOffsetHours).toString(), // Timezone giờ (dương)
      encodeURIComponent(sampleLocaleStr), // Ngày mẫu
      ...Array(8).fill(''), // Rỗng
    //   randomPlugin(), // Fake plugin Acrobat
    //   randomPlugin(), // Flash
    //   randomPlugin(), // QuickTime
    //   randomPlugin(), // Java
    //   randomPlugin(), // Director
    //   randomPlugin(), // Office
    //   ctTime.toString(), // @CT@
    "@CT@",
      winterOffset.toString(), // h (mùa đông)
      summerOffset.toString(), // g (mùa hè)
      encodeURIComponent(currentLocaleStr), // Current toLocaleString
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
        if (w[code] === undefined){
            console.log("Missing:", str.charAt(o), code);
            return null
        };
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

// const Fingerprint = generateFakeFingerprint()
// console.log(Fingerprint);

// console.log(Fingerprint);
// console.log(f(Fingerprint));


// === EXPORT (Node.js / Browser) ===
const FingerprintModule = (U) => {
    const raw = generateFakeFingerprint();
    console.log(raw);
    
    const encoded = f(raw);
    return { encoded};
};
// ==================== EXPORTS ====================
module.exports = {
    FingerprintModule,
};
