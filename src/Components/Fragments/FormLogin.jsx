import React, { useEffect, useRef, useState } from "react";
import Button from "../Button/Index";
import InputForm from "../Input/Index";
import { login } from "../../service/auth.service";

const FormLogin = () => {
  // set failed logen while post data
  const [failedLogen, setFailedLogen] = useState("");
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

    // post data ke api,jika status true maka simpan token ke localstrorage
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
        // jika gagal maka munculkan new message error
      } else {
        setFailedLogen(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  //untuk menggunakan usereff sebagai props kita harus pake forward reff di komponen anak
  const usernameLoginRef = useRef(null);
  useEffect(() => {
    usernameLoginRef.current.focus();
  }, []);

  return (
    <div className="border-2 border-blue-500 p-10  shadow-2xl">
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
        {failedLogen && (
          <p className="items-center text-center text-red-500">{failedLogen}</p>
        )}
      </form>
    </div>
  );
};

export default FormLogin;
