import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const TableCard = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);
  // ambil useContext dari darkmodeContext yg kita buat
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  // use effect total price
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      // reduce untuk menjumlah kan harga total
      const sum = cart.reduce((acc, item) => {
        // find untuk mencari jika product.id sama dengan item.id punya cart
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      // jumlah harga ke totalprice
      setTotalPrice(sum);
      // masukan ke local storage
      localStorage.setItem("card", JSON.stringify(cart));
    }
    // depedency nya cart artinya useffect ini hanya akan di eksekusi jika cart berubah
  }, [cart, products]);

  const totalPriceRef = useRef(null);

  // set total price agar hilang jika tdk ada barang
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <div>
      <table
        className={`text-left table-auto border-separate border-spacing-x-5 ${
          isDarkMode && "text-white"
        }`}
      >
        {/* keranjang belanja */}
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>tottal</th>
          </tr>
        </thead>
        <tbody>
          {/* mapping state card terus cari di product,kalo productnya id nya sama kaya item id(ini di state card guys) nya return nama harga quantity dan total dari barang */}
          {products.length > 0 &&
            cart.map((item) => {
              const product = products.find(
                (product) => product.id === item.id
              );
              return (
                <tr key={item.id}>
                  <td>{product.title.substring(0, 10)}...</td>
                  <td>
                    {" "}
                    {product.price.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </td>
                  <td>{item.qty}</td>
                  <td>
                    $
                    {(item.qty * product.price).toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </td>
                </tr>
              );
            })}
          <tr ref={totalPriceRef}>
            <td colSpan={3}>
              <b>Total price</b>
            </td>
            <td>
              <b>
                $
                {totalPrice.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "IDR",
                })}
              </b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableCard;
