// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
}

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color;  // 삭제

console.log(animal);  // 위의 3개가 전부 적용된 값이 반환됨

// animal = '새로운 값 할당은 불가능'  // Error


// 2. 메서드
// -> 값이 함수인 프로퍼티

const person = {
  name: "Nova",
  // 메서드
  sayHi() {
    console.log("안녕!");
  }
}

person.sayHi(); // 안녕!
person["sayHi"]();  // 안녕!