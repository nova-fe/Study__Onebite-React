// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
// console.log(date1); // 현재 시간 출력
let date2 = new Date("1991-12-25/11:07:00");
console.log(date2); // Wed Dec 25 1991 11:07:00 GMT+0900 (한국 표준시)

// 2. 타임스탬프
// 특정 시간이 "1970.01.01. 00시 00분 00초"(협정 세계시 UTC) 로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1); // 1749623211309 -> 기준 시간으로부터 지난 ms

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let day = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullYear(2025);
date1.setMonth(5); // 원하는 달 - 1
date1.setDate(11);
date1.setHours(15);
date1.setMinutes(29);
date1.setSeconds(30);

console.log(date1); // Wed Jun 11 2025 15:29:30 GMT+0900 (한국 표준시)

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // Wed Jun 11 2025
console.log(date1.toLocaleString()); // 2025. 6. 11. 오후 3:29:30
