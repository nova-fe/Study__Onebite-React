import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [currentDiaryData, setCurrentDiaryData] = useState();

  useEffect(() => {
    // 해당 게시글 조회
    const currentDiaryItem = data.find((item) => String(item.id) === String(params.id));
    if (!currentDiaryItem) {
      window.alert("존재하기 않는 일기 입니다.");
      nav("/", { replace: true });
    }
    setCurrentDiaryData(currentDiaryItem);
  }, [params.id]);

  const onClickDelete = () => {
    // 확인 버튼 클릭시 true 반환
    if (window.confirm("정말 삭제하시겠습니까? 다시 복구되지 않습니다.")) {
      // 일기 삭제 로직
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  // 수정버튼
  const onSubmit = (input) => {
    if (window.confirm("일기를 수정하시겠습니까?")) {
      onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        text={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />}
      />
      <Editor initData={currentDiaryData} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
