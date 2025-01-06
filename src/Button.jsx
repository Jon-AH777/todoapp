import React from "react";

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`border-none rounded-full bg-yellow-500 w-32 h-14 text-white text-lg font-medium cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
