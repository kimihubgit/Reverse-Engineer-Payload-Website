// api.js
const express = require('express');
const { agenerate, srpApple } = require('./srp');
const {FingerprintModule} = require('./finger')

const app = express();
app.use(express.json({ limit: '10mb' }));


// === API 2: Xử lý SRP proof (M1, M2, K) hoặc trả A nếu thiếu ===
app.post('/prove', (req, res) => {
    try {
        const { password, salt, serverPublicValue, iterations, email , a} = req.body;

        if (!email) {
            return res.status(400).json({ error: "Thiếu Trường Email, Trường Email là Phải Bắt Buộc Có Nhé" });
        }

        // Trường hợp 1: Chỉ có email → trả A (client khởi tạo)
        if (!password || !salt || !serverPublicValue || !iterations) {
            const A = agenerate();
            return res.json(A);
        }

        // Trường hợp 2: Đủ dữ liệu → tính proof
        const { M1, M2, K } = srpApple({
            password,
            salt,
            serverPublicValue,
            iterations,
            email,
            a
        });

        return res.json({
            M1: M1.getBase64(),
            M2: M2.getBase64(),
            K: K.getBase64()
        });

    } catch (err) {
        console.error("Lỗi SRP:", err);
        return res.status(500).json({ error: err.message });
    }
});

// === API 3: Fingerprint (tùy chọn) ===
app.post('/fingerPrint', (req, res) => {
    try {
        // Ví dụ: lưu fingerprint, device info, v.v.
        const finger = FingerprintModule();
        console.log(finger);
        res.json({ status: "ok", finger: finger});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = 16000;
app.listen(PORT, () => {
    console.log(`API SRP chạy tại http://localhost:${PORT}`);
    console.log(`- GET  /generate      → Tạo A`);
    console.log(`- POST /prove         → Trả A hoặc M1,M2,K`);
    console.log(`- POST /fingerPrint   → Nhận device info`);
});