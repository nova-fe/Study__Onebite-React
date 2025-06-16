// const moduleData = require("./math");
// console.log(moduleData);  // { add: [Function: add], sub: [Function: sub] }
// CJS (Common JS 모듈 시스템) 으로 가져옴 (require)
// const { add, sub } = require("./math");

// ESM (ES 모듈 시스템) 으로 가져옴
// import mul from "./math.js";
// import { add, sub } from "./math.js";
// import mul, { add, sub } from "./math.js";

// console.log(add(1, 2)); // 3
// console.log(sub(1, 2)); // -1
// console.log(mul(1, 2)); // 2

import randomColor from "randomcolor";
const color = randomColor();
console.log(color); // 랜덤 컬러 코드가 들어옴(예시: #e5ce39)
