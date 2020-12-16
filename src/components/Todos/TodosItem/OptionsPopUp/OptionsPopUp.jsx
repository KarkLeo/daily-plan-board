import React from "react";
import "./OptionsPopUp.css";
import OutsideClickHandler from "../../../OutsideClickHandler/OutsideClickHandler";

const OptionsPopUp = ({ onSend, validate, onOutsideClick, children }) => {
  return (
    <OutsideClickHandler onOutsideClick={onOutsideClick}>
      <div className="options-pop-up">
        {children}
        <button
          className="options-pop-up__button button"
          onClick={onSend}
          disabled={!validate}
        >
          Ок
        </button>
      </div>
    </OutsideClickHandler>
  );
};

export default OptionsPopUp;
