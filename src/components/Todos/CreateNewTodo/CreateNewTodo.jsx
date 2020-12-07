import React from "react";
import { connect } from "react-redux";
import "./CreateNewTodo.css";
import {
  showNewTodoForm,
  changeNewTodoTitle,
  createTodo,
} from "../../../store/todos/createTodosReducer";

const CreateNewTodo = ({
  newTodo,
  isShowForm,
  showNewTodoForm,
  changeNewTodoTitle,
  createTodo,
}) => {
  return (
    <div className="create-todo">
      {isShowForm ? (
        <textarea
          name="title"
          className="create-todo__field"
          autoFocus={true}
          value={newTodo.title}
          onChange={(e) => changeNewTodoTitle(e.target.value)}
          onBlur={() => createTodo(true)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              createTodo();
            }
          }}
        ></textarea>
      ) : (
        <button
          onClick={() => showNewTodoForm()}
          className="create-todo__button"
        >
          +
        </button>
      )}
    </div>
  );
};

let mapStateToProps = (state) => ({
  newTodo: state.todos_createTodo.newTodo,
  isShowForm: state.todos_createTodo.isShowForm,
});

export default connect(mapStateToProps, {
  showNewTodoForm,
  changeNewTodoTitle,
  createTodo,
})(CreateNewTodo);
