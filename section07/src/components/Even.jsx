import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // useEffect의 콜백함수가 반환하는 함수:
    // 클린업, 정리함수(useEffect가 끝날 때 실행)
    return () => {
      console.log("3.언마운트");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
