import React from "react";
import "./TodosGrid.css";
import Todos from "../Todos";
import UsersTodos from "../UsersTodos/UsersTodos";

const TodosGrid = () => {
  return (
    <div className="todos-grid">
      <Todos />
      <UsersTodos />
    </div>
  );
};

export default TodosGrid;
