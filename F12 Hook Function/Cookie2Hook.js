(function () {
    'use strict';

    let cookieTemp = '';

    Object.defineProperty(document, 'cookie', {
        configurable: true,
        enumerable: true,

        set: function (val) {
            if (val.indexOf('v') !== -1) {
                debugger;
            }

            console.log('Hook捕获到cookie设置 ->', val);
            cookieTemp = val;
            return val;
        },

        get: function () {
            return cookieTemp;
        }
    });
})();
