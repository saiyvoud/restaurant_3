import React from "react";
import SizeBarComponent from "../../components/Sizebar";
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
import PieChartComponent from "./components/pieChart";
const HomeView = () => {
  const data = [
    {
      icon: <MenuSquareIcon />,
      title: "$58,947",
      subTitle: "Total Sale",
    },
    {
      icon: <Book />,
      title: "1500",
      subTitle: "Total Order",
    },
    {
      icon: <ForkKnifeCrossed />,
      title: "100",
      subTitle: "Total Product",
    },
    {
      icon: <MenuSquareIcon />,
      title: "50",
      subTitle: "Total Category",
    },
    {
      icon: <TablePropertiesIcon />,
      title: "30",
      subTitle: "Total Tables",
    },
    {
      icon: <History />,
      title: "1500",
      subTitle: "History Sale",
    },
    {
      icon: <MenuSquareIcon />,
      title: "50",
      subTitle: "Total Category",
    },
    {
      icon: <TablePropertiesIcon />,
      title: "30",
      subTitle: "Total Tables",
    },
  ];
  return (
    <>
    
      <div className="flex justify-center  w-full ">
        {/* ✅ Card */}
        <div className="grid grid-cols-4 gap-6  py-3 ">
          {data.map((item, index) => (
            <div className="flex justify-between  items-center gap-6 py-5  bg-white rounded-lg shadow-md ">
              {/* Icon */}
              <div className="w-1"></div>
              <div className="bg-orange-300 h-12 w-12 text-white rounded-full flex items-center justify-center">
                {item.icon}
              </div>

              {/* Text content */}
              <div className="flex flex-col">
                <h1 className="font-bold text-lg">{item.title}</h1>
                <p className="text-gray-400 text-sm">{item.subTitle}</p>
              </div>

              {/* Vertical Divider */}
              <div className=" bg-orange-300 h-12 w-[2px] rounded-full " />
            </div>
          ))}
        </div>
      </div>

      <div className=" flex justify-center items-center">
      <div className="flex justify-between gap-6">
        <PieChartComponent />
        <PieChartComponent />
        {/* Add more components here if needed */}
      </div>
    </div>
      
 
 
    </>
  
    );
};

export default HomeView;
