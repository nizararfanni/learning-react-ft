import React from "react";
import CardProduct from "../Components/Fragments/CardProduct";

const products = [
  {
    id: "1",
    name: "new shoes",
    price: "Rp.1.000.000",
    image: "/src/assets/images/shoes-1.jpg",
    description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          tempore totam recusandae delectus qui necessitatibus non voluptatibus!
          Libero qui nihil reiciendis distinctio soluta? Consequatur, quasi
          provident. Consequatur molestiae nesciunt eligendi.`,
  },
  {
    id: "1",
    name: "new shoes",
    price: "Rp.100.000.000",
    image: "/src/assets/images/shoes-1.jpg",
    description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          tempore totam recusandae delectus qui necessitatibus non voluptatibus!
          Libero qui nihil reiciendis distinctio soluta? Consequatur, quasi
          provident. Consequatur molestiae nesciunt eligendi.`,
  },
  {
    id: "1",
    name: "new shoes",
    price: "Rp 500.000",
    image: "/src/assets/images/shoes-1.jpg",
    description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          tempore totam recusandae delectus qui necessitatibus non voluptatibus!
          Libero qui nihil reiciendis distinctio soluta? Consequatur, quasi
          provident. Consequatur molestiae nesciunt eligendi.`,
  },
];

const ProductPage = () => {
  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {/* rendering list kita gunakan map untuk mnegiterasi produkcts di atas dan mengambil data di atas yang berupa array objek*/}
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image}></CardProduct.Header>
          <CardProduct.Body name={product.name}>
            {" "}
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price}></CardProduct.Footer>
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;
