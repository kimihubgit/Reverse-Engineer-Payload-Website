const express = require("express");
const cookie = require("cookie");
const CryptoJS = require("crypto-js");

const app = express();
const port = 3002;

// Middleware to parse JSON request bodies
app.use(express.json());

// Generates a hashed signature and returns signature and amount
const generateSignatureAndCookies = (data) => {
    // Build concatenated string from data object values
    let concatenatedString = "";
    if (Object.keys(data).length > 0) {
        concatenatedString = Object.values(data).join("");
    }

    // Get current timestamp in seconds
    const timestamp = Math.floor(Date.now() / 1000).toString();
    
    // Create signature input by combining timestamp and concatenated data
    const signatureInput = `${timestamp}:${concatenatedString}`;
    
    // Generate HMAC SHA256 hash using secret key
    const secretKey = "aB3#kLp9!D7zX@eV1qW%rTmY6uC^nZ*t";
    const signature = CryptoJS.HmacSHA256(signatureInput, secretKey).toString(CryptoJS.enc.Hex);

    return {
        ikowqewqezzzz: signature,
        amount: timestamp * 6868
    };
};

// POST endpoint to generate signature and set cookies
app.post("/generate-signature", (req, res) => {
    try {
        const data = req.body; // Expect JSON body with data (e.g., { username, password, phone })

        // Validate input
        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({ error: "Request body must contain data" });
        }

        // Generate signature and amount
        const result = generateSignatureAndCookies(data);

        // Set cookies in the response
        res.setHeader("Set-Cookie", [
            cookie.serialize("ikowqewqezzzz", result.ikowqewqezzzz, { path: "/" }),
            cookie.serialize("amount", result.amount, { path: "/" })
        ]);

        // Send JSON response
        res.json({
            status: "success",
            data: result
        });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});