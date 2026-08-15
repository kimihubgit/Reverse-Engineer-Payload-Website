const { createCanvas } = require("canvas"); // Import từ node-canvas
const fs = require("fs"); // Để save file nếu cần

function generateCanvasGeometry() {
  const canvas = createCanvas(256, 60); // Tạo canvas với kích thước cố định (không cần document)
  const ctx = canvas.getContext("2d");

  // Quy luật vẽ: Background gradient
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, "rgba(255, 0, 0, 0.5)"); // Đỏ trong suốt
  gradient.addColorStop(1, "rgba(0, 255, 0, 0.5)"); // Xanh trong suốt
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height); // Vẽ rectangle gradient

  // Vẽ text với shadow và stroke
  ctx.font = "14px sans-serif"; // Font cố định
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#069"; // Màu xanh dương
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)"; // Bóng đen
  ctx.shadowBlur = 2;
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;
  const text = "Cwm fjordbank glyphs vext quiz 😊"; // Pangram + emoji
  ctx.fillText(text, 2, 15); // Vẽ text
  ctx.strokeStyle = "#f60"; // Viền cam
  ctx.strokeText(text, 2, 15); // Vẽ viền

  // Thêm shape: Đường cong
  ctx.beginPath();
  ctx.moveTo(20, 40);
  ctx.bezierCurveTo(30, 50, 40, 30, 50, 40); // Curve
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#00f";
  ctx.stroke();

  // Extract geometry (base64 PNG)
  const geometry = canvas.toDataURL("image/png");

  // Optional: Save thành file PNG để kiểm tra
  const out = fs.createWriteStream("canvas_output.png");
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on("finish", () => console.log("Saved to canvas_output.png"));

  return geometry;
}

// Chạy và log
console.log(generateCanvasGeometry());
