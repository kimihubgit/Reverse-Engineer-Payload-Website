const { decryptSensorData } = require('./decryption');
const { encryptSensorData } = require('./encryption');

/**
 * Decrypts Akamai v3 sensor data
 * @param {string} sensorData - The encrypted sensor data string in Akamai v3 format
 * @param {string} fileContent - The content of the input.js file used for hash extraction
 * @param {number} [fileHash] - Optional pre-extracted file hash to avoid re-extraction
 * @returns {Object} An object containing the decryption result
 * @property {boolean} success - Whether the decryption was successful
 * @property {string} [data] - The decrypted data string (if success is true)
 * @property {Object} [parsedData] - The parsed JSON data (if success is true)
 * @property {number[]} [seeds] - The seeds used in decryption [cookieHash, fileHash]
 * @property {string} [message] - Error message (if success is false)
 * @example
 * const decryptor = require('akamai-v3-sensor-decryptor');
 * 
 * const result = decryptor.decrypt(
 *   '{"sensor_data":"3;0;1;0;3753014;..."}',
 *   'input.js content'
 * );
 * 
 * if (result.success) {
 *   console.log(result.data);
 *   console.log(result.parsedData);
 * } else {
 *   console.error(result.message);
 * }
 */
function decrypt(sensorData, fileContent, fileHash) {
    try {
        return decryptSensorData(sensorData, fileContent, fileHash);
    } catch (error) {
        return {
            success: false,
            message: `Decryption failed: ${error.message}`
        };
    }
}

/**
 * Encrypts data in Akamai v3 format
 * @param {Object|string} payload - The data to encrypt
 * @param {number} cookieHash - The cookie hash from Akamai
 * @param {string} fileContent - The content of the input.js file
 * @param {number} [fileHash] - Optional pre-extracted file hash to avoid re-extraction
 * @returns {Object} An object containing the encryption result
 * @property {boolean} success - Whether the encryption was successful
 * @property {Object} [data] - The encrypted data object (if success is true)
 * @property {string} [encryptedData] - The raw encrypted string (if success is true)
 * @property {number[]} [seeds] - The seeds used in encryption [cookieHash, fileHash]
 * @property {string} [message] - Error message (if success is false)
 * @example
 * const decryptor = require('akamai-v3-sensor-decryptor');
 * 
 * const result = decryptor.encrypt(
 *   { timestamp: Date.now() },
 *   3753014,
 *   'input.js content'
 * );
 * 
 * if (result.success) {
 *   console.log(result.data);
 * } else {
 *   console.error(result.message);
 * }
 */
function encrypt(payload, cookieHash, fileContent, fileHash) {
    try {
        return encryptSensorData(payload, cookieHash, fileContent, fileHash);
    } catch (error) {
        return {
            success: false,
            message: `Encryption failed: ${error.message}`
        };
    }
}

/**
 * Extracts the cookie hash from an Akamai cookie value
 * @param {string} cookieValue - The Akamai cookie value to extract the hash from
 * @returns {number} The extracted cookie hash or 8888888 if extraction fails
 * @example
 * const hash = decryptor.extractCookieHash('akamai_cookie_value');
 * console.log(hash); // e.g., 3753014
 */
function extractCookieHash(cookieValue) {
    let finalValue = 8888888;
    if (cookieValue !== false) {
        var Bx = decodeURIComponent(cookieValue)['split']('~');
        if (Bx['length'] >= 4) {
            var FF = parseInt(Bx[2], 10); // Chuyển đổi một chuỗi (string) thành số nguyên (integer) theo hệ cơ số (radix) được chỉ định.
            console.log(FF);
            
            FF = isNaN(FF) ? 8888888 : FF;
            finalValue = FF;
        }
    }
    return finalValue;
}

module.exports = {
    decrypt,
    encrypt,
    extractCookieHash
}; 