import React from "react";
import { connect } from "react-redux";
import { fetchTodayList } from "../../store/todos/todayListReducer";
import { useEffect } from "react";
import TodosItem from "./TodosItem/TodosItem";
import "./Todos.css";
import CreateNewTodo from "./CreateNewTodo/CreateNewTodo";
import { editTodo } from "../../store/todos/todayListReducer";
import { updateTodoInList } from "../../store/todos/todayListReducer";
import UsersTodosItem from "./UsersTodos/UsersTodosItem/UsersTodosItem";
import { postponeTodo } from "../../store/todos/todayListReducer";

const Todos = ({
  date,
  isCurrentDate,
  todos,
  username,
  fetchTodayList,
  shadowTodos,
  editTodo,
  updateTodoInList,
  postponeTodo,
}) => {
  useEffect(() => {
    fetchTodayList();
  }, [date]);

  return (
    <div className="todos">
      <h2 className="todos__title">{username}</h2>
      {isCurrentDate
        ? Array.isArray(todos) &&
          todos.map((todo) => (
            <TodosItem
              key={todo.id}
              todo={todo}
              editTodo={editTodo}
              updateTodoInList={updateTodoInList}
              postponeTodo={postponeTodo}
            />
          ))
        : Array.isArray(todos) &&
          todos.map((todo) => <UsersTodosItem key={todo.id} todo={todo} />)}

      {isCurrentDate && (
        <div className="todos__shadow-box">
          {shadowTodos &&
            shadowTodos.map((todo) => <TodosItem key={todo.id} todo={todo} />)}
        </div>
      )}
      {isCurrentDate && <CreateNewTodo />}
    </div>
  );
};

let mapStateToProps = (state) => ({
  todos: state.todos_todayList.todos,
  username: state.user_auth.user.username,
  shadowTodos: state.todos_createTodo.shadowTodos,
  date: state.todos_selection.date,
  isCurrentDate: state.todos_selection.isCurrentDate,
});
export default connect(mapStateToProps, {
  fetchTodayList,
  editTodo,
  updateTodoInList,
  postponeTodo,
})(Todos);
