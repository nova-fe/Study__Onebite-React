// function add(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 3000);
// }

// add(1, 2, (value) => {
//   console.log(value);
// });

// 1. 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 2000);
}

// 2. 음식 식히기
function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 1500);
}

// 3. 음식 얼리기
function freezeFood(food, callback) {
  setTimeout(() => {
    const freezenFood = `냉동된 ${food}`;
    callback(freezenFood);
  }, 1500);
}
orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownFood) => {
    console.log(cooldownFood);

    freezeFood(food, (freezenFood) => {
      console.log(freezenFood);
    });
  });
});
