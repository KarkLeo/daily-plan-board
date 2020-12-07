import React, { useState } from "react";
import { connect } from "react-redux";
import { logOut } from "../store/user/authReducer";
import TodosGrid from "../components/Todos/TodosGrid/TodosGrid";
import DragAndDrop from "../components/DragAndDrop/DragAndDrop";
import Icon from "../components/Sprite/Icon";

const Dashboard = ({ logOut }) => {
  // let [arr, serArr] = useState([
  //   { id: 1, order: 1, title: "one" },
  //   { id: 2, order: 2, title: "two" },
  //   { id: 3, order: 3, title: "thee" },
  //   { id: 4, order: 4, title: "fore" },
  //   { id: 5, order: 5, title: "five" },
  // ]);

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

      <div>
        <TodosGrid />
      </div>
      {/*<div>*/}
      {/*  <DragAndDrop list={arr} setList={serArr} />*/}
      {/*</div>*/}
    </div>
  );
};

let mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { logOut })(Dashboard);
