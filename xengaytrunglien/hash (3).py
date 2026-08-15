import hashlib
import json
import sys
from typing import Any
import time
import requests


class AutoCaptchaPro:
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.url = "https://autocaptcha.pro/apiv3/process"
        self.headers = {"Content-Type": "application/json"}

    def solve_recaptcha_v3(self, sitekey: str, pageurl: str, action: str = "submit", min_score: float = 0.3, timeout: int = 180):
        payload = {
            "key": self.api_key,
            "type": "recaptchav3",      # ← Quan trọng: dùng recaptchav3
            "googlesitekey": sitekey,
            "pageurl": pageurl,
            "action": action,           # ← BẮT BUỘC với v3
            "min_score": min_score      # 0.3 ~ 0.7 (càng cao càng khó)
        }

        print(f"🔄 Đang gửi reCAPTCHA v3 đến AutoCaptcha.pro (action={action})...")
        response = requests.post(self.url, json=payload, headers=self.headers, timeout=30)
        data = response.json()

        if not data.get("success"):
            raise Exception(f"Lỗi submit AutoCaptcha: {data.get('message', data)}")

        task_id = data.get("taskId") or data.get("captchaId")
        if not task_id:
            return data.get("captcha") or data.get("solution", {}).get("gRecaptchaResponse")

        print(f"✅ Task ID: {task_id} - Đang chờ giải (tối đa {timeout}s)...")

        # Polling
        for _ in range(timeout // 5):
            time.sleep(5)
            status_payload = {
                "key": self.api_key,
                "type": "getResult",
                "taskId": task_id
            }
            resp = requests.post(self.url, json=status_payload, headers=self.headers, timeout=30)
            result = resp.json()

            if result.get("success") and result.get("captcha"):
                token = result["captcha"]
                print("✅ Giải reCAPTCHA v3 thành công!")
                return token

            if result.get("status") in ["processing", "queued"]:
                continue

            if result.get("message"):
                raise Exception(f"Lỗi AutoCaptcha: {result['message']}")

        raise Exception("⏰ Hết thời gian chờ giải captcha")


# ==================== CẤU HÌNH ====================
BASE_URL = "https://xengaytrunglien.com"
SPIN_URL = f"{BASE_URL}/Ser_quaythuong"
HOME_URL = f"{BASE_URL}/"

API_KEY = 'f0bbee907ddab3d4ec0eb137edb94f03'     # ← THAY BẰNG KEY CỦA BẠN
SITEKEY = '6LeYi4slAAAAALnG13JqaZRhdGe3G5VWQekTyyh6'
PAGE_URL = 'https://xengaytrunglien.com/'


def tinh_checksum1(phone: str, internet: str, name: str, nonce: str = "INIT_KEY") -> str:
    raw = f"{phone}{internet}{name}{name}{nonce}4b579fe9db3e4b86413f126b407d11e2123ws"
    return hashlib.sha256(raw.encode("utf-8")).hexdigest()


def build_payload(
    phone: str,
    internet: str,
    name: str,
    nonce: str = "INIT_KEY",
    captcha: str = "123123",
    browser: str = "Chrome",
    recaptcha_token: str = "test",
) -> dict[str, Any]:
    return {
        "name": name,
        "internet": internet,
        "phone": phone,
        "checksum": tinh_checksum1(phone, internet, name, nonce),
        "captcha": captcha,
        "browser": browser,
        "recaptchaToken": recaptcha_token,
    }


def send_test_request(payload: dict[str, Any]) -> requests.Response:
    session = requests.Session()
    session.get(HOME_URL, timeout=20)
    response = session.post(
        SPIN_URL,
        json=payload,
        headers={"Content-Type": "application/json; charset=UTF-8"},
        timeout=20,
    )
    print("cookies:", session.cookies.get_dict())
    return response


def main() -> None:
    sys.stdout.reconfigure(encoding="utf-8")

    solver = AutoCaptchaPro(API_KEY)

    try:
        token = solver.solve_recaptcha_v3(
            sitekey=SITEKEY,
            pageurl=PAGE_URL,
            action="submit",
            min_score=0.9,
            timeout=180
        )

        print("✅ Captcha v3 đã giải xong!")

        payload = build_payload(
            phone="0356666123",
            internet="VIETTEL",
            name="123123123",
            nonce="INIT_KEY",
            captcha="123123",
            browser="Chrome",
            recaptcha_token=token,
        )

        response = send_test_request(payload)

        print("status:", response.status_code)
        print("content-type:", response.headers.get("content-type"))

    except Exception as e:
        print("❌ Lỗi:", e)
        sys.exit(1)

    try:
        print(json.dumps(response.json(), ensure_ascii=False, indent=2))
    except ValueError:
        print(response.text)


if __name__ == "__main__":
    main()