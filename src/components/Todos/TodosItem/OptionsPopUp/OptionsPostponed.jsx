import React, { useState, useEffect } from "react";
import OptionsPopUp from "./OptionsPopUp";
import { defaultPostponedDate } from "../../../../methods/date";
import { stringifyDate } from "../../../../methods/date";
import { reverseSortDate } from "../../../../methods/date";
import { changeDaysInDate } from "../../../../methods/date";

const OptionsPostponed = ({ todo, onSend, onOutsideClick }) => {
  let [postponedDate, setPostponedDate] = useState(
    defaultPostponedDate(todo.date)
  );
  let [validate, changeValidate] = useState(true);
  const changePostponedDate = (e) => {
    if (e.target.valueAsDate) setPostponedDate(e.target.valueAsDate);

    changeValidate(
      reverseSortDate(
        e.target.valueAsDate,
        changeDaysInDate(defaultPostponedDate(todo.date), -1)
      ) === -1
    );
  };

  return (
    <OptionsPopUp
      validate={validate}
      onSend={() => onSend(postponedDate)}
      onOutsideClick={onOutsideClick}
    >
      <input
        type="date"
        value={stringifyDate(postponedDate)}
        onChange={changePostponedDate}
      />
    </OptionsPopUp>
  );
};

export default OptionsPostponed;
