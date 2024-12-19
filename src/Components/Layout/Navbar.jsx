import React from "react";
import Button from "../Button/Index";
import { useLogin } from "../../hooks/useLogin";

const Navbar = () => {
  const handleLogOut = () => {
    // hapus email dan password dari local stroage
    localStorage.removeItem("token");
    localStorage.removeItem("Password");
    window.location.href = "/login";
  };
  const username = useLogin();
  return (
    <div className="flex justify-end bg-blue-600 h-20 px-10 items-center text-white">
      {username}
      <Button
        classname=" ml-5 bg-orange-600 hover:bg-orange-700"
        onClick={handleLogOut}
      >
        Log Out
      </Button>
    </div>
  );
};

export default Navbar;
