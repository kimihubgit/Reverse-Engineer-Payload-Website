const crypto = require("crypto");
function sign(e, t, r, n) {
  let i,
    o = String(Math.floor(Date.now() / 1e3)),
    a =
      ((i = new Uint8Array(16)),
      crypto.getRandomValues(i),
      Array.from(i, (e) => e.toString(16).padStart(2, "0")).join("")),
    c = {
      promo_code: t,
      player_id: String(e).trim().toLowerCase(),
      timestamp: o,
      nonce: a,
    };

  const rawString = Object.keys(c)
    .sort()
    .map((key) => {
      const value = c[key] !== null && c[key] !== undefined ? c[key] : "";
      return `${key}=${String(value)}`;
    })
    .join("&");
  l = {
    timestamp: o,
    nonce: a,
    sign: crypto
      .createHmac("sha256", "att.code.free-code.f8-bet@2030$")
      .update(rawString)
      .digest("hex"),
    captchaCode: r || "",
    token: n || "",
  };
  return l;
}

let name = "sdsdfsdf";
let code = "234234";
let captcha =
  "0cAFcWeA5AVPEcL0Z3_fcOIzb10mjWxi0GHpzcjM-uGKKSWs1JJUF4U9FdM4i7rFREiPQnkDLjp4XpKPM9ZriLgrg2QtLnlpp_3ECH3e-juAG0YLDZPpjd0qZhAMFxLnaNEdg1Ouo2HkLTQOdX6PMMcHJR4eIHBXk_nyiQBPm_1udUTkGAOa_HYnXn9xvPWh-OAUunoDyGVESd1DSAKq1MvImkO-d3OULRCiCzosbCFVpN6nZSJehD3G3pAuiGBICWM6uHRJUOhRb-gPws7nWBurLM5jeeskxbx5l24mTbal4jRONrQK4PgnnNa4z0_rdqEeZwM8fX0Nrs1c7FUo0ijTUEN1-17b2GSpoWLOXQqDRswphoNs8poZIovm_Gv-qx79E6rxog7YlwiF9UMF61S31DKUMxcIXKXBYXgPl1OgHVYL9uVEzNNwhPcxI4XyZA441K7m52MDvjecCqjiIuFZSs7MDE0zgMUPAeEMuhnxzi2HiXEUdJbVvtrI1N5T6CYLXkPjlk4KEQt4DklzZvmV7i1dIm70E2ittu-momkX3z13C51IgTVJcjn46p1yD6cuiXz-w_o00mpyjCnI00WJ9BrONntAk1Ygjx5RxB3_bg6vQPX8jsOqNbwNhF9rb907VHro4e1Hwq9QOmmtPpREADDYkXZRfJkwyMAgH5lvroy5dDbJwICTI8Dx0zf_HfN8HhWHlKVTXvmt0oa4Mr0JTe-h63xZVPwirfu4MyqLeXkakrNEg_Bx54H48e7G_f7oSISafiJy95srVpvYl7KlUXZX4LG3t0apnQ9WoJtSx8GQIvJhituORINVh6mfTOwoYXUQYeMJfCerWeMHl1_Cg3Q5CR2dMnv4jD5ypTHocXsSKc1XIOrPwAHGJSE2DwOSUXznnTwY3lWuGetOkt7p3K4l_DKc-gNsWwO-f9pwXpbAtUu1KQeEl4kiF462vvAWKbTwYUs_HB96tYUwJdhYzDUYl0ChOWpSGndza195mBrh8TH1FpzCNmJPqz5CkEvVvo-Anikhf8bPI-ocyef96x95VhhXwX9KYEvadSbClWXsWS2WoM_hQY9jk7pB2armBQPqXw6czPxTM1i8Swow4b2sfFDIQJOY8o-XxTmVLL4tQasU9-RhPsGHCPvBpANVl4REexMaoTPL8QQ687JG3cM4O74gIk1OM4dNFrInVeDfjt2YYm2eCNh-PnkNUhMxh_RKGhxPBtI9qb0yg0tkcpfZLZYMJGhlW5bnSTbtxNa56VSQcKzXawhizWGff9yOwiZfeMPwf-zICetIxwbOrCc0gO-qsKxzYgq1vFkUv-xQqDhOOQ14xgqB22asyrgmYG50VgFKux5hEm17WhMmZTl04mdF7yGBVuBw5Puu9c1miK0CE5LryBkvOfZvJYRLEZ5DbfN2TuEXyoXSukRyc7tPmjFWUzM1jchLpAMjhmhI_kUuyCCSDh86I0NkQXqvL5iv5rHdrT8RRd7d-kgGVloLsQkJIVHeWL9FRdAU1RCzzGuq8skjaRKQV204ZKHpWxz-3DB373lHqTayVtP8vpvncUN-jdfBQZweBrdgB5izdxVDV7iXwQ0HpYil1-fHYq6o1p3IWjsMxE6Jpsj1Btt2JCyva6L3CTQ2CLn2ZJXV3rEuyISyEHRZkHR6Gi_zAscfqGy2J_UdK3xe0ePwFabez9LxscoJmoJ8tDPNPE0aRKiSr-h18PGCj58o-5WhPKiuTnlafpVXGlFohZ7ebVlxSwoYeyPV-2HFkvhogEqhKxL73zlYGKS5oqrze69ABv0NE8v-IvUafL6Wbp0wR2rqWgA6y9JiWXKL3IIPJ3zjVF24lrdfHatMt6pcj4aD460ZRk-nyfGn3J3t8vgjJeQaBQp0usQxYz7eqYHBK9nYozdRqci22uI-Ql1WSRXUfA4qtl8UvPVD5MWlJX2-Baolc3JWXmSnMrvZaHFSCGDCT5_t--qJKA68CVaMLfQ6Kw-yffB-nrn1psAKFeOBkOecj6If8PabwxH8f6ReG0P5EjQafaqH08-ot6VQrW3fd3pWiLDJ4HWmtIblk4I2ZfDKgAA9NJjwvo3eyFFrFtR7hRO1jQnE33d2UT8n0CsWTcs6nBrDrS";
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYXAiOiJyZWNhcHRjaGFfdjIiLCJzaWQiOiI2MzJmYmZmMy04MDQzLTQ4NmUtYjRlYy0yODY3ZTdiOTkwOTciLCJ2IjoxLCJpYXQiOjE3NzgzMzI2MTIsImV4cCI6MTc3ODMzMjc5Mn0.rzmRSH8pUgiOotLrJ8PF5ZPbZIXCzDMkiPn6T1igl9k";
console.log(sign(name, code, captcha, token));
