// 1. 콜백함수
function main(value) {
  // console.log(value);
  // 콘솔: 
  // ƒ sub() {  // 콜백함수
  //   console.log("i am sub");
  // }

  value();  // 함수를 실행함 (실행하지 않으면 value는 그냥 콜백함수 '자체'가 됨)
  // 콘솔: i am sub
}

// 함수 선언식
// function sub() {  // 콜백함수
//   console.log("i am sub");
// }
// main(sub);

// 함수 표현식
// -> 위 함수는 화살표함수로 사용가능
main(() => {
  // console.log("i am sub");
})

// 2. 콜백함수의 활용
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx); // 이것 하나만 달라지는 건데 코드가 비슷하다? -> 이럴때 콜백함수 활용
  }
}
function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2); // 이것 하나만 달라지는 건데 코드가 비슷하다? -> 이럴때 콜백함수 활용
  }
}
// repeat(5);
// repeat(5);

function repeatCall(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}
repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});