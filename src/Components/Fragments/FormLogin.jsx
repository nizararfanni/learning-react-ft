import React from "react";
import InputForm from "../Input";
import Button from "../Button/Index";

const FormLogin = () => {
  return (
    <div>
      <form action="">
        <InputForm
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          name="email"
        ></InputForm>
        <InputForm
          label="Password"
          type="password"
          placeholder="*******"
          name="Password"
        ></InputForm>

        <Button classname="bg-blue-600 w-full">Logen</Button>
      </form>
    </div>
  );
};

export default FormLogin;
