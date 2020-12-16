import React, { useEffect } from "react";
import "./TodosGrid.css";
import { connect } from "react-redux";
import { fetchUncompletedTodos } from "../../../store/todos/uncompletedTodosReducer";
import { reverseSortDate } from "../../../methods/date";
import TodosItem from "../TodosItem/TodosItem";
import { updateUncompletedTodo } from "../../../store/todos/uncompletedTodosReducer";
import { editUncompletedTodo } from "../../../store/todos/uncompletedTodosReducer";
import { postponeUncompletedTodo } from "../../../store/todos/uncompletedTodosReducer";

const TodosGridUncompleted = ({
  todos,
  fetchUncompletedTodos,
  updateUncompletedTodo,
  editUncompletedTodo,
  postponeUncompletedTodo,
}) => {
  useEffect(() => {
    fetchUncompletedTodos();
  }, []);

  //todo need optimisation this code
  let todos_from_date = {};
  todos.forEach((todo) => {
    todos_from_date[todo.date]
      ? todos_from_date[todo.date].push(todo)
      : (todos_from_date[todo.date] = [todo]);
  });
  let dateList = Object.keys(todos_from_date).sort(reverseSortDate);
  //-----------------------

  return (
    <div className="todos-grid">
      {dateList.map((date) => (
        <div className="todos" key={date}>
          <h2 className="todos__title">
            {new Date(date).toLocaleDateString()}
          </h2>
          {todos_from_date[date].map((todo) => (
            <TodosItem
              key={todo.id}
              todo={todo}
              editTodo={editUncompletedTodo}
              updateTodoInList={updateUncompletedTodo}
              postponeTodo={postponeUncompletedTodo}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

let mapStateToProps = (state) => ({
  todos: state.todos_uncompleted.todos,
});
export default connect(mapStateToProps, {
  fetchUncompletedTodos,
  updateUncompletedTodo,
  editUncompletedTodo,
  postponeUncompletedTodo,
})(TodosGridUncompleted);
