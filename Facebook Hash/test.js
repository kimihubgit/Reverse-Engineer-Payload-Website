// @ts-ignore
import { default as nacl } from 'tweetnacl-sealedbox-js';
import { webcrypto } from 'crypto';

function decodeUTF8(str: string): Uint8Array {
  if (typeof str !== "string")
    throw new TypeError("expected string");
  return new Uint8Array(unescape(encodeURIComponent(str)).split("").map(char => char.charCodeAt(0)));
}

function parsePublicKey(hexStr: string): Uint8Array {
  let bytes = [];
  for (let i = 0; i < hexStr.length; i += 2)
    bytes.push(parseInt(hexStr.slice(i, i + 2), 16));
  return new Uint8Array(bytes);
}

export function encodeBase64(uintArray: Uint8Array): string {
  return btoa(String.fromCharCode(...uintArray));
}

async function encrypt(version: number, publicKeyHex: string, _plaintext: string): Promise<string> {
  let time = Math.floor(Date.now() / 1000).toString();
  let plaintext = decodeUTF8(_plaintext);
  let additionalData = decodeUTF8(time);

  if (publicKeyHex.length !== 64) {
    throw new Error('The public key is not a valid hexadecimal string of expected length.');
  }

  let publicKey = parsePublicKey(publicKeyHex);

  let aesKey = await webcrypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]);
  let aesKeyRaw = await webcrypto.subtle.exportKey('raw', aesKey);
  let iv = new Uint8Array(12)

  let sealedKey = nacl.seal(new Uint8Array(aesKeyRaw), publicKey);

  let encrypted = await webcrypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv,
      additionalData
    },
    aesKey,
    plaintext
  );

  let buffer = new Uint8Array(100 + plaintext.length);
  let offset = 0;

  buffer[offset] = 1;
  offset += 1;
  buffer[offset] = version;
  offset += 1;

  buffer[offset] = sealedKey.length & 255;
  buffer[offset + 1] = sealedKey.length >> 8 & 255;
  offset += 2;

  buffer.set(sealedKey, offset);
  offset += 32;
  offset += nacl.overheadLength;

  let b = new Uint8Array(encrypted);

  let c = b.slice(-16);
  b = b.slice(0, -16);
  buffer.set(c, offset);
  offset += 16;
  buffer.set(b, offset);

  return ['#PWD_BROWSER', 5, time, encodeBase64(buffer)].join(':');
}

export { encrypt };

// Example:

import { encrypt } from "./libs/encpass";
import axios from "axios";

(async () => {
  let key =  {
    "publicKey": "ad79be7f6b3c56305154e6ff4051451ebf5bf16186357d2a190747fd315c3b62",
    "keyId": 197
}
  encrypt(key.keyId, key.publicKey, 'asdasdasdasdsads').then(encpass => {
    console.log(encpass)
  })
})();