import { useState } from "react";

const Counter = () => {
  console.log("Counter 컴포넌트 렌더링");
  const [count, setCount] = useState(0);

  return (
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
  );
};

export default Counter;
