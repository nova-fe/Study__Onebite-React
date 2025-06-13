// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
});

let doubleArr = [];
arr1.forEach((item) => {
  doubleArr.push(item * 2);
});

// console.log(doubleArr); // [2, 4, 6]

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = ["a", "b", "c"];
// console.log(arr2.includes("b")); // true

// 3. indexOf
// 특정 요소의 인덱스를 찾아서 반환하는 메서드
let arr3 = ["a", "b", "c"];
// console.log(arr3.indexOf("b")); // 1
// console.log(arr3.indexOf("d")); // -1 => 존재하지 않는 값이면 -1 반환

// 4. findIndex
// '모든 요소를 순회'하면서, 콜백함수를 만족하는 요소의 '인덱스를 반환'
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  // if (item === "3") return true;
  if (item % 2 !== 0) return true;
});

// console.log(findedIndex); // 2
// console.log(findedIndex); // 0 (1은 true 이므로 1의 인덱스인 0 반환)

// *** indexOf 와 findIndex 의 차이 ***
// => findIndex 는 깊은 비교, indexOf는 얕은 비교
// => 단순한 원시타입 값을 찾을 때엔 indexOf, 복잡한 객체 타입의 값을 찾을 땐 findIndex가 좋다.
let objectArr = [{ name: "Nova" }, { name: "KNT" }];

// console.log(objectArr.indexOf({ name: "Nova" })); // -1
// console.log(
//   objectArr.findIndex((item) => {
//     if (item.name === "Nova") return true;
//   })
// ); // 0

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 이 '요소를 그대로 반환'
const arr5 = [{ name: "Nova" }, { name: "KNT" }];
const finded = arr5.find((item) => item.name === "Nova");

console.log(finded); // {name: 'Nova'}
