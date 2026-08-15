const puppeteer = require('puppeteer');
const express = require('express');
const fs = require('fs');
const path = require('path');

// Đường dẫn đến file loader_v3.12.2.js
const fpjsPath = path.join(__dirname, 'loader_v3.12.2.js');

// Hàm chính để lấy visitorID
async function getVisitorId() {
  // Tạo server Express tạm thời
  const app = express();
  app.use(express.static(__dirname)); // Serve các file tĩnh (như index.html)

  const server = app.listen(3000, () => {
    console.log('Server tạm chạy tại http://localhost:3000');
  });

  // Khởi động trình duyệt giả
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });
  const page = await browser.newPage();

  try {
    // Navigate đến trang từ server local[](http://localhost:3000/index.html)
    await page.goto('http://localhost:3000/index.html');

    // Đọc và inject file JS vào page
    const fpjsScript = fs.readFileSync(fpjsPath, 'utf8');
    await page.evaluate(fpjsScript);

    // Chạy hàm load và get visitorID
    const visitorId = await page.evaluate(async () => {
      const fp = await __fpjs_p_l_b.load({ apiKey: '8lwJ4LgpUHbTw5MJTsgQ' });
      const result = await fp.get();
      return result.visitorId;
    });

    console.log('VisitorID từ trình duyệt giả:', visitorId);
    return visitorId;
  } catch (error) {
    console.error('Lỗi khi lấy visitorID:', error.message);
    return null;
  } finally {
    await browser.close(); // Đóng browser
    server.close(); // Tắt server tạm
  }
}

// Chạy hàm
getVisitorId();