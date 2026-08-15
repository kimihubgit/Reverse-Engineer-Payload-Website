function utf(t) {
    for (var n, r, e = "", V = "", $ = 0, a = 0; r = t.charAt(a++); ~r && (n = $ % 4 ? 64 * n + r : r, $++ % 4) && (e += String.fromCharCode(255 & n >> (-2 * $ & 6))))
        r = "pvsmdgnxrkzthjbowfuliyeqcaGASOXTRUJNHQWEKMDFZCBVPLIY1049362758+/=".indexOf(r);
    console.log(n)
    console.log(e)
    for (var k = 0, s = e.length; k < s; k++)
        V += "%" + ("00" + e.charCodeAt(k).toString(16)).slice(-2);
    console.log(V)
    return decodeURIComponent(V)

}
console.log(utf("aWQIaeaVXxLMc4y9aegYaeL5aEUMA9h"));
