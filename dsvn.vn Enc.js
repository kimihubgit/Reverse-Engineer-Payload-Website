let a = {
    "MaGaDi": "HNO",
    "MaGaDen": "DNA",
    "NgayDi": "2025-10-21",
    "NgayVe": "2025-10-31",
    "IsOneWay": true,
    "BookingCode": "XMS3A1"
}

let b = {
    "MaGaDi": "1",
    "MaGaDen": "2",
    "NgayDi": "3",
    "NgayVe": "4",
    "IsOneWay": "5",
    "BookingCode": "6",
    "Captcha": "7",
    "GetChos": "8",
    "IsVeTapThe": "9"
}

let c = {
    "1": "HNO",
    "2": "DNA",
    "3": "2025-10-28",
    "4": "2025-10-31",
    "5": true,
    "6": "XMS3A1"
}

// Token lấy từ api https://dsvn.vn/token

let data = {
    "ClientId": "0247f0a5d31e4392ad36a18d5a171191",
    "CreatedTime": "2025-10-11T08:21:16.2130894+07:00",
    "ExpireAt": "2026-10-11T08:21:16.2130894+07:00",
    "Name": "4e51ac19ea49db43317cc54de9003e15",
    "Token": "tisM_FMg8HzAnHaMfQ3vLFdJ1td6L0xqzao_17drYFWLyzeKl4QM-RmG420kY-4ipR_YFTxD0F0ZmOwCSGZgAia7fRMcrinTfCUClKw2gU0EHiXx6h8hrE9MCV3RUNfpadoeEBgEpQzIWzxJ612ojx6f8SrETDClWx7fwUDK4L8PjYtF0YYjUUldCN-rASBU_S-I21oTEDM-hCgDI0B_8YtP4LX4GJed4MBFfwCyhr7PXV7yvVdWuB61KEr-rRQF289Evu0dEHun1__o8S2PrfqhNyxZSVvA3jZsfQMaKpNnPr939co9GRCnlqJrRpEJ8vo-GSx02cNGUns4KX-Uqq6Z-bXeDeFhSH3xWJwflFDDjEXERs2Wl5RwIc6OtqO4Luq0PkYhQ7mRe8YPwCV_c3c0vverj_TUTN-BzXyEoXOppUmDhT_6LgHPaeJHqG7W",
    "TokenExpireAt": "2025-10-11 12:22:07"
}



function f(a) {
        function t() {
            function j(a) {
            txt = "";
            var b, c = a.length, e = [1732584193, -271733879, -1732584194, 271733878];
            for (b = 64; b <= a.length; b += 64)
                d(e, k(a.substring(b - 64, b)));
            a = a.substring(b - 64);
            var f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (b = 0; b < a.length; b++)
                f[b >> 2] |= a.charCodeAt(b) << (b % 4 << 3);
            if (f[b >> 2] |= 128 << (b % 4 << 3),
            b > 55)
                for (d(e, f),
                b = 0; 16 > b; b++)
                    f[b] = 0;
            return f[14] = 8 * c,
            d(e, f),
            e
        }
        function d(a, b) {
            var c = a[0]
            , d = a[1]
            , e = a[2]
            , j = a[3];
            c = f(c, d, e, j, b[0], 7, -680876936),
            j = f(j, c, d, e, b[1], 12, -389564586),
            e = f(e, j, c, d, b[2], 17, 606105819),
            d = f(d, e, j, c, b[3], 22, -1044525330),
            c = f(c, d, e, j, b[4], 7, -176418897),
            j = f(j, c, d, e, b[5], 12, 1200080426),
            e = f(e, j, c, d, b[6], 17, -1473231341),
            d = f(d, e, j, c, b[7], 22, -45705983),
            c = f(c, d, e, j, b[8], 7, 1770035416),
            j = f(j, c, d, e, b[9], 12, -1958414417),
            e = f(e, j, c, d, b[10], 17, -42063),
            d = f(d, e, j, c, b[11], 22, -1990404162),
            c = f(c, d, e, j, b[12], 7, 1804603682),
            j = f(j, c, d, e, b[13], 12, -40341101),
            e = f(e, j, c, d, b[14], 17, -1502002290),
            d = f(d, e, j, c, b[15], 22, 1236535329),
            c = g(c, d, e, j, b[1], 5, -165796510),
            j = g(j, c, d, e, b[6], 9, -1069501632),
            e = g(e, j, c, d, b[11], 14, 643717713),
            d = g(d, e, j, c, b[0], 20, -373897302),
            c = g(c, d, e, j, b[5], 5, -701558691),
            j = g(j, c, d, e, b[10], 9, 38016083),
            e = g(e, j, c, d, b[15], 14, -660478335),
            d = g(d, e, j, c, b[4], 20, -405537848),
            c = g(c, d, e, j, b[9], 5, 568446438),
            j = g(j, c, d, e, b[14], 9, -1019803690),
            e = g(e, j, c, d, b[3], 14, -187363961),
            d = g(d, e, j, c, b[8], 20, 1163531501),
            c = g(c, d, e, j, b[13], 5, -1444681467),
            j = g(j, c, d, e, b[2], 9, -51403784),
            e = g(e, j, c, d, b[7], 14, 1735328473),
            d = g(d, e, j, c, b[12], 20, -1926607734),
            c = h(c, d, e, j, b[5], 4, -378558),
            j = h(j, c, d, e, b[8], 11, -2022574463),
            e = h(e, j, c, d, b[11], 16, 1839030562),
            d = h(d, e, j, c, b[14], 23, -35309556),
            c = h(c, d, e, j, b[1], 4, -1530992060),
            j = h(j, c, d, e, b[4], 11, 1272893353),
            e = h(e, j, c, d, b[7], 16, -155497632),
            d = h(d, e, j, c, b[10], 23, -1094730640),
            c = h(c, d, e, j, b[13], 4, 681279174),
            j = h(j, c, d, e, b[0], 11, -358537222),
            e = h(e, j, c, d, b[3], 16, -722521979),
            d = h(d, e, j, c, b[6], 23, 76029189),
            c = h(c, d, e, j, b[9], 4, -640364487),
            j = h(j, c, d, e, b[12], 11, -421815835),
            e = h(e, j, c, d, b[15], 16, 530742520),
            d = h(d, e, j, c, b[2], 23, -995338651),
            c = i(c, d, e, j, b[0], 6, -198630844),
            j = i(j, c, d, e, b[7], 10, 1126891415),
            e = i(e, j, c, d, b[14], 15, -1416354905),
            d = i(d, e, j, c, b[5], 21, -57434055),
            c = i(c, d, e, j, b[12], 6, 1700485571),
            j = i(j, c, d, e, b[3], 10, -1894986606),
            e = i(e, j, c, d, b[10], 15, -1051523),
            d = i(d, e, j, c, b[1], 21, -2054922799),
            c = i(c, d, e, j, b[8], 6, 1873313359),
            j = i(j, c, d, e, b[15], 10, -30611744),
            e = i(e, j, c, d, b[6], 15, -1560198380),
            d = i(d, e, j, c, b[13], 21, 1309151649),
            c = i(c, d, e, j, b[4], 6, -145523070),
            j = i(j, c, d, e, b[11], 10, -1120210379),
            e = i(e, j, c, d, b[2], 15, 718787259),
            d = i(d, e, j, c, b[9], 21, -343485551),
            a[0] = o(c, a[0]),
            a[1] = o(d, a[1]),
            a[2] = o(e, a[2]),
            a[3] = o(j, a[3])
        }
        function e(a, b, c, d, e, f) {
            return b = o(o(b, a), o(d, f)),
            o(b << e | b >>> 32 - e, c)
        }
        function f(a, b, c, d, f, g, h) {
            return e(b & c | ~b & d, a, b, f, g, h)
        }
        function g(a, b, c, d, f, g, h) {
            return e(b & d | c & ~d, a, b, f, g, h)
        }
        function h(a, b, c, d, f, g, h) {
            return e(b ^ c ^ d, a, b, f, g, h)
        }
        function i(a, b, c, d, f, g, h) {
            return e(c ^ (b | ~d), a, b, f, g, h)
        }
        function k(a) {
            var b, c = [];
            for (b = 0; 64 > b; b += 4)
                c[b >> 2] = a.charCodeAt(b) + (a.charCodeAt(b + 1) << 8) + (a.charCodeAt(b + 2) << 16) + (a.charCodeAt(b + 3) << 24);
            return c
        }
        function l(a) {
            let p = {
                    "0": "0",
                    "1": "1",
                    "2": "2",
                    "3": "3",
                    "4": "4",
                    "5": "5",
                    "6": "6",
                    "7": "7",
                    "8": "8",
                    "9": "9",
                    "10": "a",
                    "11": "b",
                    "12": "c",
                    "13": "d",
                    "14": "e",
                    "15": "f"
                }
            for (var b = "", c = 0; 4 > c; c++)
                b += p[a >> 8 * c + 4 & 15] + p[a >> 8 * c & 15];
            return b
        }
        function m(a) {
            for (var b = 0; b < a.length; b++)
                a[b] = l(a[b]);
            return a.join("")
        }
        function n(a) {
            return m(j(a))
        }
        function o(a, b) {
            return a + b & 4294967295
        }
        function o(a, b) {
            var c = (65535 & a) + (65535 & b)
            , d = (a >> 16) + (b >> 16) + (c >> 16);
            return d << 16 | 65535 & c
        }

        let a  = data.Name;
        if (a) {
            for (var b = n(n(a.toUpperCase()).toUpperCase()), c = [], d = 0; d < b.length; d += 2)
                c.push(parseInt(b.substr(d, 2), 16));
            return c
        }
        return null
    }

    function s() {
        let a = data.ClientId;
        if (a && a.length > 0) {
            for (var e = 0, f = 0; f < a.length; f++)
                e += a.charCodeAt(f);
            return e
        }
        return 0
    }

    function v(a) {
        return a.reduce(function(a, b, c) {
            return a | b << 7 - c
        }, 0)
    }

    function E(a) {
        var b = new TextEncoder;
        return b.encode(JSON.stringify(a))
    }

    function y(a, b)  {
        for (var c = 0, d = 0; d < a.length; d++)
            c += a[d];
        return b ? c : a.length - c
    }
    function u(a) {
        for (var b = [], c = 7; c >= 0; c--)
            b.push(a >> c & 1);
        return b
    }
    function z(a, b) {
        for (var c = 0, d = 0; d < a.length; d++) {
            var e = u(a[d]);
            c += y(e, b)
        }
        return c
    }

    function w(a) {
        for (var b = !1, c = 0; c < a.length; c++)
            b ^= a[c];
        return b
    }
    function B(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            d >= b ? c.push(a[d - b]) : c.push(a[a.length - b + d]);
        return c
    }

    function C(a){
        for (var b = "", c = 0; c < a.length; c++)
            b += String.fromCharCode(a[c]);
        return btoa(b)
    }

    function A(a, b) {
        for (var c = [], d = 0; d < a.length; d++) {
            var e = d + b;
            e >= a.length ? c.push(a[e - a.length]) : c.push(a[e])
        }
        return c
    }
    function x(a) {
        for (var b = !1, c = 0; c < a.length; c++) {
            var d = u(a[c]);
            b ^= w(d)
        }
        return b
    }
    var b = s()
    , c = t()
    , d = E(a)
    , e = !1
    , f = 0;
    null != c && c.length > 0 && (e = x(c),
    f = z(c, !0),
    f += c.length);
    var g = x(d)
    , h = z(d, !0);
    h += d.length;
    for (var i = f + h + b, j = [], k = 0; k < d.length; k++) {
        var l = 0
        , m = u(d[k])
        , n = w(m);
        if (n ^= g,
        null != c && c.length > 0) {
            var o = c[k % c.length];
            n ^= e,
            l = y(m, n) + y(u(o), n)
        } else
            l = y(m, n);
        if (n) {
            var p = B(m, (i + l) % 8);
            j.push(v(p))
        } else {
            var p = A(m, (i + l) % 8);
            j.push(v(p))
        }
    }
    return C(j)
}

function p(){
    function j() {
        return data && data.Token ? data.Token : null
    }
    
    var a = j();
    if (a) {
        var b = k()
            , c = m(a, b)
            , d = h()
            , e = i()
            , f = l(b)
            , g = l(e)
            , n = f + g + o(function(a, b, c) {
            return a + b + c
        }(function(a, b) {
            return a + b
        }(c, d), e, b));
        return n + a
    }
    return a
}

let header = p()
let g = f(c)
console.log(g)