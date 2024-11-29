import React from "react";

const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm border rounded w-full text-slate-700 py-2 px-3 placeholder: opacity-50"
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
