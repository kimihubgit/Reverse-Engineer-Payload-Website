const CryptoJS = require("crypto-js");

class Auth {
    constructor({ consumerKey, consumerSecret, authToken = "", environment, oauthKeyVersion = "" }) {
        this.wordChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        this.consumerKey = consumerKey;
        this.consumerSecret = consumerSecret;
        this.authToken = authToken;
        this.realm = environment?.realm;
        this.oauthKeyVersion = oauthKeyVersion;
        this.signatureMethod = "HMAC-SHA1";
    }

    static create({ consumerKey, consumerSecret, authToken, environment, oauthKeyVersion }) {
        return new Auth({ consumerKey, consumerSecret, authToken, environment, oauthKeyVersion });
    }

    createAuthHeader({ url, method }) {
        const params = {
            oauth_consumer_key: this.consumerKey,
            oauth_signature_method: this.signatureMethod,
            oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
            oauth_nonce: this.generateNonce(),
            ...(this.oauthKeyVersion && { oauth_key_version: this.oauthKeyVersion })
        };
        params.oauth_signature = this.generateSignature({ url, method }, params);
        return this.toAuthHeader(params);
    }

    generateNonce() {
        return Array.from({ length: 32 }, () => 
            this.wordChars[Math.floor(Math.random() * this.wordChars.length)]
        ).join("");
    }

    generateSignature({ url, method }, params) {
        const baseString = `${method}&${this.encode(url)}&${this.getParamString(params)}`;
        const signingKey = `${this.encode(this.consumerSecret)}&${this.encode(this.authToken)}`;
        return CryptoJS.HmacSHA1(baseString, signingKey).toString(CryptoJS.enc.Base64);
    }

    getParamString(params) {
        const encoded = Object.keys(params)
            .sort()
            .map(key => `${this.encode(key)}=${this.encode(params[key])}`)
            .join("&");
        return encoded;
    }

    encode(str) {
        return encodeURIComponent(str)
            .replace(/!/g, "%21")
            .replace(/\*/g, "%2A")
            .replace(/'/g, "%27")
            .replace(/\(/g, "%28")
            .replace(/\)/g, "%29");
    }

    toAuthHeader(params) {
        const header = [`OAuth realm="${this.realm}"`];
        for (const key in params) {
            if (key.startsWith("oauth_")) {
                header.push(`${this.encode(key)}="${this.encode(params[key])}"`);
            }
        }
        return header.join(",");
    }
}

function getAuthHeader({ consumerKey, consumerSecret, authToken, url, method, environment, oauthKeyVersion }) {
    const auth = Auth.create({ consumerKey, consumerSecret, authToken, environment, oauthKeyVersion });
    return auth.createAuthHeader({ url, method });
}

const config = {
    consumerKey: "textfree-in-flash-web-free",
    consumerSecret: "801bd5490f8342bc4f9e98fd99919b258f6b5b5d8daf05cd536f0e496a2b9ced",
    authToken: "",
    url: "https://api.pinger.com/1.0/log/event",
    method: "POST"
};

console.log(getAuthHeader(config));