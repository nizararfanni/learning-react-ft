import React, { Fragment, useState } from "react";
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
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

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
                handleAddToCard={handleAddToCard}
              ></CardProduct.Footer>
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
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
            </tbody>
          </table>
        </div>
      </div>
      {/* coba classcomponent saaja walau sudah tdk di gunakan */}
      {/* <div className="flex justify-center">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};

export default ProductPage;
