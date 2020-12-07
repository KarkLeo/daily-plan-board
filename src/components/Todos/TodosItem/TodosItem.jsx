import React, { useState } from "react";
import "./TodosItem.css";
import { editTodo } from "../../../store/todos/todayListReducer";
import { connect } from "react-redux";
import Icon from "../../Sprite/Icon";

const TodosItem = ({ todo, editTodo }) => {
  let [showOptions, toggleOptions] = useState(false);
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

  const updateStatus = (status) => editTodo({ ...todo, status: status });
  return (
    <div
      draggable={true}
      className={`todos-item ${
        todo?.isShadow === true ? "todos-item--shadow" : ""
      } todos-item--${todo.status}`}
    >
      <h3 className="todos-item__title">{todo.title}</h3>

      <span className="todos-item__status">
        {completedStatusName[todo.status]}
      </span>
      {todo.status === "todo" && (
        <button
          className="todos-item__done-button"
          onClick={() => updateStatus("done")}
        >
          <Icon
            className="todos-item__done-button-icon"
            iconId={statusIcon.done}
          />
        </button>
      )}

      {todo.status !== "todo" && (
        <Icon
          className="todos-item__status-icon"
          iconId={statusIcon[todo.status]}
        />
      )}
      <span className="options__toggle" onMouseOver={() => toggleOptions(true)}>
        <Icon className="options__toggle-icon" iconId="more_vert" />
      </span>
      {showOptions && (
        <div className="options" onMouseLeave={() => toggleOptions(false)}>
          {todo.status !== "todo" && (
            <button
              className="options__button"
              onClick={() => updateStatus("todo")}
            >
              <Icon className="options__button-icon" iconId={statusIcon.todo} />
              В процес
            </button>
          )}
          {todo.status !== "todo" && todo.status !== "done" && (
            <button
              className="options__button"
              onClick={() => updateStatus("done")}
            >
              <Icon className="options__button-icon" iconId={statusIcon.done} />
              Сделано
            </button>
          )}

          {todo.status !== "blocked" && (
            <button
              className="options__button"
              onClick={() => updateStatus("blocked")}
            >
              <Icon
                className="options__button-icon"
                iconId={statusIcon.blocked}
              />
              Заблокирвать
            </button>
          )}

          {todo.status !== "postponed" && (
            <button
              className="options__button"
              onClick={() => updateStatus("postponed")}
            >
              <Icon
                className="options__button-icon"
                iconId={statusIcon.postponed}
              />
              Перенести
            </button>
          )}

          {todo.status !== "canceled" && (
            <button
              className="options__button"
              onClick={() => updateStatus("canceled")}
            >
              <Icon
                className="options__button-icon"
                iconId={statusIcon.canceled}
              />
              Отменить
            </button>
          )}

          {todo.status !== "deleted" && (
            <button
              className="options__button"
              onClick={() => updateStatus("deleted")}
            >
              <Icon
                className="options__button-icon"
                iconId={statusIcon.deleted}
              />
              Удалить
            </button>
          )}
        </div>
      )}
    </div>
  );
};

let mapStateToProp = (state) => ({});
export default connect(mapStateToProp, { editTodo })(TodosItem);
