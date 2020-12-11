import React, { useRef, useEffect } from "react";

const TodoItemEditMod = ({ todo, changeTitle, saveTodo }) => {
  const titleRef = useRef();
  const editTitle = (e) => {
    changeTitle(e.target.value);
  };

  useEffect(() => {
    console.log(titleRef);
    titleRef.current.focus();
    titleRef.current.selectionStart = titleRef.current.value.length;
    titleRef.current.style.height = titleRef.current.scrollHeight + "px";
  }, []);
  return (
    <div>
      <textarea
        className="todos-item__title--edit-mod"
        ref={titleRef}
        value={todo.title}
        onChange={(e) => {
          editTitle(e);
          titleRef.current.style.height = titleRef.current.scrollHeight + "px";
        }}
        onBlur={() => saveTodo()}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            saveTodo();
          }
        }}
      ></textarea>
    </div>
  );
};

export default TodoItemEditMod;
