(function () {
    let cookie_cache = document.cookie || "";
    Object.defineProperty(document, 'cookie', {
        configurable: true,
        enumerable: true,

        get: function () {
            console.log('Get cookie');
            debugger;
            return cookie_cache;
        },

        set: function (val) {
            console.log('Set cookie:', val);
            debugger;
            const cookie = val.split(";")[0];
            const ncookie = cookie.split("=");

            let flag = false;
            let cache = cookie_cache ? cookie_cache.split("; ") : [];

            cache = cache.map(function (a) {
                if (a.split("=")[0] === ncookie[0]) {
                    flag = true;
                    return cookie;
                }
                return a;
            });

            if (!flag) {
                cache.push(cookie);
            }

            cookie_cache = cache.join("; ");
            return cookie_cache;
        }
    });
})();
