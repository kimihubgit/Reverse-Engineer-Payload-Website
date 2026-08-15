let e = {
    "accountName": "vkhai2603@gmaail.com",
    "password": "ssdfsdfsdfs",
    "rememberMe": false,
    "emailVettingVerificationToken": "",
    "pause2FA": false,
    "ignoreTrustTokens": false,
    "isRememberMeEnabled": true,
    "srpData": {
        "m1": "Cts/COLw9XFfUtSmQIkl3OwCH+pPssUfgbITJcVRIJ0=",
        "m2": "9HQlO4kFywrVue5Nfc1Tgj/2aNT9aOezN0Y8IU6S1hs=",
        "c": "d-7d0-584c812e-be13-11f0-b538-c14e78a0c86b:NC"
    },
    "hashcashStamp": "1:10:20251110085753:19771ff829a5fd959003cad9e5e14cea::1064",
    "qrcToken": ""
}

let m = {
    "accountName": "vkhai2603@gmaail.com",
    "rememberMe": false,
    "m1": "Cts/COLw9XFfUtSmQIkl3OwCH+pPssUfgbITJcVRIJ0=",
    "c": "d-7d0-584c812e-be13-11f0-b538-c14e78a0c86b:NC",
    "m2": "9HQlO4kFywrVue5Nfc1Tgj/2aNT9aOezN0Y8IU6S1hs="
}
let p = {
    "m1": "Cts/COLw9XFfUtSmQIkl3OwCH+pPssUfgbITJcVRIJ0=",
    "m2": "9HQlO4kFywrVue5Nfc1Tgj/2aNT9aOezN0Y8IU6S1hs=",
    "c": "d-7d0-584c812e-be13-11f0-b538-c14e78a0c86b:NC"
}

let n = {
    "U": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
    "L": "vi-VN"
}

let password = "ssdfsdfsdfs"


// scnt: api tra3 vê
let scnt = "AAAA-kVDMjc2OTU1QjBCMENFODY1MzUzMDgyRDk3NjVGN0M2OUFFOTYyNjNFNTdFRkU0MzkzODBEN0QxMkUyRDI5MjQxNzQ3NjdCRTUwMjc0N0Q2MTQzRTA0QzIyREYwNjI1NzgxNzk4OTkxMTRCMjVBQjczREE0MUI3NEM4ODVBRTBDNTJBMDYzRDJCMDc4RTUxOUQwNTQxRkQzNDNDOTkxMDIwNkZGQ0UyN0JGMzFBRjc0NkRCQjJDNjdGOUUzOTg2QkI5QzcxMkQ1Q0UyRTM2N0Q0NkEwOTA5NTc5QTlFNTIwMTAxNjUxRTg5RUEyNzk2QnwyAAABmm0KKwHk93lQtbrZP3ElkwJ5CJs5nZN0MV9XqOVKfquDhg9ZqV17AP50NtupAANCnNa5wCrRwPAo-L10O2bRu96R8LysHpKP817vo27oC1fHM-eTaQ"

let X_APPLE_HC = e.hashcashStamp

let X_Apple_Widget_Key = "a797929d224abb1cc663bb187bbcd02f7172ca3a84df470380522a7c6092118b"

let X_Apple_I_FD_Client_Info = Xe.getBrowserData()



// p.m2 && (m.m2 = p.m2)) : b["X-Apple-I-Require-SI-Challenge"] = Math.random().toString(36).substring(2, 8)