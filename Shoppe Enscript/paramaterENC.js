function paramater(e) {
    for (var t, i, a = "", r = "", o = 0, s = 0; i = e.charAt(s++); ~i && (t = o % 4 ? 64 * t + i : i,
    o++ % 4) && (a += String.fromCharCode(255 & t >> (-2 * o & 6))))
        i = "ojegxfhsudqiywtcnmalvzpbkrNIQZROBLYSXGWCTEHPJFMUVKAD0318647952+/=".indexOf(i);
    for (var n = 0, c = a.length; n < c; n++)
        r += "%" + ("00" + a.charCodeAt(n).toString(16)).slice(-2);
    return decodeURIComponent(r)
}

console.log(paramater("ZsdEr1ZGQXfMZhGgQWf8IhzAzWzANprEk1f0Np2M"));
