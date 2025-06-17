import "./App.css";
import { useState, useRef, useReducer, useCallback, createContext } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Next.js 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "TS 공부하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      // 인수: state 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "DELETE":
      // 인수: state 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
      return state.filter((todo) => todo.id !== action.targetId);
    default:
      return state;
  }
}

export const TodoContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 컴포넌트 마운트 이후에는 다시는 생성되지 않도록 최적화
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <TodoContext.Provider
        value={{
          todos,
          onCreate,
          onUpdate,
          onDelete,
        }}
      >
        <Editor />
        <List />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
