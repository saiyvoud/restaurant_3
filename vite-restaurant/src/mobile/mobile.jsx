import { useState } from "react";

export default function MobileView() {
  const [category, setCategory] = useState("ທັງຫມົດ");
  const [activeTab, setActiveTab] = useState("home");
  const [cart, setCart] = useState([]);

  const menuCategories = ["ທັງຫມົດ", "ອາຫານ", "ເຄື່ອງດື່ມ", "ເບຍ"];
  const productData = [
    { image: "https://i.pinimg.com/1200x/8a/2f/5b/8a2f5b82e126a8b1b15f2531ddeccab2.jpg", name: "ເຂົ້າພັດ", price: "50,000₭", category: "ອາຫານ" },
    { image: "https://i.pinimg.com/1200x/c5/61/8a/c5618a4fb73e9e3a30c42844f7721d17.jpg", name: "ສະປາເກັດຕີອີຕາລີ", price: "150,000₭", category: "ອາຫານ" },
    { image: "https://i.pinimg.com/736x/39/fb/36/39fb36fd811583d0a21d911272e87c6d.jpg", name: "ເບຍລາວ", price: "20,000₭", category: "ເບຍ" },
    { image: "https://i.pinimg.com/736x/96/eb/4f/96eb4fca2cd991c6ae59d209b643008f.jpg", name: "ເບຍພາຍດີເກນ", price: "25,000₭", category: "ເບຍ" },
    { image: "https://i.pinimg.com/1200x/3c/a9/9a/3ca99a55d718100b7dc154093d704410.jpg", name: "ສະເຕັກເນື້ອງົວ", price: "450,000₭", category: "ອາຫານ" },
    { image: "https://i.pinimg.com/736x/be/27/38/be273814928f6885a49504f6b80ec82f.jpg", name: "ເປບຊີປ່ອງ", price: "20,000₭", category: "ເຄື່ອງດື່ມ" },
    { image: "https://i.pinimg.com/736x/de/4a/28/de4a28b573ca5e95498e8ccd2813e1aa.jpg", name: "ໂຄກ", price: "20,000₭", category: "ເຄື່ອງດື່ມ" },
    { image: "https://i.pinimg.com/736x/fa/f3/a8/faf3a8d191bebdf1e6e454cbcb7efba1.jpg", name: "ນ້ຳປັ່ນ", price: "50,000₭", category: "ເຄື່ອງດື່ມ" },
    { image: "https://i.pinimg.com/1200x/b5/bf/03/b5bf03af7e9ba90bb78d793419723fb8.jpg", name: "ນ້ຳດື່ມ", price: "50,000₭", category: "ເຄື່ອງດື່ມ" },
  ];

  const filteredProducts =
    category === "ທັງຫມົດ"
      ? productData
      : productData.filter((p) => p.category === category);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} ໄດ້ຖືກເພີ່ມໃສ່ກະເຕ່າແລ້ວ`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[375px] h-[812px] bg-gray-50 rounded-lg shadow-lg flex flex-col overflow-hidden">
        
        {/* Navbar */}
        <div className="flex justify-between items-center bg-amber-400 p-4 rounded-b-lg shadow">
          <h1 className="text-xl font-bold text-white">MD Restaurant Mobile</h1>
          {/* Cart Icon with count */}
          <div className="relative">
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {cart.length}
              </span>
            )}
          </div>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center space-x-2 p-4 overflow-x-auto bg-gray-100">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded font-medium ${
                category === cat
                  ? "bg-amber-400 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-3 gap-4">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow flex flex-col items-center text-center p-2"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.price}</p>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-2 px-2 py-1 bg-amber-400 text-white rounded text-xs"
                >
                  ເພີ່ມໃສ່ກະເຕ່າ
                </button>
              </div>
            ))}
            {filteredProducts.length === 0 && (
              <div className="col-span-3 text-center text-gray-500">
                ไม่มีเมนูในหมวดนี้
              </div>
            )}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-around items-center p-2 bg-white shadow-t border-t">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center text-sm ${
              activeTab === "home" ? "text-amber-400" : "text-gray-400"
            }`}
          >
            🏠
            <span>Home</span>
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`flex flex-col items-center text-sm ${
              activeTab === "history" ? "text-amber-400" : "text-gray-400"
            }`}
          >
            📜
            <span>History</span>
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center text-sm ${
              activeTab === "profile" ? "text-amber-400" : "text-gray-400"
            }`}
          >
            👤
            <span>Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
