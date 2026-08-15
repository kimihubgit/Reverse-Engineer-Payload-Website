(function () {
    'use strict';

    /* =========================
     * 1. Bypass debugger keyword
     * ========================= */

    function stripDebugger(code) {
        if (typeof code === 'string' && code.indexOf('debugger') !== -1) {
            return code.replace(/debugger\s*;?/g, '');
        }
        return code;
    }

    /* =========================
     * 2. Hook eval
     * ========================= */
    const _eval = window.eval;
    window.eval = function (code) {
        return _eval(stripDebugger(code));
    };
    window.eval.toString = _eval.toString;

    /* =========================
     * 3. Hook Function
     * ========================= */
    const _Function = Function;
    Function = function (...args) {
        if (args.length) {
            args[args.length - 1] = stripDebugger(args[args.length - 1]);
        }
        return _Function.apply(this, args);
    };
    Function.prototype = _Function.prototype;
    Function.toString = _Function.toString;

    /* =========================
     * 4. Hook setTimeout
     * ========================= */
    const _setTimeout = window.setTimeout;
    window.setTimeout = function (fn, delay) {
        if (typeof fn === 'string') {
            fn = stripDebugger(fn);
        }
        return _setTimeout(fn, delay);
    };

    /* =========================
     * 5. Hook setInterval
     * ========================= */
    const _setInterval = window.setInterval;
    window.setInterval = function (fn, delay) {
        if (typeof fn === 'string') {
            fn = stripDebugger(fn);
        }
        return _setInterval(fn, delay);
    };

    /* =========================
     * 6. Bypass console.debug / console.clear detect
     * ========================= */
    ['debug', 'clear', 'profile', 'profileEnd'].forEach(fn => {
        if (console[fn]) {
            console[fn] = function () {};
        }
    });

    /* =========================
     * 7. Anti DevTools detect (basic)
     * ========================= */
    Object.defineProperty(window, 'outerWidth', {
        get: () => window.innerWidth
    });
    Object.defineProperty(window, 'outerHeight', {
        get: () => window.innerHeight
    });

    console.log('✅ Anti-debug bypass injected');
})();
