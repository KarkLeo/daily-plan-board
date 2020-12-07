import React from "react";
import { connect } from "react-redux";
import { fetchTodayList } from "../../store/todos/todayListReducer";
import { useEffect } from "react";
import TodosItem from "./TodosItem/TodosItem";
import "./Todos.css";
import CreateNewTodo from "./CreateNewTodo/CreateNewTodo";

const Todos = ({ todos, username, fetchTodayList, shadowTodos }) => {
  useEffect(() => {
    fetchTodayList();
  }, []);

  return (
    <div className="todos">
      <h2 className="todos__title">{username}</h2>
      {todos.map((todo) => (
        <TodosItem key={todo.id} todo={todo} />
      ))}

      <div className="todos__shadow-box">
        {shadowTodos &&
          shadowTodos.map((todo) => <TodosItem key={todo.id} todo={todo} />)}
      </div>
      <CreateNewTodo />
    </div>
  );
};

let mapStateToProps = (state) => ({
  todos: state.todos_todayList.todos,
  username: state.user_auth.user.username,
  shadowTodos: state.todos_createTodo.shadowTodos,
});
export default connect(mapStateToProps, { fetchTodayList })(Todos);
