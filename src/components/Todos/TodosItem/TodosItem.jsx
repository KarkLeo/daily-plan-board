import React, { useState, useRef, useEffect } from "react";
import "./TodosItem.css";
import Icon from "../../Sprite/Icon";
import TodoItemEditMod from "./TodoItemEditMod/TodoItemEditMod";
import OptionsPostponed from "./OptionsPopUp/OptionsPostponed";
import OutsideClickHandler from "../../OutsideClickHandler/OutsideClickHandler";

//todo need test this component in today list
//todo need destructure this component
//todo need refactoring
const TodosItem = ({ todo, editTodo, updateTodoInList, postponeTodo }) => {
  let [showOptions, toggleOptions] = useState(false);
  let [editMode, toggleEditMode] = useState(false);
  const editTitle = (title) => {
    updateTodoInList({ ...todo, title: title });
  };

  //todo this code translate to language config
  const statusIcon = {
    todo: "undo",
    done: "done_outline",
    blocked: "block",
    postponed: "get_app",
    canceled: "cancel",
    deleted: "delete",
  };
  const completedStatusName = {
    todo: "В планах",
    done: "Седлано",
    blocked: "Заблокировано",
    postponed: "Перенесена",
    canceled: "Отменена",
    deleted: "Удалена",
  };
  //----------------------------------

  let [showPostponed, togglePostponed] = useState(false);
  const postpone = (date) => {
    toggleOptions(false);
    togglePostponed(false);
    postponeTodo(todo, date);
  };
  //---------------------------------

  const updateStatus = (status) => editTodo({ ...todo, status: status });
  return (
    <div
      draggable={true}
      className={`todos-item ${
        todo?.isShadow === true ? "todos-item--shadow" : ""
      } todos-item--${todo.status} ${editMode ? "todos-item--edit-mod" : ""}`}
    >
      {editMode ? (
        <TodoItemEditMod
          todo={todo}
          changeTitle={(title) => editTitle(title)}
          saveTodo={() => {
            toggleEditMode(false);
            editTodo(todo);
          }}
        />
      ) : (
        <h3
          className={`todos-item__title ${
            todo.status === "todo" ? "todos-item__title--button" : ""
          }`}
          onClick={() => todo.status === "todo" && toggleEditMode(true)}
        >
          {todo.title}
        </h3>
      )}

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
      <span className="options__toggle" onClick={() => toggleOptions(true)}>
        <Icon className="options__toggle-icon" iconId="more_vert" />
      </span>
      {showOptions && (
        <OutsideClickHandler onOutsideClick={() => toggleOptions(false)}>
          <div className="options">
            {todo.status !== "todo" && (
              <button
                className="options__button"
                onClick={() => {
                  toggleOptions(false);
                  updateStatus("todo");
                }}
              >
                <Icon
                  className="options__button-icon"
                  iconId={statusIcon.todo}
                />
                В процес
              </button>
            )}
            {todo.status !== "todo" && todo.status !== "done" && (
              <button
                className="options__button"
                onClick={() => {
                  toggleOptions(false);
                  updateStatus("done");
                }}
              >
                <Icon
                  className="options__button-icon"
                  iconId={statusIcon.done}
                />
                Сделано
              </button>
            )}

            {todo.status !== "blocked" && (
              <button
                className="options__button"
                onClick={() => {
                  toggleOptions(false);
                  updateStatus("blocked");
                }}
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
                onClick={() => {
                  togglePostponed(true);
                }}
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
                onClick={() => {
                  toggleOptions(false);
                  updateStatus("canceled");
                }}
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
                onClick={() => {
                  toggleOptions(false);
                  updateStatus("deleted");
                }}
              >
                <Icon
                  className="options__button-icon"
                  iconId={statusIcon.deleted}
                />
                Удалить
              </button>
            )}
            {showPostponed && (
              <OptionsPostponed
                todo={todo}
                onSend={postpone}
                onOutsideClick={() => togglePostponed(false)}
              />
            )}
          </div>{" "}
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default TodosItem;
