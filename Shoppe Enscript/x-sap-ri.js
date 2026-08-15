const crypto = require('crypto'); // Node.js crypto module

// Helper function to convert byte array to hex string
const utils = {
  to_hex_string(array) {
    return Array.from(array)
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }
};

function get_x_sap_ri() {
  const timestamp = Math.ceil(Date.now() / 1000);
  const buffer = new ArrayBuffer(26);
  const view = new DataView(buffer);
  view.setUint32(0, timestamp, true);
  const randomArray = crypto.randomBytes(22);
  const array = new Uint8Array(view.buffer);
  array.set(randomArray, 4);
  let magic = array[11];
  magic = (3 << 4) + (15 & magic);
  array[11] = magic;
  array[12] = 3;
  array[13] = 1;
  const hexString = utils.to_hex_string(array);
  
  return {
    'x-sap-ri': hexString,
    'timestamp': timestamp,
    'b1x': randomArray[0] 
  };
}

console.log(get_x_sap_ri());