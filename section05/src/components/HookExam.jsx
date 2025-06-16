import useInput from "../hooks/useInput";

// 3가지 hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로는 호출될 수 없음
// 3. 나만의 훅(Custom Hook) 직접 만들기 가능

const HookExam = () => {
  const [input1, onChangeInput1] = useInput();
  const [input2, onChangeInput2] = useInput();

  return (
    <div>
      <input value={input1} onChange={onChangeInput1} />
      <input value={input2} onChange={onChangeInput2} />
      <div>{input1}</div>
      <div>{input2}</div>
    </div>
  );
};
export default HookExam;
