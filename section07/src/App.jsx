import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("a");
  const isMount = useRef(false); // 이 컴포넌트는 마운트되지 않았다!(false)

  // 1. 마운트: 탄생
  useEffect(() => {
    console.log("1. 마운트");
  }, []); // 최초 1번 실행

  // 2. 업데이트: 변화, 리렌더링
  useEffect(() => {
    // * 컴포넌트의 업데이트 단계에서만 코드를 실행시키고 싶은 경우
    // 만약 isMount가 Mount 되지 않았다면
    if (!isMount.current) {
      // Mount 된걸로 만들자
      isMount.current = true;
      // 첫 Mount때에는 업데이트 console은 보이지 않도록 해!
      return;
    }

    console.log("2. 업데이트");
  }); // 의존성 배열을 없앰

  // 3. 언마운트: 죽음 (Even.jsx 컴포넌트 참고)

  // useEffect(() => {
  //   console.log(`count: ${count} / input: ${input}`);
  // }, [count, input]); // 의존성 배열 중 1개의 값만 바뀌어도 실행이 됨
  // 의존성 배열 - dependency array (줄여서 deps)
  // ✅ useEffect가 아니라 useState를 사용하면 되는 것 아닌가?
  // => useState의 상태 변화 함수(setState)는 '비동기'로 동작하기 때문에
  // 변경된 state의 값을 바로 사용 할 수가 없음 -> useEffect 사용!!!

  const onClickButton = (value) => {
    setCount(count + value);
    // ✅ 여기에 들어오는 count는 바뀌기 전의 값으로 들어옴
    // console.log(count);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
