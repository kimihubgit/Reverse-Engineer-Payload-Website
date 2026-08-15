const fs = require("fs");
const https = require("https");
const crypto = require("crypto").webcrypto; // Web Crypto API trong Node.js

const AUTH_TOKEN =
  "YB37WsFK8pn6/AMebGOZhxhXqv8WMhyLSxKg7QeQSicbd6Ynh2QurKJwOcEEIebiFDipddneRzACZS+evjTAzPTtCvmaEC5hNXFyjGPMJb1yI4lLRkleOmif9PQ0/fZ3xmrZn0tOSUi2ayKT4ju9AFI7zRh+nKbdITFbRbd6iCY7YZGD9HlVx8GyPLqu1lV38W/yZ7DLw8m+V4T5SnQyC2Q=";

const DOMAINS_FILE = "domains.txt";
const PROCESSED_FILE = "processed_domains.txt";
const EMAILS_FILE = "emails.txt";

// ====================== CRYPTO FUNCTIONS ======================

const bt = (e) => {
  const t = "abcdefghijklmnopqrstuvwxyz0123456789";
  let n = "";
  const a = new Uint8Array(e);
  crypto.getRandomValues(a);
  for (const s of a) n += t[s % 36];
  return n;
};

const Ct = (e) => ("" === e ? "" : Ct(e.substring(1)) + e.charAt(0));

const St = async (e) => {
  const t = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(e));
  return Array.from(new Uint8Array(t))
    .map((e) => e.toString(16).padStart(2, "0"))
    .join("");
};

const kt = async (e, t, n) => {
  const a = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(t),
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"],
  );

  const s = new TextEncoder().encode(n);
  const r = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv: s },
    a,
    new TextEncoder().encode(e),
  );

  return btoa(String.fromCharCode(...new Uint8Array(r)));
};

const Et = async (e) => {
  const t = AUTH_TOKEN;
  const n = t.substring(0, 16);
  const a = t.substring(0, 32);
  return await kt(e, a, n);
};

// ====================== API REQUEST ======================

async function searchDehashed(r0, r1, r2, page = 1) {
  const payload = {
    r0,
    r1,
    r2,
    regex: false,
    page,
    wildcard: false,
    deduplicate: true,
  };

  const options = {
    method: "POST",
    headers: {
      accept: "*/*",
      "content-type": "application/json",
      authorization: `Bearer ${AUTH_TOKEN}`,
      origin: "https://app.dehashed.com",
      referer: "https://app.dehashed.com/",
      "user-agent":
        "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36",
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(
      "https://web-api.dehashed.com/search",
      options,
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(new Error("Invalid JSON response"));
          }
        });
      },
    );

    req.on("error", reject);
    req.write(JSON.stringify(payload));
    req.end();
  });
}

// ====================== MAIN LOGIC ======================

async function processDomain(domain) {
  console.log(`🔍 Đang xử lý domain: ${domain}`);

  try {
    const [l, u, c] = await Promise.all([Et(domain), Et("domain"), bt(32)]);
    const o = await St(l);
    const d = `${c}${o}${Ct(c)}`;

    let page = 1;
    let hasMore = true;
    let totalEmails = 0;
    const emailSet = new Set();

    while (hasMore) {
      console.log(`📄 Đang lấy trang ${page}...`);

      const result = await searchDehashed(l, u, d, page);

      if (result.error) {
        if (result.error.includes("Rate limit")) {
          console.log("⏳ Rate limit exceeded. Đợi 30 giây...");
          await new Promise((r) => setTimeout(r, 30000));
          continue;
        } else if (result.error.includes("Pagination Limit")) {
          console.log("🔚 Đạt giới hạn phân trang.");
          break;
        } else {
          console.error("❌ Lỗi API:", result.error);
          break;
        }
      }

      let pageEmails = 0;

      if (result.results && result.results.length > 0) {
        const newEmails = [];

        for (const item of result.results) {
          if (item.email && Array.isArray(item.email)) {
            for (const email of item.email) {
              if (email && !emailSet.has(email)) {
                emailSet.add(email);
                newEmails.push(email);
                pageEmails++;
                totalEmails++;
              }
            }
          }
        }

        if (newEmails.length > 0) {
          fs.appendFileSync(EMAILS_FILE, newEmails.join("\n") + "\n");
          console.log(`💾 Đã lưu ${pageEmails} email mới từ trang ${page}`);
        }
      }

      console.log(
        `✅ Trang ${page} hoàn thành | ${pageEmails} email mới | Tổng: ${totalEmails}`,
      );

      hasMore = result.next_page === true;
      if (result.total_results < 20) hasMore = false;

      page++;

      // Nghỉ nhẹ giữa các trang để tránh rate limit
      if (hasMore) await new Promise((r) => setTimeout(r, 3000));
    }

    fs.appendFileSync(PROCESSED_FILE, domain + "\n");

    let domains = fs
      .readFileSync(DOMAINS_FILE, "utf8")
      .split("\n")
      .map((d) => d.trim())
      .filter(Boolean);

    domains = domains.filter((d) => d !== domain);
    fs.writeFileSync(
      DOMAINS_FILE,
      domains.join("\n") + (domains.length ? "\n" : ""),
    );

    console.log(`🎯 Hoàn tất domain ${domain} | Tổng email: ${totalEmails}\n`);
  } catch (err) {
    console.error(`❌ Lỗi khi xử lý ${domain}:`, err.message);
  }
}

async function main() {
  if (!fs.existsSync(DOMAINS_FILE)) {
    console.error(`❌ Không tìm thấy file ${DOMAINS_FILE}`);
    return;
  }

  let domains = fs
    .readFileSync(DOMAINS_FILE, "utf8")
    .split("\n")
    .map((d) => d.trim())
    .filter(Boolean);

  for (const domain of domains) {
    await processDomain(domain);
    // Nghỉ một chút giữa các domain để tránh rate limit
    await new Promise((r) => setTimeout(r, 3000));
  }

  console.log("🎉 Hoàn thành toàn bộ danh sách domain!");
}

main().catch(console.error);
