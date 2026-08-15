const crypto = require("crypto");
const fs = require("fs");
const { wbg, setMemory } = require("./wasm-import");
const getHSK = "kUHH2za4EuRjWGPk"; // web key
// const getHSK = ""; // app key

const nonce = "MruFiNHGHgizAUWEJYltFkysypMjcPUT";

const data = "vkhai2603asdasd2342341778228887767kUHH2za4EuRjWGPk";

const hash = crypto.createHash("md5").update(data).digest("hex");
console.log(hash);

const objdata = {
  command: "loginWebHash",
  username: "vkhai2603",
  password: "asdasd23423",
  platformId: 4,
  advId: "",
  deviceId: "",
  hash: "78922e174b35e0bc2292f9c558bcff47",
  brand: "sun.win",
  sessionId: "",
  timestamp: "1778228887767",
};

// start Authentication

const dataAuth = {
  type: "login",
  username: "vkhai2603",
  password: "asdasd23423",
  brand: "sun.win",
  deviceId: "",
  platformId: 4,
  timestamp: "1778228887767",
};

const generateNonce = (length) => {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from(window.crypto.getRandomValues(new Uint8Array(length)))
    .map((x) => charset[x % charset.length])
    .join("");
}; // nonce demo "WEuFHBpDLpJpfyhBChObIxszmo7gRlvi"

// i = z(dataAuth, "WEuFHBpDLpJpfyhBChObIxszmo7gRlvi") hàm gọi trong file js để bắt đầu start authentication

async function runWasm() {
  const wasmBuffer = fs.readFileSync("download.wasm");

  const importObject = {
    wbg: wbg,
    env: { memory: new WebAssembly.Memory({ initial: 512 }) },
  };

  function readString(ptr, len) {
    if (!memory) return "";
    try {
      const buffer = new Uint8Array(memory.buffer, ptr, len);
      return new TextDecoder().decode(buffer).replace(/\0/g, "");
    } catch (e) {
      return "";
    }
  }

  try {
    console.log("🔄 Đang instantiate WASM...");
    const { instance } = await WebAssembly.instantiate(
      wasmBuffer,
      importObject,
    );

    memory = instance.exports.memory || importObject.env.memory;

    console.log("✅ WASM Loaded thành công!");
    console.log("📦 Exports:", Object.keys(instance.exports));
  } catch (err) {
    console.error("❌ Lỗi instantiate:", err.message);
  }

  const { I, memory } = wasmModule.instance.exports;
  const G = 32;
  const N = I(G, 1) >>> 0;
  console.log("Địa chỉ vùng nhớ được cấp phát:", N);
}
runWasm().catch(console.error);
