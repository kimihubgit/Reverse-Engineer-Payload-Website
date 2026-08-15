function randomDomBlockerDuration() {
  const r = Math.random();

  if (r < 0.6) {
    // 60% trường hợp: site tối ưu
    return Math.floor(20 + Math.random() * 60); // 20–80
  } else if (r < 0.9) {
    // 30%: bình thường
    return Math.floor(80 + Math.random() * 120); // 80–200
  } else {
    // 10%: site nặng
    return Math.floor(200 + Math.random() * 400); // 200–600
  }
}

export default randomDomBlockerDuration;
