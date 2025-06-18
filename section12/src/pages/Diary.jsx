import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams(); // url 파라미터가 들어옴
  console.log(params);

  return <div>{params.id}번 일기입니다.</div>;
};
export default Diary;
