// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push[(4, 5, 6, 7)]; // 요소를 추가 한 뒤 변환된 배열의 길이를 반환함
// console.log(newLength); // 7
// console.log(arr1); // [1,2,3,4,5,6,7]

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거, 반환
let arr2 = ["하나", "둘", "셋"];
const poppedItem = arr2.pop(); // 제거된 요소를 반환
// console.log(poppedItem); // "셋"
// console.log(arr2); // ["하나", "둘"]

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = ["하나", "둘", "셋"];
const shiftedItem = arr3.shift(); // 제거된 요소를 반환
// console.log(shiftedItem); // "하나"
// console.log(arr3); // ["둘", "셋"]

// 4. unshift
// 배열의 맨 앞에 요소를 추가
let arr4 = ["하나", "둘", "셋"];
const newLength2 = arr4.unshift("영"); // 요소를 추가 한 뒤 변경된 배열의 길이를 반환
// console.log(newLength2); // 4
// console.log(arr4); // ['영', '하나', '둘', '셋']

// 5. slice
// 가위처럼, 배열의 특정 범위를 잘라내서 '새로운 배열'로 반환 (기존 배열은 그대로 있음)
let arr5 = [1, 2, 3, 4, 5];
// 3, 4, 5를 잘라내서 새로운 배열로 만들어보자!
let sliced = arr5.slice(2, 5); // .slice(자르기 시작할 요소의 인덱스, 자르기를 끝낼 요소의 인덱스+1), 두번째 인수가 배열의 끝이면 생략 가능
// console.log(sliced); // [3, 4, 5]
// console.log(arr5); //  [1, 2, 3, 4, 5]

// 뒤에서부터 자르려면 음수
let sliced3 = arr5.slice(-2);
// console.log(sliced3); // [4, 5]

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr); // [1, 2, 3, 4]
