# Akamai v3 Sensor Data Decryptor

A Node.js module for decrypting and encrypting Akamai v3 sensor data. This module helps you work with the sensor_data parameter used in Akamai's bot detection system.

[![npm version](https://img.shields.io/npm/v/akamai-v3-sensor-data-helper.svg)](https://www.npmjs.com/package/akamai-v3-sensor-data-helper)

## Resources
- 🌐 [Web App](https://akamai-v3-tools.vercel.app) - Try the module in your browser
- 📚 [Source Code](https://github.com/glizzykingdreko/akamai-v3-tools) - Check out the web app implementation
- 📖 [Detailed Guide](https://medium.com/@glizzykingdreko/akamai-v3-sensor-data-deep-dive-into-encryption-decryption-and-bypass-tools-da0adad2a784) - Read our comprehensive guide

## Table of Contents
- [Akamai v3 Sensor Data Decryptor](#akamai-v3-sensor-data-decryptor)
  - [Need help with akamai or other antibots?](#need-help-with-akamai-or-other-antibots)
  - [Features](#features)
  - [Initial Request Behavior](#initial-request-behavior)
    - [First Request](#first-request)
    - [Subsequent Requests](#subsequent-requests)
  - [Installation](#installation)
  - [Quick Start](#quick-start)
    - [Decryption](#decryption)
    - [Encryption](#encryption)
  - [Technical Details](#technical-details)
    - [Understanding Akamai v3 Sensor Data](#understanding-akamai-v3-sensor-data)
    - [Encryption Process](#encryption-process)
    - [Decryption Process](#decryption-process)
    - [Pseudo-Random Number Generator](#pseudo-random-number-generator)
    - [File Hash Extraction](#file-hash-extraction)
    - [Cookie Hash Extraction](#cookie-hash-extraction)
  - [Error Handling](#error-handling)
  - [Version 1.0.9 Release Notes](#version-109-release-notes)
    - [Fix Implemented](#fix-implemented)
    - [A Note to the Community](#a-note-to-the-community)
  - [Contact](#contact)

Please check-out also the [examples](examples) folder for more examples on how to use the module as well ask the [akamai-v2-decryptor](https://github.com/glizzykingdreko/akamai-sensordata-decryptor) for v2-sensors decryption.

## Need help with akamai or other antibots?

Check-out my company that provides antibots and custom solutions [TakionApi](https://takionapi.tech)

## Features

- Encrypt / Decrypt akamai v3 payloads
- Extract file hash from script via Babel AST parsing
- Extract cookie hash from bm_sz cookie

## Initial Request Behavior

When making requests to an Akamai-protected site, there's a specific sequence of events:

1. **First Request**
   - The initial request will not have a `bm_sz` cookie
   - The sensor data will be encrypted using:
     - Default hash: `8888888`
     - File hash: extracted from the input.js script
   - This request will trigger Akamai to set the `bm_sz` cookie

2. **Subsequent Requests**
   - After receiving the `bm_sz` cookie, all future requests will use:
     - Cookie hash: extracted from the `bm_sz` cookie
     - File hash: extracted from the input.js script
   - This continues until the `bm_sz` cookie is changed by Akamai

This behavior is important to understand when implementing the encryption/decryption process, as the first request requires special handling with the default hash.

## Installation

```bash
npm install akamai-v3-sensor-data-helper
```

## Quick Start

### Decryption

```javascript
const decryptor = require('akamai-v3-sensor-data-helper');
const fs = require('fs');

// Read your input.js file content
const fileContent = fs.readFileSync('input.js', 'utf-8');

// Your encrypted sensor data
const sensorData = '{"sensor_data":"3;0;1;0;3753014;..."}';

// Decrypt the sensor data
const result = decryptor.decrypt(sensorData, fileContent);

if (result.success) {
    console.log('Decrypted data:', result.data);
    console.log('Parsed JSON:', result.parsedData);
} else {
    console.error('Decryption failed:', result.message);
}
```

### Encryption

```javascript
const decryptor = require('akamai-v3-sensor-decryptor');
const fs = require('fs');

// Read your input.js file content
const fileContent = fs.readFileSync('input.js', 'utf-8');

// Your data to encrypt
const payload = {
    // Your sensor data here
};

// Cookie hash from Akamai
const cookieHash = 3753014; // you can extract this from the bm_sz cookie using decryptor.extractCookieHash(cookie)

// Encrypt the data
const result = decryptor.encrypt(payload, cookieHash, fileContent);

if (result.success) {
    console.log('Encrypted data:', result.data);
} else {
    console.error('Encryption failed:', result.message);
}
```

## Technical Details

### Understanding Akamai v3 Sensor Data

Akamai's v3 sensor data is a string that follows this format:
```
3;0;1;0;[cookie_hash];whaterver;whatever;[encrypted_data]
```

Where `[encrypted_data]` is the actual encrypted sensor data

### Encryption Process

The v3 encryption process consists of two main steps applied in sequence:

1. **Element Swapping**
   - The input data is split by ':' delimiter into an array of elements
   - A pseudo-random number generator (PRNG) is initialized with the file hash
   - For each element in the array, the PRNG generates two indices
   - Elements at these indices are swapped
   - This process is repeated for each element in the array
   - The swapped elements are joined back with ':' delimiter

   ```javascript
   // Example of element swapping
   // Input: "a:b:c:d"
   // After swapping: "c:a:d:b"
   ```

2. **Character Substitution**
   - A PRNG is initialized with the cookie hash
   - For each character in the string:
     - If the character is in the ALLOWED_CHARS set:
       - The PRNG generates a random offset
       - The character is replaced with another character from ALLOWED_CHARS
       - The offset determines how many positions to shift in the ALLOWED_CHARS set
     - If the character is not in ALLOWED_CHARS, it remains unchanged
   - The PRNG state is updated after each character

   ```javascript
   // Example of character substitution
   // Input: "hello"
   // After substitution: "mjqqt" (each character shifted by a different amount)
   ```

### Decryption Process

The decryption process reverses the encryption steps in the opposite order:

1. **Reverse Character Substitution**
   - A PRNG is initialized with the cookie hash (same as encryption)
   - For each character in the encrypted string:
     - If the character is in the ALLOWED_CHARS set:
       - The PRNG generates the same random offset as in encryption
       - The character is replaced with the original character by subtracting the offset
       - The result is wrapped around if it goes below 0
     - If the character is not in ALLOWED_CHARS, it remains unchanged
   - The PRNG state is updated after each character (same as encryption)

2. **Reverse Element Swapping**
   - The string is split by ':' delimiter into an array of elements
   - A PRNG is initialized with the file hash (same as encryption)
   - The same swap pairs are generated as in encryption
   - The swap operations are applied in reverse order
   - The unswapped elements are joined back with ':' delimiter

### Pseudo-Random Number Generator

The PRNG used in both encryption and decryption follows this algorithm:
```javascript
// Initialize with a seed value
let seed = initialSeed;

// Generate a random value
let randomValue = (seed >> 8) & 65535;

// Update the seed for the next random value
seed *= 65793;
seed &= 4294967295;
seed += 4282663;
seed &= 8388607;
```

This PRNG is deterministic, meaning that given the same initial seed, it will generate the same sequence of random values. This property is essential for the encryption and decryption processes to work correctly.

### File Hash Extraction

The module uses Babel AST parsing to extract the file hash from the input.js file. The hash is typically embedded in an obfuscated array and accessed through multiple layers of function calls. The extraction process:

1. Parses the JavaScript code using Babel
2. Traverses the AST looking for specific patterns
3. Extracts the hash value from the matching node

This hash is used as one of the seeds for the encryption/decryption process.

### Cookie Hash Extraction

The cookie hash is extracted from the Akamai cookie value, which follows this format:
```
value1~value2~hash~value4~...
```

The hash is extracted from the third position (index 2) in the cookie value after splitting by '~'.

## Error Handling

The module provides comprehensive error handling for various scenarios:

- Invalid sensor data format
- Missing or invalid file content
- Hash extraction failures
- JSON parsing errors
- Encryption/decryption process failures

Each error case returns a descriptive error message in the response object.

## Version 1.0.9 Release Notes

Over the past few weeks, I've received numerous inquiries regarding issues with hash extraction. I'm pleased to announce that this has been addressed in version 1.0.9.

### Fix Implemented

The issue stemmed from the `extract_hash` function not adequately handling cases where Akamai introduced multiple `listArray` elements, likely as an obfuscation tactic. The solution involved adding a simple length check to ensure robustness:

```javascript
if (
    innerArray.elements &&
    innerArray.elements.every(el => el.type === 'StringLiteral') &&
    innerArray.elements.length >= 10 // Added length check
)
```

This adjustment ensures that the decryption process remains stable even with the updated payload structures.

### A Note to the Community

I want to take a moment to remind everyone that this project is open-source and maintained in my personal time. While I strive to address issues promptly, my availability can be limited.

For those seeking a more comprehensive and supported Akamai solution, I invite you to explore [TakionApi](https://takionapi.tech), where we offer professional services tailored to your needs.

Lastly, I'd like to encourage users to engage more deeply with the documentation and codebase. This particular fix was relatively straightforward, and with a bit of investigation, it could have been identified earlier. Your proactive involvement can greatly enhance the project's robustness and responsiveness.


## Contact

For any inquiries or further information, please reach out:

- Project Maintainer: [glizzykingdreko](mailto:glizzykingdreko@protonmail.com)
- Twitter: [@glizzykingdreko](https://twitter.com/glizzykingdreko)
- GitHub Project Link: [here](https://github.com/glizzykingdreko/akamai-v3-sensor-data-helper)
- Antibot bypass solutions needed? [TakionAPI](https://takionapi.tech/)
- You like my projects? [Buy me a coffee](https://www.buymeacoffee.com/glizzykingdreko)

Feel free to contact for collaborations, questions, or feedback regarding the project.

Need help solving Akamai? [Contact me](mailto:glizzykingdreko@protonmail.com)