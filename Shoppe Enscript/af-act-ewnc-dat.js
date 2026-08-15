function y() {
    var e, t = function (e) {
        for (var t = "", n = 0; n < e.length; n++)
            t += e[n].toString(16).padStart(2, "0");
        return t
    }(function () {
        for (var e = new Uint8Array(8), t = 0; t < 8; t++)
            e[t] = Math.floor(256 * Math.random());
        return e
    }());
    return (e = {})["af-ac-enc-dat"] = t,
        e
}

console.log(y());
