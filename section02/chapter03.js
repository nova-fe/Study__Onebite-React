// 1. 배열의 구조분해할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four); // 1 2 3 4

// 2. 객체의 구조분해할당
let person = {
  name: "Nova",
  age: 33,
  hobby: "유튜브보기",
};

// let { name, age, hobby} = person;

// 객체 구조분해할당 에서는 특별하게 할당받는 변수의 이름을 변경할 수도 있다.
let {
  name: myName, // myName 이라는 변수에 name 프로퍼티의 값이 담기게 됨
  age,
  hobby,
  extra = "hello",
} = person;

// 3. 객체 구조분해할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby }) => {
  console.log(name, age, hobby);
};

func(person);
