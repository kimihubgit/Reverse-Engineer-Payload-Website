- Có 2 dạng Key Mã hóa:

1 là đã Login ( Sử dụng dạng mã hóa là TokenAndUid )
tokenAndUid: () => md5(n + c).slice(0, 16)

2 là chưa login ( Sử dụng Dạng Mã hóa là duobleToken )
doubleToken: () => md5(n + md5(n)).slice(2, 18)

=> cả 1 mã hóa đều cùng tạo ra 1 key gồm 16 kí tự

- Giải Thích Các tham số
trong đó:
n: b2e3d672-9d88-47a7-81b4-9d7ffc62054f ( đây là giá trị cố định không thay đổi )

c: đây là "username" của người dùng, chỉ có khi đã login tài khoản ( xem file user.json )