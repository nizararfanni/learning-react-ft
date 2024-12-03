import React from "react";
import InputForm from "../Input";
import Button from "../Button/Index";

const FormLogin = () => {
  const handleLogin = (event) => {
    // agaar tidak refresh halaman loginya
    event.preventDefault();
    // menargetakn  email dan pass dari form login dan coba di set di localStorage
    localStorage.setItem("email",event.target.email.value)
    localStorage.setItem("Password",event.target.Password.value)
    // direct orang yang sudah login ke halaman 
    window.location.href = "/product"
    
    console.log("login");
  };
  return (
    <div>
      {/* onSubmit untuk ketika form di submit */}
      <form onSubmit={handleLogin}>
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

        <Button classname="bg-blue-600 w-full" type={"submit"}>
          Logen
        </Button>
      </form>
    </div>
  );
};

export default FormLogin;
