// 1. null 병합 연산자
// - 존재하는 값을 추려내는 기능
// - null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log(var4);  // 10 -> undefined가 아닌 var2의 값 반환

let var5 = var2 ?? var3;
console.log(var5);  // 10 -> 둘 다 undefined 나 null 이 아니면 처음 값 반환

let userName;
let userNameDefault = "Anonymity";

let displayName = userName && userNameDefault;
console.log(displayName); // "Anonymity";