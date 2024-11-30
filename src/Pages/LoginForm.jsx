import React from "react";
import AuthLayout from "../Components/Layout/AuthLayout";
import FormLogin from "../Components/Fragments/FormLogin";


const LoginForm = () => {
  return (
    <div>
      <AuthLayout tittle="Login"type="login">
        <FormLogin></FormLogin>
        {/* kita pake link agar tidak ush meminta client side server ya intinya kaya tag anchor di html tapi pasanganya bukan href tapi to guys */}
      </AuthLayout>
    </div>
  );
};

export default LoginForm;
