
(function () {
    const Lis = ['fE()[SR(X9)](N8, V25, L7, P0)', 'DY()[hS(Z6)](WR, C8, OQ5, s9)'];
    const res = {};
    console.log(Lis.length);
    for (let i = 0; i < Lis.length; i++) {
        let name = Lis[i];
        let result = null;
        try {
            result = eval(String(name));
        } catch (e) {
        if (result == null) {
            continue
        }
        res[name] = result;
        // if (result){
            res.push({
                name: result,
            })
        }
        console.log(res);
        copy(res);
    }
})();

// [
//     {
//         "name": "fE()[SR(X9)](N8, V25, L7, P0)",
//         "value": "isTrusted"
//     },
//     {
//         "name": "DY()[hS(Z6)](WR, C8, OQ5, s9)",
//         "value": "undefined"
//     }
// ]
