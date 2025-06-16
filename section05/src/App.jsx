import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

function App() {
  // console.log(count); // [초기값, 상태변화함수]

  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
