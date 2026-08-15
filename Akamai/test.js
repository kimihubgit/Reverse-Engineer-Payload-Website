

function aaaa() {
    function rs(lQ) {
        for (var OQ = "", JQ = 0; JQ < lQ["length"]; JQ++)
            OQ += 2 === lQ[JQ]["toString"](16)["length"] ? lQ[JQ]["toString"](16) : "0"["concat"](lQ[JQ]["toString"](16));

        return OQ;
    }

    function dk(NL) {
        for (var wL = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], pL = 1779033703, nL = 3144134277, UL = 1013904242, KL = 2773480762, SL = 1359893119, PL = 2600822924, LL = 528734635, QL = 1541459225, jL = function WQ(DQ) {
            return unescape(encodeURIComponent(DQ));
        }(NL), fQ = 8 * jL["length"], mQ = (jL += "\x80")["length"] / 4 + 2, HQ = Math["ceil"](mQ / 16), AQ = new Array(HQ), RQ = 0; RQ < HQ; RQ++) {
            AQ[RQ] = new Array(16);

            for (var BQ = 0; BQ < 16; BQ++)
                AQ[RQ][BQ] = jL["charCodeAt"](64 * RQ + 4 * BQ) << 24 | jL["charCodeAt"](64 * RQ + 4 * BQ + 1) << 16 | jL["charCodeAt"](64 * RQ + 4 * BQ + 2) << 8 | jL["charCodeAt"](64 * RQ + 4 * BQ + 3) << 0;
        }

        var bQ = fQ / Math["pow"](2, 32);
        AQ[HQ - 1][14] = Math["floor"](bQ);
        AQ[HQ - 1][15] = fQ;

        for (var gQ = 0; gQ < HQ; gQ++) {
            for (var FQ = new Array(64), XQ = pL, hQ = nL, CQ = UL, rQ = KL, EQ = SL, MQ = PL, GQ = LL, VQ = QL, dQ = 0; dQ < 64; dQ++) {
                var ZQ, cQ, tQ = void 0, YQ = void 0;
                dQ < 16 ? FQ[dQ] = AQ[gQ][dQ] : (tQ = TQ(FQ[dQ - 15], 7) ^ TQ(FQ[dQ - 15], 18) ^ FQ[dQ - 15] >>> 3,
                    YQ = TQ(FQ[dQ - 2], 17) ^ TQ(FQ[dQ - 2], 19) ^ FQ[dQ - 2] >>> 10,
                    FQ[dQ] = FQ[dQ - 16] + tQ + FQ[dQ - 7] + YQ);
                ZQ = VQ + (YQ = TQ(EQ, 6) ^ TQ(EQ, 11) ^ TQ(EQ, 25)) + (EQ & MQ ^ ~EQ & GQ) + wL[dQ] + FQ[dQ];
                cQ = XQ & hQ ^ XQ & CQ ^ hQ & CQ;
                VQ = GQ;
                GQ = MQ;
                MQ = EQ;
                EQ = rQ + ZQ >>> 0;
                rQ = CQ;
                CQ = hQ;
                hQ = XQ;
                XQ = ZQ + ((tQ = TQ(XQ, 2) ^ TQ(XQ, 13) ^ TQ(XQ, 22)) + cQ) >>> 0;
            }

            pL += XQ;
            nL += hQ;
            UL += CQ;
            KL += rQ;
            SL += EQ;
            PL += MQ;
            LL += GQ;
            QL += VQ;
        }

        return [pL >> 24 & 255, pL >> 16 & 255, pL >> 8 & 255, 255 & pL, nL >> 24 & 255, nL >> 16 & 255, nL >> 8 & 255, 255 & nL, UL >> 24 & 255, UL >> 16 & 255, UL >> 8 & 255, 255 & UL, KL >> 24 & 255, KL >> 16 & 255, KL >> 8 & 255, 255 & KL, SL >> 24 & 255, SL >> 16 & 255, SL >> 8 & 255, 255 & SL, PL >> 24 & 255, PL >> 16 & 255, PL >> 8 & 255, 255 & PL, LL >> 24 & 255, LL >> 16 & 255, LL >> 8 & 255, 255 & LL, QL >> 24 & 255, QL >> 16 & 255, QL >> 8 & 255, 255 & QL];
    }

    function TQ(IQ, zQ) {
        return IQ >>> zQ | IQ << 32 - zQ;
    }


    function v3D(x3D) {
        return Q7_18(18, ["hardwareConcurrency", q3D(x3D), "plugins", x3D["navigator"]["plugins"]["length"], "chromeObj", !!x3D["chrome"], "deviceMemory", z3D(x3D)]);
    }

    function q3D(k3D) {
        var s3D = k3D["navigator"]["hardwareConcurrency"];
        return s3D ? s3D["toString"]() : "-1";
    }

    function F3D() {
        for (var t3D = "pl", I3D = 0; I3D < 192; I3D++)
            t3D += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/+"["charAt"](Math["floor"](Math["random"]() * "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/+"["length"]));

        return t3D;
    }

    function z3D(l3D) {
        try {
            return l3D["navigator"]["deviceMemory"] ? l3D["navigator"]["deviceMemory"]["toString"]() : "-1";
        } catch (J3D) {
            return "-1";
        }
    }

    function Q7_18(H5D, A5D) {
        var Y5D = {};

        for (var I5D = 0; I5D < A5D["length"]; I5D += 2)
            Y5D[A5D[I5D]] = A5D[I5D + 1];

        return Y5D;
    }


    function getMp() {
        var MP = '';
        var fU = document["createElement"]("span");
        fU["innerHTML"] = "mmmmmmmmlli";
        fU["style"]["fontSize"] = "192px";
        var CU = "",
            pU = document["getElementsByTagName"]("body")[0];
        pU ? (["Monospace", "Wingdings 2", "ITC Bodoni 72 Bold", "Menlo", "Gill Sans MT", "Lucida Sans", "Bodoni 72", "Serif", "Shree Devanagari 714", "Microsoft Tai Le", "Nimbus Roman No 9 L", "Candara", "Press Start 2P", "Waseem"]["forEach"](function (mU, Ys) {
            fU["style"]["fontFamily"] = mU;
            pU["appendChild"](fU);
            CU += ""["concat"](mU, ":")["concat"](fU["offsetWidth"], ",")["concat"](fU["offsetHeight"], ";");
            pU["removeChild"](fU);
        }), MP = rs(dk(CU))) : MP = "";

        return MP;
    }

    function getXP() {
        var SW = '';
        if (window["speechSynthesis"]) {
            var pU = window["speechSynthesis"]["getVoices"]();
            if (pU["length"] > 0) {
                for (var UU = "", KU = 0; KU < pU["length"]; KU++) {
                    UU += ""["concat"](pU[KU]["voiceURI"], "_")["concat"](pU[KU]["lang"]);
                }
                SW = rs(dk(UU));
            }
        }
        return SW;
    }

    function getYW() {
        var bE = document["createElement"]("canvas")["getContext"]("webgl");

        return YW;
    }


    function getDP() {

        var w3D = window["document"]["createElement"]("iframe");
        w3D["style"]["display"] = "none";
        window["document"]["head"]["appendChild"](w3D);

        var p3D = w3D["contentWindow"]
            , n3D = function U3D(K3D) {
                var S3D, P3D;

                try {
                    S3D = K3D["srcdoc"];
                } catch (j3D) {
                    if (j3D["message"]["includes"]("Maximum call stack size exceeded")) {
                        S3D = "M";
                    }
                }

                var fmD = Math["floor"](1000 * Math["random"]())["toString"]();
                K3D["srcdoc"] = fmD;
                P3D = K3D["srcdoc"] !== fmD;
                return ""["concat"](S3D, ",")["concat"]((1 & P3D)["toString"]());
            }(w3D)
            , mmD = function HmD(AmD) {
                if (AmD["chrome"] && Object["keys"](AmD["chrome"])["length"] > 0) {
                    var RmD = [];

                    for (var BmD in AmD["chrome"])
                        if (Object["prototype"]["hasOwnProperty"].call(AmD["chrome"], BmD)) {
                            RmD["push"](BmD);
                        }

                    return rs(dk(RmD["join"](",")));
                }

                return "-2";
            }(p3D)
            , bmD = function gmD(FmD) {
                var XmD = "-1"
                    , hmD = "-1"
                    , CmD = new RegExp(/function (get )?contentWindow(\(\)) \{(\n {3})? \[native code\][\n ]\}/);

                try {
                    if (window["Object"] && window["Object"]["getOwnPropertyDescriptor"]) {
                        var rmD = Object["getOwnPropertyDescriptor"](HTMLIFrameElement["prototype"], "contentWindow");

                        if (rmD) {
                            XmD = CmD["test"](rmD["get"]["toString"]());
                        }
                    }

                    hmD = window !== FmD;
                } catch (EmD) {
                    XmD = "-2";
                    hmD = "-2";
                }

                return (XmD + hmD << 1)["toString"]();
            }(p3D)
            , MmD = function GmD() {
                var VmD = window["document"]["createElement"]("iframe");
                VmD["src"] = "https://";
                VmD["style"]["display"] = "none";
                window["document"]["head"]["appendChild"](VmD);

                var dmD = VmD["contentWindow"]
                    , ZmD = v3D(dmD)
                    , cmD = function tmD(YmD) {
                        var TmD = "NA"
                            , ImD = "NA";

                        if (YmD["document"]) {
                            var zmD = YmD["document"]["createElement"]("canvas")["getContext"]("webgl");

                            if (zmD) {
                                var lmD = zmD["getExtension"]("WEBGL_debug_renderer_info");

                                if (lmD) {
                                    TmD = zmD["getParameter"](lmD["UNMASKED_VENDOR_WEBGL"]);
                                    ImD = zmD["getParameter"](lmD["UNMASKED_RENDERER_WEBGL"]);
                                }
                            }
                        }

                        return Q7_18(18, ["webGLVendor", TmD, "webGLRenderer", ImD]);
                    }(dmD)
                    , OmD = v3D(window)
                    , JmD = "";

                VmD["remove"]();
                JmD += ""["concat"](ZmD["hardwareConcurrency"], ",")["concat"](ZmD["plugins"], ",")["concat"]((1 & ZmD["chromeObj"])["toString"]());
                JmD += ","["concat"](OmD["hardwareConcurrency"], ",")["concat"](OmD["plugins"], ",")["concat"]((1 & OmD["chromeObj"])["toString"]());
                return JmD + ","["concat"](cmD["webGLVendor"], ",")["concat"](cmD["webGLRenderer"]);
            }();

        w3D["remove"]();
        return [n3D, mmD, bmD, MmD]["join"](",");
    }

    function gethP() {
        try {
            var lz = document["createElement"]("div");
            lz["style"]["display"] = "none";
            document["head"]["append"](lz);
            var xz = {};
            ["ActiveBorder", "ActiveCaption", "ActiveText", "AppWorkspace", "Background", "ButtonBorder", "ButtonFace", "ButtonHighlight", "ButtonShadow", "ButtonText", "Canvas", "CanvasText", "CaptionText", "Field", "FieldText", "GrayText", "Highlight", "HighlightText", "InactiveBorder", "InactiveCaption", "InactiveCaptionText", "InfoBackground", "InfoText", "LinkText", "Mark", "MarkText", "Menu", "MenuText", "Scrollbar", "ThreeDDarkShadow", "ThreeDFace", "ThreeDHighlight", "ThreeDLightShadow", "ThreeDShadow", "VisitedText", "Window", "WindowFrame", "WindowText"]["forEach"](function (dz) {
                lz["style"] = "background-color: "["concat"](dz, " !important");
                var Ym = getComputedStyle(lz)["backgroundColor"];
                xz[dz] = Ym;
            });
            lz["parentNode"]["removeChild"](lz);
            return rs(dk(JSON["stringify"](xz)));
        } catch (Gm) {
            return Gm["message"];
        }
    };

    function getzP() {
        return window["chrome"] && window["chrome"]["runtime"] && window["chrome"]["runtime"]["sendMessage"] && window["chrome"]["runtime"]["connect"] && "function" == typeof window["chrome"]["runtime"]["sendMessage"] && "function" == typeof window["chrome"]["runtime"]["sendMessage"] ? (function Jm() {
            return !("prototype" in window["chrome"]["runtime"]["sendMessage"] || "prototype" in window["chrome"]["runtime"]["connect"]);
        }() && function Am() {
            try {
                new window["chrome"]["runtime"]["sendMessage"]();
                new window["chrome"]["runtime"]["connect"]();
                return false;
            } catch (jm) {
                return "TypeError" === jm["constructor"]["name"];
            }
        }() ? function Sm() {
            var gm = [];

            for (var Cm in window["chrome"]["runtime"]) if (Object["prototype"]["hasOwnProperty"].call(window["chrome"]["runtime"], Cm)) for (var pm in gm["push"](Cm), window["chrome"]["runtime"][Cm]) Object["prototype"]["hasOwnProperty"].call(window["chrome"]["runtime"][Cm], pm) && gm["push"](pm);

            return rs(dk(JSON["stringify"](gm)));
        }() : "0")["toString"]() : "-1";
    };

    function na475(lA) {
        var HO8 = {};

        for (var mO8 = 0; mO8 < lA["length"]; mO8 += 2) HO8[lA[mO8]] = lA[mO8 + 1];

        return HO8;
    };

    function getHP() {
        if (window["chrome"]) {
            var qm = window["chrome"]["loadTimes"](),
                Mm = "",
                nm = ""["concat"](1 & "function () { [native code] }" !== Object["getOwnPropertyDescriptor"](window["chrome"], "loadTimes")["value"]["toString"](), ",");

            if (qm) {
                var Xm = Object["keys"](qm),
                    lm = rs(dk(JSON["stringify"](Xm))),
                    Rm = qm["navigationType"],
                    Zm = na475(["requestTime", "0", "startLoadTime", "1", "commitLoadTime", "2", "finishDocumentLoadTime", "3", "finishLoadTime", "4", "firstPaintTime", "5", "firstPaintAfterLoadTime", "6", "navigationType", "7", "wasFetchedViaSpdy", "8", "wasNpnNegotiated", "9", "npnNegotiatedProtocol", "A", "wasAlternateProtocolAvailable", "B", "connectionInfo", "C"]);

                for (var Vm in Xm) Mm += Vm in Zm ? Zm[Vm] : Vm;

                nm += ""["concat"](lm, ",")["concat"](Mm, ",")["concat"](Rm);
            } else nm += "nlt";

            return nm;
        }

        return "nc,,,";
    };


    function rm() {
        try {
            var hB8 = function LB8() {
                try {
                    return navigator && navigator["connection"] && navigator["connection"]["rtt"] ? "50" : "-1";
                } catch (tB8) {
                    return "-1";
                }
            }(),
                UB8 = "-1,-1,-1";

            if (window["performance"] && window["performance"]["memory"]) {
                var sB8 = window["performance"]["memory"];
                UB8 = ""["concat"](sB8["jsHeapSizeLimit"], ",")["concat"](sB8["totalJSHeapSize"], ",")["concat"](sB8["usedJSHeapSize"]);
            }

            return ""["concat"](UB8, ",")["concat"](hB8);
        } catch (dB8) {
            return "-1,-1,-1,-1";
        }
    }

    function getbP() {
        var bP = rm();
        var VU = -1;
        if (window["speechSynthesis"]) {
            var MU = window["speechSynthesis"]["getVoices"]();
            VU = MU.length;
        }
        bP = ""["concat"](rm(), ",")["concat"](VU);

        return bP;


    }

    function Mw8() {
        return new Date()["getTimezoneOffset"]();
    }

    function Tw8() {
        var Zw8 = ["WebEx64 General Plugin Container", "YouTube Plug-in", "Java Applet Plug-in", "Shockwave Flash", "iPhotoPhotocast", "SharePoint Browser Plug-in", "Chrome Remote Desktop Viewer", "Chrome PDF Viewer", "Native Client", "Unity Player", "WebKit-integrierte PDF", "QuickTime Plug-in", "RealPlayer Version Plugin", "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)", "Mozilla Default Plug-in", "Adobe Acrobat", "AdobeAAMDetect", "Google Earth Plug-in", "Java Plug-in 2 for NPAPI Browsers", "Widevine Content Decryption Module", "Microsoft Office Live Plug-in", "Windows Media Player Plug-in Dynamic Link Library", "Google Talk Plugin Video Renderer", "Edge PDF Viewer", "Shockwave for Director", "Default Browser Helper", "Silverlight Plug-In"];
        if (void 0 === navigator["plugins"]) return null;

        for (var Nw8 = Zw8["length"], Sw8 = "", gw8 = 0; gw8 < Nw8; gw8++) {
            var Cw8 = Zw8[gw8];
            void 0 !== navigator["plugins"][Cw8] && (Sw8 = ""["concat"](Sw8, ",")["concat"](gw8));
        }

        return Sw8;
    }

    function nw8() {
        return "function" == typeof window["RTCPeerConnection"] || "function" == typeof window["mozRTCPeerConnection"] || "function" == typeof window["webkitRTCPeerConnection"];
    }

    function kw8() {
        try {
            return !!window["sessionStorage"];
        } catch (Kw8) {
            return false;
        }
    }

    function Qw8() {
        try {
            return !!window["localStorage"];
        } catch (Ew8) {
            return false;
        }
    }

    function qw8() {
        return !!window["indexedDB"];
    }

    function TD() {
        var f88 = 0;
        f88 = Date["now"] ? Date["now"]() : +new Date();

        var J88 = function A88() {
            var j88 = screen["colorDepth"] ? screen["colorDepth"] : -1,
                N88 = screen["pixelDepth"] ? screen["pixelDepth"] : -1,
                S88 = navigator["cookieEnabled"] ? navigator["cookieEnabled"] : -1,
                g88 = navigator["javaEnabled"] ? navigator["javaEnabled"]() : -1,
                C88 = navigator["doNotTrack"] ? navigator["doNotTrack"] : -1,
                p88 = function K88(E88) {
                    var W88 = -1,
                        D88 = -1,
                        P88 = -1;

                    if (!function h88() {
                        var L88 = navigator["userAgent"];
                        return ~L88["indexOf"]("Version/4.0") && (~L88["indexOf"]("iPad;") || ~L88["indexOf"]("iPhone") || ~L88["indexOf"]("Mac OS X 10_5"));
                    }()) {
                        var U88 = document["createElement"]("canvas");

                        if (U88["width"] = 280, U88["height"] = 60, U88["style"]["display"] = "none", "function" == typeof U88["getContext"]) {
                            var s88 = U88["getContext"]("2d");
                            s88["fillStyle"] = "rgb(102, 204, 0)";
                            s88["fillRect"](100, 5, 80, 50);
                            s88["fillStyle"] = "#f60";
                            s88["font"] = "16pt Arial";
                            s88["fillText"](E88, 10, 40);
                            s88["strokeStyle"] = "rgb(120, 186, 176)";
                            s88["arc"](80, 10, 20, 0, Math["PI"], false);
                            s88["stroke"]();
                            var m88 = U88["toDataURL"]();
                            W88 = 0;

                            for (var ww8 = 0; ww8 < m88["length"]; ww8++) {
                                W88 = (W88 << 5) - W88 + m88["charCodeAt"](ww8);
                                W88 &= W88;
                            }

                            W88 = W88["toString"]();
                            var Iw8 = document["createElement"]("canvas");
                            Iw8["width"] = 16;
                            Iw8["height"] = 16;
                            var Gw8 = Iw8["getContext"]("2d");
                            Gw8["font"] = "6pt Arial";
                            D88 = Math["floor"](1000 * Math["random"]())["toString"]();
                            Gw8["fillText"](D88, 1, 12);

                            for (var rw8 = Iw8["toDataURL"](), Bw8 = 0, cw8 = 0; cw8 < rw8["length"]; cw8++) {
                                Bw8 = (Bw8 << 5) - Bw8 + rw8["charCodeAt"](cw8);
                                Bw8 &= Bw8;
                            }

                            P88 = Bw8["toString"]();
                        }
                    }

                    return [W88, D88, P88];
                }("<@nv45. F1n63r,Pr1n71n6!");

            return [[p88[0], -1, "dis", Tw8(), kw8(), Qw8(), qw8(), Mw8(), nw8(), j88, N88, S88, g88, C88]["join"](";"), p88[1], p88[2]];
        }(),
            Xw8 = J88[0]["replace"](/"/g, "\\\"");

        return na475(["fpValStr", Xw8, "td", (Date["now"] ? Date["now"]() : +new Date()) - f88, "rVal", J88[1], "rCFP", J88[2]]);
    }


    function getFD() {
        var FD = na475(["fpValStr", "-1", "rVal", "-1", "rCFP", "-1", "td", -999999])
        FD = Object["assign"](FD, TD(), na475(["fpValCalculated", true]))
        return FD;
    }


    function tS() {
        return [navigator["productSub"] ? navigator["productSub"] : "-", navigator["language"] ? navigator["language"] : "-", navigator["product"] ? navigator["product"] : "-", void 0 !== navigator["plugins"] ? navigator["plugins"]["length"] : -1];
    }

    function fWD() {
        var FWD = ["WebEx64 General Plugin Container", "YouTube Plug-in", "Java Applet Plug-in", "Shockwave Flash", "iPhotoPhotocast", "SharePoint Browser Plug-in", "Chrome Remote Desktop Viewer", "Chrome PDF Viewer", "Native Client", "Unity Player", "WebKit-integrierte PDF", "QuickTime Plug-in", "RealPlayer Version Plugin", "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)", "Mozilla Default Plug-in", "Adobe Acrobat", "AdobeAAMDetect", "Google Earth Plug-in", "Java Plug-in 2 for NPAPI Browsers", "Widevine Content Decryption Module", "Microsoft Office Live Plug-in", "Windows Media Player Plug-in Dynamic Link Library", "Google Talk Plugin Video Renderer", "Edge PDF Viewer", "Shockwave for Director", "Default Browser Helper", "Silverlight Plug-In"];
        if (void 0 === navigator["plugins"])
            return null;

        for (var XWD = FWD["length"], hWD = "", CWD = 0; CWD < XWD; CWD++) {
            var rWD = FWD[CWD];

            if (void 0 !== navigator["plugins"][rWD]) {
                hWD = ""["concat"](hWD, ",")["concat"](CWD);
            }
        }

        return hWD;
    }

    function getNavigatorEnv() {
        var EnvTmp = [];
        var Aw = function Rw() {
            try {
                return Boolean(navigator["credentials"]) + (Boolean(navigator["appMinorVersion"]) << 1) + (Boolean(navigator["bluetooth"]) << 2) + (Boolean(navigator["storage"]) << 3) + (Boolean(Math["imul"]) << 4) + (Boolean(navigator["getGamepads"]) << 5) + (Boolean(navigator["getStorageUpdates"]) << 6) + (Boolean(navigator["hardwareConcurrency"]) << 7) + (Boolean(navigator["mediaDevices"]) << 8) + (Boolean(navigator["mozAlarms"]) << 9) + (Boolean(navigator["mozConnection"]) << 10) + (Boolean(navigator["mozIsLocallyAvailable"]) << 11) + (Boolean(navigator["mozPhoneNumberService"]) << 12) + (Boolean(navigator["msManipulationViewsEnabled"]) << 13) + (Boolean(navigator["permissions"]) << 14) + (Boolean(navigator["registerProtocolHandler"]) << 15) + (Boolean(navigator["requestMediaKeySystemAccess"]) << 16) + (Boolean(navigator["requestWakeLock"]) << 17) + (Boolean(navigator["sendBeacon"]) << 18) + (Boolean(navigator["serviceWorker"]) << 19) + (Boolean(navigator["storeWebWideTrackingException"]) << 20) + (Boolean(navigator["webkitGetGamepads"]) << 21) + (Boolean(navigator["webkitTemporaryStorage"]) << 22) + (Boolean(Number["parseInt"]) << 23) + (Boolean(Math["hypot"]) << 24);
            } catch (Vw) {
                return 0;
            }
        }();
        EnvTmp.push(Aw);
        EnvTmp.push(navigator["brave"]);
        EnvTmp.push(navigator["webdriver"]);
        EnvTmp.push(navigator["onLine"]);
        EnvTmp = EnvTmp.concat(tS());
        var O4 = function JL() {
            return Object["getOwnPropertyDescriptors"] ? Object["keys"](Object["getOwnPropertyDescriptors"](navigator))["join"](",") : "";
        }();
        EnvTmp.push(O4);
        var Zj = navigator["cookieEnabled"] ? navigator["cookieEnabled"] : -1
            , cj = navigator["javaEnabled"] ? navigator["javaEnabled"]() : -1
            , tj = navigator["doNotTrack"] ? navigator["doNotTrack"] : -1;
        EnvTmp.push(Zj);
        EnvTmp.push(cj);
        EnvTmp.push(tj);
        EnvTmp.push(fWD());
        EnvTmp.push(navigator["webdriver"]);
        EnvTmp.push(navigator["deviceMemory"]);
        EnvTmp.push(navigator["hardwareConcurrency"]);
        EnvTmp.push(navigator["appCodeName"]);
        EnvTmp.push(navigator["appName"]);
        EnvTmp.push(navigator["appVersion"]);
        EnvTmp.push(navigator["language"]);
        EnvTmp = EnvTmp.concat(navigator["languages"]);
        EnvTmp.push(navigator["platform"]);
        EnvTmp.push(navigator["productSub"]);
        EnvTmp.push(navigator["userAgent"]);
        EnvTmp.push(navigator["vendor"]);
        EnvTmp.push(navigator["vendorSub"]);

        return EnvTmp;

    }


    var ww = function () {
        return [window["$cdc_asdjflasutopfhvcZLmcfl_"] || document["$cdc_asdjflasutopfhvcZLmcfl_"] ? "1" : "0", null != window["document"]["documentElement"]["getAttribute"]("webdriver") ? "1" : "0", void 0 !== navigator["webdriver"] && navigator["webdriver"] ? "1" : "0", void 0 !== window["webdriver"] ? "1" : "0", void 0 !== window["XPathResult"] || void 0 !== document["XPathResult"] ? "1" : "0", null != window["document"]["documentElement"]["getAttribute"]("driver") ? "1" : "0", null != window["document"]["documentElement"]["getAttribute"]("selenium") ? "1" : "0"]["join"](",");
    };

    function getWindowEnv() {
        var EnvTmp = [];
        var ss = window["DeviceOrientationEvent"] ? "do_en" : "do_dis"
            , Ns = window["DeviceMotionEvent"] ? "dm_en" : "dm_dis"
            , ws = window["TouchEvent"] ? "t_en" : "t_dis";
        EnvTmp.push(ss);
        EnvTmp.push(Ns);
        EnvTmp.push(ws);
        EnvTmp.push(window["devicePixelRatio"]);
        EnvTmp.push(window["webdriver"]);
        EnvTmp.push(ww());
        var BS = window["innerHeight"];
        EnvTmp.push(BS);
        BS = window["innerHeight"] || (document["body"] && "clientHeight" in document["body"] ? document["body"]["clientHeight"] : document["documentElement"] && "clientHeight" in document["documentElement"] ? document["documentElement"]["clientHeight"] : -1);
        EnvTmp.push(BS);
        BS = window["innerWidth"] || (document["body"] && "clientWidth" in document["body"] ? document["body"]["clientWidth"] : document["documentElement"] && "clientWidth" in document["documentElement"] ? document["documentElement"]["clientWidth"] : -1);
        EnvTmp.push(BS);
        var gS = "outerWidth" in window && void 0 !== window["outerWidth"] ? window["outerWidth"] : -1;
        EnvTmp.push(gS);
        var lS = window["_phantom"] ? 1 : 0
            , OS = window["webdriver"] ? 1 : 0
            , JS = window["domAutomation"] ? 1 : 0
            , kS = window["addEventListener"] ? 1 : 0
            , sS = window["XMLHttpRequest"] ? 1 : 0
            , NS = window["XDomainRequest"] ? 1 : 0
            , wS = window["emit"] ? 1 : 0
            , nS = window["DeviceOrientationEvent"] ? 1 : 0
            , US = window["DeviceMotionEvent"] ? 1 : 0
            , KS = window["TouchEvent"] ? 1 : 0
            , SS = window["spawn"] ? 1 : 0
            , QS = window["chrome"] ? 1 : 0
            , jS = Function["prototype"].bind ? 1 : 0
            , WP = window["Buffer"] ? 1 : 0
            , fP = window["PointerEvent"] ? 1 : 0;
        EnvTmp.push(lS);
        EnvTmp.push(OS);
        EnvTmp.push(JS);
        EnvTmp.push(kS);
        EnvTmp.push(sS);
        EnvTmp.push(NS);
        EnvTmp.push(wS);
        EnvTmp.push(nS);
        EnvTmp.push(US);
        EnvTmp.push(KS);
        EnvTmp.push(SS);
        EnvTmp.push(QS);
        EnvTmp.push(jS);
        EnvTmp.push(WP);
        EnvTmp.push(fP);
        var bP = [];
        bP["push"](",cpen:"["concat"](window["callPhantom"] ? 1 : 0));
        bP["push"]("i1:"["concat"](window["ActiveXObject"] && "ActiveXObject" in window ? 1 : 0));
        bP["push"]("dm:"["concat"]("number" == typeof document["documentMode"] ? 1 : 0));
        bP["push"]("cwen:"["concat"](window["chrome"] && window["chrome"]["webstore"] ? 1 : 0));
        bP["push"]("non:"["concat"](navigator["onLine"] ? 1 : 0));
        bP["push"]("opc:"["concat"](window["opera"] ? 1 : 0));
        bP["push"]("fc:"["concat"]("undefined" != typeof InstallTrigger ? 1 : 0));
        bP["push"]("sc:"["concat"](window["HTMLElement"] && false ? 1 : 0));
        bP["push"]("wrc:"["concat"]("function" == typeof window["RTCPeerConnection"] || "function" == typeof window["mozRTCPeerConnection"] || "function" == typeof window["webkitRTCPeerConnection"] ? 1 : 0));
        bP["push"]("isc:"["concat"]("mozInnerScreenY" in window ? window["mozInnerScreenY"] : 0));
        bP["push"]("vib:"["concat"]("function" == typeof navigator["vibrate"] ? 1 : 0));
        bP["push"]("bat:"["concat"]("function" == typeof navigator["getBattery"] ? 1 : 0));
        bP["push"]("x11:"["concat"](Array["prototype"]["forEach"] ? 0 : 1));
        bP["push"]("x12:"["concat"]("FileReader" in window ? 1 : 0));
        bP["join"](",");
        EnvTmp.push(bP);
        var g4 = function ZP() {
            return window["HTMLIFrameElement"] ? Object["getOwnPropertyDescriptor"](window["HTMLIFrameElement"]["prototype"], "loading") ? "1" : "-2" : "-1";
        }();
        EnvTmp.push(g4);
        var E4 = function RL() {
            return window["crossOriginIsolated"] ? "-1" : void 0 === window["SharedArrayBuffer"] ? "1" : "-2";
        }();
        EnvTmp.push(E4);
        EnvTmp.push(BWD());
        EnvTmp.push(mWD());
        EnvTmp.push(HWD());
        EnvTmp.push(AWD());
        EnvTmp.push(QP());
        EnvTmp.push(jP());

        return EnvTmp;
    }


    function dP() {

        var w3D = window["document"]["createElement"]("iframe");
        w3D["style"]["display"] = "none";
        window["document"]["head"]["appendChild"](w3D);

        var p3D = w3D["contentWindow"]
            , n3D = function U3D(K3D) {
                var S3D, P3D;

                try {
                    S3D = K3D["srcdoc"];
                } catch (j3D) {
                    if (j3D["message"]["includes"]("Maximum call stack size exceeded")) {
                        S3D = "M";
                    }
                }

                var fmD = Math["floor"](1000 * Math["random"]())["toString"]();
                K3D["srcdoc"] = fmD;
                P3D = K3D["srcdoc"] !== fmD;
                return ""["concat"](S3D, ",")["concat"]((1 & P3D)["toString"]());
            }(w3D)
            , mmD = function HmD(AmD) {
                if (AmD["chrome"] && Object["keys"](AmD["chrome"])["length"] > 0) {
                    var RmD = [];

                    for (var BmD in AmD["chrome"])
                        if (Object["prototype"]["hasOwnProperty"].call(AmD["chrome"], BmD)) {
                            RmD["push"](BmD);
                        }

                    return rs(dk(RmD["join"](",")));
                }

                return "-2";
            }(p3D)
            , bmD = function gmD(FmD) {
                var XmD = "-1"
                    , hmD = "-1"
                    , CmD = new RegExp(/function (get )?contentWindow(\(\)) \{(\n {3})? \[native code\][\n ]\}/);

                try {
                    if (window["Object"] && window["Object"]["getOwnPropertyDescriptor"]) {
                        var rmD = Object["getOwnPropertyDescriptor"](HTMLIFrameElement["prototype"], "contentWindow");

                        if (rmD) {
                            XmD = CmD["test"](rmD["get"]["toString"]());
                        }
                    }

                    hmD = window !== FmD;
                } catch (EmD) {
                    XmD = "-2";
                    hmD = "-2";
                }

                return (XmD + hmD << 1)["toString"]();
            }(p3D)
            , MmD = function GmD() {
                var VmD = window["document"]["createElement"]("iframe");
                VmD["src"] = "https://";
                VmD["style"]["display"] = "none";
                window["document"]["head"]["appendChild"](VmD);

                var dmD = VmD["contentWindow"]
                    , ZmD = v3D(dmD)
                    , cmD = function tmD(YmD) {
                        var TmD = "NA"
                            , ImD = "NA";

                        if (YmD["document"]) {
                            var zmD = YmD["document"]["createElement"]("canvas")["getContext"]("webgl");

                            if (zmD) {
                                var lmD = zmD["getExtension"]("WEBGL_debug_renderer_info");

                                if (lmD) {
                                    TmD = zmD["getParameter"](lmD["UNMASKED_VENDOR_WEBGL"]);
                                    ImD = zmD["getParameter"](lmD["UNMASKED_RENDERER_WEBGL"]);
                                }
                            }
                        }

                        return Q7_18(18, ["webGLVendor", TmD, "webGLRenderer", ImD]);
                    }(dmD)
                    , OmD = v3D(window)
                    , JmD = "";

                VmD["remove"]();
                JmD += ""["concat"](ZmD["hardwareConcurrency"], ",")["concat"](ZmD["plugins"], ",")["concat"]((1 & ZmD["chromeObj"])["toString"]());
                JmD += ","["concat"](OmD["hardwareConcurrency"], ",")["concat"](OmD["plugins"], ",")["concat"]((1 & OmD["chromeObj"])["toString"]());
                return JmD + ","["concat"](cmD["webGLVendor"], ",")["concat"](cmD["webGLRenderer"]);
            }();

        w3D["remove"]();
        return [n3D, mmD, bmD, MmD]["join"](",");
    }

    function getDocumentEnv() {
        var EnvTmp = [];
        var gs = ""
            , Fs = ""
            , Xs = ''
            , hs = ''
            , Ss = '';
        try {
            var Rs = document["createElement"]("canvas")["getContext"]("webgl");
            gs = "n";
            Fs = "n";
            Xs = "n";
            hs = 0;
            Ss = JSON["stringify"](Rs["getSupportedExtensions"]()["sort"]());
            Rs["getSupportedExtensions"]() && (Xs = rs(dk(Ss)), hs = Rs["getSupportedExtensions"]()["length"], Rs["getSupportedExtensions"]()["indexOf"]("WEBGL_debug_renderer_info") >= 0 && (gs = Rs["getParameter"](Rs["getExtension"]("WEBGL_debug_renderer_info")["UNMASKED_VENDOR_WEBGL"]), Fs = Rs["getParameter"](Rs["getExtension"]("WEBGL_debug_renderer_info")["UNMASKED_RENDERER_WEBGL"])));

        } catch (cs) {}
        EnvTmp.push(gs);
        EnvTmp.push(Fs);
        EnvTmp.push(Ss);
        EnvTmp.push(Xs);
        EnvTmp.push(hs);
        var BS = 0;
        try {
            BS = window["innerHeight"] || (document["body"] && "clientHeight" in document["body"] ? document["body"]["clientHeight"] : document["documentElement"] && "clientHeight" in document["documentElement"] ? document["documentElement"]["clientHeight"] : -1);
        } catch (rS) {
            BS = -1;
        }
        EnvTmp.push(BS);
        var bS = 0;
        try {
            bS = window["innerWidth"] || (document["body"] && "clientWidth" in document["body"] ? document["body"]["clientWidth"] : document["documentElement"] && "clientWidth" in document["documentElement"] ? document["documentElement"]["clientWidth"] : -1);
        } catch (ES) {
            bS = -1;
        }
        EnvTmp.push(bS);

        var F4 = function tP() {
            try {
                var YP = document["createElement"]("div");
                YP["style"]["display"] = "none";
                document["head"]["append"](YP);
                var IP = {};
                ["ActiveBorder", "ActiveCaption", "ActiveText", "AppWorkspace", "Background", "ButtonBorder", "ButtonFace", "ButtonHighlight", "ButtonShadow", "ButtonText", "Canvas", "CanvasText", "CaptionText", "Field", "FieldText", "GrayText", "Highlight", "HighlightText", "InactiveBorder", "InactiveCaption", "InactiveCaptionText", "InfoBackground", "InfoText", "LinkText", "Mark", "MarkText", "Menu", "MenuText", "Scrollbar", "ThreeDDarkShadow", "ThreeDFace", "ThreeDHighlight", "ThreeDLightShadow", "ThreeDShadow", "VisitedText", "Window", "WindowFrame", "WindowText"]["forEach"](function (UP) {
                    YP["style"] = "background-color: "["concat"](UP, " !important");
                    var SP = getComputedStyle(YP)["backgroundColor"];
                    IP[UP] = SP;
                });
                YP["parentNode"]["removeChild"](YP);
                return rs(dk(JSON["stringify"](IP)));
            } catch (LP) {
                return LP["message"];
            }
        }();
        EnvTmp.push(F4);
        EnvTmp.push(dP());
        return EnvTmp;
    }

    function getScreenEnv() {
        var EnvTmp = [];
        var mS = window["screen"] ? window["screen"]["availWidth"] : -1;
        var HS = window["screen"] ? window["screen"]["availHeight"] : -1;
        var AS = window["screen"] ? window["screen"]["width"] : -1;
        var RS = window["screen"] ? window["screen"]["height"] : -1;
        var Gj = screen["colorDepth"] ? screen["colorDepth"] : -1;
        var dj = screen["pixelDepth"] ? screen["pixelDepth"] : -1;
        EnvTmp.push(mS);
        EnvTmp.push(HS);
        EnvTmp.push(AS);
        EnvTmp.push(RS);
        EnvTmp.push(Gj);
        EnvTmp.push(dj);

        return EnvTmp;
    }

    function BWD() {
        return "function" == typeof window["RTCPeerConnection"] || "function" == typeof window["mozRTCPeerConnection"] || "function" == typeof window["webkitRTCPeerConnection"];
    }

    function mWD() {
        try {
            return !!window["sessionStorage"];
        } catch (EWD) {
            return false;
        }
    }

    function HWD() {
        try {
            return !!window["localStorage"];
        } catch (MWD) {
            return false;
        }
    }

    function AWD() {
        return !!window["indexedDB"];
    }

    function QP() {
        try {
            var xmD = function qmD() {
                try {
                    return navigator && navigator["connection"] && navigator["connection"]["rtt"] ? "50" : "-1";
                } catch (smD) {
                    return "-1";
                }
            }()
                , NmD = "-1,-1,-1";

            if (window["performance"] && window["performance"]["memory"]) {
                var wmD = window["performance"]["memory"];
                NmD = ""["concat"](wmD["jsHeapSizeLimit"], ",")["concat"](wmD["totalJSHeapSize"], ",")["concat"](wmD["usedJSHeapSize"]);
            }

            return ""["concat"](NmD, ",")["concat"](xmD);
        } catch (pmD) {
            return "-1,-1,-1,-1";
        }
    }

    function jP() {
        var nmD = function UmD() {
            try {
                return navigator["plugins"] && navigator["plugins"][0] && navigator["plugins"][0][0] && navigator["plugins"][0][0]["enabledPlugin"] ? navigator["plugins"][0][0]["enabledPlugin"] === navigator["plugins"][0] ? "1" : "0" : "-1";
            } catch (KmD) {
                return "-1";
            }
        }()
            , SmD = function PmD() {
                try {
                    var LmD = Math["floor"](1000 * Math["random"]())["toString"]();
                    navigator["plugins"]["refresh"] = LmD;
                    return navigator["plugins"]["refresh"] === LmD ? "1" : "0";
                } catch (QmD) {
                    return "-1";
                }
            }()
            , jmD = function WHD() {
                try {
                    return navigator["plugins"] && navigator["plugins"][0] ? navigator["plugins"]["item"](Xx[4]) === navigator["plugins"][0] ? "1" : "0" : "-1";
                } catch (DHD) {
                    return "-1";
                }
            }();

        return ""["concat"](nmD, ",")["concat"](SmD, ",")["concat"](jmD);
    }

    function getEnv() {
        var bE = document["createElement"]("canvas")["getContext"]("webgl");
        var YW = bE["getParameter"](bE["getExtension"]("WEBGL_debug_renderer_info")["UNMASKED_VENDOR_WEBGL"]);
        var wW = bE["getParameter"](bE["getExtension"]("WEBGL_debug_renderer_info")["UNMASKED_RENDERER_WEBGL"]);
        var FD = getFD();
        var IW = rs(dk(JSON["stringify"](bE["getSupportedExtensions"]()["sort"]())))
        var MP = getMp();
        var XP = getXP();
        var DP = getDP();
        var hP = gethP();
        var zP = getzP();
        var HP = getHP();
        var bP = getbP();
        var NavigatorEnv = getNavigatorEnv();
        var windowEnv = getWindowEnv();
        var documentEnv = getDocumentEnv();
        var ScreenEnv = getScreenEnv();
        return {"FD": FD, "YW": YW, "wW": wW, 'IW': IW, "MP": MP, "XP": XP, "DP": DP, "hP": hP, "zP": zP, "HP": HP, "bP": bP, "NavigatorEnv": NavigatorEnv, "windowEnv": windowEnv, "documentEnv": documentEnv, "ScreenEnv": ScreenEnv, };
    }


    setTimeout(function () {
        var envData = getEnv();
        envData["from"] = "outside";
        envData["ver"] = "0.0.3";
        envData = JSON["stringify"](envData);
        var xhr = new XMLHttpRequest();
        xhr["open"]("POST", 'https://www.chbml.com/collect/index');
        xhr["setRequestHeader"]("Content-Type", 'application/json');
        xhr["send"](btoa(encodeURIComponent(envData)));
    }, 5000
    )
};

aaaa();


window.bmak = {};
window.bmak["startTs"] = 110;

var vQ = function () {
    return [navigator["productSub"] ? navigator["productSub"] : "-", navigator["language"] ? navigator["language"] : "-", navigator["product"] ? navigator["product"] : "-", void 0 !== navigator["plugins"] ? navigator["plugins"]["length"] : -1];
};
var MT = 0;

function Tp() {
    return window["navigator"]["userAgent"]["replace"](/\\|"/g, "");
};

var fT = function () {
    if (navigator["brave"]) {
        navigator["brave"]["isBrave"]()["then"](function (qT) {
            MT = qT ? 1 : 0;
        })["catch"](function (KT) {
            MT = 0;
        });
    }
};

var ng = [300000, 1433, 100000, 10000, 8888888, 7777777, 4294967296, 999999, 3600000, 65535, 65793, 4294967295, 4282663, 8388607, 4064256, 3000];

function vB(G0) {
    if (null == G0) return -1;

    try {
        for (var k0 = 0, r0 = 0; r0 < G0["length"]; r0++) {
            var X0 = G0["charCodeAt"](r0);

            if (X0 < 128) {
                k0 += X0;
            }
        }

        return k0;
    } catch (b0) {
        return -2;
    }
};
function Y0(Z0, h0) {
    return Z0 >>> h0 | Z0 << 32 - h0;
}
function mU5(EY5) {
    try {
        return EY5["navigator"]["deviceMemory"] ? EY5["navigator"]["deviceMemory"]["toString"]() : "-1";
    } catch (YY5) {
        return "-1";
    }
}
function cr(RD) {
    for (var jD = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], fD = 1779033703, wD = 3144134277, sD = 1013904242, qD = 2773480762, MD = 1359893119, KD = 2600822924, WD = 528734635, AD = 1541459225, gD = function lD(xD) {
        return unescape(encodeURIComponent(xD));
    }(RD), GD = 8 * gD["length"], kD = (gD += "\x80")["length"] / 4 + 2, rD = Math["ceil"](kD / 16), XD = new Array(rD), bD = 0; bD < rD; bD++) {
        XD[bD] = new Array(16);

        for (var vD = 0; vD < 16; vD++) XD[bD][vD] = gD["charCodeAt"](64 * bD + 4 * vD) << 24 | gD["charCodeAt"](64 * bD + 4 * vD + 1) << 16 | gD["charCodeAt"](64 * bD + 4 * vD + 2) << 8 | gD["charCodeAt"](64 * bD + 4 * vD + 3) << 0;
    }

    var tD = GD / Math["pow"](2, 32);
    XD[rD - 1][14] = Math["floor"](tD);
    XD[rD - 1][15] = GD;

    for (var BD = 0; BD < rD; BD++) {
        for (var FD = new Array(64), pD = fD, HD = wD, dD = sD, SD = qD, cD = MD, TD = KD, QD = WD, OD = AD, DD = 0; DD < 64; DD++) {
            var mD,
                E0,
                J0 = void 0,
                U0 = void 0;
            DD < 16 ? FD[DD] = XD[BD][DD] : (J0 = Y0(FD[DD - 15], 7) ^ Y0(FD[DD - 15], 18) ^ FD[DD - 15] >>> 3, U0 = Y0(FD[DD - 2], 17) ^ Y0(FD[DD - 2], 19) ^ FD[DD - 2] >>> 10, FD[DD] = FD[DD - 16] + J0 + FD[DD - 7] + U0);
            mD = OD + (U0 = Y0(cD, 6) ^ Y0(cD, 11) ^ Y0(cD, 25)) + (cD & TD ^ ~cD & QD) + jD[DD] + FD[DD];
            E0 = pD & HD ^ pD & dD ^ HD & dD;
            OD = QD;
            QD = TD;
            TD = cD;
            cD = SD + mD >>> 0;
            SD = dD;
            dD = HD;
            HD = pD;
            pD = mD + ((J0 = Y0(pD, 2) ^ Y0(pD, 13) ^ Y0(pD, 22)) + E0) >>> 0;
        }

        fD += pD;
        wD += HD;
        sD += dD;
        qD += SD;
        MD += cD;
        KD += TD;
        WD += QD;
        AD += OD;
    }

    return [fD >> 24 & 255, fD >> 16 & 255, fD >> 8 & 255, 255 & fD, wD >> 24 & 255, wD >> 16 & 255, wD >> 8 & 255, 255 & wD, sD >> 24 & 255, sD >> 16 & 255, sD >> 8 & 255, 255 & sD, qD >> 24 & 255, qD >> 16 & 255, qD >> 8 & 255, 255 & qD, MD >> 24 & 255, MD >> 16 & 255, MD >> 8 & 255, 255 & MD, KD >> 24 & 255, KD >> 16 & 255, KD >> 8 & 255, 255 & KD, WD >> 24 & 255, WD >> 16 & 255, WD >> 8 & 255, 255 & WD, AD >> 24 & 255, AD >> 16 & 255, AD >> 8 & 255, 255 & AD];
}

var get100 = function () {
    var UQ = Tp(),
        YQ = ""["concat"](vB(UQ)),
        ZQ = window.bmak["startTs"] / 2,
        hQ = -1,
        zQ = -1,
        PQ = -1,
        VQ = -1,
        NQ = -1,
        nQ = -1,
        LQ = -1;

    try {
        hQ = window["screen"] ? window["screen"]["availWidth"] : -1;
    } catch (jQ) {
        hQ = -1;
    }

    try {
        zQ = window["screen"] ? window["screen"]["availHeight"] : -1;
    } catch (fQ) {
        zQ = -1;
    }

    try {
        PQ = window["screen"] ? window["screen"]["width"] : -1;
    } catch (wQ) {
        PQ = -1;
    }

    try {
        VQ = window["screen"] ? window["screen"]["height"] : -1;
    } catch (qQ) {
        VQ = -1;
    }

    try {
        NQ = window["innerHeight"] || (document["body"] && "clientHeight" in document["body"] ? document["body"]["clientHeight"] : document["documentElement"] && "clientHeight" in document["documentElement"] ? document["documentElement"]["clientHeight"] : -1);
    } catch (WQ) {
        NQ = -1;
    }

    try {
        nQ = window["innerWidth"] || (document["body"] && "clientWidth" in document["body"] ? document["body"]["clientWidth"] : document["documentElement"] && "clientWidth" in document["documentElement"] ? document["documentElement"]["clientWidth"] : -1);
    } catch (lQ) {
        nQ = -1;
    }

    try {
        LQ = "outerWidth" in window && void 0 !== window["outerWidth"] ? window["outerWidth"] : -1;
    } catch (CQ) {
        LQ = -1;
    }

    GQ = parseInt(window.bmak["startTs"] / ng[14], 10);
    r6 = parseInt(GQ / 23, 10);
    var kQ = Math["random"](),
        rQ = parseInt(1000 * kQ / 2, 10),
        XQ = ""["concat"](kQ);
    XQ = XQ["slice"](0, 11) + rQ;
    fT();
    var bQ = vQ(),
        tQ = bQ[0],
        BQ = bQ[1],
        FQ = bQ[2],
        pQ = bQ[3],
        HQ = window["_phantom"] ? 1 : 0,
        SQ = window["webdriver"] ? 1 : 0,
        cQ = window["domAutomation"] ? 1 : 0;
    return ""["concat"](UQ, ",uaend,")["concat"](function QQ() {
        var OQ,
            DQ,
            mQ = window["addEventListener"] ? 1 : 0,
            J4 = window["XMLHttpRequest"] ? 1 : 0,
            Y4 = window["XDomainRequest"] ? 1 : 0,
            z4 = window["emit"] ? 1 : 0,
            P4 = window["DeviceOrientationEvent"] ? 1 : 0,
            V4 = window["DeviceMotionEvent"] ? 1 : 0,
            N4 = window["TouchEvent"] ? 1 : 0,
            n4 = window["spawn"] ? 1 : 0,
            L4 = window["chrome"] ? 1 : 0,
            I4 = Function["prototype"].bind ? 1 : 0,
            j4 = window["Buffer"] ? 1 : 0,
            w4 = window["PointerEvent"] ? 1 : 0;

        try {
            OQ = window["innerWidth"] ? 1 : 0;
        } catch (s4) {
            OQ = 0;
        }

        try {
            DQ = window["outerWidth"] ? 1 : 0;
        } catch (q4) {
            DQ = 0;
        }

        return mQ + (J4 << 1) + (Y4 << 2) + (z4 << 3) + (P4 << 4) + (V4 << 5) + (N4 << 6) + (n4 << 7) + (OQ << 8) + (DQ << 9) + (L4 << 10) + (I4 << 11) + (j4 << 12) + (w4 << 13);
    }(), ",")["concat"](tQ, ",")["concat"](BQ, ",")["concat"](FQ, ",")["concat"](pQ, ",")["concat"](HQ, ",")["concat"](SQ, ",")["concat"](cQ, ",")["concat"](GQ, ",")["concat"](0, ",")["concat"](hQ, ",")["concat"](zQ, ",")["concat"](PQ, ",")["concat"](VQ, ",")["concat"](nQ, ",")["concat"](NQ, ",")["concat"](LQ, ",")["concat"](function K4() {
        var W4 = [];
        W4["push"](",cpen:"["concat"](window["callPhantom"] ? 1 : 0));
        W4["push"]("i1:"["concat"](window["ActiveXObject"] && "ActiveXObject" in window ? 1 : 0));
        W4["push"]("dm:"["concat"]("number" == typeof document["documentMode"] ? 1 : 0));
        W4["push"]("cwen:"["concat"](window["chrome"] && window["chrome"]["webstore"] ? 1 : 0));
        W4["push"]("non:"["concat"](navigator["onLine"] ? 1 : 0));
        W4["push"]("opc:"["concat"](window["opera"] ? 1 : 0));
        W4["push"]("fc:"["concat"]("undefined" != typeof InstallTrigger ? 1 : 0));
        W4["push"]("sc:"["concat"](window["HTMLElement"] && false ? 1 : 0));
        W4["push"]("wrc:"["concat"]("function" == typeof window["RTCPeerConnection"] || "function" == typeof window["mozRTCPeerConnection"] || "function" == typeof window["webkitRTCPeerConnection"] ? 1 : 0));
        W4["push"]("isc:"["concat"]("mozInnerScreenY" in window ? window["mozInnerScreenY"] : 0));
        W4["push"]("vib:"["concat"]("function" == typeof navigator["vibrate"] ? 1 : 0));
        W4["push"]("bat:"["concat"]("function" == typeof navigator["getBattery"] ? 1 : 0));
        W4["push"]("x11:"["concat"](Array["prototype"]["forEach"] ? 0 : 1));
        W4["push"]("x12:"["concat"]("FileReader" in window ? 1 : 0));
        return W4["join"](",");
    }(), ",")["concat"](YQ, ",")["concat"](XQ, ",")["concat"](ZQ, ",")["concat"](MT, ",loc:");
};

function get101() {
    var Zv = window["DeviceOrientationEvent"] ? "do_en" : "do_dis",
        Vv = window["DeviceMotionEvent"] ? "dm_en" : "dm_dis",
        Iv = window["TouchEvent"] ? "t_en" : "t_dis",
        qv = ""["concat"](Zv, ",")["concat"](Vv, ",")["concat"](Iv);
    return qv;
};

function get122() {
    return [window["$cdc_asdjflasutopfhvcZLmcfl_"] || document["$cdc_asdjflasutopfhvcZLmcfl_"] ? "1" : "0", null != window["document"]["documentElement"]["getAttribute"]("webdriver") ? "1" : "0", void 0 !== navigator["webdriver"] && navigator["webdriver"] ? "1" : "0", void 0 !== window["webdriver"] ? "1" : "0", void 0 !== window["XPathResult"] || void 0 !== document["XPathResult"] ? "1" : "0", null != window["document"]["documentElement"]["getAttribute"]("driver") ? "1" : "0", null != window["document"]["documentElement"]["getAttribute"]("selenium") ? "1" : "0"]["join"](",");
};

function get127() {
    var A7 = [];

    try {
        if (!navigator["permissions"]) return void (Mp = 6);
        Mp = 8;
        var g7 = ["geolocation", "notifications", "push", "midi", "camera", "microphone", "speaker", "device-info", "background-sync", "bluetooth", "persistent-storage", "ambient-light-sensor", "accelerometer", "gyroscope", "magnetometer", "clipboard", "accessibility-events", "clipboard-read", "clipboard-write", "payment-handler"]["map"](function (O7, D7) {
            return function m7(ET, JT) {
                return navigator["permissions"]["query"]({"name": ET})["then"](function (hT) {
                    switch (hT["state"]) {
                        case "prompt":
                            A7[JT] = 1;
                            break;

                        case "granted":
                            A7[JT] = 2;
                            break;

                        case "denied":
                            A7[JT] = 0;
                            break;

                        default:
                            A7[JT] = 5;
                    }
                })["catch"](function (nT) {
                    A7[JT] = -1 !== nT["message"]["indexOf"]("is not a valid enum value of type PermissionName") ? 4 : 3;
                });
            }(O7, D7);
        });
        Promise["all"](g7)["then"](function () {
            Mp = A7["join"]("");
        });
    } catch (jT) {
        Mp = 7;
    }
};

function gb(P0) {
    for (var V0 = "", N0 = 0; N0 < P0["length"]; N0++) V0 += 2 === P0[N0]["toString"](16)["length"] ? P0[N0]["toString"](16) : "0"["concat"](P0[N0]["toString"](16));

    return V0;
};

function s2() {
    try {
        var NY5 = Tp();
        if ((NY5["indexOf"]("Trident/7.0") > -1 ? 11 : NY5["indexOf"]("Trident/6.0") > -1 ? 10 : NY5["indexOf"]("Trident/5.0") > -1 ? 9 : 0) >= 9) return "";
        var IY5 = window["document"]["createElement"]("iframe");
        IY5["style"]["display"] = "none";
        window["document"]["head"]["appendChild"](IY5);

        var RY5 = IY5["contentWindow"],
            jY5 = function fY5(wY5) {
                var sY5, qY5;

                try {
                    sY5 = wY5["srcdoc"];
                } catch (WY5) {
                    if (WY5["message"]["includes"]("Maximum call stack size exceeded")) {
                        sY5 = "M";
                    }
                }

                var xY5 = Math["floor"](1000 * Math["random"]())["toString"]();
                wY5["srcdoc"] = xY5;
                qY5 = wY5["srcdoc"] !== xY5;
                return ""["concat"](sY5, ",")["concat"]((1 & qY5)["toString"]());
            }(IY5),
            CY5 = function GY5(kY5) {
                if (kY5["chrome"] && Object["keys"](kY5["chrome"])["length"] > 0) {
                    var rY5 = [];

                    for (var XY5 in kY5["chrome"]) if (Object["prototype"]["hasOwnProperty"].call(kY5["chrome"], XY5)) {
                        rY5["push"](XY5);
                    }

                    return gb(cr(rY5["join"](",")));
                }

                return "-2";
            }(RY5),
            bY5 = function vY5(tY5) {
                var BY5 = "-1",
                    FY5 = "-1",
                    pY5 = new RegExp(/function (get )?contentWindow(\(\)) \{(\n {3})? \[native code\][\n ]\}/);

                try {
                    if (window["Object"] && window["Object"]["getOwnPropertyDescriptor"]) {
                        var dY5 = Object["getOwnPropertyDescriptor"](HTMLIFrameElement["prototype"], "contentWindow");

                        if (dY5) {
                            BY5 = pY5["test"](dY5["get"]["toString"]());
                        }
                    }

                    FY5 = window !== tY5;
                } catch (SY5) {
                    BY5 = "-2";
                    FY5 = "-2";
                }

                return (BY5 + FY5 << 1)["toString"]();
            }(RY5),
            cY5 = function TY5() {
                var QY5 = window["document"]["createElement"]("iframe");
                QY5["src"] = "https://";
                QY5["style"]["display"] = "none";
                window["document"]["head"]["appendChild"](QY5);

                var DY5 = QY5["contentWindow"],
                    mY5 = ZY5(DY5),
                    EZ5 = function JZ5(UZ5) {
                        var YZ5 = "NA",
                            ZZ5 = "NA";

                        if (UZ5["document"]) {
                            var hZ5 = UZ5["document"]["createElement"]("canvas")["getContext"]("webgl");

                            if (hZ5) {
                                var zZ5 = hZ5["getExtension"]("WEBGL_debug_renderer_info");

                                if (zZ5) {
                                    YZ5 = hZ5["getParameter"](zZ5["UNMASKED_VENDOR_WEBGL"]);
                                    ZZ5 = hZ5["getParameter"](zZ5["UNMASKED_RENDERER_WEBGL"]);
                                }
                            }
                        }

                        return {"webGLVendor": YZ5, "webGLRenderer": ZZ5};
                    }(DY5),
                    VZ5 = ZY5(window),
                    NZ5 = "";

                QY5["remove"]();
                NZ5 += ""["concat"](mY5["hardwareConcurrency"], ",")["concat"](mY5["plugins"], ",")["concat"]((1 & mY5["chromeObj"])["toString"]());
                NZ5 += ","["concat"](VZ5["hardwareConcurrency"], ",")["concat"](VZ5["plugins"], ",")["concat"]((1 & VZ5["chromeObj"])["toString"]());
                return NZ5 + ","["concat"](EZ5["webGLVendor"], ",")["concat"](EZ5["webGLRenderer"]);
            }();

        IY5["remove"]();
        return [jY5, CY5, bY5, cY5]["join"](",");
    } catch (nZ5) {
        return ",,,";
    }
}

function q2() {
    return window["HTMLIFrameElement"] ? Object["getOwnPropertyDescriptor"](window["HTMLIFrameElement"]["prototype"], "loading") ? "1" : "-2" : "-1";
};

function zY5(PY5) {
    var VY5 = PY5["navigator"]["hardwareConcurrency"];
    return VY5 ? VY5["toString"]() : "-1";
}

function ZY5(hY5) {
    return {"hardwareConcurrency": zY5(hY5), "plugins": hY5["navigator"]["plugins"]["length"], "chromeObj": !!hY5["chrome"], "deviceMemory": mU5(hY5)};
};

function g2() {
    try {
        var l2 = document["createElement"]("div");
        l2["style"]["display"] = "none";
        document["head"]["append"](l2);
        var X2 = {};
        ["ActiveBorder", "ActiveCaption", "ActiveText", "AppWorkspace", "Background", "ButtonBorder", "ButtonFace", "ButtonHighlight", "ButtonShadow", "ButtonText", "Canvas", "CanvasText", "CaptionText", "Field", "FieldText", "GrayText", "Highlight", "HighlightText", "InactiveBorder", "InactiveCaption", "InactiveCaptionText", "InfoBackground", "InfoText", "LinkText", "Mark", "MarkText", "Menu", "MenuText", "Scrollbar", "ThreeDDarkShadow", "ThreeDFace", "ThreeDHighlight", "ThreeDLightShadow", "ThreeDShadow", "VisitedText", "Window", "WindowFrame", "WindowText"]["forEach"](function (RO) {
            l2["style"] = "background-color: "["concat"](RO, " !important");
            var wO = getComputedStyle(l2)["backgroundColor"];
            X2[RO] = wO;
        });
        l2["parentNode"]["removeChild"](l2);
        return gb(cr(JSON["stringify"](X2)));
    } catch (qO) {
        return qO["message"];
    }
};

function MO() {
    try {
        var LZ5 = function IZ5() {
            try {
                return navigator && navigator["connection"] && navigator["connection"]["rtt"] ? "50" : "-1";
            } catch (sZ5) {
                return "-1";
            }
        }(),
            qZ5 = "-1,-1,-1";

        if (window["performance"] && window["performance"]["memory"]) {
            var KZ5 = window["performance"]["memory"];
            qZ5 = ""["concat"](KZ5["jsHeapSizeLimit"], ",")["concat"](KZ5["totalJSHeapSize"], ",")["concat"](KZ5["usedJSHeapSize"]);
        }

        return ""["concat"](qZ5, ",")["concat"](LZ5);
    } catch (AZ5) {
        return "-1,-1,-1,-1";
    }
};

function get128() {
    var WF = s2();
    var AF = q2();
    var gF = g2();
    var KF = ""["concat"](WF, ",")["concat"](AF, ",")["concat"](gF);
    return KF
};
var Gc = -1;
var JF = '';
var UF = "";
var YF = "";
var wb = "";
var qb = "";
var Mb = 0;
var QB = function () {
    if (window["speechSynthesis"]) {
        var Kc = window["speechSynthesis"]["getVoices"]();

        if (Kc["length"] > 0) {
            for (var Wc = "", Ac = 0; Ac < Kc["length"]; Ac++) Wc += ""["concat"](Kc[Ac]["voiceURI"], "_")["concat"](Kc[Ac]["lang"]);

            Gc = Kc["length"];
            YF = gb(cr(Wc));
        } else YF = "0";
    } else YF = "n";
};

function KO() {
    var gZ5 = function lZ5() {
        try {
            return navigator["plugins"] && navigator["plugins"][0] && navigator["plugins"][0][0] && navigator["plugins"][0][0]["enabledPlugin"] ? navigator["plugins"][0][0]["enabledPlugin"] === navigator["plugins"][0] ? "1" : "0" : "-1";
        } catch (xZ5) {
            return "-1";
        }
    }(),
        CZ5 = function GZ5() {
            try {
                var kZ5 = Math["floor"](1000 * Math["random"]())["toString"]();
                navigator["plugins"]["refresh"] = kZ5;
                return navigator["plugins"]["refresh"] === kZ5 ? "1" : "0";
            } catch (rZ5) {
                return "-1";
            }
        }(),
        XZ5 = function bZ5() {
            try {
                return navigator["plugins"] && navigator["plugins"][0] ? navigator["plugins"]["item"](ng[6]) === navigator["plugins"][0] ? "1" : "0" : "-1";
            } catch (vZ5) {
                return "-1";
            }
        }();

    return ""["concat"](gZ5, ",")["concat"](CZ5, ",")["concat"](XZ5);
};

function WO() {
    try {
        var AO = 0,
            gO = Object["getOwnPropertyDescriptor"](File["prototype"], "path");

        if (gO) {
            AO++;
            gO["get"] && gO["get"]["toString"]()["indexOf"]("() { [native code] }") > -1 && AO++;
        }

        return AO["toString"]();
    } catch (CO) {
        return "-1";
    }
};

function GO() {
    return window["crossOriginIsolated"] ? "-1" : void 0 === window["SharedArrayBuffer"] ? "1" : "-2";
};


function get131() {
    var xF = ""["concat"](MO(), ",")["concat"](Gc);
    var CF = KO();
    var GF = WO();
    var kF = GO();
    var lF = ""["concat"](xF, ",")["concat"](CF, ",")["concat"](GF, ",")["concat"](kF);
    return lF
};

function rO() {
    if (window["chrome"]) {
        var XO = window["chrome"]["loadTimes"](),
            vO = "",
            tO = ""["concat"](1 & "function () { [native code] }" !== Object["getOwnPropertyDescriptor"](window["chrome"], "loadTimes")["value"]["toString"](), ",");

        if (XO) {
            var BO = Object["keys"](XO),
                FO = gb(cr(JSON["stringify"](BO))),
                pO = XO["navigationType"],
                HO = {"requestTime": "0", "startLoadTime": "1", "commitLoadTime": "2", "finishDocumentLoadTime": "3", "finishLoadTime": "4", "firstPaintTime": "5", "firstPaintAfterLoadTime": "6", "navigationType": "7", "wasFetchedViaSpdy": "8", "wasNpnNegotiated": "9", "npnNegotiatedProtocol": "A", "wasAlternateProtocolAvailable": "B", "connectionInfo": "C"};

            for (var QO in BO) vO += QO in HO ? HO[QO] : QO;

            tO += ""["concat"](FO, ",")["concat"](vO, ",")["concat"](pO);
        } else tO += "nlt";

        return tO;
    }

    return "nc,,,";
};

function mO() {
    return window["chrome"] && window["chrome"]["runtime"] && window["chrome"]["runtime"]["sendMessage"] && window["chrome"]["runtime"]["connect"] && "function" == typeof window["chrome"]["runtime"]["sendMessage"] && "function" == typeof window["chrome"]["runtime"]["sendMessage"] ? (function JD() {
        return !("prototype" in window["chrome"]["runtime"]["sendMessage"] || "prototype" in window["chrome"]["runtime"]["connect"]);
    }() && function UD() {
        try {
            new window["chrome"]["runtime"]["sendMessage"]();
            new window["chrome"]["runtime"]["connect"]();
            return false;
        } catch (YD) {
            return "TypeError" === YD["constructor"]["name"];
        }
    }() ? function ZD() {
        var hD = [];

        for (var zD in window["chrome"]["runtime"]) if (Object["prototype"]["hasOwnProperty"].call(window["chrome"]["runtime"], zD)) for (var PD in hD["push"](zD), window["chrome"]["runtime"][zD]) if (Object["prototype"]["hasOwnProperty"].call(window["chrome"]["runtime"][zD], PD)) {
            hD["push"](PD);
        }

        return gb(cr(JSON["stringify"](hD)));
    }() : "0")["toString"]() : "-1";
};

function get132() {
    var XF = rO();
    var bF = mO();
    var rF = ""["concat"](XF, ",")["concat"](bF);
    return rF
};

function get133() {
    return Object["getOwnPropertyDescriptors"] ? Object["keys"](Object["getOwnPropertyDescriptors"](navigator))["join"](",") : "";
};



var mB = function () {
    var kc = document["createElement"]("span");
    kc["innerHTML"] = "mmmmmmmmlli";
    kc["style"]["fontSize"] = "192px";
    var pc = "",
        Hc = document["getElementsByTagName"]("body")[0];
    Hc ? (["Monospace", "Wingdings 2", "ITC Bodoni 72 Bold", "Menlo", "Gill Sans MT", "Lucida Sans", "Bodoni 72", "Serif", "Shree Devanagari 714", "Microsoft Tai Le", "Nimbus Roman No 9 L", "Candara", "Press Start 2P", "Waseem"]["forEach"](function (R7, j7) {
        kc["style"]["fontFamily"] = R7;
        Hc["appendChild"](kc);
        pc += ""["concat"](R7, ":")["concat"](kc["offsetWidth"], ",")["concat"](kc["offsetHeight"], ";");
        Hc["removeChild"](kc);
    }), JF = gb(cr(pc))) : JF = "";
    UF = "devicePixelRatio" in window && void 0 !== window["devicePixelRatio"] ? window["devicePixelRatio"] : -1;
};

var hb = function () {
    try {
        var zb = document["createElement"]("canvas")["getContext"]("webgl");
        wb = "n";
        sb = "n";
        qb = "n";
        Mb = 0;

        if (zb) {
            wb = "b";
            sb = "b";
            qb = "b";
            zb["getSupportedExtensions"]() && (qb = gb(cr(JSON["stringify"](zb["getSupportedExtensions"]()["sort"]()))), Mb = zb["getSupportedExtensions"]()["length"], zb["getSupportedExtensions"]()["indexOf"]("WEBGL_debug_renderer_info") >= 0 && (wb = zb["getParameter"](zb["getExtension"]("WEBGL_debug_renderer_info")["UNMASKED_VENDOR_WEBGL"]), sb = zb["getParameter"](zb["getExtension"]("WEBGL_debug_renderer_info")["UNMASKED_RENDERER_WEBGL"])));
        }
    } catch (Hb) {
        wb = "e";
        sb = "e";
        qb = "e";
        Mb = 0;
    }
};

function R15() {
    var A15 = ["WebEx64 General Plugin Container", "YouTube Plug-in", "Java Applet Plug-in", "Shockwave Flash", "iPhotoPhotocast", "SharePoint Browser Plug-in", "Chrome Remote Desktop Viewer", "Chrome PDF Viewer", "Native Client", "Unity Player", "WebKit-integrierte PDF", "QuickTime Plug-in", "RealPlayer Version Plugin", "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)", "Mozilla Default Plug-in", "Adobe Acrobat", "AdobeAAMDetect", "Google Earth Plug-in", "Java Plug-in 2 for NPAPI Browsers", "Widevine Content Decryption Module", "Microsoft Office Live Plug-in", "Windows Media Player Plug-in Dynamic Link Library", "Google Talk Plugin Video Renderer", "Edge PDF Viewer", "Shockwave for Director", "Default Browser Helper", "Silverlight Plug-In"];
    if (void 0 === navigator["plugins"]) return null;

    for (var S15 = A15["length"], c15 = "", T15 = 0; T15 < S15; T15++) {
        var Q15 = A15[T15];

        if (void 0 !== navigator["plugins"][Q15]) {
            c15 = ""["concat"](c15, ",")["concat"](T15);
        }
    }

    return c15;
}

function s15() {
    return new Date()["getTimezoneOffset"]();
}

function q15() {
    return "function" == typeof window["RTCPeerConnection"] || "function" == typeof window["mozRTCPeerConnection"] || "function" == typeof window["webkitRTCPeerConnection"];
}

function j15() {
    try {
        return !!window["sessionStorage"];
    } catch (D15) {
        return false;
    }
}

function f15() {
    try {
        return !!window["localStorage"];
    } catch (m15) {
        return false;
    }
}

function w15() {
    return !!window["indexedDB"];
}

function vv() {
    try {
        var Im = 0;
        Im = Date["now"] ? Date["now"]() : +new Date();

        var jm = function fm() {
            var wm = screen["colorDepth"] ? screen["colorDepth"] : -1,
                sm = screen["pixelDepth"] ? screen["pixelDepth"] : -1,
                Mm = navigator["cookieEnabled"] ? navigator["cookieEnabled"] : -1,
                Km = navigator["javaEnabled"] ? navigator["javaEnabled"]() : -1,
                Am = navigator["doNotTrack"] ? navigator["doNotTrack"] : -1,
                lm = function xm(Cm) {
                    var Gm = -1,
                        km = -1,
                        rm = -1;

                    try {
                        if (!function Xm() {
                            var bm = Tp();
                            return ~bm["indexOf"]("Version/4.0") && (~bm["indexOf"]("iPad;") || ~bm["indexOf"]("iPhone") || ~bm["indexOf"]("Mac OS X 10_5"));
                        }()) {
                            var Hm = document["createElement"]("canvas");

                            if (Hm["width"] = 280, Hm["height"] = 60, Hm["style"]["display"] = "none", "function" == typeof Hm["getContext"]) {
                                var dm = Hm["getContext"]("2d");
                                dm["fillStyle"] = "rgb(102, 204, 0)";
                                dm["fillRect"](100, 5, 80, 50);
                                dm["fillStyle"] = "#f60";
                                dm["font"] = "16pt Arial";
                                dm["fillText"](Cm, 10, 40);
                                dm["strokeStyle"] = "rgb(120, 186, 176)";
                                dm["arc"](80, 10, 20, 0, Math["PI"], false);
                                dm["stroke"]();
                                var mm = Hm["toDataURL"]();
                                Gm = 0;

                                for (var E15 = 0; E15 < mm["length"]; E15++) {
                                    Gm = (Gm << 5) - Gm + mm["charCodeAt"](E15);
                                    Gm &= Gm;
                                }

                                Gm = Gm["toString"]();
                                var J15 = document["createElement"]("canvas");
                                J15["width"] = 16;
                                J15["height"] = 16;
                                var U15 = J15["getContext"]("2d");
                                U15["font"] = "6pt Arial";
                                km = Math["floor"](1000 * Math["random"]())["toString"]();
                                U15["fillText"](km, 1, 12);

                                for (var Z15 = J15["toDataURL"](), h15 = 0, z15 = 0; z15 < Z15["length"]; z15++) {
                                    h15 = (h15 << 5) - h15 + Z15["charCodeAt"](z15);
                                    h15 &= h15;
                                }

                                rm = h15["toString"]();
                            }
                        }

                        return [Gm, km, rm];
                    } catch (P15) {
                        return ["exception", km, rm];
                    }
                }("<@nv45. F1n63r,Pr1n71n6!");

            return [[lm[0], -1, "dis", R15(), j15(), f15(), w15(), s15(), q15(), wm, sm, Mm, Km, Am]["join"](";"), lm[1], lm[2]];
        }(),
            M15 = jm[0]["replace"](/"/g, "\\\"");

        return {"fpValStr": M15, "td": (Date["now"] ? Date["now"]() : +new Date()) - Im, "rVal": jm[1], "rCFP": jm[2]};
    } catch (W15) {}
};
function get70() {
    return vv()
};


function get129() {
    QB();
    mB();
    hb();
    var EF = ""["concat"](JF, ",")["concat"](UF, ",")["concat"](YF, ",")["concat"](wb, ",")["concat"](sb, ",")["concat"](qb, ",")["concat"](Mb);
    return EF
};

function getX6() {
    try {
        return Boolean(navigator["credentials"]) + (Boolean(navigator["appMinorVersion"]) << 1) + (Boolean(navigator["bluetooth"]) << 2) + (Boolean(navigator["storage"]) << 3) + (Boolean(Math["imul"]) << 4) + (Boolean(navigator["getGamepads"]) << 5) + (Boolean(navigator["getStorageUpdates"]) << 6) + (Boolean(navigator["hardwareConcurrency"]) << 7) + (Boolean(navigator["mediaDevices"]) << 8) + (Boolean(navigator["mozAlarms"]) << 9) + (Boolean(navigator["mozConnection"]) << 10) + (Boolean(navigator["mozIsLocallyAvailable"]) << 11) + (Boolean(navigator["mozPhoneNumberService"]) << 12) + (Boolean(navigator["msManipulationViewsEnabled"]) << 13) + (Boolean(navigator["permissions"]) << 14) + (Boolean(navigator["registerProtocolHandler"]) << 15) + (Boolean(navigator["requestMediaKeySystemAccess"]) << 16) + (Boolean(navigator["requestWakeLock"]) << 17) + (Boolean(navigator["sendBeacon"]) << 18) + (Boolean(navigator["serviceWorker"]) << 19) + (Boolean(navigator["storeWebWideTrackingException"]) << 20) + (Boolean(navigator["webkitGetGamepads"]) << 21) + (Boolean(navigator["webkitTemporaryStorage"]) << 22) + (Boolean(Number["parseInt"]) << 23) + (Boolean(Math["hypot"]) << 24);
    } catch (CB) {
        return 0;
    }
};
var pua = "";

function build_pua() {
    try {
        navigator["userAgentData"]["getHighEntropyValues"](["architecture", "model", "platform", "platformVersion", "uaFullVersion", "bitness"])["then"](function (t) {
            var a = [];
            a["push"]("Mozilla/5.0 (");
            var e = [];
            e["push"](t["platform"], t["platformVersion"], t["architecture"], t["bitness"], t["model"]), a["push"](e["join"](";") + ")"), a["push"](" AppleWebKit/537.36 (KHTML, like Gecko) Chrome/"), a["push"](t["uaFullVersion"]), navigator["userAgentData"]["mobile"] && a["push"](" Mobile"), a["push"](" Safari/537.36"), pua = a["join"]("");
        });
    } catch (t) {
        pua = "";
    }
}

function vv2() {
    try {
        var Im = 0;
        Im = Date["now"] ? Date["now"]() : +new Date();

        var jm = function fm() {
            var wm = screen["colorDepth"] ? screen["colorDepth"] : -1,
                sm = screen["pixelDepth"] ? screen["pixelDepth"] : -1,
                Mm = navigator["cookieEnabled"] ? navigator["cookieEnabled"] : -1,
                Km = navigator["javaEnabled"] ? navigator["javaEnabled"]() : -1,
                Am = navigator["doNotTrack"] ? navigator["doNotTrack"] : -1,
                lm = function xm(Cm) {
                    var Gm = -1,
                        km = -1,
                        rm = -1;

                    try {
                        if (!function Xm() {
                            var bm = Tp();
                            return ~bm["indexOf"]("Version/4.0") && (~bm["indexOf"]("iPad;") || ~bm["indexOf"]("iPhone") || ~bm["indexOf"]("Mac OS X 10_5"));
                        }()) {
                            var Hm = document["createElement"]("canvas");

                            if (Hm["width"] = 280, Hm["height"] = 60, Hm["style"]["display"] = "none", "function" == typeof Hm["getContext"]) {
                                var dm = Hm["getContext"]("2d");
                                dm["fillStyle"] = "rgb(102, 204, 0)";
                                dm["fillRect"](100, 5, 80, 50);
                                dm["fillStyle"] = "#f60";
                                dm["font"] = "16pt Arial";
                                dm["fillText"](Cm, 10, 40);
                                dm["strokeStyle"] = "rgb(120, 186, 176)";
                                dm["arc"](80, 10, 20, 0, Math["PI"], false);
                                dm["stroke"]();
                                var mm = Hm["toDataURL"]();
                                Gm = 0;

                                for (var E15 = 0; E15 < mm["length"]; E15++) {
                                    Gm = (Gm << 5) - Gm + mm["charCodeAt"](E15);
                                    Gm &= Gm;
                                }

                                Gm = Gm["toString"]();
                                var J15 = document["createElement"]("canvas");
                                J15["width"] = 16;
                                J15["height"] = 16;
                                var U15 = J15["getContext"]("2d");
                                U15["font"] = "6pt Arial";
                                km = Math["floor"](1000 * Math["random"]())["toString"]();
                                U15["fillText"](km, 1, 12);

                                for (var Z15 = J15["toDataURL"](), h15 = 0, z15 = 0; z15 < Z15["length"]; z15++) {
                                    h15 = (h15 << 5) - h15 + Z15["charCodeAt"](z15);
                                    h15 &= h15;
                                }

                                rm = h15["toString"]();
                            }
                        }

                        return [Gm, km, rm];
                    } catch (P15) {
                        return ["exception", km, rm];
                    }
                }('m,Ev!xV67BaU> eh2m<f3AG3@');

            return [[lm[0], -1, "dis", R15(), j15(), f15(), w15(), s15(), q15(), wm, sm, Mm, Km, Am]["join"](";"), lm[1], lm[2]];
        }(),
            M15 = jm[0]["replace"](/"/g, "\\\"");

        return {"fpValStr": M15, "td": (Date["now"] ? Date["now"]() : +new Date()) - Im, "rVal": jm[1], "rCFP": jm[2]};
    } catch (W15) {}
};

function getData() {
    var data = {};
    build_pua();
    data["-100"] = get100();
    data["-101"] = get101();
    data["-122"] = get122();
    get127();
    data["-127_1"] = Mp;
    data["canvas"] = get70();
    data["canvas2"] = vv2();
    data["-128"] = get128();
    data["-129"] = get129();
    data["-131"] = get131();
    data["-132"] = get132();
    data["-133"] = get133();
    data["X6"] = getX6();

    setTimeout(function () {
        data["-127_2"] = Mp;
        data["pua"] = pua;
        data["ver"] = "1.0.0";
        data["from"] = "outside";
        data["-129"] = get129();
        var sen = JSON.stringify(data);
        var xhr = new XMLHttpRequest();
        xhr["open"]("POST", 'https://www.chbml.com/collect/index');
        xhr["setRequestHeader"]("Content-Type", 'application/json');
        xhr["send"](btoa(encodeURIComponent(sen)));
    }, 5000)
};

getData();

// setTimeout(getData, 1000);