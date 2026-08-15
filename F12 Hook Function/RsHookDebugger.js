// 去除无限 debugger
(function () {
    // lưu constructor gốc
    Function.prototype._constructor_back = Function.prototype.constructor;

    // hook constructor
    Function.prototype.constructor = function () {
        if (
            arguments &&
            typeof arguments[0] === 'string'
        ) {
            // console.log("new Function:", arguments[0]);

            // nếu code chỉ là debugger → chặn
            if (arguments[0].trim() === 'debugger') {
                return function () {};
            }

            // hoặc nếu chứa debugger → xoá
            if (arguments[0].includes('debugger')) {
                arguments[0] = arguments[0].replace(/debugger\s*;?/g, '');
            }
        }

        return Function.prototype._constructor_back.apply(this, arguments);
    };
})();
