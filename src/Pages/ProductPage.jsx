import React, { Fragment, useEffect, useState } from "react";
import CardProduct from "../Components/Fragments/CardProduct";
import Button from "../Components/Button/Index";

const products = [
  {
    id: 1,
    name: "new shoes",
    price: 1000000,
    image: "/src/assets/images/shoes-1.jpg",
    description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          tempore totam recusandae delectus qui necessitatibus non voluptatibus!
          Libero qui nihil reiciendis distinctio soluta? Consequatur, quasi
          provident. Consequatur molestiae nesciunt eligendi.`,
  },
  {
    id: 2,
    name: "new brand",
    price: 5000000,
    image: "/src/assets/images/shoes-1.jpg",
    description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          tempore totam recusandae delectus qui necessitatibus non voluptatibus!
          Libero qui nihil reiciendis distinctio soluta? Consequatur, quasi
          provident. Consequatur molestiae nesciunt eligendi.`,
  },
  {
    id: 3,
    name: "old shoes",
    price: 7000000,
    image: "/src/assets/images/shoes-1.jpg",
    description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          tempore totam recusandae delectus qui necessitatibus non voluptatibus!
          Libero qui nihil reiciendis distinctio soluta? Consequatur, quasi
          provident. Consequatur molestiae nesciunt eligendi.`,
  },
];
// tangkap email dr local storage
const email = localStorage.getItem("email");
// atur function agar log out dari halaman product
const handleLogOut = () => {
  // hapus email dan password dari local stroage
  localStorage.removeItem("email");
  localStorage.removeItem("Password");
  window.location.href = "/login";
};

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // useeffect like componentdidmount untuk update state
  useEffect(() => {
    // parsing data dari json kembali ke objek biasa
    setCart(JSON.parse(localStorage.getItem("card")) || []);
  }, []);
  // use effect total price
  useEffect(() => {
    if (cart.length > 0) {
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
  }, [cart]);

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
  return (
    // karena di react itu tdk bisa pke dua div,bisa gunakan <> kosong atau fragments
    <Fragment>
      <div className="flex justify-end bg-blue-600 h-20 px-10 items-center text-white">
        {email}
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
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}></CardProduct.Header>
              <CardProduct.Body name={product.name}>
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
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp.
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>
                  <b>Total price</b>
                </td>
                <td>
                  <b>
                    Rp
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
