import React, { Fragment, useEffect, useState } from "react";
import CardProduct from "../Components/Fragments/CardProduct";
import { getProduct } from "../service/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCard from "../Components/Fragments/TableCard";
import Navbar from "../Components/Layout/Navbar";

// atur function agar log out dari halaman product


const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const username = useLogin();

  //get product from api with callback
  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  return (
    // karena di react itu tdk bisa pke dua div,bisa gunakan <> kosong atau fragments
    <Fragment>
      <Navbar></Navbar>
      <div className="flex justify-center  ">
        {/* atur lebar product jadi 3/4 bagian layar atau 75% */}
        <div className="w-4/6 flex flex-wrap">
          {/* rendering list kita gunakan map untuk mnegiterasi produkcts di atas dan mengambil data di atas yang berupa array objek*/}
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header
                  image={product.image}
                  id={product.id}
                ></CardProduct.Header>
                <CardProduct.Body name={product.title}>
                  {" "}
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  // id card
                  id={product.id}
                ></CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ms-5">Cart</h1>
          <TableCard products={products}></TableCard>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
