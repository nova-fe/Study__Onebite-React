let varA = funcA;
varA(); // 정상 실행(호이스팅O)
varB(); // Error(호이스팅X)

// 1. 함수 선언식 -> 호이스팅O
function funcA() {
  console.log("funcA");
}


// 2. 함수 표현식 -> 호이스팅X
let varB = function () {
  console.log("funcB");
}

// 3. 화살표 함수
// let varC = () => 1;
let varC = (value) => {
  console.log(value);
  return value + 1;
}
console.log(varC(10));