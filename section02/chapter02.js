// 1. 단락 평가
function returnFalse() {
  console.log("False 함수");
  return false;
}
function returnTrue() {
  console.log("True 함수");
  return true;
}

// // 앞의 피연산자가 false 이므로 뒤의 피연산자는 호출 하지 않음
// console.log(returnFalse() && returnTrue()); // "False 함수", false
// // 앞의 피연산자가 true 이므로 뒤의 피연산자도 호출함
// console.log(returnTrue() && returnFalse()); // "True 함수", "False 함수", false

function returnFalse2() {
  console.log("False 함수");
  return undefined;
}
function returnTrue2() {
  console.log("True 함수");
  return 10;
}

// // 앞의 피연산자가 truthy한 값이기 때문에 뒤의 피연산자는 호출 하지 않음
// console.log(returnTrue2() || returnFalse2()); // "True 함수", 10

// // 앞의 피연산자가 falsy한 값이기 때문에 뒤의 피연산자는 호출 하지 않음
// console.log(returnFalse2() && returnTrue2()); // "False 함수", undefined

// 2. 단락 평가 활용 사례
function printName(person) {
  // 1) person 이 falsy한 값이면 뒤의 피연산자를 호출 하지 않음
  // 2) person 이 truthy한 값이면 뒤의 피연산자를 호출함
  const name = person && person.name;
  // 1) name 이 truthy한 값이면 name을 호출함
  // 2) name 이 falsy한 값이면 뒤의 문자열을 호출함
  console.log(name || "person의 값이 없음");
}

printName(); // person의 값이 없음
printName({ name: "Nova" }); // Nova

// 3. 단락 평가 간단 정리
// OR(||): 피연산자의 값이 하나라도 참이면 참을 반환
// AND(&&): 피연산자의 값이 하나라도 거짓이면 거짓을 반환

const T1 = 1;
const T2 = "str";
const F1 = null;
const F2 = undefined;

// 1) 둘 다 truthy한 값일 경우
console.log(T1 || T2); // 첫번째 truthy한 값(T1) 반환(1)
console.log(T1 && T2); // 두번째 truthy한 값(T2) 반환)(str)

// 2) 둘 다 falsy한 값일 경우
console.log(F1 || F2); // truthy한 값이 없으므로 F2 반환(undefined)
console.log(F1 && F2); // 첫번째 falsy한 값 F1 반환(null)
