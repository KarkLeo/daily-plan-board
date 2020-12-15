import React from "react";
import { connect } from "react-redux";
import "./DatePicker.css";
import { setTodosSelectionDate } from "../../store/todos/todosSelectionReducer";
import { stringifyDate } from "../../methods/date";

const DatePicker = ({ date, setTodosSelectionDate }) => {
  const changeDateInput = (e) => {
    if (e.target.valueAsDate) setTodosSelectionDate(e.target.valueAsDate);
  };
  return (
    <div className="data-picker">
      <input
        className="data-picker__field"
        type="date"
        onChange={changeDateInput}
        value={stringifyDate(date)}
      />
    </div>
  );
};

let mapStateToProps = (state) => ({ date: state.todos_selection.date });

export default connect(mapStateToProps, {
  setTodosSelectionDate,
})(DatePicker);
