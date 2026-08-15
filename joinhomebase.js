

function chartCode(a){ 
    for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4,
        ++c) : b += 3
    }
    return b
}

const stringChart = "public-token-live-ec713cfd-4d77-4590-9d64-36e7aaab9b15" //54
console.log(chartCode(stringChart), );


const localstore = "w4BWI4pMbZaHDJFMvZScTbKi3zb16z48+T+vBiavoa8="
