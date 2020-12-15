import React from "react";
import { connect } from "react-redux";
import { logOut } from "../store/user/authReducer";
import TodosGrid from "../components/Todos/TodosGrid/TodosGrid";
import Icon from "../components/Sprite/Icon";

const Dashboard = ({ logOut }) => {
  let date = new Date();
  return (
    <div className="dashboard">
      <header className="header">
        <h1 className="header__title">
          Daily plan board{" "}
          <span className="header__date">{date.toLocaleDateString()}</span>
        </h1>
        <div className="header__buttons">
          <button className="button" onClick={() => logOut()}>
            <Icon className="button__icon" iconId="exit_to_app" />
            Выйти
          </button>
        </div>
      </header>

      <TodosGrid />
    </div>
  );
};

let mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { logOut })(Dashboard);
