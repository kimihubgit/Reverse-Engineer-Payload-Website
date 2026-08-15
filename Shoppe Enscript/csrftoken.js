function csrftoken(e=0, t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
    let r = "";
    for (let e = 0; e < 32; e++) {
        let e = Math.floor(Math.random() * t.length);
        r += t.substring(e, e + 1)
    }
    return {"csrftoken": r}
}
console.log(csrftoken())