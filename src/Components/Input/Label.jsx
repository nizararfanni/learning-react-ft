import React, { children } from "react";

const Label = (props) => {
  const { children, htmlFor } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block text-slate-700 font-bold mb-2 text-sm"
    >
      {children}
    </label>
  );
};

export default Label;
