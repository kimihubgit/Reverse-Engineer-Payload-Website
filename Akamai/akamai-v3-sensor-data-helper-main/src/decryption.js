const {extractFileHash} = require('./extract_hash/index.js');

/**
 * The set of characters allowed in the encrypted data
 * This matches Akamai's v3 character set for sensor data
 */
const ALLOWED_CHARS = ' !#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~';

/**
 * Reverses the element swapping operation used in Akamai v3 encryption
 * @param {string} inputString - The string containing elements to be unswapped
 * @param {number} seedValue - The seed value used to generate swap pairs
 * @returns {string} The string with elements unswapped to their original positions
 * @private
 */
function reverseElementSwapping(inputString, seedValue) {
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

    // Reverse the swap operations in the opposite order
    for (var i = swapPairs.length - 1; i >= 0; i--) {
        var firstIndex = swapPairs[i][0];
        var secondIndex = swapPairs[i][1];
        // Swap back the elements
        var temp = partsArray[firstIndex];
        partsArray[firstIndex] = partsArray[secondIndex];
        partsArray[secondIndex] = temp;
    }
    return partsArray.join(delimiter);
}

/**
 * Reverses the character substitution operation used in Akamai v3 encryption
 * @param {string} transformedString - The string with substituted characters
 * @param {number} seedValue - The seed value used for character substitution
 * @returns {string} The string with characters restored to their original values
 * @private
 */
function reverseCharacterSubstitution(transformedString, seedValue) {
    var result = '';
    // Process each character in order, using the same seedValue updates
    for (var i = 0; i < transformedString.length; i++) {
        var currentChar = transformedString.charAt(i);
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
            // Get the offset that was added
            var offset = randomValue % ALLOWED_CHARS.length;
            // Reverse the offset: subtract and wrap around modulo ALLOWED_CHARS.length
            var originalIndex = (charPosition - offset + ALLOWED_CHARS.length) % ALLOWED_CHARS.length;
            // The original character (from the allowed set) is then:
            currentChar = ALLOWED_CHARS.charAt(originalIndex);
        }
        result += currentChar;
    }
    return result;
}

var seedGenerator = function (startingValue, encodedData) {
    var resultArray = [8888888, startingValue];
    var dataToProcess = encodedData;
    if (dataToProcess !== false) {
        var decodedParts = decodeURIComponent(dataToProcess)['split']('~');
        if (decodedParts['length'] >= 4) {
            var extractedValue = parseInt(decodedParts[2], 10);
            extractedValue = isNaN(extractedValue) ? 8888888 : extractedValue;
            resultArray[0] = extractedValue;
        }
    }
    return resultArray;
};

/**
 * Decrypts Akamai v3 sensor data by reversing the encryption process
 * @param {string} sensorData - The encrypted sensor data string
 * @param {string} [fileContent] - The content of the input.js file used for hash extraction
 * @param {number} [fileHash] - Optional pre-extracted file hash to avoid re-extraction
 * @returns {Object} An object containing the decryption result
 * @property {boolean} success - Whether the decryption was successful
 * @property {string} [data] - The decrypted data string (if success is true)
 * @property {Object} [parsedData] - The parsed JSON data (if success is true)
 * @property {number[]} [seeds] - The seeds used in decryption [cookieHash, fileHash]
 * @property {string} [message] - Error message (if success is false)
 */
function decryptSensorData(
    sensorData,
    fileContent = null,
    fileHash = null
) {
    if (!fileContent && !fileHash) {
        return {
            success: false,
            message: 'File content or file hash is required'
        };
    }

    let processedSensorData = null,
        cookieHash = null;
    try {
        processedSensorData = JSON.parse(sensorData).sensor_data.split(';');
        cookieHash = Number(processedSensorData[4]);
        processedSensorData = processedSensorData.slice(7).join(';');
    } catch (error) {
        return {
            success: false,
            message: 'Unable to load sensor data (pre-decryption)'
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

    let seeds = [cookieHash, fileHash];
    processedSensorData = reverseCharacterSubstitution(processedSensorData, seeds[0]);
    processedSensorData = reverseElementSwapping(processedSensorData, seeds[1]);
    try {
        return {
            success: true,
            seeds,
            data: processedSensorData,
            parsedData: JSON.parse(processedSensorData)
        };
    } catch (error) {
        return {
            success: false,
            message: 'Unable to parse sensor data (post-decryption)'
        };
    }
}

module.exports = {
    decryptSensorData
};