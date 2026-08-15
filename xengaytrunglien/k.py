import requests
import time

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
            "action": action
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

API_KEY = "f0bbee907ddab3d4ec0eb137edb94f03"
SITEKEY = "6LeYi4slAAAAALnG13JqaZRhdGe3G5VWQekTyyh6"
PAGE_URL = "https://xengaytrunglien.com/"

solver = AutoCaptchaPro(API_KEY)

token = "0cAFcWeA6Ftq3jvBUBCwZsW3Ks_LtujJKxDu1aZgQXbzhh04vHnm16uj7q1R1w3hkLe82k1USw8LhyTwMvFmC72zujSDlLLRcDjemVnsEXbw60rlDzaoVHDqy9ongMFhMujTsauyKkMIcFsSF45UAlQWVLSd_zVIFnqs2XNiUQ_e6_CGWLE_08R6PEtjX9PtjfGDcVPg-zSUKZtYRLblyE68P-F1fRN_nPN1mHU1_ko0ZRfT24rYEl2ttSIK9EFSlreszXZPO0F-2eR5eQFHhUt0D2GAwMf_fGbJp7Oa42-SJOWuj4R-atiKgLrMwB9e0aeUOWDGqVKW4dpGTPRnQMxEsTd2DcYIWJe_33GfZDxwXdkNeVEi5b9ou5L4avMZfxyj0Jg2b15X5L0z5hi_QIXK9E3Wwvu7Y5gVSc7ZgBLaDpRVlVUnv0-MHgi2wzVpFAB4y_YSFzNTnHYW7wT21v2gYxmO0TPy707vrA0luGkbc9GTmwUaG4r8WL0acnqaxWhpFC3LlPhCRBgWkjFHhEKDooCNj0I_EdKKqXtRr69Yv5RWgjEtdkrHVtjIgpATJx63HhJRl0dG1Rnl3ln_u_LHlBe13fwbjElZ08LV-jfwRMJbblreJENKM6xyQZsJQWaWrBo0NjPr6Gf9bZpBUGiZhI5jZOyB3qvQjCAzJ7wsfhgWoZ5lflJ-dKQagjd3_Qx1gOPs3tgEtQn_FAsfehz7dX3NasMvRFAN2vjTLf988dx00zR8hPejHNS_0xfn3Zm60EggzU3uZYE8Enf0NEx3QOAkqynG0yK58NjeJU0XZQ2Sj1aBXGws3UHEx8I6g3L5OpHMQIHLi3xfbNBGeJLy-KbtjJpon3coZtCrHXMv95npGW5cILTNrhzgeW9M9XCmiJ62yfu6S3tK1W2ocJQreSCzO8bACgchGLGdLkDfe-zjV55TVPspxCIaRvSmCyY73Kh2IEckI5hTRtUROEskLbYt_57al0np8PvBKPS2rBqTZGxEmNCsPY9z8JOH2ZA07jYh0NQ_Wg-8veoYGJIlhVSrW2TuVUHuYUbS2-HW576yCjZV0xwGSV9lNZQa_RzzF7_vlcE6s8szbsniiuLhoov7c3EgUFSfzDs9aV7y3C6s-YxqBCtubOR2sq4xiav7_WrFq1PBVa"

rq = requests.session()
rq.get("https://xengaytrunglien.com/")
url = "https://xengaytrunglien.com/Ser_quaythuong"

payload = '{\"name\":\"123123123\",\"internet\":\"VIETTEL\",\"phone\":\"0357558778\",\"checksum\":\"ef1eb33fcdf3466524c03585910b3e46279bd32c5acad8f56b0d155159339b55\",\"captcha\":\"pkkk\",\"browser\":\"Chrome\",\"recaptchaToken\":\"' + token + '\"}'
headers = {
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
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36',
}

response = rq.request("POST", url, headers=headers, data=payload)

print(response.text)
