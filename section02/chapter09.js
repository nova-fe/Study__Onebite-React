// 5가지 배열 변형 메서드 ⭐

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  { name: "Nova", hobby: "독서" },
  { name: "Jay", hobby: "음악감상" },
  { name: "Sola", hobby: "독서" },
];

const readingPeople = arr1.filter((item) => item.hobby === "독서");
// console.log(readingPeople); //  [ { name: "Nova", hobby: "독서" },{ name: "Sola", hobby: "독서" } ]

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item) => {
  return item * 2;
});
// console.log(mapResult1);  // [2, 4, 6]

// 3. sort
// 배열을 사전순으로 정렬하는 메서드 (* 원본 배열 자체를 정렬)
let arr3 = ["a", "c", "b"];
arr3.sort(); // ["a","b","c"]

// 주의!! 숫자의 경우는 제대로 정렬되지 않음
let arr4 = [10, 3, 5];
arr4.sort(); // [10, 3, 5]

// 해결법
arr4.sort((a, b) => {
  // 숫자를 오름차순으로 정렬
  if (a > b) {
    // b가 a 앞에
    return 1; // b, a 배치
  } else if (a < b) {
    // a가 b 앞에
    return -1; // a, b 배치
  } else {
    // 같은 값이면 두 값의 자리를 바꾸지 않는다
    return 0;
  }
});

// 4. toSorted (가장 최근에 추가된 최신 함수)
// sort와 같으나, 정렬된 '새로운 배열'을 반환
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
console.log(arr5); // ['c', 'a', 'b']
console.log(sorted); // ['a', 'b', 'c']

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환
let arr6 = ["hi", "im", "Nova"];
const joined = arr6.join("-");
console.log(joined); // hi-im-Nova
