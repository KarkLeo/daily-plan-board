import React from "react";
import { connect } from "react-redux";
import { logOut } from "../store/user/authReducer";
import TodosGrid from "../components/Todos/TodosGrid/TodosGrid";
import Icon from "../components/Sprite/Icon";
import DateBar from "../components/DateBar/DateBar";
import DatePicker from "../components/DatePicker/DatePicker";

const Dashboard = ({ logOut }) => {
  return (
    <div className="dashboard">
      <header className="header">
        <h1 className="header__title">
          Daily plan board <DatePicker />
        </h1>
        <div className="header__buttons">
          <button className="button" onClick={() => logOut()}>
            <Icon className="button__icon" iconId="exit_to_app" />
            Выйти
          </button>
        </div>
      </header>

      <TodosGrid />
      <DateBar />
    </div>
  );
};

let mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { logOut })(Dashboard);
