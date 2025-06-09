// 1. 객체 생성
let obj1 = new Object();  // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "Nova",
  age: 33,
  hobby: "유튜브시청",
  extra: {},
  10: 20,
  "like cat": true
}

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);  // Nova

let age = person["like cat"];  // 주의점!! 키를 반드시 "쌍따옴표 문자열"로 작성
console.log(age); // true

let property = "hobby";
let hobby = person[property];
console.log(hobby); // 유튜브시청


// 3-2. 새로운 프로퍼티 추가
person.job = "FE Developer";
person["favoriteFood"] = "파스타";

// 3-3. 프로퍼티 수정
person.job = "Student";
person["favoriteFood"] = "초콜릿";

// 3-4. 프로퍼티 삭제
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3-5. 프로퍼티 존재 유무 확인 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1); // true
console.log(result2); // false