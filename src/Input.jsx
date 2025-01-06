import React from "react";

const Input = ({ value, onChange, placeholder, className }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-4 py-2 border rounded ${className}`}
    />
  );
};

export default Input;
