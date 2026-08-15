const fs = require('fs');
const path = require('path');
const { encryptSensorData } = require('./encryption');
const { decryptSensorData } = require('./decryption');

// Test data
const testPayloads = {
    "ver": "wS5KmeE4vP5vBcKRIM2pPQlq4qZivf0B53dgMqmUH4E=",
    "fpt": ";-1;dis;,7;true;true;true;180;true;30;30;true;false;-1",
    "fpc": "4488",
    "ajr": "X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36,1470,0,1470,0,1470,0,8|189|86|en-GB,20030107,8753,956,0,0.819521029409,12147,0,Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36,1470,0,1470,0,1470,0,871866924183,429041,737,405,858,Gecko,cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1,5",
    "din": [
        {
            "nal": "en-GB"
        },
        {
            "nps": "20030107"
        },
        {
            "ucs": "8753"
        },
        {
            "she": 956
        },
        {
            "tsd": 0
        },
        {
            "ran": "0.819521029409"
        },
        {
            "xag": 12147
        },
        {
            "ibr": 0
        },
        {
            "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
        },
        {
            "swi": 1470
        },
        {
            "dau": 0
        },
        {
            "asw": 1470
        },
        {
            "wdr": 0
        },
        {
            "wow": 1470
        },
        {
            "pha": 0
        },
        {
            "hal": 871866924183
        },
        {
            "hz1": 429041
        },
        {
            "wih": 737
        },
        {
            "wiw": 405
        },
        {
            "ash": 858
        },
        {
            "nap": "Gecko"
        },
        {
            "adp": "cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1"
        },
        {
            "npl": 5
        }
    ],
    "eem": "do_en,dm_en,t_en",
    "ffs": "",
    "vev": "3,35296;3,371930;",
    "inf": "",
    "ajt": "7,4",
    "kev": "",
    "dme": "0,45,-1,-1,-1,-1,-1,-1,-1,-1,-1;1,5526528,-1,-1,-1,-1,-1,-1,-1,-1,-1;",
    "mev": "0,1,34936,394,287;1,1,34942,388,279;2,1,34949,384,275;3,1,34957,382,271;4,1,34965,380,269;5,1,34973,378,267;6,1,34981,377,265;7,1,34989,375,263;8,1,34997,373,262;9,1,35005,371,260;10,1,35013,369,259;11,1,35021,367,257;12,1,35028,365,255;13,1,35037,363,254;14,1,35045,361,252;15,1,35053,359,250;16,1,35061,357,248;17,1,35069,355,247;18,1,35082,354,246;19,1,35085,352,244;20,1,35093,350,244;21,1,35101,348,243;22,1,35109,347,242;23,1,35117,346,241;24,1,35125,344,240;25,1,35133,343,239;26,1,35141,343,239;27,1,35149,342,239;28,1,35157,342,238;29,1,35165,342,238;30,3,35298,342,238,-1;31,1,370966,394,264;32,1,370966,394,264;33,1,370968,394,263;34,1,370976,394,263;35,1,370984,394,262;36,1,370992,394,262;37,1,371000,394,262;38,1,371008,393,262;39,1,371017,392,261;40,1,371024,391,260;41,1,371032,389,260;42,1,371040,387,259;43,1,371048,385,258;44,1,371056,383,257;45,1,371064,379,255;46,1,371072,376,253;47,1,371080,373,251;48,1,371089,369,249;49,1,371096,365,246;50,1,371104,362,243;51,1,371112,357,240;52,1,371120,353,237;53,1,371128,350,234;54,1,371136,348,233;55,1,371144,345,231;56,1,371152,342,229;57,1,371160,340,228;58,1,371168,339,227;59,1,371176,338,226;60,1,371184,337,225;61,1,371192,336,225;62,1,371200,336,225;63,1,371208,336,225;64,1,371651,336,225;65,1,371657,332,224;66,1,371665,330,222;67,1,371674,328,221;68,1,371681,326,219;69,1,371689,325,217;70,1,371699,324,216;71,1,371705,323,214;72,1,371713,322,212;73,1,371721,322,211;74,1,371729,322,210;75,1,371737,321,209;76,1,371745,320,207;77,1,371753,320,206;78,1,371761,320,205;79,1,371769,320,205;80,1,371777,320,204;81,1,371785,320,204;82,1,371793,320,204;83,1,371801,320,203;84,3,371935,320,203,-1;",
    "doe": "0,45,-1,-1,-1;",
    "pur": "https://tickets.fcbayern.com/internetverkauf/EventList.aspx",
    "pev": "",
    "mst": [
        {
            "kevl": 1
        },
        {
            "mevl": 21193143
        },
        {
            "tevl": 32
        },
        {
            "devl": 45
        },
        {
            "dmvl": 5526574
        },
        {
            "pevl": 0
        },
        {
            "tovl": 26719730
        },
        {
            "delt": 5526529
        },
        {
            "it": 0
        },
        {
            "sts": 1743733848366
        },
        {
            "fct": 1
        },
        {
            "dd2": 18653
        },
        {
            "kc": 0
        },
        {
            "mc": 85
        },
        {
            "ww8": 3108
        },
        {
            "pc": 2
        },
        {
            "tc": 0
        },
        {
            "ssts": 5526533
        },
        {
            "tst": 26665496
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
            "jsrf1": 39064
        },
        {
            "jsrf2": 80
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
            "dvc": "93h9dhdYdh9iYeveufko,13,f+b+l+g+i+j+e+k+c+"
        },
        {
            "srd": "0"
        }
    ],
    "o9": 0,
    "tev": "",
    "sde": "0,0,0,0,1,0,0",
    "pmo": "",
    "dpw": "",
    "pac": "",
    "per": "99999944949322244999",
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
            "xof": "8,5,1,1,8"
        },
        {
            "xot": "8,5,1,1,8"
        },
        {
            "wev": "NA;wev;NA"
        },
        {
            "wre": "NA;wre;NA"
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
    "wsl": "2248146944,39969421,24532633,50,209,1,1,1,0,1,,,,,,0,,,1,1",
    "hls": "-1,,,1,1",
    "pde": "",
    "oev": "",
    "if": "",
    "fwd": [
        {
            "fmh": ""
        },
        {
            "fmz": "2"
        },
        {
            "ssh": "6d9faae3a85b2727ec5b802ee76b75a2c8a736774ef9c0024c9b875de06f1fb0"
        }
    ]
};

// Test function
async function runTests() {
    console.log("Starting encryption/decryption tests...\n");

    // Read the file content from examples directory
    const fileContent = fs.readFileSync(path.join(__dirname, '..', 'examples', 'input.js'), 'utf8');
    const cookieHash = 12345678; // Example cookie hash

    let testsPassed = 0;
    let testsFailed = 0;
    const encryptResult = encryptSensorData(
        testPayloads, 
        cookieHash, 
        fileContent
    );
    
    if (!encryptResult.success) {
        throw new Error(`Encryption failed: ${encryptResult.message}`);
    }

    console.log("✓ Encryption successful");
            
    const decryptResult = await decryptSensorData(encryptResult.data.sensor_data, fileContent);
            
    if (!decryptResult.success) {
        throw new Error(`Decryption failed: ${decryptResult.message}`);
    }

    console.log("✓ Decryption successful");

    // compare original and decrypted data
    const originalStr = typeof testPayloads === 'object' ? JSON.stringify(testPayloads) : testPayloads;
    const decryptedStr = decryptResult.data;

    if (originalStr === decryptedStr) {
        console.log("✓ Data matches original");
    } else {
        console.log("✗ Data mismatch:");
        console.log("Original:", originalStr);
        console.log("Decrypted:", decryptedStr);
    }

}

// Run the tests
runTests().catch(console.error); 