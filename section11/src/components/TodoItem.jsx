import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoContext } from "../App";

const TodoItem = ({ id, isdone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input readOnly onChange={onChangeCheckbox} checked={isdone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

// 이렇게만 하면 onUpdate, onDelete 함수때문에 계속 바뀌었다고 판단해서 리렌더링 됨
// => 함수는 새롭게 전달이 될 때마다 다른 주소값을 가지기 때문
// export default memo(TodoItem)

// 고차 컴포넌트(HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라, Props가 바뀌었는지 안 바뀌었는지 판단
//   // True -> Props 바뀌지 않음 => 리렌더링 X
//   // False -> Props 바뀜 => 리렌더링 O
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isdone !== nextProps.isdone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;
//   return true;
// });

export default memo(TodoItem);
