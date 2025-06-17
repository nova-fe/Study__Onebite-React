import "./TodoItem.css";

const TodoItem = ({ id, isdone, content, date, onUpdate }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  return (
    <div className="TodoItem">
      <input readOnly onChange={onChangeCheckbox} checked={isdone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
