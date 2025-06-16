// :: async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

// async 를 붙임으로서
// -> 객체를 그대로 반환 ❌
// -> 객체를 결과 값으로 갖는 새로운 프로미스를 반환하는 함수로 변환 ✅
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Dahee",
        id: "nova",
      });
    }, 2000);
  });
}

// console.log(getData()); // Promise {<fulfilled>: {…}}

// :: await
// async 함수 '내부'에서만 사용이 가능
// 비동기 함수가 다 처리되기를 기다리는 역할

// function printData() {
//   getData().then((result) => {
//     console.log(result);  // {name: 'Dahee', id: 'nova'}
//   });
// }

async function printData() {
  // 위처럼 .then()을 쓰지 않아도 알아서 promise가 종료되기를 기다림
  const result = await getData();
  console.log(result); // {name: 'Dahee', id: 'nova'}
}

printData(); // {name: 'Dahee', id: 'nova'}
