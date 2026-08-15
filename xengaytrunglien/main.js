const crypto = require("crypto");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
function tinhChecksum1(sdt, netword, code, netaction) {
  let sum =
    sdt +
    netword +
    code +
    code +
    netaction +
    "4b579fe9db3e4b86413f126b407d11e2123ws";
  let checksum = crypto.createHash("sha256").update(sum).digest("hex");
  return checksum;
}

app.post("/checksum", (req, res) => {
  try {
    const { sdt, netword, code, netaction } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!sdt || !netword || !code || !netaction) {
      return res.status(400).json({
        success: false,
        message: "Thiếu dữ liệu đầu vào",
      });
    }

    // Tạo checksum
    const checksum = tinhChecksum1(sdt, netword, code, netaction);

    // Trả kết quả
    res.json({
      success: true,
      data: {
        sdt,
        netword,
        code,
        netaction,
        checksum,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Chạy server
app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});

// console.log(
//   tinhChecksum1("0374496602", "VIETTEL", "sddddddcc", "96cc44917bbe"),
// );
