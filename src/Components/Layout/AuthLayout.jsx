import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
  const { tittle, children, type } = props;
  // ambil useContext dari darkmodeContext yg kita buat
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
  {console.log(isDarkMode)};
  return (
    <div className={`flex justify-center bg-gray-600 min-h-screen items-center ${isDarkMode && "bg-neutral-100"}`}>
      <div className="w-full max-w-xs">
        <button className="absolute top-5 right-5 bg-blue-500 p-2  rounded-md  hover:bg-blue-800" onClick={(() =>{
          setIsDarkMode(!isDarkMode)
        })}>
          {isDarkMode ? "Dark Mode" : "light Mode"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{tittle}</h1>
        <p className=" font-medium text-slate-500 mb-8">
          Welcome, Please enter your detail
        </p>
        {/* pake children biar nerima isi parameter */}
        {children}
        {/* kita pake link agar tidak ush meminta client side server ya intinya kaya tag anchor di html tapi pasanganya bukan href tapi to guys */}
        <p className="text-sm my-5 text-center">
          {type === "login"
            ? "belum punya account ??    "
            : "Sudah punya account?  "}
          {type === "login" && (
            <Link to="/register" className="font-bold text-blue-600">
              register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
