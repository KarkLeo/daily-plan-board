import React from "react";
import { connect } from "react-redux";
import "./DateBar.css";
import { prevDay, nextDay } from "../../store/todos/todosSelectionReducer";
import { setTodosSelectionDate } from "../../store/todos/todosSelectionReducer";
import { stringifyDate } from "../../methods/date";
import Icon from "../Sprite/Icon";

const DateBar = ({
  date,
  isCurrentDate,
  prevDay,
  nextDay,
  setTodosSelectionDate,
}) => {
  const currentDate = new Date();

  const changeDateInput = (e) => {
    if (e.target.valueAsDate) setTodosSelectionDate(e.target.valueAsDate);
  };

  return (
    <div className="date-bar">
      <label className="date-bar__item date-bar__button">
        <Icon className="date-bar__icon" iconId="calendar_today" />
        <input
          className="date-bar__date-picker"
          type="date"
          onChange={changeDateInput}
          value={stringifyDate(date)}
        />
      </label>

      <button
        className="date-bar__item date-bar__button"
        onClick={() => prevDay()}
      >
        <Icon className="date-bar__icon" iconId="expand_less" />
        {isCurrentDate ? "Вчера" : "Предыдущий день"}
      </button>
      <div className="date-bar__item">
        <Icon
          className="date-bar__icon"
          iconId={
            isCurrentDate ? "radio_button_checked" : "radio_button_unchecked"
          }
        />
        {date.toLocaleDateString()}
      </div>
      <button
        className="date-bar__item date-bar__button"
        onClick={() => nextDay()}
      >
        <Icon className="date-bar__icon" iconId="expand_more" />
        {isCurrentDate ? "Завтра" : "Следующий день"}
      </button>
      {!isCurrentDate && (
        <button
          className="date-bar__item date-bar__button"
          onClick={() => setTodosSelectionDate(currentDate)}
        >
          <Icon className="date-bar__icon" iconId="radio_button_checked" />
          Сегодня
        </button>
      )}
    </div>
  );
};

let mapStateToProps = (state) => ({
  date: state.todos_selection.date,
  isCurrentDate: state.todos_selection.isCurrentDate,
});

export default connect(mapStateToProps, {
  prevDay,
  nextDay,
  setTodosSelectionDate,
})(DateBar);
