import React from "react";

const Icon = ({ iconId, className }) => {
  return (
    <svg className={className}>
      <use xlinkHref={`#${iconId}`} />
    </svg>
  );
};

export default Icon;
