const axios = require('axios');
const fs = require('fs').promises;
const CryptoJS = require('crypto-js');
const FormData = require("form-data");
const { v4: uuidv4 } = require('uuid');
const { HttpsProxyAgent } = require('https-proxy-agent');

let proxyKeys = [];

const mobileUserAgents = [
    "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/125.0.6422.80 Mobile/15E148 Safari/604.1",
];

const config = {
    totalAcc: 1
};

function getRandomUserAgent() {
    return mobileUserAgents[Math.floor(Math.random() * mobileUserAgents.length)];
}

function generateRandomPlayerId() {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    return Array.from({ length: 12 }, () => 
        chars[Math.floor(Math.random() * chars.length)]
    ).join('');
}

function generateRandomPhone() {
    return '84' + ' ' + Math.floor(900000000 + Math.random() * 100000000);
}

function generateRandomBankAccount() {
    const min = 100000000000;
    const max = 999999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hashPasswordOrPin(data, key) {
    return CryptoJS.HmacSHA1(data, key).toString();
}

function createFormData(fields) {
    const form = new FormData();
    Object.entries(fields).forEach(([key, value]) => form.append(key, value));
    return form;
}

async function newIP(gameName, key) {
    return new Promise((resolve, reject) => {
        let attempts = 5;
        const fetchProxy = () => {
            axios
                .get(`https://proxyxoay.shop/api/get.php?key=${key}&nhamang=random&tinhthanh=0`)
                .then(response => {
                    const ip = response.data;
                    if (ip.status === 100 && ip.proxyhttp) {
                        console.log(`${gameName}: ✅ Lấy proxy thành công`);
                        const [host, port, username, password] = ip.proxyhttp.split(":");
                        const proxyUrl = `http://${username}:${password}@${host}:${port}`;
                        const proxies = { http: proxyUrl, https: proxyUrl };
                        resolve({ ipcc: proxyUrl, proxies });
                    } else {
                        console.log(`${gameName}: ❌ Lấy proxy thất bại, chờ 10s để thử lại`);
                        attempts--;
                        if (attempts <= 0) {
                            reject(new Error("Quá nhiều lần thử lại"));
                        } else {
                            setTimeout(fetchProxy, 10000);
                        }
                    }
                })
                .catch(err => {
                    console.log(`${gameName}: ❌ Lỗi khi lấy proxy: ${err.message}`);
                    attempts--;
                    if (attempts <= 0) {
                        reject(new Error("Quá nhiều lần thử lại"));
                    } else {
                        setTimeout(fetchProxy, 10000);
                    }
                });
        };
        fetchProxy();
    });
}

async function loadProxyKeys() {
    try {
        const data = await fs.readFile("keys.txt", "utf8");
        proxyKeys = data.split("\n").map(line => line.trim()).filter(line => line.length > 0);
        console.log(`Loaded ${proxyKeys.length} proxy keys from keys.txt`);
        if (proxyKeys.length < config.totalAcc) {
            throw new Error(`Not enough proxy keys (${proxyKeys.length}) for ${config.totalAcc} accounts`);
        }
    } catch (error) {
        console.error(`Error loading proxy keys: ${error.message}`);
        throw error;
    }
}

async function registerAccount(fullname, proxyIndex) {
    const proxyKey = proxyKeys[proxyIndex % proxyKeys.length];
    const gameName = 'jun88';
    try {
        const { ipcc, proxies } = await newIP(gameName, proxyKey);
        const proxyUrl = proxies.http;
        console.log(`Using proxy: ${proxyUrl} with key: ${proxyKey}`);
        const proxyAgent = new HttpsProxyAgent(proxyUrl);
        const playerid = generateRandomPlayerId();
        const stk = generateRandomBankAccount();
        const password = 'thaoquyen02';
        const pin = '112233';

        const commonHeaders = {
            'user-agent': getRandomUserAgent(),
            'origin': 'https://www.jun8811.kim',
            'referer': 'https://www.jun8811.kim/',
        };

        // 1. Lấy captcha
        let captchaResponse;
        try {
            captchaResponse = await axios.post('https://api.jun8811.kim/jun88-ecp/api/v1/imgcaptcha/random', {
                headers: commonHeaders,
                httpsAgent: proxyAgent,
                timeout: 30000
            });
        } catch (err) {
            console.error(`[${playerid}] Lỗi bước captcha/random:`, err.response?.status, err.response?.data || err.message);
            return false;
        }

        if (!captchaResponse.data.bigImageBase64) {
            console.error(`[${playerid}] Captcha API không trả base64`);
            return false;
        }
        const value = captchaResponse.data.bigImageBase64;
        const uuid = captchaResponse.data.random;

        // 2. Giải captcha qua service ngoài
        let captchaSolveResponse;
        try {
            captchaSolveResponse = await axios.post("http://slidecap.kimidev.net:5006/solve_captcha", {
                background: value,
                offset: 25,
            }, { headers: { "Content-Type": "application/json" } });
        } catch (err) {
            console.error(`[${playerid}] Lỗi bước solve_captcha:`, err.response?.status, err.response?.data || err.message);
            return false;
        }

        const result = captchaSolveResponse.data.slider_distance;
        if (!result) {
            console.error(`[${playerid}] solve_captcha không trả slider_distance:`, captchaSolveResponse.data);
            return false;
        }

        // 3. Verify captcha
        let verifyResponse;
        try {
            verifyResponse = await axios.post("https://api.jun8811.kim/jun88-ecp/api/v1/imgcaptcha/verify", {
                movePosX: result,
                random: uuid
            }, {
                headers: commonHeaders,
                httpsAgent: proxyAgent,
                timeout: 30000
            });
        } catch (err) {
            console.error(`[${playerid}] Lỗi bước captcha/verify:`, err.response?.status, err.response?.data || err.message);
            return false;
        }

        if (verifyResponse.data === true) {
            console.log(`[${playerid}] ✅ Giải captcha thành công`);
        } else {
            console.error(`[${playerid}] ❌ Giải captcha thất bại:`, verifyResponse.data);
            return false;
        }

        // 4. Đăng ký
        const hashedPassword = hashPasswordOrPin(password, playerid);
        const hashedPin = hashPasswordOrPin(pin, playerid);
        const regFields = {
            playerid,
            password: hashedPassword,
            currency: 'VND2',
            firstname: fullname,
            mobile: generateRandomPhone(),
            portalid: 'EC_DESKTOP',
            captchauuid: uuid,
            'c-njo6ru': 'XPAqHZpAxVRr14qcw-UzSTeSyKl4oYna4GLXQU-WegnbefN5N9lF2ixS-0dvK58iekXhBeX-fTiD8Cqzc_4I5zQLGUdQiGQT0x_o0dYpwqqLl6k2szEVDsLW3vdXhtAqfSt_q3htgxQivmU6d5iC00Nhg-d9KxKx',
            regfingerprint: uuidv4().replace(/-/g, ''),
            language: '4'
        };
        console.log(regFields);
        
        let regResponse;
        try {
            regResponse = await axios.post('https://api.jun8811.kim/jun88-ecp/api/v1/register',
                createFormData(regFields), {
                    headers: { 
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
                    },
                    httpsAgent: proxyAgent,
                    timeout: 30000
                });
        } catch (err) {
            console.error(`[${playerid}] Lỗi bước register:`, err.response?.status, err.response?.data || err.message);
            return false;
        }

        const { settle, token } = regResponse.data;
        if (!settle || !token) {
            console.error(`[${playerid}] Đăng ký thất bại:`, regResponse.data);
            return false;
        }

        // 5. Điền required info
        try {
            await axios.put('https://api.jun8811.kim/jun88-ecp/api/v1/profile/requiredinfo',
                createFormData({
                    password: hashedPassword,
                    pin: hashedPin,
                    infoFillEntryType: 'WITHDRAWAL',
                    firstname: fullname
                }), {
                    headers: { 'Authorization': token, 'user-agent': getRandomUserAgent() },
                    httpsAgent: proxyAgent,
                    timeout: 30000
                });
        } catch (err) {
            console.error(`[${playerid}] Lỗi bước requiredinfo:`, err.response?.status, err.response?.data || err.message);
            return false;
        }

        // 6. Thêm thông tin ngân hàng
        try {
            await axios.post('https://api.jun8811.kim/jun88-ecp/api/v1/playerpayments',
                createFormData({
                    password: hashedPassword,
                    bankid: 'b4d2ce74-c4cd-43f8-aca1-597763e1449d',
                    bankbranch: 'hcm',
                    bankaccount: stk,
                    bankaccountname: fullname
                }), {
                    headers: { 'Authorization': token, 'user-agent': getRandomUserAgent() },
                    httpsAgent: proxyAgent,
                    timeout: 30000
                });
        } catch (err) {
            console.error(`[${playerid}] Lỗi bước playerpayments:`, err.response?.status, err.response?.data || err.message);
            return false;
        }

        await fs.appendFile('success.txt', `${playerid}|${stk}|Lio bank|${fullname}\n`);
        console.log(`[${playerid}] 🎉 Đăng ký thành công!`);
        return true;

    } catch (error) {
        console.error(`[${playerid}] Lỗi ngoài try chính:`, error.message);
        return false;
    }
}

async function processRegistration() {
    const data = await fs.readFile('data.txt', 'utf8');
    const fullnames = data.split('\n').filter(line => line.trim());
    let totalSuccess = 0;

    for (const fullname of fullnames) {
        const registrationPromises = Array.from({ length: config.totalAcc }, (_, i) => registerAccount(fullname, i));
        const results = await Promise.all(registrationPromises);
        totalSuccess += results.filter(result => result).length;
    }

    console.log(`Total completed registrations: ${totalSuccess}`);
}

async function main() {
    try {
        await loadProxyKeys();
        await processRegistration();
    } catch (error) {
        console.error('Error in main:', error.message);
    }
}

main();