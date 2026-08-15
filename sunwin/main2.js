const crypto = require("crypto");
const fs = require("fs");

// ==================== CẤU HÌNH ====================
const PUBLIC_KEY_PEM = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4/a2G+ej+rrtqiebocjJ
pmAsRJFQrKj6+N/XV8hwX+TE/0ZWf9H/FjlqWO9EPjvaRLr3NvCRRIwSeBAoqVg/
sj+gMgmzNAkWsSoOj5t78vGDC5+LrfcirqxQhYAyRm71CyVJzXx4//a1NjJNqkk3
L6O+iNJzF2u7zDoAjjrdMh98LfCU2TjkjzPU3G2YCGBT0+jzJhzDliC8oCVPocfN
vWh0MKvJyvAqXpUKolc0w66DBArlHoKtPvnEOnvjg8cjUZtWuy2VU5h3SzalIOVU
i/r1b9PGNiSWyNVj4S+J2jtBOMGlUHQ9yB2Em1bMuHCyRaPOhMuN2VB+j5TBXMR5
CwIDAQABo5yaOrfBPVZ6vMY4UT7rH7aPLzTECUoe
-----END PUBLIC KEY-----`;

// ==================== HÀM CHÍNH ====================
async function encryptPayload(payloadObj) {
  // 1. Convert object thành string
  const plaintext = JSON.stringify(payloadObj);

  // 2. Tạo AES Key ngẫu nhiên (32 bytes = AES-256)
  const aesKey = crypto.randomBytes(32);
  const iv = crypto.randomBytes(16); // IV 16 bytes

  // 3. Mã hóa dữ liệu bằng AES-256-CBC
  const cipher = crypto.createCipheriv("aes-256-cbc", aesKey, iv);
  let encrypted = cipher.update(plaintext, "utf8", "hex");
  encrypted += cipher.final("hex");

  // 4. Mã hóa AES Key bằng RSA Public Key (RSA-OAEP)
  const publicKey = crypto.createPublicKey({
    key: PUBLIC_KEY_PEM,
    format: "pem",
    type: "spki",
  });

  const encryptedKey = crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    aesKey,
  );

  // 5. Tạo object kết quả
  const result = {
    db: encrypted, // Data Encrypted (AES)
    cc: iv.toString("hex"), // IV (Counter / Initialization Vector)
    vl: encryptedKey.toString("hex"), // Value (AES Key được mã hóa bằng RSA)
  };

  // 6. Convert thành string base64 để truyền param "data"
  const finalData = Buffer.from(JSON.stringify(result)).toString("base64");

  console.log("✅ Mã hóa thành công!");
  console.log("Data param:", finalData);

  return finalData;
}

// ==================== SỬ DỤNG ====================

async function main() {
  const payload = {
    type: "login",
    username: "vkhai2603",
    password: "asdasd23423",
    brand: "sun.win",
    deviceId: "",
    platformId: 4,
    timestamp: "1778228887767",
    codeChallenge: "GICYRG90EHdHVoogtVlpnuyLmjdEBAX-EPkeYfuWpWo",
    clientId: "sun.win",
    redirectUri: "https://web.sunwin.mw/callback.html",
    origin: "https://web.sunwin.mw",
  };

  const dataParam = await encryptPayload(payload);

  console.log("\nURL mẫu:");
  console.log(`https://login.sunwin.mw/auth/authorize?data=${dataParam}`);
}

main().catch(console.error);
