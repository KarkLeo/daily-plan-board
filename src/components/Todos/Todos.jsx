import React from "react";
import { connect } from "react-redux";
import { fetchTodayList } from "../../store/todos/todayListReducer";
import { useEffect } from "react";
import TodosItem from "./TodosItem/TodosItem";
import "./Todos.css";
import CreateNewTodo from "./CreateNewTodo/CreateNewTodo";

const Todos = ({ date, todos, username, fetchTodayList, shadowTodos }) => {
  useEffect(() => {
    fetchTodayList();
  }, [date]);

  return (
    <div className="todos">
      <h2 className="todos__title">{username}</h2>
      {Array.isArray(todos) &&
        todos.map((todo) => <TodosItem key={todo.id} todo={todo} />)}

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
  date: state.todos_selection.date,
});
export default connect(mapStateToProps, { fetchTodayList })(Todos);
