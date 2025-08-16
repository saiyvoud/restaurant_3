import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  MenuSquareIcon,
  Book,
  ForkKnifeCrossed,
  TablePropertiesIcon,
  History,
  FileChartColumnIncreasing,
  Menu,
  LogOut,
} from "lucide-react";

const SizeBarComponent = ({ children }) => {
  const navigator = useNavigate();
  const [currentIndex, SetIndex] = useState(0);
  const tapMenu = [
    {
      title: "Dashboard",
      icon: <Home />,
      path: "/home",
    },
    {
      title: "Sale",
      icon: <MenuSquareIcon />,
      path: "/sale",
    },
    {
      title: "Category",
      icon: <Book />,
      path: "/category",
    },
    {
      title: "Product",
      icon: <ForkKnifeCrossed />,
      path: "/product",
    },
    {
      title: "Table",
      icon: <TablePropertiesIcon />,
      path: "/tables",
    },
    {
      title: "Sale History",
      icon: <History />,
      path: "/sale_history",
    },
    {
      title: "Report",
      icon: <FileChartColumnIncreasing />,
      path: "/report",
    },
  ];
  return (
    <div className="flex">
      {/* Sizebar */}
      <div className=" w-64 h-screen  flex flex-col shadow-lg">
        {/* Header Logo */}
        <div className="flex justify-center items-center py-4 text-2xl font-bold  border-orange-400 text-white">
          <img
            className=" object-cover h-32 w-32 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWxubRRNNVjzgAAej3lHi_AwzByxqjOS3FLA&s"
            alt="Profile"
          ></img>
        </div>
        <div>
          <h1 className="font-bold text-center text-white border-b pb-2 border-amber-300">
            MD Restaurant
          </h1>
        </div>
        {/* menu */}
        <div className="space-y-5 mt-2">
          {tapMenu.map((item, index) => (
            <div key={index}
              onClick={() => {
                SetIndex(index);
                navigator(item.path)
               
           
              }}
              className={
                currentIndex == index
                  ? "flex bg-amber-300 h-10  m-2 rounded-xl"
                  : "flex bg-white h-10  m-2 rounded-xl hover:bg-amber-300"
              }
            >
              <div className="px-4 p-1.5 ">{item.icon}</div>
              <div className="px-2   py-1.5">{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-300 overflow-auto min-h-screen flex flex-col">
        {/* ✅ Navbar */}
        <div className="flex justify-between py-5 px-2 bg-white h-16 w-full ">
          {/* ✅ Menu Navbar */}
          <div className=" flex ">
            <div>
              <Menu onClick={() => alert("Ok")} />
            </div>

            <h1 className="px-5">Dashboard</h1>
          </div>
          {/* ✅ Username Navbar */}
          <div className="flex  items-center">
            <div className="mx-2 h-12 w-12  ">
              <img src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"></img>
            </div>
            <h1 className=" font-semibold">Username</h1>
            <div className="px-2">
              <LogOut onClick={() => alert("LogOut Success")} />
            </div>
          </div>
        </div>

        {/* Children content */}
        <div className="p-2 flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default SizeBarComponent;
