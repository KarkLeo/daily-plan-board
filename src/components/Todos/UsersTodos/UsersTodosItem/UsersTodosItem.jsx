import React from "react";
import "./UsersTodosItem.css";
import Icon from "../../../Sprite/Icon";

const UsersTodosItem = ({ todo }) => {
  const statusIcon = {
    todo: "undo",
    done: "done_outline",
    blocked: "block",
    postponed: "get_app",
    canceled: "cancel",
    deleted: "delete",
  };
  const completedStatusName = {
    todo: "В процессе",
    done: "Седлано",
    blocked: "Заблокировано",
    postponed: "Перенесена",
    canceled: "Отменена",
    deleted: "Удалена",
  };
  return (
    <div className={`todos-item todos-item--${todo.status}`}>
      <h3 className="todos-item__title">{todo.title}</h3>
      <span className="todos-item__status">
        {completedStatusName[todo.status]}
      </span>
      {todo.status !== "todo" && (
        <Icon
          className="todos-item__status-icon"
          iconId={statusIcon[todo.status]}
        />
      )}
    </div>
  );
};

export default UsersTodosItem;
