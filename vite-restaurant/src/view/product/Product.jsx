import { useEffect } from "react";
import { LayoutGrid, Edit3, Trash2, PlusCircle } from "lucide-react";
import { useProduct } from "../../hook/productHook";

export default function ProductView() {
  const { getProduct, loading, error, product } = useProduct();

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 bg-gradient-to-r p-4 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-black flex items-center gap-2">
          📂 Product ສິນຄ້າ
        </h1>
        <button
          onClick={() => console.log("open modal")}
          className="flex items-center gap-2 px-4 py-2 bg-amber-300 text-black font-semibold rounded-lg hover:bg-amber-400 shadow"
        >
          <PlusCircle size={20} /> ເພີ່ມ Product
        </button>
      </div>

      {/* ✅ Loading state */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-amber-400 border-solid mb-4"></div>
          <p className="text-gray-600 text-lg">ກຳລັງໂຫຼດຂໍ້ມູນ...</p>
        </div>
      )}

      {/* ❌ Error state */}
      {error && (
        <div className="text-center py-10 text-red-500 font-semibold">
          ⚠️ ເກີດຂໍ້ຜິດພາດ: {error}
        </div>
      )}

      {/* ✅ Table */}
      {!loading && !error && (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-amber-200 text-left text-gray-700 uppercase text-sm font-semibold">
                <th className="p-3 border-b border-amber-300">ລຳດັບ</th>
                <th className="p-3 border-b border-amber-300">ຮູບພາບ</th>
                  <th className="p-3 border-b border-amber-300">ເມນູ</th>
                  <th className="p-3 border-b border-amber-300">ປະເພດອາຫານ</th>
                <th className="p-3 border-b border-amber-300">ຈຳນວນ</th>
                <th className="p-3 border-b border-amber-300">ລາຄາ</th>
                <th className="p-3 border-b border-amber-300 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {product && product.length > 0 ? (
                product.map((cat, index) => (
                  <tr
                    key={cat.id}
                    className={`border-b transition hover:bg-amber-50 ${
                      index % 2 === 0 ? "bg-white" : "bg-amber-50"
                    }`}
                  >
                    <td className="p-3 text-gray-600">{index + 1}</td>
                    <td className="p-3 text-center align-middle">
                     
                        <img
                          src={cat.image}
                          alt="product"
                          className="h-12 w-12 object-contain rounded-lg"
                        />
                    </td>
                    <td className="p-3 font-medium text-gray-800">
                      {cat.productName}
                    </td>
                    <td className="p-3 font-medium text-gray-800">
                      {cat.category.categoryName}
                    </td>
                    <td className="p-3 font-medium text-gray-800">
                      {cat.productAmount}
                    </td>
                    <td className="p-3 font-medium text-gray-800">
                      {cat.price}
                    </td>
                    
                    <td className="p-3 text-center space-x-2">
                      <button
                        onClick={() => console.log("edit", cat.id)}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
                      >
                        <Edit3 size={16} /> Edit
                      </button>
                      <button
                        onClick={() => console.log("delete", cat.id)}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-3 text-gray-500">
                    ບໍ່ມີຂໍ້ມູນ
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
