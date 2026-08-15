(function () {
    const _setRequestHeader = window.XMLHttpRequest.prototype.setRequestHeader;
    window.XMLHttpRequest.prototype.setRequestHeader = function (key, value) {
        if (key === 'X-ITOUCHTV-Ca-Signature') {
            debugger;
        }
        return _setRequestHeader.apply(this, arguments);
    };
})();
