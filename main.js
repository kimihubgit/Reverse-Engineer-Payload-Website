// Function Enscript Email

var s = function(t) {
    for (var e, r = t.toString(), n = [], i = 0; i < r.length; i++)
        0 <= (e = r.charCodeAt(i)) && e <= 127 ? n.push(e) : 128 <= e && e <= 2047 ? (n.push(192 | 31 & e >> 6),
        n.push(128 | 63 & e)) : (2048 <= e && e <= 55295 || 57344 <= e && e <= 65535) && (n.push(224 | 15 & e >> 12),
        n.push(128 | 63 & e >> 6),
        n.push(128 | 63 & e));
    for (var o = 0; o < n.length; o++)
        n[o] &= 255;
    return n
}
c = function(t) {
    var e = []
    , r = [];
    if (void 0 === t)
        return "";
    r = s(t);
    for (var n = 0, i = r.length; n < i; ++n)
        e.push((5 ^ r[n]).toString(16));
    return e.join("")
}

var t = "vkhai2603@gmail.com"  
var p = "123456789Aa"
// "736e6d646c37333536456268646c692b666a68" 
// "766163766163"
console.log("Enscript Email: " + c(t));
console.log("Enscript PASS: " + c(p));