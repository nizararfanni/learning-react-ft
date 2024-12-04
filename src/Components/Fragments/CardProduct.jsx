import React from "react";
import Button from "../Button/Index";
// nested compnent
const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col justify-between w-full max-w-sm border bg-gray-800 border-gray-700 rounded-lg shadow items-center mx-1">
      {children}
    </div>
  );
};

// daripada kta pecah bagian2 lebih baik kita pake nested componen yaitu memakai componen di dalam komponent

//header isinya gambar product
const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="product-1" className="p-8 rounded-t-lg" />
    </a>
  );
};

//body isinya deks sebuah product
const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="font-semibold text-xl text-white tracking-tight">
          {name}
        </h5>
        <p className="text-white text-sm">{children}</p>
      </a>
    </div>
  );
};

// footer isinya sebuah footer biasa kaya ket harga dan button
const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex items-center justify-between p-5 w-full">
      <span className="text-white text-xl font-bold">
        {/* use tolocalestring untuk mengubah harga ke idr secara otomatis */}
        Rp
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </span>
      <Button classname="bg-blue-600 hover:bg-blue-800 ">
        Masukan keranjang
      </Button>
    </div>
  );
};

// karena di react cuma bisa export 1 komponent
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
