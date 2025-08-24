import {
  Beer,
  Bolt,
  CakeSlice,
  CupSoda,
  HandPlatter,
  LayoutGrid,
  MenuSquare,
  Milk,
  PlusCircle,
  Soup,
  Trash,
} from "lucide-react";
import React, { useState,useEffect } from "react";
import { useProduct } from "../../hook/productHook"

const ProductView = () => {
  const [currentIndex, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { getProduct, loading, error, product } = useProduct();
  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  useEffect(() => {
    getProduct();
  }, [getProduct]);
  // const productData = [
  //   {
  //     image:
  //       "https://i.pinimg.com/1200x/8a/2f/5b/8a2f5b82e126a8b1b15f2531ddeccab2.jpg",
  //     name: "ເຂົ້າພັດ",
  //     price: "50,000₭",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/1200x/c5/61/8a/c5618a4fb73e9e3a30c42844f7721d17.jpg",
  //     name: "ສະປາເກັດຕີອີຕາລີ",
  //     price: "150,000₭",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/736x/39/fb/36/39fb36fd811583d0a21d911272e87c6d.jpg",
  //     name: "ເບຍລາວ",
  //     price: "20,000₭",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/736x/96/eb/4f/96eb4fca2cd991c6ae59d209b643008f.jpg",
  //     name: "ເບຍພາຍດີເກນ",
  //     price: "25,000₭",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/1200x/3c/a9/9a/3ca99a55d718100b7dc154093d704410.jpg",
  //     name: "ສະເຕັກເນື້ອງົວ",
  //     price: "450,000₭",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/736x/be/27/38/be273814928f6885a49504f6b80ec82f.jpg",
  //     name: "ເປບຊີປ່ອງ",
  //     price: "20,000₭",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/736x/de/4a/28/de4a28b573ca5e95498e8ccd2813e1aa.jpg",
  //     name: "ໂຄກ",
  //     price: "20,000₭",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/736x/fa/f3/a8/faf3a8d191bebdf1e6e454cbcb7efba1.jpg",
  //     name: "ນ້ຳປັ່ນ",
  //     price: "50,000₭",
  //   },
  //   {
  //     image:
  //       "https://i.pinimg.com/1200x/b5/bf/03/b5bf03af7e9ba90bb78d793419723fb8.jpg",
  //     name: "ນ້ຳດື່ມ",
  //     price: "50,000₭",
  //   },
  // ];
 
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
    <>
      <div className="flex-col mx-2">
        {/* Header */}
        <div className="flex justify-between bg-white items-center mb-6 bg-gradient-to-r  p-4 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-black flex items-center gap-2">
            📂 ສິນຄ້າ
          </h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-amber-300 text-black font-semibold rounded-lg hover:bg-amber-400 shadow">
            <PlusCircle size={20} /> ເພີ່ມສິນຄ້າ
          </button>
        </div>

        {/* ✅ Menu food */}
        <div className="grid grid-cols-6 space-y-5 mt-5">
          {product.map((item, index) => (
            <div
              key={index}
              className="bg-white text-start h-54 w-44 rounded-xl"
            >
              <img
                className="rounded-xl object-contain h-30 w-full"
                src={item.image}
              ></img>
              <h1 className="mx-2">{item.productName}</h1>
              <h1 className="mx-2 font-bold text-green-500">{item.price}</h1>
              <div className="text-center  items-center bg-orange-300 h-9 mt-1 mx-2 rounded-lg">
                <h1 className="font-bold py-1">ແກ້ໄຂ</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductView;
