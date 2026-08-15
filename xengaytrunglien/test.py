import hashlib
import json
import sys
import time
from pathlib import Path

import cloudscraper
import requests


class AutoCaptchaPro:
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.url = "https://autocaptcha.pro/apiv3/process"
        self.headers = {"Content-Type": "application/json"}

    def solve_recaptcha_v3(
        self,
        sitekey: str,
        pageurl: str,
        action: str = "submit",
        timeout: int = 180,
    ) -> str:
        payload = {
            "key": self.api_key,
            "type": "recaptchav3",
            "googlesitekey": sitekey,
            "pageurl": pageurl,
            "action": action,
            "userAgent": USER_AGENT,
        }

        print(f"Sending reCAPTCHA v3 task with action={action}...")
        resp = requests.post(self.url, json=payload, headers=self.headers, timeout=30)
        data = resp.json()

        if not data.get("success"):
            raise RuntimeError(f"AutoCaptcha submit error: {data.get('message', data)}")

        task_id = data.get("taskId") or data.get("captchaId")
        if not task_id:
            token = data.get("captcha")
            if not token:
                raise RuntimeError("AutoCaptcha returned no task id and no token.")
            return token

        print(f"Task ID: {task_id} - waiting for result...")
        for _ in range(timeout // 5):
            time.sleep(5)
            status = requests.post(
                self.url,
                json={"key": self.api_key, "type": "getResult", "taskId": task_id},
                headers=self.headers,
                timeout=30,
            )
            result = status.json()

            if result.get("success") and result.get("captcha"):
                print("reCAPTCHA v3 solved.")
                return result["captcha"]

            if result.get("status") not in ["processing", "queued"]:
                raise RuntimeError(f"AutoCaptcha error: {result.get('message')}")

        raise TimeoutError("Timed out while waiting for captcha result.")


SECRET = "4b579fe9db3e4b86413f126b407d11e2123ws"
BASE_URL = "https://xengaytrunglien.com"
SPIN_URL = f"{BASE_URL}/Ser_quaythuong"
HOME_URL = f"{BASE_URL}/"

API_KEY = "f0bbee907ddab3d4ec0eb137edb94f03"
USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
)
SITEKEY = "6LeYi4slAAAAALnG13JqaZRhdGe3G5VWQekTyyh6"
PAGE_URL = "https://xengaytrunglien.com/"
REQUEST_CONFIG_PATH = Path("request_config.json")


def tinh_checksum(phone: str, internet: str, name: str, nonce: str) -> str:
    raw = f"{phone}{internet}{name}{name}{nonce}{SECRET}"
    return hashlib.sha256(raw.encode("utf-8")).hexdigest()


def dump_http_debug(
    *,
    method: str,
    url: str,
    headers: dict[str, str],
    payload: object,
    cookies: dict[str, str],
    response: requests.Response | None = None,
) -> None:
    print("\n" + "=" * 24 + " HTTP DEBUG " + "=" * 24)
    print("method:", method)
    print("url:", url)
    print("headers:")
    print(json.dumps(headers, ensure_ascii=False, indent=2))
    print("payload:")
    print(json.dumps(payload, ensure_ascii=False, indent=2))
    print("cookies:")
    print(json.dumps(cookies, ensure_ascii=False, indent=2))

    if response is None:
        print("=" * 60)
        return

    req = response.request
    print("\nprepared request:")
    print("request.method:", req.method)
    print("request.url:", req.url)
    print("request.headers:")
    print(json.dumps(dict(req.headers), ensure_ascii=False, indent=2))
    print("request.body:")
    body = req.body.decode("utf-8", errors="replace") if isinstance(req.body, bytes) else str(req.body)
    print(body)

    print("\nresponse:")
    print("status_code:", response.status_code)
    print("reason:", response.reason)
    print("response.headers:")
    print(json.dumps(dict(response.headers), ensure_ascii=False, indent=2))
    print("response.cookies:")
    print(json.dumps(response.cookies.get_dict(), ensure_ascii=False, indent=2))
    print("response.text:")
    print(response.text)
    print("=" * 60)


def load_request_config() -> dict | None:
    if not REQUEST_CONFIG_PATH.exists():
        return None

    with REQUEST_CONFIG_PATH.open("r", encoding="utf-8") as file:
        return json.load(file)


def send_generic_request(scraper: cloudscraper.CloudScraper, config: dict) -> requests.Response:
    method = str(config.get("method", "POST")).upper()
    url = str(config["url"])
    headers = dict(config.get("headers", {}))
    cookies = dict(config.get("cookies", {}))
    json_payload = config.get("json")
    raw_payload = config.get("data")
    debug_payload = json_payload if json_payload is not None else {"raw": raw_payload}

    if cookies:
        scraper.cookies.update(cookies)

    dump_http_debug(
        method=method,
        url=url,
        headers=headers,
        payload=debug_payload,
        cookies=scraper.cookies.get_dict(),
    )

    response = scraper.request(
        method=method,
        url=url,
        headers=headers,
        json=json_payload,
        data=raw_payload if json_payload is None else None,
    )

    dump_http_debug(
        method=method,
        url=url,
        headers=headers,
        payload=debug_payload,
        cookies=scraper.cookies.get_dict(),
        response=response,
    )
    return response


def main() -> None:
    sys.stdout.reconfigure(encoding="utf-8")

    request_headers = {
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.9,vi;q=0.8',
            'cache-control': 'no-cache',
            'content-type': 'application/json; charset=UTF-8',
            'origin': 'https://xengaytrunglien.com',
            'pragma': 'no-cache',
            'priority': 'u=1, i',
            'referer': 'https://xengaytrunglien.com/',
            'sec-ch-ua': '"Chromium";v="148", "Brave";v="148", "Not/A)Brand";v="99"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36'
    }

    scraper = cloudscraper.create_scraper(
        browser={"browser": "chrome", "platform": "windows", "mobile": False}
    )

    print("Fetching home page for session cookies...")
    scraper.get(HOME_URL, headers=request_headers, timeout=30)
    print("Cookies:", scraper.cookies.get_dict())

    request_config = load_request_config()
    if request_config is not None:
        print(f"Loaded generic request config from {REQUEST_CONFIG_PATH}")
        response = send_generic_request(scraper, request_config)
        print(f"\nStatus: {response.status_code}")
        try:
            print(json.dumps(response.json(), ensure_ascii=False, indent=2))
        except ValueError:
            print(response.text)
        return

    solver = AutoCaptchaPro(API_KEY)
    current_nonce = "INIT_KEY"

    try:
        token = solver.solve_recaptcha_v3(
            sitekey=SITEKEY,
            pageurl=PAGE_URL,
            action="submit",
        )

        payload = {
            "name": "123123123",
            "internet": "VIETTEL",
            "phone": "0356666123",
            "checksum": tinh_checksum("0356666123", "VIETTEL", "123123123", current_nonce),
            "captcha": "123",
            "browser": "Chrome",
            "recaptchaToken": token,
        }

        dump_http_debug(
            method="POST",
            url=SPIN_URL,
            headers=request_headers,
            payload=payload,
            cookies=scraper.cookies.get_dict(),
        )

        response = scraper.post(
            SPIN_URL,
            json=payload,
            headers=request_headers,
        )

        dump_http_debug(
            method="POST",
            url=SPIN_URL,
            headers=request_headers,
            payload=payload,
            cookies=scraper.cookies.get_dict(),
            response=response,
        )

        print(f"\nStatus: {response.status_code}")
        try:
            data = response.json()
            print(json.dumps(data, ensure_ascii=False, indent=2))
            if "nextNonce" in data:
                print(f"nextNonce: {data['nextNonce']}")
        except ValueError:
            print(response.text)

    except Exception as exc:
        print("Error:", exc)


if __name__ == "__main__":
    main()
