const express = require('express');
const crypto = require('crypto');
const app = express();
const port = 5000;

// Middleware to parse URL-encoded queries
app.use(express.urlencoded({ extended: true }));

function encryptPassword(password, o_v1, o_v2) {
    // Step 1: MD5 password
    const s = crypto.createHash('md5').update(password).digest('hex');
    
    // Step 2: Create key by combining SHA256 with v1 and v2
    const hashStage1 = crypto.createHash('sha256').update(s + o_v1).digest('hex');
    const b = crypto.createHash('sha256').update(hashStage1 + o_v2).digest('hex');
    
    // Step 3: AES-256 ECB
    const key = Buffer.from(b, 'hex');
    const cipher = crypto.createCipheriv('aes-256-ecb', key, null);
    let M = cipher.update(Buffer.from(s, 'hex'));
    M = Buffer.concat([M, cipher.final()]);
    
    // Step 4: Convert to hex and truncate to 32 characters
    return M.toString('hex').slice(0, 32);
}

// Route for /hashpass
app.get('/hashpass', (req, res) => {
    const { pass: password, v1, v2 } = req.query;

    // Validate input
    if (!password || !v1 || !v2) {
        return res.status(400).json({
            error: 'Missing parameters (pass, v1, v2)',
            example: '/hashpass?pass=123456&v1=abc&v2=xyz'
        });
    }

    try {
        const encrypted = encryptPassword(password, v1, v2);
        res.json({
            status: 'success',
            result: encrypted,
            params: {
                pass: '[hidden]',
                v1: v1,
                v2: v2
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: `Encryption error: ${error.message}`
        });
    }
});

// Start server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
});