// 비동기 작업 처리하기(2. Promise)

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 1000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result); // 10
    return add10(result); // 이 then메서드의 결과 값이 새로운 프로미스 객체가 됨
  })
  .then((result) => {
    console.log(result); // 20
    return add10(result);
  })
  .then((result) => {
    console.log(result); // 30
    return add10(result);
  })
  .catch((error) => {
    console.log(error); // num이 숫자가 아닙니다.
  });

// const promise = new Promise((resolve, reject) => {
//   // 비동기 작업 실행하는 함수
//   // executor

//   setTimeout(() => {
//     const num = 20;

//     if (typeof num === "number") {
//       resolve(num + 10);
//     } else {
//       reject("num이 숫자가 아닙니다.");
//     }
//   }, 1000);
// });

// promise
//   // then-catch를 연달하서 사용하는 것: Promise 체이닝 이라고 함
//   // then 메서드
//   // -> 그 후에
//   // promise가 성공하면(executor에서 resolve를 호출하게 되면), 그 후에
//   // 1) then 메서드에 전달한 콜백 함수 실행됨
//   // 2) resolve의 인수로 전달한 결과 값을 매개변수로 제공
//   .then((value) => {
//     console.log("값: " + value); // 값: 20
//   })
//   // catch 메서드
//   // -> 실패 버전의 then 메서드 같은 것
//   .catch((error) => {
//     console.log(error); // num이 숫자가 아닙니다.
//   });

// const promise = new Promise((resolve, reject) => {
//   // 비동기 작업 실행하는 함수
//   // executor

//   setTimeout(() => {
//     console.log("안녕");
//     // resolve("PromiseResult 부분"); // 성공 상태로 바꾸는 함수
//     reject("실패 이유..."); // 실패 상태로 바꾸는 함수
//   }, 1000);
// });

// setTimeout(() => {
//   console.log(promise);
//   // 안녕
//   // Uncaught (in promise) 실패 이유...
//   // Promise {<fulfilled>: 'PromiseResult 부분'}
//   //  [[Prototype]]: Promise
//   //  [[PromiseState]]: "rejected"
//   //  [[PromiseResult]]: "실패 이유..."
// }, 2000);
