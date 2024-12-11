import React, { useEffect, useRef } from "react";
import Button from "../Button/Index";
import InputForm from "../Input/Index";
import { login } from "../../service/auth.service";

const FormLogin = () => {
  const handleLogin = (event) => {
    // agaar tidak refresh halaman loginya
    event.preventDefault();
    // // menargetakn  email dan pass dari form login dan coba di set di localStorage
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("Password", event.target.Password.value);
    // // direct orang yang sudah login ke halaman
    // window.location.href = "/product";
    const data = {
      username: event.target.username.value,
      password: event.target.Password.value,
    };

    login(data);
    console.log("login");
  };

  //untuk menggunakan usereff sebagai props kita harus pake forward reff di komponen anak
  const usernameLoginRef = useRef(null);
  useEffect(() => {
    usernameLoginRef.current.focus();
  }, []);

  return (
    <div>
      {/* onSubmit untuk ketika form di submit */}
      <form onSubmit={handleLogin}>
        <InputForm
          label="username"
          type="text"
          placeholder="nizar kheneddy"
          name="username"
          ref={usernameLoginRef}
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
