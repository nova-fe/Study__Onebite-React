let area1 = getArea(10, 20);  // 10, 20: 인수, return문을 통해 200이 할당됨
console.log(area1);

// 함수가 아래에 있어도 호이스팅(끌어올리다)으로 인해 정상적으로 실행됨
function getArea(width, height) { // width, height: 매개변수
  let area = width * height;
  // console.log(area);

  return area;  // 반환값, 여기선 200을 반환함
}