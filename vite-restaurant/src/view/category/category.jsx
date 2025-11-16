import { useEffect, useState } from "react";
import { PlusCircle, X, Edit3, Trash2 } from "lucide-react";
import { useCategory, useAddCategory } from "../../hook/categoryHook";
import toast from "react-hot-toast";

export default function Category() {
  const { getCategory, loading, error, category } = useCategory();
  const { addCategory, loadAdd, errAdd } = useAddCategory();

  // Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", icon: null });
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  // ຈັດການປ້ອນຂໍ້ມູນ
  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ເລືອກຮູບພາບ (File → Preview + ເກັບ File ຈິງ)
  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      setForm((prev) => ({ ...prev, icon: file })); // ເກັບ File ຈິງ
    }
  };

  // ສົ່ງຂໍ້ມູນ
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.icon) {
      toast.error("ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ");
      return;
    }

    const data = new FormData();
    data.append("categoryName", form.name);
    data.append("icon", form.icon); // ສົ່ງ File ຈິງ

    await addCategory(data);

    if (!errAdd) {
      toast.success("ເພີ່ມ Category ສຳເລັດ");
      setIsOpen(false);
      setForm({ name: "", icon: null });
      setPreview(null);
      getCategory(); // ໂຫຼດຂໍ້ມູນໃໝ່
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-black flex items-center gap-2">
          Category ສິນຄ້າ
        </h1>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-amber-300 text-black font-semibold rounded-lg hover:bg-amber-50 shadow transition"
        >
          <PlusCircle size={20} /> ເພີ່ມ Category
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-amber-400 border-solid mb-4"></div>
          <p className="text-gray-600 text-lg">ກຳລັງໂຫຼດຂໍ້ມູນ...</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-center py-10 text-red-500 font-semibold">
          ເກີດຂໍ້ຜິດພາດ: {error}
        </div>
      )}

      {/* Table */}
      {!loading && !error && (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-amber-200 text-left text-gray-700 uppercase text-sm font-semibold">
                <th className="p-3 border-b border-amber-300">ລຳດັບ</th>
                <th className="p-3 border-b border-amber-300">ຮູບພາບ</th>
                <th className="p-3 border-b border-amber-300">ປະເພດອາຫານ</th>
                <th className="p-3 border-b border-amber-300 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {category && category.length > 0 ? (
                category.map((cat, index) => (
                  <tr
                    key={cat.id}
                    className={`border-b transition hover:bg-amber-50 ${
                      index % 2 === 0 ? "bg-white" : "bg-amber-50"
                    }`}
                  >
                    <td className="p-3 text-gray-600">{index + 1}</td>
                    <td className="p-3 text-center">
                      <img
                        src={cat.icon}
                        alt={cat.categoryName}
                        className="h-12 w-12 object-contain rounded-lg mx-auto"
                      />
                    </td>
                    <td className="p-3 font-medium text-gray-800">{cat.categoryName}</td>
                    <td className="p-3 text-center space-x-2">
                      <button className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition">
                        <Edit3 size={16} /> Edit
                      </button>
                      <button className="inline-flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                        <Trash2 size={16} /> Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center p-3 text-gray-500">
                    ບໍ່ມີຂໍ້ມູນ
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 bg-slate-50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
            {/* ປິດ Modal */}
            <button
              onClick={() => {
                setIsOpen(false);
                setForm({ name: "", icon: null });
                setPreview(null);
              }}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>

            <h2 className="text-xl font-bold mb-4 text-amber-600">ເພີ່ມ Category ໃໝ່</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* ຊື່ */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ຊື່ Category
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  value={form.categoryName}
                  onChange={handleInput}
                  placeholder="ປ້ອນຊື່..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* ຮູບພາບ */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ຮູບພາບ (Icon)
                </label>
                <input
                  required
                  type="file"
                  accept="image/*"
                  onChange={handleFile}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-100 file:text-amber-700 hover:file:bg-amber-200"
                />
                {preview && (
                  <div className="mt-3 flex justify-center">
                    <img
                      src={preview}
                      alt="Preview"
                      className="h-24 w-24 object-contain rounded-lg border border-amber-300 shadow-sm"
                    />
                  </div>
                )}
              </div>

              {/* ຜິດພາດ */}
              {errAdd && <p className="text-red-500 text-sm">{errAdd}</p>}

              {/* ປຸ່ມ */}
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                >
                  ຍົກເລີກ
                </button>
                <button
                  type="submit"
                  disabled={loadAdd}
                  className="px-4 py-2 bg-amber-400 text-black font-medium rounded hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {loadAdd ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-black"></div>
                      ກຳລັງບັນທຶກ...
                    </>
                  ) : (
                    "ບັນທຶກ"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}