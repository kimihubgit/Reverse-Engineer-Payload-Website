const fs = require('fs');
const akamaiHelper = require('../src');

// Test data
const sensor_data = '{"sensor_data":"3;0;1;0;3289904;8xWeNe7FP4LrvCqYMQiHAGPXhFhv+53sWiirXMpTK4I=;16,3248,0,0,2,1821;^\\"fSB\\"z\\"ye<@bT7^Ig*GrHEA`iD!*nZz;`Tbb,w~] k{7oHT)Sup\\"6\\"V:K\\"FG8v.8%]\\"MWX\\"HX_cE5L`L8HRz?[.R\\"{+B\\"B\\")kKVPjv8QhnpU@m8 j$7g(b,U*Rfuve2JC2E=W~9C_k}kS+NGDbn=gLuV*OZz!o=heTmz;C ;^c~oi,jc[t2q<}U7lCdv&*\\"}\\"ca}\\".\\"p:Jvec=l\\"]<E\\"=.m\\"W.8k^\\"8bf\\"O]6W,>|$\\".%r\\"zuI:<[PaHgct\\"O8*\\"A8Fe/\\"$K9G\\"8\\"\\"R\\"L~A\\"J\\"tpO3e6B_6x42gq\\"oc \\"mId\\"k;IZ,\\"C!.h\\"n^+KUa!\\"\\"n}Z^\\"xP+J\\"!<x\\"y+Z\\"V\\"\\"$\\"MZx\\"I]O2IV5M\\"LF)\\"j;\\"MI7\\"m2-\\"5\\"NiKef\\"@}Y\\"`y[$6\\"s\\"\\"P7C\\"=JZ\\";\\"vs]P`LM,~Dl]Y~5~3ZT33-[@7{Qnzf3@&;/W;cNMqei<s[gg\\"3&}\\"K.i\\"2#lUv\\"P?J\\"2@D?82m4.D`\\"h@\\"c\\"c,lUxPE|[-(b)C%/G_uc].2$RK$fRo.HLf nx ]wKZ))mBTeE}E4/SHPMG*5-,#36>wxuKptTjpWl%Dvi:Q]_c7tI9opU)3=IOE>%bq~@.7=qvu5Yw-6S\\"_)5\\"MIS\\")FI9:`8yyBy9s@\\"nLT\\" \\"K_@/axkUWCxt>9_Wg[2Q$tZx#UrK~Iz5NhXWz9+k(+JVw QTpM<j6?}9I{I2Y5V.KlcI{Q?FRIx.[w68]FAo<08akV~P0sEs8Q[R+UQHboFg,8sv:>6g89<e%X7*MM|Tm1DIuOSQo&`iInBbzmsE*1Ap,rL?s`B-Rz0+l=PIl3j#g7htHDOAs&,bxyRI&&MDwCL_O2>@d}_$tB :er}mFahQ}jA>!2g]5oz6mep)OpV%uE0A$ A%s.J{dSB5%.pk7$*S=-CW0T;voI{P1?hE8VoW,+y%vtkqL$AlZHg%e\\"}\\"*dR\\"8HQI:\\"`]D4\\"a\\"\\"Q\\"w_0\\"nn0;n];\\"bQ>\\"~\\"[`\\"l=&\\"`Qaf\\"H>rl%\\"RH~\\"H\\"\\"Z\\"%pL\\"4SG%}\\" ^x\\"_\\"fh!ca-fba4]?-\\"x\\"OM/\\"v4:P%XG L?\\"Xg\\"V\\":kNMU6US2<&76%!f?{ \\"_\\"wk.\\"y0SVwhm7!#\\"U%.c\\":\\"\\"G\\"f;&\\"h\\"WkIv4lb87^_+Kw?V\\"&\\"Ukh\\"EVCB-gc2_\\"PNr\\"s\\"\\"_\\"nqc\\".\\"[Lau0\\"-/C\\">_b\\"]={htj\\"Z\\":d~\\"%}^\\"fM>029\\"ikE\\"[0uz;5U`N8C\\"3s:\\"5\\">+NmjEa`%7en*(H2+Aer]q#_{_)i5n&8&4R&kc(x=_16dl ru<qdg&;sC2R8`K^|yuD* x*<i E`?D`XW&RaQ,L/HGsj2q5\\"U\\"iLW\\"1\\"MrQ`?x85.r>BPz7&cMus=\\".^s\\"x\\"3@]xr\\" 2h=(&F@q1:NlX.QieHyx5<S%;76ysImKM~?vs$q0<Ly 2xwmXuN-\\"e\\"L4@\\"HjK q=i8Y\\"geK\\"?\\"H\\"l#b\\"5.b\\"/C7~7Bd9q\\")g\\"?us?~\\"}2+P\\"g\\"X\\"3?i\\"b0m\\"RYEg[=-kc+U|%\\"a:;2\\":\\"9(77\\"l\\"N}x\\"dnTr$g^B.sMT1x\\"1F0\\"`\\"YQr]eS?w\\"7\\".[>\\">\\"\\"_\\"{c%\\"} LmLLP\\"UXa\\"@ !J+-oO^\\" p\\"C\\"\\"]\\"T&)\\":\\"RI\\"T}n\\"/8{6\\"`XN8Z\\"!#$#\\"?~m|Uj9@8\\"t+BX\\"T[lUR},8O ZL2&&(\\"zkeF\\"R`>~$!>OnzSN\\"Pi<y\\"oQv\\"Z]f\\"C\\"\\"2\\"1Sh\\"R\\"\\"n\\"/K\\"h\\"/gB:Q\\"_JH\\"><_\\"I;=jVi\\"OAZd\\"n3C$0\\"RWY\\".\\"(dt\\"*\\";7n\\"2\\"[\\"%X \\"&y\\"s2r3CZo\\":p*\\"6<9Yq1(QC\\"0*Qi7\\"QZ}-*c5`s1OX.N2$_u5nN-E-g%;\\"^\\"fS,\\"7f?oYyUc\\"ob\\";\\"\\"=\\"WiI\\"USsN@Hxm]4I\\"Q&eQn^!\\"sn3vf\\"n&t\\"!+]flcD>4\\".b!\\"g\\"\\"~\\"#1e\\"?y>OJ\\"z<\\"x\\"\\"~P<\\"qOo\\""}'

// Test function
async function runTests() {
    console.log("Starting encryption/decryption tests...\n");

    const decryptResult = akamaiHelper.decrypt(
        sensorData=sensor_data, 
        fileContent=null, // fs.readFileSync("./scripts/example-2.js", 'utf8')
        fileHash=3165357
    );
            
    if (!decryptResult.success) {
        throw new Error(`Decryption failed: ${decryptResult.message}`);
    }

    console.log("✓ Decryption successful");

    console.log(decryptResult.data)

}

// Run the tests
runTests().catch(console.error); 