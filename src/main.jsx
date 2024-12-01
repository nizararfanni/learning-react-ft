import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// panggil router-dom//
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./Pages/LoginForm.jsx";
import RegisterForm from "./Pages/RegisterForm.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import ProductPage from "./Pages/ProductPage.jsx";

//pake create browser untuk membuat path agar bisa pindah2
const root = createBrowserRouter([
  {
    // path apa yang mau di tampilkan kaya login/register
    path: "/",
    element: <div>hello world</div>,
    errorElement: <ErrorPage />,
  },
  {
    // path apa yang mau di tampilkan kaya login/register
    path: "/login",
    element: <LoginForm />,
  },
  {
    // path apa yang mau di tampilkan kaya login/register
    path: "/register",
    element: <RegisterForm />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* pake router provider sebagai pasangan cbr */}
    <RouterProvider router={root} />
  </StrictMode>
);
