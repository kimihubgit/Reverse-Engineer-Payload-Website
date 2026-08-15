// 变量构造器 (Function constructor hook)
(function () {
    const AAA = Function.prototype.constructor;

    Function.prototype.constructor = function (a) {
        if (typeof a === 'string' && a.indexOf('debugger') !== -1) {
            // nếu code chứa debugger thì trả về function rỗng
            return function () {};
        }
        return AAA.call(this, a);
    };
})();
