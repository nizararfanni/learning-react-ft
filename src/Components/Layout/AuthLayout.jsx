import React from "react";
import FormLogin from "../Fragments/FormLogin";

const AuthLayout = (props) => {
    const {tittle,children} = props
  return (
    <div className="flex justify-center bg-gray-600 min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{tittle}</h1>
        <p className=" font-medium text-slate-500 mb-8">
          Welcome, Please enter your detail
        </p>
        {/* pake children biar nerima isi parameter */}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
