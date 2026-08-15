👉 hook XMLHttpRequest.prototype.open để debugger khi URL chứa mtgsig, rồi vẫn cho request chạy.




Code Rút Gọn:

(()=>{const o=XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open=function(m,u,a){
u&&u.includes("mtgsig")&&debugger;
return o.apply(this,arguments);
};})();



⚠️ Lưu ý:

Hook này chỉ bắt XHR
❌ Không bắt được fetch
Nếu site dùng fetch → cần hook thêm