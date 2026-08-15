const { de } = require("@faker-js/faker");

var fl3 = 1767350324796
// var fl3 = Date.now();
let data = {
    "ver": "6j/Vk2k3pX1g+CyjUo6B8Lz4NkGJtk2s9H4lZ5tfF8E=", // Phiên Bản Của Akamai
    "fpt": ";-1;dis;,7;true;true;true;-420;true;24;24;true;false;-1", 
    "fpc": "4536", 
    "ajr": "1,15312,2,7656,3,5104", 
    "din": [ 
        {
            "wih": 824
        },
        {
            "she": 824
        },
        {
            "npl": 5
        },
        {
            "xag": 12147
        },
        {
            "ran": "0.708868473354"
        },
        {
            "pha": 0
        },
        {
            "hal": 883661031982
        },
        {
            "ua": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36"
        },
        {
            "nal": "vi-VN"
        },
        {
            "tsd": 0
        },
        {
            "hz1": 434845
        },
        {
            "nps": "20030107"
        },
        {
            "ibr": 0
        },
        {
            "nap": "Gecko"
        },
        {
            "wiw": 1640
        },
        {
            "asw": 1640
        },
        {
            "adp": "cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1"
        },
        {
            "dau": 0
        },
        {
            "wow": 1640
        },
        {
            "ucs": "9954"
        },
        {
            "swi": 1640
        },
        {
            "wdr": 0
        },
        {
            "ash": 824
        }
    ],
    "eem": "do_en,dm_en,t_en", 
     // danh sách các input được compiler lại thành chũi như thế này ( ffs ) cách chuổi đc phân cách bằng dấu ;
    "ffs": "0,0,0,0,-1,1371,0;0,-1,0,0,-1,-1,0;0,0,1,0,2054,864,0;1,0,1,0,2073,883,0;-1,0,0,0,0,1173,0;0,0,0,0,-1,742,0;-1,0,0,0,0,1173,0;0,0,0,0,-1,742,0;0,-1,0,0,2108,2108,0;",
    "vev": "2,3533;0,20960;3,96196;1,96207;1,2421268;3,2421269;2,2423062;3,2424419;3,5158053;1,5158078;2,5159485;0,5160283;3,5205026;1,5205043;2,5206111;0,5206820;3,5210690;1,5210710;2,5212143;0,5212815;3,5217134;1,5217156;2,5218127;0,5218745;1,5223119;3,5229898;2,5231857;3,5233954;3,5239311;3,5243311;3,5249644;1,28241427;3,28241448;2,28244094;3,28245330;2,28253242;3,28255429;",
    "inf": "0,0,0,0,2054,864,0;1,0,0,0,2073,883,0;",
    "ajt": "1,19",
    "kev": "0,1,28252969,-4,0,0,-1;1,2,28253072,-4,0,0,-1;",
    "dme": "0,96237,-1,-1,-1,-1,-1,-1,-1,-1,-1;1,2421300,-1,-1,-1,-1,-1,-1,-1,-1,-1;2,5158120,-1,-1,-1,-1,-1,-1,-1,-1,-1;3,5205072,-1,-1,-1,-1,-1,-1,-1,-1,-1;4,5210739,-1,-1,-1,-1,-1,-1,-1,-1,-1;5,5217185,-1,-1,-1,-1,-1,-1,-1,-1,-1;6,5223147,-1,-1,-1,-1,-1,-1,-1,-1,-1;7,28241479,-1,-1,-1,-1,-1,-1,-1,-1,-1;",
    "mev": "0,1,122,1238,492;1,3,122,1238,492,-1;2,4,128,1238,492,-1;3,2,128,1238,492,-1;4,1,1210,1210,497;5,3,1210,1210,497,-1;6,4,1216,1210,497,-1;7,2,1216,1210,497,-1;8,1,5159021,1208,485;9,3,5159021,1208,485,-1;10,4,5159034,1208,485,-1;11,2,5159034,1208,485,-1;12,1,5205741,1184,488;13,3,5205741,1184,488,-1;14,4,5205757,1184,488,-1;15,2,5205757,1184,488,-1;16,1,5211686,1093,494;17,3,5211686,1093,494,-1;18,4,5211701,1093,494,-1;19,2,5211701,1093,494,-1;20,1,5217909,1188,496;21,3,5217909,1188,496,-1;22,4,5217924,1188,496,-1;23,2,5217925,1188,496,-1;24,1,5230272,1919,279;25,1,5230277,1874,286;26,1,5230283,1834,292;27,1,5230289,1791,298;28,1,5230296,1756,302;29,1,5230301,1724,306;30,1,5230307,1689,310;31,1,5230313,1666,312;32,1,5230319,1634,313;33,1,5230325,1618,314;34,1,5230331,1596,314;35,1,5230337,1582,314;36,1,5230343,1571,314;37,1,5230349,1556,313;38,1,5230356,1546,312;39,1,5230362,1536,309;40,1,5230368,1528,308;41,1,5230374,1520,306;42,1,5230380,1516,305;43,1,5230386,1513,303;44,1,5230392,1509,301;45,1,5230398,1507,300;46,1,5230404,1506,300;47,1,5230410,1505,299;48,1,5230416,1505,298;49,1,5230422,1504,296;50,1,5230428,1504,295;51,1,5230434,1503,293;52,1,5230441,1503,292;53,1,5230447,1503,289;54,1,5230453,1503,287;55,1,5230459,1503,285;56,1,5230465,1504,283;57,1,5230471,1504,280;58,1,5230477,1504,277;59,1,5230483,1504,276;60,1,5230490,1504,272;61,1,5230495,1504,271;62,1,5230501,1504,269;63,1,5230507,1504,267;64,1,5230513,1503,264;65,1,5230519,1502,263;66,1,5230525,1502,260;67,1,5230531,1501,259;68,1,5230537,1500,258;69,1,5230543,1499,257;70,1,5230550,1498,256;71,1,5230556,1497,256;72,1,5230562,1497,255;73,1,5230568,1495,255;74,1,5230574,1494,254;75,1,5230580,1492,253;76,1,5230586,1491,253;77,1,5230592,1489,252;78,1,5230598,1486,252;79,1,5230604,1483,252;80,1,5230610,1480,252;81,1,5230616,1477,252;82,1,5230622,1472,252;83,1,5230629,1468,251;84,1,5230635,1464,251;85,1,5230641,1461,251;86,1,5230647,1459,251;87,1,5230653,1457,251;88,1,5230659,1455,251;89,1,5230665,1454,251;90,1,5230671,1453,251;91,1,5230677,1453,250;92,1,5230689,1452,250;93,1,5230701,1452,249;94,1,5230726,1452,248;95,1,5230732,1452,247;96,1,5230738,1452,244;97,1,5230744,1452,243;98,1,5230750,1454,241;99,1,5230756,1455,238;100,1,5230762,1457,235;101,1,5230768,1459,232;102,1,5230774,1462,229;103,1,5230780,1466,225;104,1,5230786,1470,220;105,1,5230792,1476,215;106,1,5230798,1480,210;107,1,5230804,1485,206;108,1,5230811,1493,199;109,1,5230817,1500,193;110,1,5230823,1509,185;111,1,5230829,1516,178;112,1,5230835,1526,169;113,1,5230841,1535,161;114,1,5230847,1542,155;115,1,5230853,1550,148;116,1,5230859,1556,142;117,1,5230865,1561,137;137,3,5249747,1109,497,-1;138,4,27701131,1109,497,-1;139,2,27701135,1109,497,-1;141,3,28245414,1155,493,-1;142,4,28250787,1155,493,-1;143,2,28250787,1155,493,-1;220,3,28255545,1176,492,-1;",
    "doe": "0,96238,-1,-1,-1;1,2421311,-1,-1,-1;2,5158120,-1,-1,-1;3,5205072,-1,-1,-1;4,5210739,-1,-1,-1;5,5217185,-1,-1,-1;6,5223147,-1,-1,-1;7,28241485,-1,-1,-1;",
    "pur": "https://mydhl.express.dhl/vn/vi/home.html?cid=xbu_1.0_portal_login_exp#/createNewShipmentTab",
    "pev": "0,4,120,1238,492;1,3,1089,1210,497;2,4,1209,1210,498;3,3,104957,1163,505;4,3,2426237,1147,503;5,3,5158931,1208,485;6,4,5159019,1208,485;7,3,5205636,1184,488;8,4,5205738,1184,488;9,3,5211587,1093,494;10,4,5211684,1093,494;11,3,5217808,1188,496;12,4,5217906,1188,496;",
    "mst": [
        {
            "kevl": 56506036
        },
        {
            "mevl": 748737595
        },
        {
            "tevl": 105859019
        },
        {
            "devl": 56773325
        },
        {
            "dmvl": 56773307
        },
        {
            "pevl": 44143779
        },
        {
            "tovl": 1068792996
        },
        {
            "delt": 28260832
        },
        {
            "it": 0
        },
        {
            "sts": 1767322063964
        },
        {
            "fct": 1
        },
        {
            "dd2": 18906
        },
        {
            "kc": 2
        },
        {
            "mc": 221
        },
        {
            "ww8": 3151
        },
        {
            "pc": 22
        },
        {
            "tc": 14
        },
        {
            "ssts": 29282727
        },
        {
            "tst": 1102434545
        },
        {
            "rval": "-1"
        },
        {
            "rcfp": "-1"
        },
        {
            "nfas": 30261693
        },
        {
            "jsrf": "PiZtE"
        },
        {
            "jsrf1": 36087
        },
        {
            "jsrf2": 27
        },
        {
            "signals": "0"
        },
        {
            "mwd": "0"
        },
        {
            "hea": ""
        },
        {
            "dvc": "cocmkmeiaedfmokwc17y1,78840,k+i+j+b+e+h+d+c+a+f+g+"
        },
        {
            "srd": "0"
        },
        {
            "tid": ""
        }
    ],
    "o9": 0,
    "tev": "0,2,6,1238,492,1;1,2,1094,1210,497,1;2,2,2415915,1163,505,1;3,2,5147918,1147,503,1;4,2,5158946,1208,485,1;5,2,5205653,1184,488,1;6,2,5211602,1093,494,1;7,2,5217824,1188,496,1;8,2,5237499,1165,492,1;9,2,5241594,1240,503,1;10,2,5246980,1186,506,1;11,2,5249647,1109,497,1;12,2,28245354,1155,493,1;13,2,28255431,1176,492,1;",
    "sde": "0,0,0,0,1,0,0",
    "per": "",
    "dsi": [
        {
            "get": ""
        },
        {
            "set": "0"
        },
        {
            "ico": "070f409b82df3bdd2f51a6415c7895353c153c47fe6dd8a0f87f3d14c46ccb2b"
        },
        {
            "ift": "3"
        },
        {
            "xof": "16,5,1,1,8"
        },
        {
            "xot": "16,5,1,1,8"
        },
        {
            "wev": "Google Inc. (AMD);wev;Google Inc. (AMD)"
        },
        {
            "wre": "Google Inc. (AMD);wre;Google Inc. (AMD)"
        },
        {
            "wdr": "0"
        },
        {
            "iks": ""
        },
        {
            "lds": "1"
        },
        {
            "sst": ""
        }
    ],
    "wsl": "4294967296,54029072,50705232,50,-1,1,1,1,0,1,,,,,,,,,1,1",
    "hls": "-1,,,1,",
    "pde": "sayswho",
    "oev": "",
    "if": "",
    "pus": 0,
    "ffl": "9Yfutzf4GpXcpLYLYk",
    "sww": {
        "s024": 0,
        "swrt": 1,
        "wrt": 20,
        "s025": "Fri Jan 02 2026 09:47:45 GMT+0700 (Indochina Time)",
        "s026": "Fri Jan 02 2026 09:47:45 GMT+0700 (Indochina Time)",
        "s027": null,
        "s028": null,
        "s029": "Asia/Saigon",
        "s030": "Asia/Saigon",
        "s031": "vi-VN",
        "s032": "vi-VN",
        "s033": [
            "vi-VN",
            "vi",
            "en-US",
            "en"
        ],
        "s034": [
            "vi-VN",
            "vi",
            "en-US",
            "en"
        ],
        "s035": 8,
        "s036": 8,
        "s037": 16,
        "s038": 16,
        "s039": [
            "4g",
            -1,
            "null"
        ],
        "s040": [
            "4g",
            -1,
            "null"
        ],
        "s041": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36",
        "s042": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
        "s043": "5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36",
        "s044": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
        "s045": "Win32",
        "s046": "Win32",
        "s047": [
            {
                "brand": "Google Chrome",
                "version": "143"
            },
            {
                "brand": "Chromium",
                "version": "143"
            },
            {
                "brand": "Not A(Brand",
                "version": "24"
            }
        ],
        "s048": [
            {
                "brand": "Google Chrome",
                "version": "143"
            },
            {
                "brand": "Chromium",
                "version": "143"
            },
            {
                "brand": "Not A(Brand",
                "version": "24"
            }
        ],
        "s049": true,
        "s050": false,
        "s051": "",
        "s052": "x86",
        "s053": "64",
        "s054": "64",
        "s055": "Nexus 5",
        "s056": "",
        "s057": "Android",
        "s058": "Windows",
        "s059": "6.0",
        "s060": "19.0.0",
        "s061": "143.0.7499.170",
        "s062": "143.0.7499.170",
        "s063": false,
        "s064": false,
        "s065": [
            {
                "brand": "Google Chrome",
                "version": "143.0.7499.170"
            },
            {
                "brand": "Chromium",
                "version": "143.0.7499.170"
            },
            {
                "brand": "Not A(Brand",
                "version": "24.0.0.0"
            }
        ],
        "s066": [
            {
                "brand": "Google Chrome",
                "version": "143.0.7499.170"
            },
            {
                "brand": "Chromium",
                "version": "143.0.7499.170"
            },
            {
                "brand": "Not A(Brand",
                "version": "24.0.0.0"
            }
        ],
        "s067": "Google Inc. (AMD)",
        "s068": "Google Inc. (AMD)",
        "s069": "ANGLE (AMD, AMD Radeon(TM) Graphics (0x00001681) Direct3D11 vs_5_0 ps_5_0, D3D11)",
        "s070": "ANGLE (AMD, AMD Radeon(TM) Graphics (0x00001681) Direct3D11 vs_5_0 ps_5_0, D3D11)",
        "s071": "Google Inc. (AMD)",
        "s072": "Google Inc. (AMD)",
        "s073": "ANGLE (AMD, AMD Radeon(TM) Graphics (0x00001681) Direct3D11 vs_5_0 ps_5_0, D3D11)",
        "s074": "ANGLE (AMD, AMD Radeon(TM) Graphics (0x00001681) Direct3D11 vs_5_0 ps_5_0, D3D11)"
    },
    "tab": 0,
    "sws": 0,
    "mis": 0,
    "og": "sm",
    "s017": "1,1,0,0",
    "s148": "3964",
    "s151": "4181",
    "s153": "544",
    "s003": "0",
    "s002": "00",
    "s150": "7165",
    "s127": "185.39",
    "fwd": [
        {
            "fmh": ""
        },
        {
            "fmz": "2"
        },
        {
            "ssh": ""
        }
    ]
}


let def = [
    4095,
    2,
    1,
    8,
    3,
    4,
    32,
    65535,
    4282663,
    8388607,
    65793,
    4294967295,
    8888888,
    2859919,
    64,
    2048,
    3600,
    8192,
    32768,
    7,
    20,
    0,
    17,
    21,
    22,
    31,
    34,
    75,
    25,
    33,
    12,
    1000,
    10,
    4294967296,
    3000,
    1001,
    4999,
    2999,
    10000,
    1024,
    99,
    67,
    250,
    18,
    2016,
    999999,
    1.73,
    2.11,
    5,
    13,
    2222,
    6,
    1.67,
    1.43,
    201,
    999,
    875,
    1.81
]

const Zh = [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    0,
    1,
    -1,
    2,
    3,
    4,
    5,
    -1,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    -1,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91
];


// let time = Date.now();
let kl3 = 1767324790762
function nB(Aw3, C3M) {
        return Aw3 & C3M;
}

var Bw = function(){
        return Date.now();
}

var QA = function(DV3, gT3) {
        return DV3 >>> gT3;
    };
var TB = function(NQM, g3M) {
        return NQM % g3M;

    }

var Y2 = function(TmM, nT3) {
    return TmM - nT3;
};

var CG = function(cmM, SMM) {
        return cmM === SMM;
    };

var vx = function(OpM, vb3) {
    return OpM >= vb3;
};
var AI = function(TgM, M3M) {
        return TgM < M3M;
    };
var TB = function(NQM, g3M) {
        return NQM % g3M;
    };

var Y2 = function(TmM, nT3) {
        return TmM - nT3;
    };
var zZ = function(YqM, d7M) {
        return YqM == d7M;
    };
var dh3 = function(Bv3) {
    var ZH3 = "3";
    var Qn3 = "1";
    var Ur3 = "2";
    var OH3 = 0;
    var Yv3 = "Vk2k3pX1g+CyjUo6B8Lz4NkGJtk2s9H4lZ5tfF8E=";
    var Fl3 = [ZH3, Qn3, Ur3, OH3, Bv3[0], Yv3];
    var JF3 = Fl3["join"](";");
    return JF3
};

var Ix3 = function(Ch3) {
    var Pv3 = "3";
    var vn3 = "0";
    var B93 = 1;
    var VB3 = "0";
    var rI3 = "6j/Vk2k3pX1g+CyjUo6B8Lz4NkGJtk2s9H4lZ5tfF8E=";
    var P93 = [Pv3, vn3, B93, VB3, Ch3[0], rI3];
    var kW3 = P93[qs()[Ft(jO)](Kh, dA, QX, xX(xX(qD)))](Rl3);
    return kW3
};

var cR3 = function(O7M) {
        var Vb3 = ['text', 'search', 'url', 'email', 'tel', 'number'];
        O7M = O7M["toLowerCase"]();
        if (Vb3["indexOf"](O7M) !== -1)
            return 0;
        else if (O7M === 'password')
            return 1;
        else
            return 2;
    };

var OF = function(w63) {
    if (w63 == null)
        return -1;
    try {
        var K63 = 0;
        for (var C63 = 0; C63 < w63["length"]; C63++) {
            var Q63 = w63["charCodeAt"](C63);
            if (Q63 < 128) {
                K63 = K63 + Q63;
            }
        }
        return K63;
    } catch (mzM) {
        return -2;
    }
};
var xX = function(TqM) {
        return !TqM;
    };
var nG = function(SV3, dqM) {
        return SV3 + dqM;
    };

var ND = function(fT, fA) {
        return fT !== fA;
    };
var HB = function(fN, t6) {
    let x4 = " !#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~";
        var GN = "";
        for (var px = 0; AI(px, fN["length"]); px++) {
            var YI = fN["charAt"](px);
            var wv = nB(QA(t6, 8), def[7]);
            t6 *= def[10];
            t6 &= def[11];
            t6 += def[8];
            t6 &= def[9];
            var sx = Zh[fN["charCodeAt"](px)];
            if (CG(typeof YI["codePointAt"], "function")) {
                var Ll = YI["codePointAt"](0);
                if (vx(Ll, 32) && AI(Ll, 127)) {
                    sx = Zh[Ll];
                }
            }
            if (vx(sx, 0)) {
                var In = TB(wv, x4["length"]);
                sx += In;
                sx %= x4["length"];
                YI = x4[sx];
            }
            GN += YI;
        }
        var UN;
        return UN = GN;   
    };

var hK3 = function() {
        // if (xX(lt3)) {
        //     try {
        //         var TX3 = DZ.length;
        //         var K83 = xX({});
        //         SZ3 = nG(SZ3, ND(typeof cO()[vY(Uc3)], nG('', [][[]])) ? cO()[vY(rs)](QS, rA, xD3) : cO()[vY(UY)](JF, cA, Ux));
        //         if (xX(xX(WQ[cO()[vY(st)](ks, fD, SZ)]))) {
        //             SZ3 = nG(SZ3, CG(typeof cO()[vY(Ef)], nG([], [][[]])) ? cO()[vY(UY)](ps, OO, Vj3) : cO()[vY(Uc3)](mJ, hV, jd3));
        //             xK3 = nG(xK3, SB[Lt]);
        //         } else {
        //             SZ3 = nG(SZ3, qs()[Ft(Ds)].call(null, d9, lK, Rs, xX(xX([]))));
        //             xK3 = nG(xK3, N5[CG(typeof qs()[Ft(GK)], nG('', [][[]])) ? qs()[Ft(LD)](Cs, mC3, mO, df) : qs()[Ft(zh)](p6, Uq3, js, QX)]());
        //         }
        //     } catch (CU3) {
        //         DZ.splice(Y2(TX3, MO), Infinity, Z83);
        //         SZ3 = nG(SZ3, ND(typeof cO()[vY(rN)], nG([], [][[]])) ? cO()[vY(p6)](st, M73, dJ) : cO()[vY(UY)](xX(qD), Ed, sW));
        //         xK3 = nG(xK3, E2);
        //     }
        //     lt3 = xX(xX(j5));
        // }
        var pS3 = "";
        var nD3 = -1;
        var RZ3 = WQ["document"]["getElementsByTagName"]("input");
        for (var SU3 = 0; AI(SU3, RZ3["length"]); SU3++) {
            var X13 = RZ3[SU3];
            var n53 = OF(X13["getAttribute"]("name"));
            var wO3 = OF(X13["getAttribute"]("id"));
            var LO3 = X13["getAttribute"]("required");
            var jf3 = zZ(LO3, null) ? 0 : 2;
            var GD3 = X13["getAttribute"]("t");
            var d53 = zZ(GD3, null) ? -1 : cR3(GD3);
            var Bf3 = X13["getAttribute"]("autocomplete");
            if (zZ(Bf3, null))
                nD3 = -1;
            else {
                Bf3 = Bf3["toLowerCase"]();
                if (CG(Bf3, CG(typeof dG()[c8(St)], 'undefined') ? dG()[c8(UY)].call(null, md3, LY, zX3, Ms3) : dG()[c8(df)].apply(null, [YL, YL, DE3, m4])))
                    nD3 = qD;
                else if (CG(Bf3, R1()[nK(zz3)].call(null, rG, Nq3, f1, xX(xX(MO)))))
                    nD3 = MO;
                else
                    nD3 = 2;
            }
            var Xd3 = X13["defaultValue"];
            var ZY3 = X13["value"];
            var Nk3 = 0;
            var QO3 = 0;
            if (Xd3 && ND(Xd3["length"], 0)) {
                QO3 = 1;
            }
            if (ZY3 && ND(ZY3["length"], 0) && (xX(QO3) || ND(ZY3, Xd3))) {
                Nk3 = MO;
            }
            if (ND(d53, 2)) {
                pS3 = ""["concat"](nG(pS3, d53), ",")["concat"](nD3, ",")["concat"](Nk3, ",")["concat"](jf3, ",")["concat"](wO3, ",")["concat"](n53, ",")["concat"](QO3, ";");
            }
        }
        return pS3
    };


function aaa(){
    let ar = []
}



let NJ3 = [3356473, 2859919]

function enc(t ,  tr) { 
    let objs = JSON.stringify(t);
    let ArrSlip = objs.split(":");
    var Cb3, qzM, l63;    
    var T63 = tr;
    for (let i = 0; i < ArrSlip.length; i++) {
        Cb3 = TB(nB(QA(T63, 8), def[7]), ArrSlip.length);
        T63 *= def[10];
        T63 &= def[11];
        T63 += def[8];
        T63 &= def[9];
        qzM = TB(nB(QA(T63, 8), def[7]), ArrSlip.length);
        T63 *= def[10];
        T63 &= def[11];
        T63 += def[8];
        T63 &= def[9];
        l63 = ArrSlip[Cb3];
        ArrSlip[Cb3] = ArrSlip[qzM];
        ArrSlip[qzM] = l63;
    }
    var rmM;
    return rmM = ArrSlip.join(":");
}

let r83 = enc(  data ,  NJ3[1])
console.log(r83);

kl3 = Y2(Bw(), kl3);
var lr3 = Bw()
r83 = HB(r83, NJ3[0]);
lr3 = Y2(Bw(), lr3);
var BF3 = ""["concat"](Y2(Bw(), fl3), ",")['concat'](gr3, ",")["concat"](hI3, ",")["concat"](kl3, ",")[qs()["concat"](lr3, ",")["concat"](Vn3)];
var vH3 = ND(TI3, undefined) && CG(TI3, xX(xX([]))) ? dh3(NJ3) : Ix3(NJ3);

let final = JSON.stringify(r83);

console.log(r83);

Ocw = ZM(CL, [rV(typeof H1()[sp(d1)], 'undefined') ? H1()[sp(rO)](JC, QW, hJ, wB) : H1()[sp(qz)].call(null, md, nV, Xh, z3), G3w, rV(typeof H1()[sp(SB)], 'undefined') ? H1()[sp(AB)](Hm(Hm(m0)), bG, RPw, Kgw) : H1()[sp(qz)](Hm(m0), Vm, Xgw, lF), Qdw[Vq()[Bs(V0)].call(null, XU, md, ksw, bV)], Vq()[Bs(cV)](Yp, SB, ksw, zd), AOw, qn()[Ip(AB)](MS, fM, bS, QG), rdw, f0()[LU(DLw)](Vm, d1, MS, rQw), Kdw, DM()[L6(kn)](Z2, TM, x3, lm), Edw, f1()[zC(gH)](bc, FU, Hn, Gv), Dhw, Dr()[lC(X3)](l6, nF, Mv), JKw, H1()[sp(LN)](gC, Hm(A6), An, Wm), Tdw, H1()[sp(XN)].apply(null, [fI, bV, S2, XE]), Gnw, Kn()[VH(pU)].apply(null, [KUw, Yp, OGw, rF, V4]), kvw, Kn()[VH(kB)].apply(null, [vP, Yp, W2, rF, Hm(Hm([]))]), Nnw, bA(typeof H1()[sp(Gv)], Dm([], [][[]])) ? H1()[sp(qz)](WX, z3, IS, vbw) : H1()[sp(DLw)](gC, JC, rUw, ds), bXw, Un()[Q6(OW)].apply(null, [W2, Yp, Gs, md, AB]), VBw, H1()[sp(Qk)](Hm(Hm([])), OW, mz, x1), Wdw, DM()[L6(cO)](Hm(m0), E8, ZAw, Hz), svw, gW()[HI(cV)].apply(null, [bc, Y8, Yp, bDw]), J8w, DM()[L6(K5)].call(null, Hm(Hm(A6)), A6, k1w, xQw), TBw, f1()[zC(dH)].apply(null, [JC, nX, gC, Hm([])]), fvw, H1()[sp(Agw)].apply(null, [Wm, V2, J6, m0]), hWw, Kn()[VH(mA)](BH, Yp, QB, gr, wM), kAw, f0()[LU(Qk)](bc, NJ, bF, X4), tkw, Dr()[lC(gs)].call(null, md, qE, nV), f3w, qn()[Ip(LN)].call(null, x1, lm, K9w, Bn), Ncw, bA(typeof f1()[zC(A6)], Dm([], [][[]])) ? f1()[zC(bS)].apply(null, [Q4, qSw, zk, lp]) : f1()[zC(bF)].call(null, d1, rQw, Tn, l1), JFw, f1()[zC(PM)](LH, Wz, Hm({}), Mv), Mdw, rV(typeof H1()[sp(lp)], 'undefined') ? H1()[sp(ds)](Hm(Hm([])), bS, hgw, Es) : H1()[sp(qz)](Dp, wq, gv, rmw), l3w, Un()[Q6(U0)].call(null, QB, Yp, bG, wq, HJw), Zsw, H1()[sp(Ev)](WX, Hm(A6), Qz, AA), zhw, H1()[sp(Ok)](l1, JC, Kz, zk), vKw, bA(typeof Kn()[VH(K1)], 'undefined') ? Kn()[VH(gC)](R7w, Cxw, Oww, OE, Hm(Hm({}))) : Kn()[VH(VS)](f3, Yp, sW, pU, d6), Y4w, Dr()[lC(kn)](tB, FA, K9w), m2w ? A6 : m0, bA(typeof H1()[sp(K1)], Dm([], [][[]])) ? H1()[sp(qz)].apply(null, [AS, d6, UO, TVw]) : H1()[sp(kDw)](Hm(A6), md, Qj, X9w), pdw[rV(typeof H1()[sp(K1)], 'undefined') ? H1()[sp(kDw)](X0, Jm, Qj, X9w) : H1()[sp(qz)](Hm(Hm([])), tB, tF, dH)], H1()[sp(w4)](bF, H8, qM, X3), pdw[H1()[sp(w4)](HG, rr, qM, X3)]]);



// Hàm Tạo Tham Số ajr

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
    var F6 = XK["Math"]["sqrt"](j1);
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
    var T4;
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
        "mouseMoveData": bXw,
        "totVel": dsw,
        "deltaTimestamp": bEw
    });
    return ajr;
}