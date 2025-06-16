// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  console.log(input);

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input value={input.name} onChange={onChange} name="name" placeholder="이름" />
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
    </div>
  );
};

export default Register;
