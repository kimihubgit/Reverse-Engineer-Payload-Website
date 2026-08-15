const crypto = require("crypto");

const i = {
  ApiKey: "9F89slAtzLnjw5PqRes8JtVPd9a7SGOa9p5ZEx2G0sV6",
};

function signCatcha() {
  const getcapthca = "aae";
  const key = "12v5ea";
  const us = key + getcapthca;
  const _ = i.ApiKey ? i.ApiKey : "d";
  const t = us.toLowerCase() + _;
  return crypto.createHash("md5").update(t).digest("hex");
}
console.log(signCatcha());

function signExit(user) {
  const WebsiteId = "AaE";
  const key = "2v5ea";
  const us = user + key + WebsiteId;

  const _ = i.ApiKey ? i.ApiKey : "d";
  const t = us.toLowerCase() + _;

  return crypto.createHash("md5").update(t).digest("hex");
}
const e = "asd2342345";
console.log(signExit(e));

function signCheckAndSendConfirmCode() {
  const WebsiteId = "AaE";
  const key = "2v5ea";
  const us = "+84" + key + WebsiteId;

  const _ = i.ApiKey ? i.ApiKey : "d";
  const t = us.toLowerCase() + _;

  return crypto.createHash("md5").update(t).digest("hex");
}
console.log(signCheckAndSendConfirmCode());

function signRegister(us) {
  const _ = i.ApiKey ? i.ApiKey : "d";
  const t = us.toLowerCase() + _;
  console.log(t);

  return crypto.createHash("md5").update(t).digest("hex");
}

let catchakey = "2ld1cwdwhxd/9ktagvcfya==";
let CountryCode = "+84";
let CountryCodeForZalo = "+84";
let Fingerprint = "b8336850dfacadf5d04f4082229b24a9";
let Name = "sadfsdf qeqeqe";
let Password = "asd2342345";
let captcha = "2222";

const data =
  e +
  catchakey +
  CountryCode +
  CountryCodeForZalo +
  Fingerprint +
  "2v5ea" +
  Name +
  Password +
  captcha +
  "AaE";
console.log(signRegister(data));
