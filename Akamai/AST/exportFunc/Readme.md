Các File vm của akamai khi download về thì code nó sẽ còn rất nhiều function enc chưa giải mã hết. cho dùng có dùng qua ast
các function này là function tĩnh, không thể dùng ast được.

chúng ta sẽ nghĩ ra sang hướng khác đó là dùng cách đối chiếu: 

# Quy Trình

Thu Thập Function -> [] Chuyển đổi thành 1 mảng các function -> Sử dụng domFunction Để đối chiếu Function -> sử dụng AST hoặt python để thây thế


# Các Loại Function VMP Trong Akami
```
hU()[gn(Dl)](n0, XPQ, jn)
sA()[hN(dA)].call(null, bE, OZ, Qr, Fv, Yf)
cA()[QU(nr)].apply(null, [JH, pG])
bWQ[Ul(typeof cA()[QU(kD)], zG('', [][[]])) ? cA()[QU(Rf)](tj, QH) : cA()[QU(II)](CtQ, mdQ)]
```
/*
Lấy hU()[gn(Dl)](n0, XPQ, jn) đầu tiên làm ví dụ (các ví dụ khác cũng tương tự)
hU()[gn(Dl)](n0, XPQ, jn)   Sử Lí Thành ----》   obj['hU()[gn(Dl)](n0, XPQ, jn)'] = hU()[gn(Dl)](n0, XPQ, jn),obj['hU()[gn(Dl)](n0, XPQ, jn)']
*/

- Chúng ta cần phải thu thập các hàm này và tổng hợp chúng lại thành 1 array để đối chiếu với web

    
