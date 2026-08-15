const fs = require("fs");

async function inspectWasm() {
  const wasmBuffer = fs.readFileSync("download.wasm");

  try {
    const module = await WebAssembly.compile(wasmBuffer);

    console.log("📋 DANH SÁCH TẤT CẢ IMPORT CẦN CÓ:\n");

    const imports = WebAssembly.Module.imports(module);

    imports.forEach((imp, index) => {
      console.log(
        `${index + 1}. Module: "${imp.module}" | Name: "${imp.name}" | Kind: ${imp.kind}`,
      );
    });

    console.log(`\nTổng cộng: ${imports.length} imports`);
  } catch (err) {
    console.error("Lỗi:", err.message);
  }
}

inspectWasm();
