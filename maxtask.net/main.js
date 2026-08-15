const data = {
  email: "vkhai2603@gmail.com",
  password: "asdasdasd",
  captchaToken:
    "P1_eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.haJwZACjZXhwzmoByJ2ncGFzc2tlecUFE6r2qGCxNHaWNM03ngHqgB1SpH4fRBI5Bd-VV0GmQ18CE9bujkVIiXMIz-thS5V6wHuI1_LSrL4GOxsH0SXGi7avvGBV33WgB8rmJge9zfIH0e99fgtMgTCWpxlLGRa5oY7yVSzBlE3NgvdAUlSU_gnNE8K7QzX2BrfZt0hEKeEnpVbm67VSYBLkWqvofUTZaedu4Xs9gAEkbXIoKV97Fz1a44wonqqHZz625UnbP-UsNTN7dbpCCiPcu5pySbt_uSndvEXqsOcwaD-0QLPwAQU1hp5uB54wE1lleEVChrd4mw1Op2LtrRE5_sjqS1D_W0qIBai2bCd9iFWybMivFec4xdm56PjPeE8qW6Rk546D-hUr5gH67QLhtZZ0MH_qegReomBk6sKsUyXPvazzowGSBzRBkTMR8AhuNgzBeyVQZfEnl0faQ2Dq9c3Qon6KwAmOQFCDtIqfjJL_pOFb55b3VQkdpqgl1rtq3g5MtfEORWLR1ix8nnSQU03tNtlyiziMBwo_q2Tls2LFOqRU_KHojJaFukc0A2Fhtiq1GUpEb-IhK7UHImhBe658V0jdAGvnYJ_qxPLjbzeI5831edMB91XFAoqNfuEsNULfjJ5UMFWPFHZdKd2iINCbEFk5MIf5hXe2ncl8WGu0JV7vEL67G_DXv6xJKvS9JFHyV_Qn83CvGSrTo4NTvCZwIyeF433NZJBbjzpCJ5tCWyT2rWQQLg0fJMN6jkcbvMjAJj0KTIm9b0zgq0bP3cPgGwdPf810lsqYwcBTYowdb4zhBreK1ZjQiqhmxOxPj-MQ0zdOfqwKmkvq21FAv8BKQ39oee24Rxh-JSdVX3Eh35OactYY1TySOhSB1Gn3kNaKDEuva-CirKXkq6cCdpYWdBkgxA0URRQ_NfiYWt6ZhSiw_Rs_BUaYcSURgBjuRViQ39bbk4yr35aJjUHU1gzEMXsl6SOw1wDoE6qQqA4pPEzHjdT-ZvmTZA06VbkuYCG6BGaHAVUMTbhIVQlSZk-1Qmd-rUQDrK0n2BArcIGqf0fZ8uTxlcJqTs2snmQ0MtgXmMU6ROxz6ABKRhTaZlTacD8lfGK47qYrWvaQZ0JTqJtbSZDTcSlWqAmWl6q9971_3PU9iiD__47LPhCM28dYbDecPsslcfewFV0xN6WCG2MBEFiPsr1IS8PRF0r7mrYpH012S_X2QAtLr4VAC_xfvc1XgPQJJpaCqGlyDOQr2w1SCqYQcF_wjWafpLNQvGPFVA13Rf2g4F4A4_UncHGI5C7XTJy10Jdmgc4A2W8Uvip3OFyx2f2LErcUJx60mA76SR2HBpGpo8I8hM3SGXKG962IdUWDckNg8PpCOw7WnAObL3IHbmGS5M0OFRPoEHXyo8teuEvrCaUB-0r3rkRhF9r0g6Z5Xg7y5pJ_WDyiVQH5uEmym3vXAWK36UWsJ7YF_X2vMKzovNQZ0OtvwFJWkbUGP_5v0NooDDN6NtFQW1H-yxSvi4MVJGj96FFjqpvysTDMQbqix68E5Hi4eGbUTnMZSepXGMYjOjh_oXIK_mSJqcjYEP3hHUI2khygCVrc8JKh-fznjcLIqBHDSnLP90pNtWKHZcmbOgtiQN7PB-9CpRzKy90TA0CyPQdtPpOX-GW_85hWEL5-SIoZumohsK_1UE6ZZJKVNQ9JtNCYmWvPLT9AEs6uo9ETvbgv7yK7j8euqax-QGPqcA2qQOKSaxMMpkWc3aJrcqg0YzIzN2FjY6hzaGFyZF9pZM4VmeRU.nptKEkMev3cAHX7rKsCLiUWQ8IdypF_o8_8TA5PiW7g",
};

const crypto = require("crypto");
const encoder = new TextEncoder();
// const randomBytes = crypto.randomBytes(12);

const keyobj = {
  0: 2045397976,
  1: 887559927,
  2: 3973937493,
  3: 1625541946,
  4: 2647155022,
  5: 2169975618,
  6: 2650253956,
  7: 3703348059,
};
const key = new Uint8Array(Object.values(keyobj));

const ranprng = {
  0: 59,
  1: 139,
  2: 55,
  3: 207,
  4: 7,
  5: 75,
  6: 33,
  7: 234,
  8: 200,
  9: 136,
  10: 20,
  11: 87,
};
const prng = new Uint8Array(Object.values(ranprng));

const jsondata = JSON.stringify(data);

const dataUnit = encoder.encode(jsondata);

function YxFz8G7(M1Q84Dd, BnZ5uk, Tt9BKd) {
  const otjSbB = new Uint32Array(3);
  for (let _D5vEiq = 0; _D5vEiq < 12; _D5vEiq++)
    otjSbB[_D5vEiq >> 2] |= BnZ5uk[_D5vEiq] << ((_D5vEiq & 3) * 8);
  const Ki4G8Y2 = new (D3b1Csk(Orfn5W(bgeGMeN[0x15ab])))([
      bgeGMeN[0x15af],
      bgeGMeN[0x15b0],
      bgeGMeN[0x15b1],
      bgeGMeN[0x15b2],
      M1Q84Dd[bgeGMeN[0x0]],
      M1Q84Dd[bgeGMeN[0x4]],
      M1Q84Dd[bgeGMeN[0x3]],
      M1Q84Dd[bgeGMeN[0x7]],
      M1Q84Dd[bgeGMeN[0xa]],
      M1Q84Dd[bgeGMeN[0x726]],
      M1Q84Dd[bgeGMeN[0x6]],
      M1Q84Dd[bgeGMeN[0xe]],
      Tt9BKd >>> bgeGMeN[0x0],
      otjSbB[bgeGMeN[0x0]],
      otjSbB[bgeGMeN[0x4]],
      otjSbB[bgeGMeN[0x3]],
    ]),
    HQNejDO = new (D3b1Csk(Orfn5W(bgeGMeN[0x15ab])))(Ki4G8Y2);
  for (let _D5vEiq = bgeGMeN[0x0]; _D5vEiq < bgeGMeN[0x18d]; _D5vEiq++)
    (AHeVEJ(HQNejDO, bgeGMeN[0x0], bgeGMeN[0xa], bgeGMeN[0x8], bgeGMeN[0x1b]),
      AHeVEJ(
        HQNejDO,
        bgeGMeN[0x4],
        bgeGMeN[0x726],
        bgeGMeN[0x15ac],
        bgeGMeN[0xf],
      ),
      AHeVEJ(
        HQNejDO,
        bgeGMeN[0x3],
        bgeGMeN[0x6],
        bgeGMeN[0x1ad],
        bgeGMeN[0x10],
      ),
      AHeVEJ(
        HQNejDO,
        bgeGMeN[0x7],
        bgeGMeN[0xe],
        bgeGMeN[0x86f],
        bgeGMeN[0x11],
      ),
      AHeVEJ(
        HQNejDO,
        bgeGMeN[0x0],
        bgeGMeN[0x726],
        bgeGMeN[0x1ad],
        bgeGMeN[0x11],
      ),
      AHeVEJ(
        HQNejDO,
        bgeGMeN[0x4],
        bgeGMeN[0x6],
        bgeGMeN[0x86f],
        bgeGMeN[0x1b],
      ),
      AHeVEJ(HQNejDO, bgeGMeN[0x3], bgeGMeN[0xe], bgeGMeN[0x8], bgeGMeN[0xf]),
      AHeVEJ(
        HQNejDO,
        bgeGMeN[0x7],
        bgeGMeN[0xa],
        bgeGMeN[0x15ac],
        bgeGMeN[0x10],
      ));
  const wKQKAw7 = new (D3b1Csk(Orfn5W(bgeGMeN[0xbb2])))(bgeGMeN[0xb92]);
  for (let _D5vEiq = bgeGMeN[0x0]; _D5vEiq < bgeGMeN[0x9]; _D5vEiq++) {
    const CPnUgab = (HQNejDO[_D5vEiq] + Ki4G8Y2[_D5vEiq]) >>> bgeGMeN[0x0];
    qTtpS3n(
      (wKQKAw7[_D5vEiq * bgeGMeN[0xa]] = CPnUgab & bgeGMeN[0xd]),
      (wKQKAw7[_D5vEiq * bgeGMeN[0xa] + bgeGMeN[0x4]] =
        (CPnUgab >>> bgeGMeN[0x8]) & bgeGMeN[0xd]),
      (wKQKAw7[_D5vEiq * bgeGMeN[0xa] + bgeGMeN[0x3]] =
        (CPnUgab >>> bgeGMeN[0x9]) & bgeGMeN[0xd]),
      (wKQKAw7[_D5vEiq * bgeGMeN[0xa] + bgeGMeN[0x7]] =
        (CPnUgab >>> bgeGMeN[0x8d1]) & bgeGMeN[0xd]),
    );
  }
  return wKQKAw7;
}

function x5MEuK() {
  var ZQhyiTB = 3643071059649206;
  if (ZQhyiTB === 3643071059649206) {
    return YxFz8G7(...arguments);
  } else {
    while (true) {}
  }
}

function EskcWBR(M1Q84Dd, BnZ5uk, Tt9BKd, otjSbB = 1) {
  const _D5vEiq = new Uint8Array(M1Q84Dd.length);
  for (let Ki4G8Y2 = 0; Ki4G8Y2 < M1Q84Dd["length"]; Ki4G8Y2 += 64) {
    const HQNejDO = x5MEuK(BnZ5uk, Tt9BKd, otjSbB + (Ki4G8Y2 >> 6));
    for (
      let wKQKAw7 = 0;
      wKQKAw7 < 64 && Ki4G8Y2 + wKQKAw7 < M1Q84Dd["length"];
      wKQKAw7++
    )
      _D5vEiq[Ki4G8Y2 + wKQKAw7] =
        M1Q84Dd[Ki4G8Y2 + wKQKAw7] ^ HQNejDO[wKQKAw7];
  }
  return _D5vEiq;
}

function MKTulQQ(a, b, c) {
  var GZuuS_4 = 6643361483149716;
  if (GZuuS_4 === 6643361483149716) {
    return EskcWBR(...arguments);
  } else {
    while (true) {}
  }
}

console.log(MKTulQQ(dataUnit, key, prng));
