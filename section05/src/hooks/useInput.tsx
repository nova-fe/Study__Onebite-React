import { useState } from "react";

function useInput() {
  const [input, setInput] = useState();

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  return [input, onChangeInput];
}

export default useInput;
