import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// memo(컴포넌트)
// 이렇게 만든 컴포넌트는 자신이 받는 props가 바뀌지 않으면 다시는 리렌더링이 되지 않음
export default memo(Header);
