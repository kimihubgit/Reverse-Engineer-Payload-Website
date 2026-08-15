// importObject.js
let memory = null;
const textDecoder = new TextDecoder("utf-8");
const textEncoder = new TextEncoder();

function readString(ptr, len) {
  if (!memory || ptr === 0) return "";
  try {
    const view = new Uint8Array(memory.buffer, ptr, len);
    return textDecoder.decode(view);
  } catch (e) {
    return "";
  }
}

function writeStringToMemory(str) {
  if (!memory) return 0;
  const bytes = textEncoder.encode(str);
  const ptr = wasmInstance.exports.__wbindgen_malloc?.(bytes.length + 1) || 0;
  if (ptr) {
    new Uint8Array(memory.buffer, ptr, bytes.length).set(bytes);
  }
  return ptr;
}

// Wrapper try-catch (tương đương hàm i())
function safeCall(fn, args) {
  try {
    return fn.apply(null, args);
  } catch (err) {
    console.error("[WASM Import Error]", err);
    return undefined;
  }
}

const wbg = {
  // ==================== STRING ====================
  __wbindgen_string_new: (ptr, len) => {
    return readString(ptr, len);
  },

  __wbindgen_string_get: (arg0, arg1) => {
    const str = typeof arg1 === "string" ? arg1 : "";
    const ptr = writeStringToMemory(str);
    // Cần trả về theo format pointer + length (thường ghi vào memory)
    // Phiên bản này dùng cách ghi vào memory qua DataView
    return ptr;
  },

  // ==================== MEMORY ====================
  __wbindgen_memory: () => memory,

  __wbg_buffer_609cc3eee51ed158: (arr) => arr.buffer,

  __wbg_newwithlength_a381634e90c276d4: (len) => new Uint8Array(len >>> 0),
  __wbg_new_a12002a7f91c75be: (len) => new Uint8Array(len),
  __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a: (buffer, offset, length) =>
    new Uint8Array(buffer, offset >>> 0, length >>> 0),

  __wbg_subarray_aa9065fa9dc5df96: (arr, start, end) =>
    arr.subarray(start >>> 0, end >>> 0),

  __wbg_set_65595bdd868b3009: (arr, value, offset) => {
    arr.set(value, offset >>> 0);
  },

  // ==================== REFLECT & CALL ====================
  __wbg_get_67b2ba62fc30de12: (target, key) =>
    safeCall(() => Reflect.get(target, key), []),

  __wbg_set_bb8cecf6a62b9f46: (target, key, value) =>
    safeCall(() => Reflect.set(target, key, value), []),

  __wbg_call_672a4d21634d4a24: (func, thisArg) =>
    safeCall(() => func.call(thisArg), []),

  __wbg_call_7cccdd69e0791ae2: (func, thisArg, arg) =>
    safeCall(() => func.call(thisArg, arg), []),

  // ==================== CRYPTO ====================
  __wbg_crypto_574e78ad8b13b65f: (global) => global.crypto,
  __wbg_msCrypto_a61aeb35a24c1329: (global) => global.msCrypto,

  __wbg_getRandomValues_b8f5dbd5f3995a9e: (arr) => {
    crypto.getRandomValues(arr);
  },
  __wbg_randomFillSync_ac0988aba3254290: (arr) => {
    crypto.randomFillSync(arr);
  },

  // ==================== GLOBAL OBJECTS ====================
  __wbg_static_accessor_GLOBAL_88a902d13a557d07: () =>
    typeof global !== "undefined" ? global : null,
  __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0: () =>
    typeof globalThis !== "undefined" ? globalThis : null,
  __wbg_static_accessor_SELF_37c5d418e4bf5819: () =>
    typeof self !== "undefined" ? self : null,
  __wbg_static_accessor_WINDOW_5de37043a91a9c40: () =>
    typeof window !== "undefined" ? window : null,

  __wbg_instanceof_Window_def73ea0955fc569: (obj) => {
    try {
      return obj instanceof Window;
    } catch {
      return false;
    }
  },

  // ==================== OTHERS ====================
  __wbg_log_c222819a41e063d3: (msg) => console.log(msg),
  __wbg_new_405e22f390576ce2: () => ({}),
  __wbg_newnoargs_105ed471475aaf50: (ptr, len) => {
    const code = readString(ptr, len);
    return new Function(code);
  },

  __wbg_stringify_f7ed6987935b4a24: (obj) => {
    try {
      return JSON.stringify(obj);
    } catch {
      return "null";
    }
  },

  __wbg_node_905d3e251edff8a2: (obj) => obj.node,
  __wbg_process_dc0fbacc7c1c06f7: (obj) => obj.process,
  __wbg_versions_c01dfd4722a88165: (obj) => obj.versions,
  __wbg_require_60cc747a6bc5215a: () => require,

  __wbg_origin_7c5d649acdace3ea: () => "https://sun.win",

  __wbindgen_is_function: (v) => typeof v === "function",
  __wbindgen_is_object: (v) => typeof v === "object" && v !== null,
  __wbindgen_is_string: (v) => typeof v === "string",
  __wbindgen_is_undefined: (v) => v === undefined,

  __wbindgen_debug_string: (ptr, len) => {
    console.log("[WASM Debug]", readString(ptr, len));
  },

  __wbindgen_throw: (ptr, len) => {
    throw new Error(readString(ptr, len));
  },

  __wbindgen_init_externref_table: () => {
    // Thường không cần làm gì nhiều
    console.log("[init_externref_table] called");
  },
};

module.exports = {
  wbg,
  setMemory: (m) => {
    memory = m;
  },
};
