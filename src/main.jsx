import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// panggil router-dom//
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./Pages/LoginForm.jsx";
import RegisterForm from "./Pages/RegisterForm.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import ProfilPage from "./Pages/ProfilPage.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

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
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/profil",
    element: <ProfilPage />,
  },
  {
    // dinamic routing pake id
    path: "/product/:id",
    element: <ProductDetail />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* pake router provider sebagai pasangan create browser router */}
      <RouterProvider router={root} />
    </Provider>
  </StrictMode>
);
