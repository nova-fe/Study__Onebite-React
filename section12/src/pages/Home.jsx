import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import Header from "../components/Header";

const getMonthlyData = (pivotDate, data) => {
  // (이번 달의 가장 첫번째 시작하는 시간) pivotDate 의 연도/월에 해당하는 월의 1일 0시 0분 0초
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
  // (끝시간) pivotDate 의 연도/월에 해당하는 월의 마지막시간
  // 월+1의 0일 -> 0일이라는건 없으니 전달 마지막날로 설정이 됨
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime);
};

const Home = () => {
  const data = useContext(DiaryStateContext); // 기존 데이터
  const [pivotDate, setPivotDate] = useState(new Date());
  const monthlyData = getMonthlyData(pivotDate, data); // 달별로 필터링된 데이터

  // 날짜를 한 달 전으로
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  // 날짜를 한 달 뒤로
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};
export default Home;
