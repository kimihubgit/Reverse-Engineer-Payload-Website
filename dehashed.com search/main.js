const auth_token =
  "YB37WsFK8pn6/AMebGOZhxhXqv8WMhyLSxKg7QeQSicbd6Ynh2QurKJwOcEEIebiFDipddneRzACZS+evjTAzPTtCvmaEC5hNXFyjGPMJb1yI4lLRkleOmif9PQ0/fZ3xmrZn0tOSUi2ayKT4ju9AFI7zRh+nKbdITFbRbd6iCY7YZGD9HlVx8GyPLqu1lV38W/yZ7DLw8m+V4T5SnQyC2Q=";

const bt = (e) => {
    const t = "abcdefghijklmnopqrstuvwxyz0123456789";
    let n = "";
    const a = new Uint8Array(e);
    crypto.getRandomValues(a);
    for (const s of a) n += t[s % 36];
    return n;
  },
  Ct = (e) => ("" === e ? "" : Ct(e.substring(1)) + e.charAt(0)),
  St = async (e) => {
    const t = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(e),
    );
    return Array.from(new Uint8Array(t))
      .map((e) => e.toString(16).padStart(2, "0"))
      .join("");
  },
  kt = async (e, t, n) => {
    const a = await (async (e) =>
        await crypto.subtle.importKey(
          "raw",
          new TextEncoder().encode(e),
          {
            name: "AES-GCM",
            length: 256,
          },
          !0,
          ["encrypt", "decrypt"],
        ))(t),
      s = new TextEncoder().encode(n),
      r = await crypto.subtle.encrypt(
        {
          name: "AES-GCM",
          iv: s,
        },
        a,
        new TextEncoder().encode(e),
      );
    return btoa(
      new Uint8Array(r).reduce((e, t) => e + String.fromCharCode(t), ""),
    );
  },
  Et = async (e) => {
    const t = auth_token,
      n = t.substring(0, 16),
      a = t.substring(0, 32);
    return await kt(e, a, n);
  };

const [l, u, c] = await Promise.all([
  Et("thinktankfinancial.com"),
  Et("domain"),
  bt(32),
]);

const o = await St(l);
const d = `${c}${o}${Ct(c)}`;

const obj = { r0: l, r1: u, r2: d };
console.log(obj);

async function searchDomain(domain) {
  let page = 1;
  let hasMore = true;

  console.log(`\n[*] Đang xử lý domain: ${domain}`);

  while (hasMore) {
    try {
      const [l, u, c] = await Promise.all([Et(domain), Et("domain"), bt(32)]);
      const o = await St(l);
      const d = `${c}${o}${Ct(c)}`;

      const payload = {
        r0: l,
        r1: u,
        r2: d,
        regex: false,
        page: page,
        wildcard: false,
        deduplicate: true,
      };

      const response = await fetch("https://web-api.dehashed.com/search", {
        method: "POST",
        headers: {
          authorization: `Bearer ${AUTH_TOKEN}`,
          "content-type": "application/json",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          referer: "https://app.dehashed.com/",
          origin: "https://app.dehashed.com",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      // 1. Xử lý Rate Limit
      if (data.error && data.error.includes("Rate limit")) {
        console.warn(`[!] Rate limit! Nghỉ 30s rồi thử lại trang ${page}...`);
        await new Promise((res) => setTimeout(res, 30000));
        continue; // Thử lại trang hiện tại
      }

      // 2. Xử lý giới hạn phân trang của API
      if (data.error && data.error.includes("Pagination Limit")) {
        console.log(`[-] Đã chạm giới hạn phân trang của Dehashed.`);
        break;
      }

      // 3. Xử lý kết quả trả về
      if (data.results && data.results.length > 0) {
        const emails = data.results.flatMap((item) => item.email || []);
        if (emails.length > 0) {
          await fs.appendFile("emails_result.txt", emails.join("\n") + "\n");
          console.log(`[+] Trang ${page}: Tìm thấy ${emails.length} email.`);
        }
      } else {
        console.log(`[.] Trang ${page}: Không có kết quả.`);
        break;
      }

      // 4. Kiểm tra xem có trang tiếp theo không
      if (data.next_page === true && data.total_results > 20) {
        page++;
        await new Promise((res) => setTimeout(res, 1000)); // Delay nhẹ tránh spam
      } else {
        hasMore = false;
      }
    } catch (err) {
      console.error(`[!] Lỗi kết nối: ${err.message}. Thử lại sau 5s...`);
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
}

async function main() {
  try {
    // Đọc danh sách domain
    let content = await fs.readFile("domains.txt", "utf8");
    let domains = content.split(/\r?\n/).filter((d) => d.trim() !== "");

    if (domains.length === 0) {
      console.log("File domains.txt trống.");
      return;
    }

    while (domains.length > 0) {
      const currentDomain = domains[0];

      // Thực hiện search và lưu email
      await searchDomain(currentDomain);

      // Sau khi xong, cập nhật file
      domains.shift(); // Xóa domain vừa chạy xong khỏi mảng
      await fs.writeFile("domains.txt", domains.join("\n")); // Cập nhật lại file nguồn
      await fs.appendFile("domains_done.txt", currentDomain + "\n"); // Lưu vào file đã xong

      console.log(`[v] Đã hoàn thành và xóa domain: ${currentDomain}`);
    }

    console.log("\n>>> TẤT CẢ ĐÃ HOÀN THÀNH <<<");
  } catch (err) {
    console.error("Lỗi hệ thống:", err);
  }
}

main();
