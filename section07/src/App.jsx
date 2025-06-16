import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("a");

  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]); // 의존성 배열 중 1개의 값만 바뀌어도 실행이 됨
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
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
