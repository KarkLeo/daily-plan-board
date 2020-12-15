import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./UsersTodos.css";
import "../Todos.css";
import { fetchUsers } from "../../../store/users/usersListReducer";
import UsersTodosItem from "./UsersTodosItem/UsersTodosItem";

const UsersTodos = ({ date, users, todos, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [date]);

  return (
    <>
      {users.map((user) => (
        <div className="todos" key={user.id}>
          <h2 className="todos__title">{user.username}</h2>
          {todos[user.id]?.map((todo) => (
            <UsersTodosItem key={todo.id} todo={todo} />
          ))}
        </div>
      ))}
    </>
  );
};

let mapStateToProps = (state) => ({
  users: state.users_list.users,
  todos: state.users_todos.todos,
  date: state.todos_selection.date,
});

export default connect(mapStateToProps, { fetchUsers })(UsersTodos);
