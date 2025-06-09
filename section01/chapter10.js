for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue; // 조건에 해당되면 건너뛰기 => 홀수만 출력
  }

  console.log(idx);

  if (idx >= 5) {
    break;  // 조건에 해당되면 반복문 종료 => 5까지만 출력됨
  }
}