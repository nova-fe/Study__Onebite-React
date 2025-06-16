import "./Main.css";

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 '표현식'만 넣을 수 있다. (for문이나 if문 사용불가)
// 2. 숫자, 문자열, 배열 값만 렌더링 됨
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야 함
export const Main = () => {
  const user = {
    name: "Nova",
    isLogin: false,
  };
  // return <>{user.isLogin ? <div>로그인</div> : <div>로그아웃</div>}</>;

  if (user.isLogin) {
    return <div className="login">로그인</div>;
  } else {
    return <div className="logout">로그아웃</div>;
  }
};
// export const Main = () => {
//   const number = 10;
//   const obj = { a: "a" };
//   return (
//     <main>
//       <h1>main</h1>
//       <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
//       {number}
//       {["가", "나", "다"]}
//       {true}
//       {undefined}
//       {null}
//       {obj.a}
//     </main>
//   );
// };

export default Main;
