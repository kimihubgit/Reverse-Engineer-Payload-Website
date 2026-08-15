
var lN = function(cE) {
    var DW = 0;
    for (var FN = 0; FN < cE["length"]; FN++) {
        DW = DW + cE["charCodeAt"](FN);
    }
    return DW;
};

var I0 = function(j1) {
    var xV = 1;
    var P1 = [];
    var F6 = Math.sqrt(j1);
    while (xV <= F6 && P1["length"] < 6) {
        if (j1 % xV === 0) {
            if (j1 / xV === xV) {
                P1["push"](xV);
            } else {
                P1["push"](xV, j1 / xV);
            }
        }
        xV = xV + 1;
    }
    return P1;
};

var G7 = function(objs) {
    return objs.map(obj => Object.values(obj)[0]).join(',');
}

var Ed = function() {
    let ua = "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36";
    var gq = Buffer.from(ua).toString('base64')
    var WF = lN(gq);
    var p3 = I0(WF);
    let T4;
    return T4 = p3.join(",")
}

function get_ajr() {
    let Kdw = [
    {
        "adp": "cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1"
    },
    {
        "tsd": 0
    },
    {
        "xag": 12147
    },
    {
        "nal": "vi-VN"
    },
    {
        "dau": 0
    },
    {
        "npl": 5
    },
    {
        "ucs": "9954"
    },
    {
        "nps": "20030107"
    },
    {
        "wiw": 1790
    },
    {
        "wih": 824
    },
    {
        "ibr": 0
    },
    {
        "asw": 1790
    },
    {
        "wow": 1790
    },
    {
        "ua": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36"
    },
    {
        "swi": 1790
    },
    {
        "hz1": 434870
    },
    {
        "ran": "0.671673390335"
    },
    {
        "nap": "Gecko"
    },
    {
        "hal": 883712427964.5
    },
    {
        "wdr": 0
    },
    {
        "ash": 824
    },
    {
        "pha": 0
    },
    {
        "she": 824
    }
]

    let ajr = Ed({
        "startTimestamp": window.bmak["startTs"],
        "deviceData": G7(Kdw),
        "mouseMoveData": "",
        "totVel": dsw,
        "deltaTimestamp": bEw
    });
    return ajr;
}

console.log(get_ajr());
