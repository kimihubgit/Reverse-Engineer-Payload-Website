(function () {
    // hook JSON.stringify
    const my_stringify = JSON.stringify;
    JSON.stringify = function (params) {
        console.log("HOOK stringify:", params);
        debugger;
        return my_stringify.apply(this, arguments);
    };

    // hook JSON.parse
    const my_parse = JSON.parse;
    JSON.parse = function (params) {
        console.log("HOOK parse:", params);
        debugger;
        return my_parse.apply(this, arguments);
    };
})();
