import re

def extract_raw_calls(js_file_path):
    # Đọc toàn bộ nội dung file JS
    with open(js_file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex bắt chính xác các dạng gọi hàm obfuscated như bạn mô tả
    pattern = re.compile(r'''
        \w+\(\)                       # hàm gốc: hU(), sA(), cA()...
        \s*\[\s*.+?\s*\]               # thuộc tính trong ngoặc vuông: [gn(Dl)], [hN(dA)]...
        (\.call|\.apply)?             # có thể có .call hoặc .apply
        \s*\(                         # mở ngoặc tham số
        \s*(null\s*,?\s*)?            # có thể có null,
        (                             # tham số
            \[.*?\]                   # dạng [a, b, c] trong apply
            |                         # hoặc
            [^)]*                     # các tham số bình thường
        )
        \s*\)                         # đóng ngoặc
    ''', re.VERBOSE)

    raw_lines = []

    for match in pattern.finditer(content):
        raw_line = match.group(0).strip()  # lấy toàn bộ chuỗi khớp
        # Loại bỏ khoảng trắng thừa và xuống dòng nếu có
        raw_line = re.sub(r'\s+', ' ', raw_line)
        if raw_line not in raw_lines:  # tránh trùng lặp
            raw_lines.append(raw_line)

    return raw_lines

# ==================== SỬ DỤNG ====================

# Đổi thành đường dẫn file JS thực tế của bạn
js_file = 'AiEjN0oB.js'  # <-- THAY ĐỔI Ở ĐÂY

calls = extract_raw_calls(js_file)

# In ra số lượng tìm được
print(f"Tìm thấy {len(calls)} dòng gọi hàm obfuscated:\n")

# In ra mảng array đúng như bạn yêu cầu
print("MẢNG RAW_LINES:")
print("[")
for i, line in enumerate(calls):
    print(f'    "{line}"' + ("," if i < len(calls)-1 else ""))
print("]")

# Nếu muốn copy nhanh, in luôn dạng JavaScript array
print("\n// Dạng array JavaScript để copy:")
print("const calls = " + str(calls) + ";")