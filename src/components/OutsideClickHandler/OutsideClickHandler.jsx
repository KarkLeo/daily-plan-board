import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

const OutsideClickHandler = ({ children, onOutsideClick }) => {
  let container = useRef();

  useEffect(() => {
    const closeOptions = (e) => {
      if (!container?.current?.contains(e.target) && onOutsideClick)
        onOutsideClick();
    };
    window.document.addEventListener("click", closeOptions);
    return () => {
      window.document.removeEventListener("click", closeOptions);
    };
  }, []);
  return (
    <div className="outside-click-handler" ref={container}>
      {children}
    </div>
  );
};

export default OutsideClickHandler;
