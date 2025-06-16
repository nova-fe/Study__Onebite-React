// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  // useRef 는 실행은 되지만 컴포넌트를 리렌더링 하진 않음
  // => 컴포넌트 내부에서 렌더링에 영향을 미치지 않아야 되는 변수 생성시 활용
  // => 일반 변수 사용 시엔 리액트 구조상 리렌더링이 되면 값이 리셋이 됨
  const countRef = useRef(0);
  // console.log(refObj); // {current: undefined}
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // console.log(inputRef.current); // <input placeholder="이름" value name="name">
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          value={input.name}
          onChange={onChange}
          name="name"
          placeholder="이름"
        />
      </div>

      <div>
        <input value={input.birth} onChange={onChange} name="birth" type="date" />
      </div>

      <div>
        <select value={input.country} onChange={onChange} name="country">
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="en">미국</option>
          <option value="jp">일본</option>
        </select>
      </div>

      <div>
        <textarea value={input.bio} onChange={onChange} name="bio" />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
