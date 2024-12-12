import React, { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../Components/Fragments/CardProduct";
import Button from "../Components/Button/Index";
import { getProduct } from "../service/product.service";
import { data } from "react-router-dom";
import { getUsername } from "../service/auth.service";

// atur function agar log out dari halaman product
const handleLogOut = () => {
  // hapus email dan password dari local stroage
  localStorage.removeItem("token");
  localStorage.removeItem("Password");
  window.location.href = "/login";
};

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");

  // useeffect like componentdidmount untuk update state
  useEffect(() => {
    // parsing data dari json kembali ke objek biasa
    setCart(JSON.parse(localStorage.getItem("card")) || []);
  }, []);
  useEffect(() => {
    // tangkap email dr local storage
    const token = localStorage.getItem("token");
    if (token) {
      // ambil username dr token
      setUsername(getUsername(token));
    } else {
      //kalo token gada tetap di login
      window.location.href = "/login";
    }
  });
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

  // function buat add card
  const handleAddToCard = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const totalPriceRef = useRef(null);

  // set total price agar hilang jika tdk ada barang
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  //get product from api with callback
  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  return (
    // karena di react itu tdk bisa pke dua div,bisa gunakan <> kosong atau fragments
    <Fragment>
      <div className="flex justify-end bg-blue-600 h-20 px-10 items-center text-white">
        {username}
        <Button
          classname=" ml-5 bg-orange-600 hover:bg-orange-700"
          onClick={handleLogOut}
        >
          Log Out
        </Button>
      </div>
      <div className="flex justify-center  ">
        {/* atur lebar product jadi 3/4 bagian layar atau 75% */}
        <div className="w-4/6 flex flex-wrap">
          {/* rendering list kita gunakan map untuk mnegiterasi produkcts di atas dan mengambil data di atas yang berupa array objek*/}
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image}></CardProduct.Header>
                <CardProduct.Body name={product.title}>
                  {" "}
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  // id card
                  id={product.id}
                  // property tangkap funtion handle card
                  handleAddToCard2={handleAddToCard}
                ></CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ms-5">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
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
      </div>
    </Fragment>
  );
};

export default ProductPage;
