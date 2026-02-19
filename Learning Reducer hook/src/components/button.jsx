import React from "react";

export const Button = ({ text, onClick, className = "", ...props }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      {...props}
    >
      {text}
    </button>
  );
};
