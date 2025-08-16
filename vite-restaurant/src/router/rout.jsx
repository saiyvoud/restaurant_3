import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SizeBarComponent from "../components/Sizebar";
import MobileView from "../mobile/mobile";
import LoginView from "../view/auth/Login";
import Category from "../view/category/category";
import HomeView from "../view/home/HomeView";
import ProductView from "../view/product/Product";
import ReportView from "../view/report/reportView";
import SaleView from "../view/sale/saleView";
import SalesHistory from "../view/saleHistory/saleHistory";
import TableView from "../view/tables/tablesView";
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
    {
      path: "/tables",
      element: <TableView />,
    },
    {
      path: "/sale_history",
      element: <SalesHistory />,
    },
    {
      path: "/report",
      element: <ReportView />,
    },
    {
      path: "/mobile",
      element: <MobileView />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterPath;
