import React from "react";
import { connect } from "react-redux";
import { logOut } from "../store/user/authReducer";
import Icon from "../components/Sprite/Icon";
import TodosGridUncompleted from "../components/Todos/TodosGrid/TodosGridUncompleted";
import { routerDashboard } from "../store/routerReducer";

const Uncompleted = ({ hasUncompletedTodos, logOut, routerDashboard }) => {
  return (
    <div className="dashboard dashboard--warn">
      <header className="header">
        <h1 className="header__title">Незавершенные задачи</h1>
        <div className="header__buttons">
          <button className="button" onClick={() => logOut()}>
            <Icon className="button__icon" iconId="exit_to_app" />
            Выйти
          </button>
        </div>
      </header>
      <TodosGridUncompleted />
      {!hasUncompletedTodos && (
        <div className="dashboard__down-bar">
          <h2 className="dashboard__title">Все задачи выполнены</h2>
          <button className="button" onClick={() => routerDashboard()}>
            Приступить к текущем задачам
          </button>
        </div>
      )}
    </div>
  );
};

let mapStateToProps = (state) => ({
  hasUncompletedTodos: state.todos_uncompleted.hasUncompletedTodos,
});
export default connect(mapStateToProps, { logOut, routerDashboard })(
  Uncompleted
);
