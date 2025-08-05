import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SizeBarComponent from "../components/Sizebar";
import LoginView from "../view/auth/Login";
import HomeView from "../view/home/HomeView";
const RouterPath = () => {
  const router =
    createBrowserRouter([
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
      }
    ]);
  return <RouterProvider router={router} />;
};

export default RouterPath;

