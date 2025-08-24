import { useState } from "react";
import {
  LayoutGrid,
  Soup,
  Milk,
  Beer,
  CakeSlice,
  HandPlatter,
  CupSoda,
  Edit3,
  Trash2,
  PlusCircle,
} from "lucide-react";
import SizeBarComponent from "../../components/Sizebar";

export default function Category() {
  const [categories, setCategories] = useState([
    { id: 1, icon: <LayoutGrid size={24} />, name: "ທັງໝົດ" },
    { id: 2, icon: <Soup size={24} />, name: "ອາຫານ" },
    { id: 3, icon: <Milk size={24} />, name: "ເຄື່ອງດື່ມ" },
    { id: 4, icon: <Beer size={24} />, name: "ເບຍ" },
    { id: 5, icon: <CakeSlice size={24} />, name: "ເຂົ້າໝົ້ມ" },
    { id: 6, icon: <HandPlatter size={24} />, name: "ເຂົ້າ" },
    { id: 7, icon: <CupSoda size={24} />, name: "ນ້ຳປັ່ນ" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [name, setName] = useState("");

  const openAddModal = () => {
    setEditingCategory(null);
    setName("");
    setShowModal(true);
  };

  const openEditModal = (cat) => {
    setEditingCategory(cat);
    setName(cat.name);
    setShowModal(true);
  };

  const saveCategory = () => {
    if (!name.trim()) return;
    if (editingCategory) {
      setCategories(
        categories.map((c) =>
          c.id === editingCategory.id ? { ...c, name } : c
        )
      );
    } else {
      setCategories([
        ...categories,
        { id: Date.now(), name, icon: <LayoutGrid size={24} /> },
      ]);
    }
    setShowModal(false);
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter((c) => c.id !== id));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 bg-gradient-to-r  p-4 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-black flex items-center gap-2">
            📂 Category ສິນຄ້າ
          </h1>
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 px-4 py-2 bg-amber-300 text-black font-semibold rounded-lg hover:bg-amber-400 shadow"
          >
            <PlusCircle size={20} /> ເພີ່ມ Category
          </button>
        </div>

        {/* Table */}
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
              {categories.map((cat, index) => (
                <tr
                  key={cat.id}
                  className={`border-b transition hover:bg-amber-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-amber-50"
                  }`}
                >
                  <td className="p-3 text-gray-600">{index + 1}</td>
                  <td className="p-3">{cat.icon}</td>
                  <td className="p-3 font-medium text-gray-800">{cat.name}</td>
                  <td className="p-3 text-center space-x-2">
                    <button
                      onClick={() => openEditModal(cat)}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
                    >
                      <Edit3 size={16} /> Edit
                    </button>
                    <button
                      onClick={() => deleteCategory(cat.id)}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </td>
                </tr>
              ))}
              {categories.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center p-3 text-gray-500">
                    ບໍ່ມີຂໍ້ມູນ
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg animate-fadeIn">
              <h2 className="text-xl font-bold mb-4">
                {editingCategory ? "ແກ້ໄຂ Category" : "ເພີ່ມ Category"}
              </h2>
              <input
                type="text"
                placeholder="ຊື່ Category"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded p-2 mb-4 focus:ring-2 focus:ring-amber-400 outline-none"
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={saveCategory}
                  className="px-4 py-2 bg-amber-400 text-white rounded hover:bg-amber-500"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
