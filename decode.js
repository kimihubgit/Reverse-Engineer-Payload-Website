const http = require('http');
const https = require('https');
const readline = require('readline');
const chalk = require('chalk');
const { performance } = require('perf_hooks');
const boxen = require('boxen');

// ===== FAKE HACK LOADING =====
async function fakeHack() {
  const chuoi = [
    "Đang quét ổ C:/Users...",
    "Đang tải dữ liệu Documents...",
    "Đang kết nối server 103.28.56.77...",
    "Đang upload dữ liệu cá nhân...",
    "Upload -> 25%",
    "Upload -> 67%",
    "Upload -> 99%",
    "Hoàn tất! Máy của bạn đã bị hack! 😈"
  ];

  for (let i = 0; i < chuoi.length; i++) {
    process.stdout.write(chalk.redBright("💀 " + chuoi[i] + "\n"));
    await new Promise(res => setTimeout(res, 100));
  }

  console.log(
    boxen(
      chalk.red.bold("⚠️ Máy của bạn đã bị lấy dữ liệu!\n") +
      chalk.yellow("💀 Dữ liệu hệ thống đang bị sao chép...."),
      { padding: 1, borderColor: 'red', title: 'FAKE HACK', titleAlignment: 'center' }
    )
  );
}

// Thời gian theo giờ VN
function thoiGianVN() {
  const vnOffset = 7 * 60 * 60 * 1000;
  const time = new Date(Date.now() + vnOffset);
  return time.toISOString().replace('T', ' ').slice(0, 19);
}

// Hàm kiểm tra web CHUẨN
async function kiemTraWeb(urlString) {
  return new Promise((resolve, reject) => {
    let url;
    try {
      url = new URL(urlString);
    } catch {
      return reject(boxen(
        chalk.red.bold('❌ URL không hợp lệ: ') + chalk.white(urlString),
        { padding: 1, borderColor: 'red', title: 'LỖI CÚ PHÁP', titleAlignment: 'center' }
      ));
    }

    const protocol = url.protocol === 'https:' ? https : http;
    const batDau = performance.now();

    const req = protocol.request({
      method: 'GET',
      hostname: url.hostname,
      path: url.pathname + url.search,
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
      timeout: 5000
    }, res => {
      const time = (performance.now() - batDau).toFixed(2);
      const status = res.statusCode;
      const type = res.headers['content-type'] || 'Không rõ';

      let trangThai = '';
      if (status >= 200 && status < 300) trangThai = chalk.green.bold('✅ OK');
      else if (status >= 300 && status < 400) trangThai = chalk.yellow.bold('↪️ CHUYỂN HƯỚNG');
      else if (status >= 400 && status < 500) trangThai = chalk.red.bold('🚫 LỖI CLIENT');
      else if (status >= 500) trangThai = chalk.bgRed.white.bold('💥 SERVER ERROR');
      else trangThai = chalk.gray('🤔 KHÔNG RÕ');

      const hop = boxen(
        `${chalk.bold('🕒 Thời gian:')} ${thoiGianVN()}\n` +
        `${chalk.bold('🌐 URL:')} ${chalk.cyan(urlString)}\n` +
        `${chalk.bold('📶 Trạng thái:')} ${trangThai} ${chalk.white(`(HTTP ${status})`)}\n` +
        `${chalk.bold('⚡ Phản hồi:')} ${chalk.magenta(`${time}ms`)}\n` +
        `${chalk.bold('📦 Nội dung:')} ${chalk.blue(type)}`,
        {
          padding: 1,
          borderColor: status >= 500 ? 'red' : status >= 400 ? 'yellow' : 'green',
          title: 'KIỂM TRA WEBSITE',
          titleAlignment: 'center',
          margin: 1
        }
      );

      resolve(hop);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(boxen(
        chalk.red('⏰ TIMEOUT sau 5 giây\n') + chalk.white(`URL: ${urlString}`),
        { padding: 1, borderColor: 'red', title: 'KHÔNG PHẢN HỒI', titleAlignment: 'center' }
      ));
    });

    req.on('error', err => {
      reject(boxen(
        chalk.red('❌ LỖI KẾT NỐI\n') +
        chalk.white(`URL: ${urlString}\nChi tiết: ${err.message}`),
        { padding: 1, borderColor: 'red', title: 'LỖI MẠNG', titleAlignment: 'center' }
      ));
    });

    req.end();
  });
}

// Main
async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // ====== NHẬP KEY BẢO MẬT ======
  const key1 = await new Promise(resolve => {
    rl.question(chalk.red.bold('🔑 Nhập Key lớp 1: '), resolve);
  });
  if (key1 !== "root") {
    rl.close();
    await fakeHack();
    process.exit(1);
  }

  const key2 = await new Promise(resolve => {
    rl.question(chalk.red.bold('🔑 Nhập Key lớp 2: '), resolve);
  });
  if (key2 !== "root1") {
    rl.close();
    await fakeHack();
    process.exit(1);
  }

  // ====== NHẬP KEY ADMIN ======
  const adminKey = await new Promise(resolve => {
    rl.question(chalk.red.bold('👤 Nhập key admin: '), resolve);
  });
  if (adminKey !== "123") {
    rl.close();
    await fakeHack();
    process.exit(1);
  }

  // ====== NHẬP WEBSITE ======
  const url = await new Promise(resolve => {
    rl.question(chalk.red.bold('🌐 Nhập website để kiểm tra liên tục: '), resolve);
  });
  rl.close();

  console.log(boxen(
    `${chalk.white.bold('👤 Admin key:')} ${chalk.yellow(adminKey)}\n` +
    `${chalk.white.bold('🌐 Website:')} ${chalk.green(url)}`,
    {
      padding: 1,
      borderColor: 'red',
      title: 'THÔNG TIN KIỂM TRA',
      titleAlignment: 'center',
      margin: 1
    }
  ));

  // ====== VÒNG LẶP KIỂM TRA ======
  let dem = 0;
  while (true) {
    if (dem > 0 && dem % 3 === 0) console.clear();

    console.log(chalk.gray(`\n🔄 Lần kiểm tra ${dem + 1}`));
    try {
      const ketQua = await kiemTraWeb(url.trim());
      console.log(ketQua);
    } catch (errBox) {
      console.log(errBox);
    }

    dem++;
    await new Promise(res => setTimeout(res, 1000));
  }
}

main();