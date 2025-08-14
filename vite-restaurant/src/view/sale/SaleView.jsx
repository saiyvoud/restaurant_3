import {
  Beer,
  Bolt,
  CakeSlice,
  CupSoda,
  HandPlatter,
  LayoutGrid,
  MenuSquare,
  Milk,
  Soup,
  Trash,
} from "lucide-react";
import React, { useState } from "react";
import SizeBarComponent from "../../components/Sizebar";

const SaleView = () => {
  const [currentIndex, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const productData = [
    {
      image:
        "https://i.pinimg.com/1200x/8a/2f/5b/8a2f5b82e126a8b1b15f2531ddeccab2.jpg",
      name: "ເຂົ້າພັດ",
      price: "50,000₭",
    },
    {
      image:
        "https://i.pinimg.com/1200x/c5/61/8a/c5618a4fb73e9e3a30c42844f7721d17.jpg",
      name: "ສະປາເກັດຕີອີຕາລີ",
      price: "150,000₭",
    },
    {
      image:
        "https://i.pinimg.com/736x/39/fb/36/39fb36fd811583d0a21d911272e87c6d.jpg",
      name: "ເບຍລາວ",
      price: "20,000₭",
    },
    {
      image:
        "https://i.pinimg.com/736x/96/eb/4f/96eb4fca2cd991c6ae59d209b643008f.jpg",
      name: "ເບຍພາຍດີເກນ",
      price: "25,000₭",
    },
    {
      image:
        "https://i.pinimg.com/1200x/3c/a9/9a/3ca99a55d718100b7dc154093d704410.jpg",
      name: "ສະເຕັກເນື້ອງົວ",
      price: "450,000₭",
    },
    {
      image:
        "https://i.pinimg.com/736x/be/27/38/be273814928f6885a49504f6b80ec82f.jpg",
      name: "ເປບຊີປ່ອງ",
      price: "20,000₭",
    },
    {
      image:
        "https://i.pinimg.com/736x/de/4a/28/de4a28b573ca5e95498e8ccd2813e1aa.jpg",
      name: "ໂຄກ",
      price: "20,000₭",
    },
    {
      image:
        "https://i.pinimg.com/736x/fa/f3/a8/faf3a8d191bebdf1e6e454cbcb7efba1.jpg",
      name: "ນ້ຳປັ່ນ",
      price: "50,000₭",
    },
    {
      image:
        "https://i.pinimg.com/1200x/b5/bf/03/b5bf03af7e9ba90bb78d793419723fb8.jpg",
      name: "ນ້ຳດື່ມ",
      price: "50,000₭",
    },
  ];
  const categoryData = [
    {
      icon: <LayoutGrid />,
      title: "ທັງໝົດ",
      subTitle: "50 ລາຍການ",
    },
    {
      icon: <Soup />,
      title: "ອາຫານ",
      subTitle: "10 ລາຍການ",
    },
    {
      icon: <Milk />,
      title: "ເຄື່ອງດື່ມ",
      subTitle: "10 ລາຍການ",
    },
    {
      icon: <Beer />,
      title: "ເບຍ",
      subTitle: "5 ລາຍການ",
    },
    {
      icon: <CakeSlice />,
      title: "ເຂົ້າໝົມ",
      subTitle: "10 ລາຍການ",
    },
    {
      icon: <HandPlatter />,
      title: "ເຂົ້າ",
      subTitle: "5 ລາຍການ",
    },
    {
      icon: <CupSoda />,
      title: "ນ້ຳປັ່ນ",
      subTitle: "10 ລາຍການ",
    },
  ];
  const orderData = [
    {
      image:
        "https://i.pinimg.com/1200x/8a/2f/5b/8a2f5b82e126a8b1b15f2531ddeccab2.jpg",
      name: "ເຂົ້າພັດ",
      price: "50,000₭",
    },
    {
      image:
        "https://i.pinimg.com/1200x/c5/61/8a/c5618a4fb73e9e3a30c42844f7721d17.jpg",
      name: "ສະປາເກັດຕີອີຕາລີ",
      price: "150,000₭",
    },
   
    {
      image:
        "https://i.pinimg.com/1200x/3c/a9/9a/3ca99a55d718100b7dc154093d704410.jpg",
      name: "ສະເຕັກເນື້ອງົວ",
      price: "450,000₭",
    },
    {
      image:
        "https://i.pinimg.com/736x/be/27/38/be273814928f6885a49504f6b80ec82f.jpg",
      name: "ເປບຊີປ່ອງ",
      price: "20,000₭",
    },
    {
      image:
        "https://i.pinimg.com/736x/de/4a/28/de4a28b573ca5e95498e8ccd2813e1aa.jpg",
      name: "ໂຄກ",
      price: "20,000₭",
    },
    {
      image:
        "https://i.pinimg.com/736x/fa/f3/a8/faf3a8d191bebdf1e6e454cbcb7efba1.jpg",
      name: "ນ້ຳປັ່ນ",
      price: "50,000₭",
    },
    {
      image:
        "https://i.pinimg.com/1200x/b5/bf/03/b5bf03af7e9ba90bb78d793419723fb8.jpg",
      name: "ນ້ຳດື່ມ",
      price: "50,000₭",
    },
  ];
  return (
    <SizeBarComponent>
      <div className="flex">
        <div className="flex-col mx-2">
          {/* ✅ Category */}
          <div className="flex  justify-center">
            <div className="flex gap-5 justify-center items-center ">
              {categoryData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setIndex(index)}
                  className={
                    currentIndex == index
                      ? "flex flex-col items-center justify-center rounded-xl h-28 w-24 bg-amber-300 p-2"
                      : "flex flex-col items-center justify-center rounded-xl h-28 w-24 bg-white p-2"
                  }
                >
                  {item.icon}
                  <h1 className="font-bold text-sm">{item.title}</h1>
                  <p className="text-xs text-gray-700">{item.subTitle}</p>
                </div>
              ))}
            </div>
          </div>
          {/* ✅ Menu food */}
          <div className="grid grid-cols-4 space-y-5 mt-5">
            {productData.map((item, index) => (
              <div
                key={index}
                className="bg-white text-start h-54 w-44 rounded-xl"
              >
                <img
                  className="rounded-xl object-contain h-30 w-full"
                  src={item.image}
                ></img>
                <h1 className="mx-2">{item.name}</h1>
                <h1 className="mx-2 font-bold text-green-500">{item.price}</h1>
                <div className="text-center  items-center bg-amber-300 h-9 mt-1 mx-2 rounded-lg">
                  <h1 className="font-bold py-1">ເພີ່ມ</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ✅ Sale */}
        <div className="bg-white min-h-screen w-full">
          <h1 className="font-bold text-2xl text-center py-2">ລາຍການສັ່ງຊື້</h1>
          <div className="text-center text-gray-300">
            ----------------------------------------------
          </div>
          {orderData.map((item) => (
            <div className="flex py-2 px-4 ">
              {/* ✅ List Order */}

              <div className="h-14 w-14 bg-gray-200 rounded-xl">
                <img
                  className="object-contain rounded-full h-14 w-14 p-2"
                  src={item.image}
                />
              </div>
              <div className="flex flex-col">
                <h1 className="mx-2">{item.name}</h1>
                <h1 className="mx-2 font-bold text-green-500">
                  {item.price}
                </h1>
              </div>
              {/* ✅ button add */}
              <div className="flex justify-between items-center mx-2 my-2">
                <button
                  onClick={decrease}
                  className="w-6 h-6 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full text-sm "
                >
                  -
                </button>

                <span className="min-w-[2rem] text-center text-lg ">
                  {quantity}
                </span>

                <button
                  onClick={increase}
                  className="w-6 h-6 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-bold "
                >
                  +
                </button>
              </div>
              <div className="flex  text-red-500 items-center mx-4">
                <Trash />
              </div>
            </div>
          ))}
          <div className="text-center text-gray-300">
            ----------------------------------------------
          </div>
          <div className="text-center hover:bg-amber-400  items-center bg-amber-300 h-9 mt-1 mx-10 rounded-lg">
          <h1 className="font-bold py-1">ຊຳລະເງິນ</h1>
        </div>
        </div>
      </div>
    </SizeBarComponent>
  );
};

export default SaleView;
