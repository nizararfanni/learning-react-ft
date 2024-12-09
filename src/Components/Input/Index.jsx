import React, { forwardRef } from "react";
import Label from "./Label";
import Input from "./Input";

const InputForm = forwardRef((props,ref) => {
  const { label, name, type, placeholder } = props;

  return (
    <div className="mb-6">
      <Label htmlForm={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name} ref={ref} />
    </div>
  );
});

export default InputForm;
