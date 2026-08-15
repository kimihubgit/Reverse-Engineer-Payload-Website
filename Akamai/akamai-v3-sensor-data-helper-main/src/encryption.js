const {extractFileHash} = require('./extract_hash/index.js');

/**
 * The set of characters allowed in the encrypted data
 * This matches Akamai's v3 character set for sensor data
 */
const ALLOWED_CHARS = ' !#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~';

/**
 * Performs element swapping operation used in Akamai v3 encryption
 * @param {string} inputString - The string containing elements to be swapped
 * @param {number} seedValue - The seed value used to generate swap pairs
 * @returns {string} The string with elements swapped according to the encryption pattern
 * @private
 */
function elementSwapping(inputString, seedValue) {
    var parts = inputString;
    var currentSeed = seedValue;
    var swapPairs = [];
    var delimiter = ':';
    var partsArray = parts.split(delimiter);

    // Generate the same swap pairs used in encryption
    for (var i = 0; i < partsArray.length; i++) {
        var firstIndex = ((currentSeed >> 8) & 65535) % partsArray.length;
        currentSeed *= 65793;
        currentSeed &= 4294967295;
        currentSeed += 4282663;
        currentSeed &= 8388607;
        var secondIndex = ((currentSeed >> 8) & 65535) % partsArray.length;
        currentSeed *= 65793;
        currentSeed &= 4294967295;
        currentSeed += 4282663;
        currentSeed &= 8388607;
        swapPairs.push([firstIndex, secondIndex]);
    }

    // Apply the swap operations in order
    for (var i = 0; i < swapPairs.length; i++) {
        var firstIndex = swapPairs[i][0];
        var secondIndex = swapPairs[i][1];
        // Swap the elements
        var temp = partsArray[firstIndex];
        partsArray[firstIndex] = partsArray[secondIndex];
        partsArray[secondIndex] = temp;
    }
    return partsArray.join(delimiter);
}

/**
 * Performs character substitution operation used in Akamai v3 encryption
 * @param {string} inputString - The string containing characters to be substituted
 * @param {number} seedValue - The seed value used for character substitution
 * @returns {string} The string with characters substituted according to the encryption pattern
 * @private
 */
function characterSubstitution(inputString, seedValue) {
    var result = '';
    // Process each character in order, using the same seedValue updates
    for (var i = 0; i < inputString.length; i++) {
        var currentChar = inputString.charAt(i);
        // Compute the pseudo-random value
        var randomValue = (seedValue >> 8) & 65535;
        // Update seedValue exactly as in encryption
        seedValue *= 65793;
        seedValue &= 4294967295;
        seedValue += 4282663;
        seedValue &= 8388607;
        // Check if the current character is from the allowed set
        var charPosition = ALLOWED_CHARS.indexOf(currentChar);
        if (charPosition >= 0) {
            // Get the offset to add
            var offset = randomValue % ALLOWED_CHARS.length;
            // Add the offset and wrap around modulo ALLOWED_CHARS.length
            var newIndex = (charPosition + offset) % ALLOWED_CHARS.length;
            // The substituted character (from the allowed set) is then:
            currentChar = ALLOWED_CHARS.charAt(newIndex);
        }
        result += currentChar;
    }
    return result;
}

/**
 * Encrypts data in Akamai v3 format by applying the encryption process
 * @param {Object|string} payload - The data to encrypt
 * @param {number} cookieHash - The cookie hash from Akamai
 * @param {string} [fileContent] - The content of the input.js file used for hash extraction
 * @param {number} [fileHash] - Optional pre-extracted file hash to avoid re-extraction
 * @returns {Object} An object containing the encryption result
 * @property {boolean} success - Whether the encryption was successful
 * @property {Object} [data] - The encrypted data object (if success is true)
 * @property {string} [encryptedData] - The raw encrypted string (if success is true)
 * @property {number[]} [seeds] - The seeds used in encryption [cookieHash, fileHash]
 * @property {string} [message] - Error message (if success is false)
 */
function encryptSensorData(
    payload,
    cookieHash,
    fileContent = null,
    fileHash = null
) {
    if (!fileContent && !fileHash) {
        return {
            success: false,
            message: 'File content or file hash is required'
        };
    }
    
    if (!fileHash) {
        try {
            fileHash = extractFileHash(fileContent);
        } catch (error) {
            return {
                success: false,
                message: 'Unable to load file hash'
            };
        }
    }

    try {
        // Convert payload to string if it's an object
        const payloadString = typeof payload === 'object' ? JSON.stringify(payload) : payload;
        
        // Apply encryption in reverse order of decryption
        let encryptedData = elementSwapping(payloadString, fileHash);
        encryptedData = characterSubstitution(encryptedData, cookieHash);
        
        // Construct the full sensor_data string
        const sensorData = `3;0;1;0;${cookieHash};wS5KmeE4vP5vBcKRIM2pPQlq4qZivf0B53dgMqmUH4E=;141659;${encryptedData}`;
        
        return {
            success: true,
            encryptedData,
            seeds: [cookieHash, fileHash],
            data: {
                sensor_data: '{"sensor_data":'.concat(JSON.stringify(sensorData), '}')
            }
        };
    } catch (error) {
        return {
            success: false,
            message: `Encryption failed: ${error.message}`
        };
    }
}

module.exports = {
    encryptSensorData
};
