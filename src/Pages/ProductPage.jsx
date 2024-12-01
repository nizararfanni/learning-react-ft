import React from "react";
import Button from "../Components/Button/Index";

const ProductPage = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-gray-800 w-full max-w-sm border border-gray-700 rounded-lg shadow">
        <a href="#">
          <img
            src="/src/assets/images/shoes-1.jpg"
            alt="product-1"
            className="p-8 rounded-t-lg"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="">
            <h5 className="font-semibold text-xl text-white tracking-tight">
              sepatu baru
            </h5>
            <p className="text-white text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id minus culpa praesentium nam nemo enim aliquam velit optio a voluptates ea odit exercitationem magnam nihil officia, ut similique omnis deleniti.
            </p>
          </a>
        </div>
        <div className="flex items-center justify-between p-5">
            <span className="text-white text-xl font-bold">Rp 1.000.000</span>
            <Button classname="bg-blue-600 hover:bg-blue-800">Masukan ke keranjang</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
