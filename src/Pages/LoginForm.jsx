import React from "react";
import AuthLayout from "../Components/Layout/AuthLayout";
import FormLogin from "../Components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <AuthLayout tittle="Login">
        <FormLogin></FormLogin>
        {/* kita pake link agar tidak ush meminta client side server ya intinya kaya tag anchor di html tapi pasanganya bukan href tapi to guys */}
        <p className="text-sm my-5 text-center">
          Belum punya acount ?{" "}
          <Link to="/register" className="font-bold text-blue-600">
            Register
          </Link>
        </p>
      </AuthLayout>
    </div>
  );
};

export default LoginForm;
