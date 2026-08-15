const crypto = require('crypto');

function generateHash() {
  // Step 1: Compute MD5 of 'itemid=11708405&shopid=240546671'
  const innerString = 'itemid=44411837013&shopid=240546671';
  const innerHash = crypto.createHash('md5').update(innerString).digest('hex');
  
  // Step 2: Concatenate '' + '55b03' + innerHash + '55b03' and compute MD5
  const outerString = '' + '55b03' + innerHash + '55b03';
  const outerHash = crypto.createHash('md5').update(outerString).digest('hex');
  
  // Step 3: Prepend '55b03-' to the final hash
  return '55b03-' + outerHash;
}

// 55b03-c93ad87fbc37736931bcaac9aa691a58
// 55b03-ceee1276ce095c2a5638d32f40ecb136
// 55b03-ceee1276ce095c2a5638d32f40ecb136


console.log(generateHash());