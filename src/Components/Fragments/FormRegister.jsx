import React from 'react'

import Button from "../Button/Index";
import InputForm from '../Input/Index';

const FormRegister = () => {
  return (
    <div className='border-2 border-blue-500 p-10  shadow-2xl'>
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
