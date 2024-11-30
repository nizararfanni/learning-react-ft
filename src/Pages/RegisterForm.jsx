import React from "react";
import AuthLayout from "../Components/Layout/AuthLayout";
import FormRegister from "../Components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div>
      <AuthLayout tittle="Register">
        <FormRegister></FormRegister>
        {/* kita pake link agar tidak ush meminta client side server ya intinya kaya tag anchor di html tapi pasanganya bukan href tapi to guys */}
        <p className="text-sm my-5 text-center">
          Sudah punya account?{" "}
          <Link to="/login" className="font-bold text-blue-600">
            Login
          </Link>
        </p>
      </AuthLayout>
    </div>
  );
};

export default RegisterForm;
