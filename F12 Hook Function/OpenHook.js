(function () {
    const _open = window.XMLHttpRequest.prototype.open;

    window.XMLHttpRequest.prototype.open = function (method, url, async) {
        if (typeof url === 'string' && url.indexOf('mtgsig') !== -1) {
            debugger;
        }

        return _open.apply(this, arguments);
    };
})();
