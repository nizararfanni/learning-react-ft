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
    name: "new shoes",
    price: 5000000,
    image: "/src/assets/images/shoes-1.jpg",
    description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          tempore totam recusandae delectus qui necessitatibus non voluptatibus!
          Libero qui nihil reiciendis distinctio soluta? Consequatur, quasi
          provident. Consequatur molestiae nesciunt eligendi.`,
  },
  {
    id: 3,
    name: "new shoes",
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
      name: "sepatu baru",
      qty: 1,
    },
  ]);
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
        <div className="w-3/4 flex flex-wrap">
          {/* rendering list kita gunakan map untuk mnegiterasi produkcts di atas dan mengambil data di atas yang berupa array objek*/}
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}></CardProduct.Header>
              <CardProduct.Body name={product.name}>
                {" "}
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price}></CardProduct.Footer>
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <ul>
            {cart.map((item) =>(
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
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
