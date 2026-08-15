const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const express = require('express');
const fpjsPath = path.join(__dirname, 'loader_v3.12.2.js');

async function startTempServer() {
  const app = express();
  app.use(express.static(__dirname));
  const server = await new Promise(resolve => {
    const s = app.listen(0, () => resolve(s)); // Port ngẫu nhiên
  });
  const port = server.address().port;
  return { server, url: `http://localhost:${port}/blank.html` };
}

// Hàm tạo visitorID giả (mỗi lần khác nhau)
async function generateFakeVisitorID() {
  const { server, url } = await startTempServer();

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--disable-features=IsolateOrigins,site-per-process',
      '--allow-running-insecure-content',
      '--disable-blink-features=AutomationControlled',
    ],
  });

  const page = await browser.newPage();

  try {
    // === GIẢ LẬP THÔNG TIN TRÌNH DUYỆT ===
    const fakeUserAgent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36`;
    const fakeViewport = { width: 1920 + Math.floor(Math.random() * 400), height: 1080 + Math.floor(Math.random() * 200) };

    await page.setUserAgent(fakeUserAgent);
    await page.setViewport(fakeViewport);

    // Giả lập hardwareConcurrency, deviceMemory + thêm random thông số khác
    await page.evaluateOnNewDocument(() => {
      // Random hardware
      Object.defineProperty(navigator, 'hardwareConcurrency', { get: () => 2 + Math.floor(Math.random() * 16) }); // 2-18 lõi
      Object.defineProperty(navigator, 'deviceMemory', { get: () => 2 + Math.floor(Math.random() * 16) }); // 2-18 GB
      Object.defineProperty(navigator, 'maxTouchPoints', { get: () => Math.floor(Math.random() * 5) }); // 0-4

      // Random languages 
      const languages = [
        ['en-US', 'en'],
        ['vi-VN', 'vi', 'en-US'],
        ['fr-FR', 'fr', 'en'],
        ['ja-JP', 'ja'],
        ['zh-CN', 'zh', 'en-US']
      ];
      Object.defineProperty(navigator, 'languages', { get: () => languages[Math.floor(Math.random() * languages.length)] });

      // Random platform (OS)
      const platforms = ['Win32', 'MacIntel', 'Linux x86_64', 'Linux armv8l', 'iPad'];
      Object.defineProperty(navigator, 'platform', { get: () => platforms[Math.floor(Math.random() * platforms.length)] });

      // Random timezone
      const timezones = ['Asia/Ho_Chi_Minh', 'America/New_York', 'Europe/London', 'Asia/Tokyo', 'Australia/Sydney'];
      Intl.DateTimeFormat = class extends Intl.DateTimeFormat {
        resolvedOptions() {
          const options = super.resolvedOptions();
          options.timeZone = timezones[Math.floor(Math.random() * timezones.length)];
          return options;
        }
      };

      // Random fonts 
      document.fonts = new Set();
      const fakeFonts = ['Arial', 'Times New Roman', 'Courier New', 'Verdana', 'Tahoma', 'Georgia', 'Palatino', 'Comic Sans MS'];
      for (let i = 0; i < 5 + Math.floor(Math.random() * 5); i++) { // Random 5-10 fonts
        document.fonts.add({ family: fakeFonts[Math.floor(Math.random() * fakeFonts.length)] });
      }

      // Random WebGL
      const vendors = ['Google Inc.', 'NVIDIA Corporation', 'ATI Technologies Inc.', 'Intel Open Source Technology Center'];
      const renderers = ['ANGLE (Intel, Intel(R) UHD Graphics 630, OpenGL 3.3)', 'WebKit WebGL', 'Mesa DRI Intel(R) UHD Graphics'];
      const gl = document.createElement('canvas').getContext('webgl');
      if (gl) {
        Object.defineProperty(gl, 'getParameter', {
          value: (param) => {
            if (param === 37445) return vendors[Math.floor(Math.random() * vendors.length)]; // VENDOR
            if (param === 37446) return renderers[Math.floor(Math.random() * renderers.length)]; // RENDERER
            return gl.getParameter(param);
          }
        });
      }
    });

    fs.writeFileSync(path.join(__dirname, 'blank.html'), `<!DOCTYPE html><html><body></body></html>`);

    // Mở trang
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 10000 });
    const fpjsScript = fs.readFileSync(fpjsPath, 'utf8');
    await page.evaluate(fpjsScript);
    const visitorId = await page.evaluate(async () => {
      try {
        // const fp = await __fpjs_p_l_b.load({ apiKey: '8lwJ4LgpUHbTw5MJTsgQ' });
        const fp = await __fpjs_p_l_b.load();
        const result = await fp.get();
        return result.visitorId;
      } catch (e) {
        return null;
      }
    });

    console.log('VisitorID giả:', visitorId);
    return visitorId;

  } catch (error) {
    console.error('Lỗi:', error.message);
    return null;
  } finally {
    await browser.close();
    server.close();
    try { fs.unlinkSync('blank.html'); } catch {}
  }
}

// 2 Cách Chạy

// === CHẠY LIÊN TỤC (ví dụ: mỗi 2 giây) ===
setInterval(async () => {
  await generateFakeVisitorID();
}, 2000);

// === HOẶC GỌI KHI CẦN ===
// generateFakeVisitorID(); // Lần đầu


// Anh Khải Coder | Kimidev | https://t.me/KimidevCommunityy