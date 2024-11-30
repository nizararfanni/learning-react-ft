import React from 'react'
import InputForm from "../Input";
import Button from "../Button/Index";

const FormRegister = () => {
  return (
    <div>
    <form action="">
      <InputForm
        label="Full Name"
        type="text"
        placeholder="Masukan nama kamu"
        name="Name"
      ></InputForm>
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
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="*******"
        name="ConfrimPassword"
      ></InputForm>

      <Button classname="bg-blue-600 w-full">Register Cuy</Button>
    </form>
  </div>
  )
}

export default FormRegister
