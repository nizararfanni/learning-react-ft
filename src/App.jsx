import React from "react";
import Button from "./Components/Button/Index";
import InputForm from "./Components/Input";

function App() {
  return (
    <div className="flex justify-center bg-gray-600 min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">login</h1>
        <p className=" font-medium text-slate-500 mb-8">
          Welcome, Please enter your detail
        </p>
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
    </div>
  );
}

export default App;
