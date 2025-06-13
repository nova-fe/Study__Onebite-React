// 1. 배열 순회
let arr = [1, 2, 3];
// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]); // 1 2 3
}

// 1.2 for of 반복문
for (let item of arr) {
  // console.log(item); // 1 2 3
}

// 2. 객체 순환
let person = {
  name: "Nova",
  age: 33,
  hobby: "유튜브 시청",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
// console.log(keys);  //  ['name', 'age', 'hobby']

for (let key of keys) {
  console.log(key); // name age hobby
  console.log(person[key]); // Nova 33 유튜브 시청
}

// 2.2 Object.values 사용
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
// console.log(values); //  ['Nova', 33, '유튜브 시청']

for (let value of values) {
  console.log(value); // Nova 33 유튜브 시청
}

// 2.3 for in 반복문
for (let key in person) {
  console.log(key); //  name age hobby
  const value = person[key];
  console.log(value); // Nova 33 유튜브 시청
}

// 간단 정리
// 배열 순회: for...of
// 객체 순회: for...in
