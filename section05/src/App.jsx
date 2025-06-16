import "./App.css";
import { useState } from "react";

function App() {
  // console.log(count); // [초기값, 상태변화함수]
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "OFF" ? "ON" : "OFF");
          }}
        >
          {light === "OFF" ? "켜기" : "끄기"}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
