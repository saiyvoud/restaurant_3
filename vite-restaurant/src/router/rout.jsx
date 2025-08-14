import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SizeBarComponent from "../components/Sizebar";
import LoginView from "../view/auth/Login";
import Category from "../view/category/category";
import HomeView from "../view/home/HomeView";
import ProductView from "../view/product/Product";
import SaleView from "../view/sale/saleView";
const RouterPath = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SizeBarComponent />,
    },
    {
      path: "/login",
      element: <LoginView />,
    },
    {
      path: "/home",
      element: <HomeView />,
    },
    {
      path: "/sale",
      element: <SaleView />,
    },
    {
      path: "/product",
      element: <ProductView />,
    },
    {
      path: "/category",
      element: <Category />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterPath;
