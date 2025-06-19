import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const useDiary = (id) => {
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const [currentDiaryData, setCurrentDiaryData] = useState();

  useEffect(() => {
    // 해당 게시글 조회
    const currentDiaryItem = data.find((item) => String(item.id) === String(id));
    if (!currentDiaryItem) {
      window.alert("존재하기 않는 일기 입니다.");
      nav("/", { replace: true });
    }
    setCurrentDiaryData(currentDiaryItem);
  }, [id]);

  return currentDiaryData;
};

export default useDiary;
