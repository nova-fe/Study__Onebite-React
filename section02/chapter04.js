// 1. Spread 연산자
// -> Spread: 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3); // 1, 2, 3
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest: 나머지, 나머지 매개변수
function funcB(one, ...rest) {
  // ...rest는 뒤에 나오는 모든 인수들을 다 배열에 저장하는 느낌. 그러므로 ...rest 뒤에는 매개변수가 올 수 없다.
  // => ...rest 매개변수는 마지막에 오도록 설정
  // 예시: function funcB(one, ...rest, two) -> two 부분은 오류가 남
  // ...만 붙으면 되므로 꼭 rest가 아니라 아무 이름으로나 적어도 됨 ...args 이런식으로
  console.log(one); // 1
  // rest라는 매개변수에 함수 호출시 전달된 모든 인수들이 배열 형태로 저장이 됨
  console.log(rest); // [2, 3]
}

funcB(...arr1);
