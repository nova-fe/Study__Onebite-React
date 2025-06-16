// math 모듈
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

// CJS (Common JS 모듈 시스템) 으로 내보냄 (module.exports)
// module.exports = {
//   add,
//   sub,
// };

// ESM (ES 모듈 시스템) 으로 내보냄
export { add, sub };

// 기본
export default function multiply(a, b) {
  return a * b;
}
