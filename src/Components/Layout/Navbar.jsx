import React, { useEffect, useState } from "react";
import Button from "../Button/Index";
import { useLogin } from "../../hooks/useLogin";
import { useSelector } from "react-redux";

const Navbar = () => {
  const handleLogOut = () => {
    // hapus email dan password dari local stroage
    localStorage.removeItem("token");
    localStorage.removeItem("Password");
    window.location.href = "/login";
  };

  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  // use selector itu fungsion dari react-redux,artinya kita mngakses state di redux dengan nama cart terus ke data serta menyimpan di variable cart
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    // reduce untuk menjumlahkan qty,jadi cart ambil data dari local storage lewat cartslice {name.data},terus di reduce untuk menjumlahkan acc awalnya 0 terus di  tambah dengan item.qty unutk iterasi pertama return 0 + 1= 1 dan seterusnya
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  return (
    <div className="flex justify-end bg-blue-600 h-20 px-10 items-center text-white">
      {username}
      <Button
        classname=" ml-5 bg-orange-600 hover:bg-orange-700"
        onClick={handleLogOut}
      >
        Log Out
      </Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
        <p className="text-white">{totalCart}</p>
      </div>
    </div>
  );
};

export default Navbar;
