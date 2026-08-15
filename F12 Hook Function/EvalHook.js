(function () {
    // tránh inject trùng
    if (window._cr_eval) return;

    // lưu eval gốc
    window._cr_eval = window.eval;

    // hàm eval mới
    function myeval(src) {
        try {
            console.log(
                "==== eval begin: length=" + src.length +
                ", caller=" + (myeval.caller ? myeval.caller.name : "null")
            );
            console.log(src);
            console.log("==== eval end ====");
        } catch (e) {}

        return window._cr_eval(src);
    }

    // bind để giữ context
    var _myeval = myeval.bind(null);

    // giữ toString giống eval thật (tránh bị detect)
    _myeval.toString = window._cr_eval.toString;

    // ghi đè eval
    Object.defineProperty(window, 'eval', {
        value: _myeval,
        writable: false,
        configurable: true
    });

    console.log(">>>> eval injected:", document.location.href, "<<<<");
})();
