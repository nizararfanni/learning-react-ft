import React from "react";
import AuthLayout from "../Components/Layout/AuthLayout";
import FormRegister from "../Components/Fragments/FormRegister";


const RegisterForm = () => {
  return (
    <div>
      <AuthLayout tittle="Register" type="register">
        <FormRegister></FormRegister>
        
      </AuthLayout>
    </div>
  );
};

export default RegisterForm;
