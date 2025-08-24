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
import QRCode from "react-qr-code";

export default function TableView() {
  const [tables, setTables] = useState([
    { id: 1, status: "ວ່າງ", numberID: "ໂຕະທີ່ 1" },
    { id: 2, status: "ບໍ່ວ່າງ", numberID: "ໂຕະທີ່ 2" },
    { id: 3, status: "ວ່າງ", numberID: "ໂຕະທີ່ 3" },
    { id: 4, status: "ວ່າງ", numberID: "ໂຕະທີ່ 4" },
    { id: 5, status: "ບໍ່ວ່າງ", numberID: "ໂຕະທີ່ 5" },
    { id: 6, status: "ວ່າງ", numberID: "ໂຕະທີ່ 6" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [name, setName] = useState("");
  const [showQR, setShowQR] = useState(null);

  const openAddModal = () => {
    setEditingCategory(null);
    setName("");
    setShowModal(true);
  };

  const openEditModal = (cat) => {
    setEditingCategory(cat);
    setName(cat.name || "");
    setShowModal(true);
  };

  const openQRModal = (table) => {
    setShowQR(table); // ເລືອກສົ່ງທັງ object
  };

  const saveCategory = () => {
    if (!name.trim()) return;
    if (editingCategory) {
      setTables((prev) =>
        prev.map((t) => (t.id === editingCategory.id ? { ...t, name } : t))
      );
    } else {
      setTables((prev) => [
        ...prev,
        { id: Date.now(), numberID: name, status: "ວ່າງ" },
      ]);
    }
    setShowModal(false);
  };

  const deleteCategory = (id) => {
    setTables((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 bg-gradient-to-r p-4 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-black flex items-center gap-2">
            📂 Manage Table
          </h1>
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 px-4 py-2 bg-amber-300 text-black font-semibold rounded-lg hover:bg-amber-400 shadow"
          >
            <PlusCircle size={20} /> ເພີ່ມ ໂຕະ
          </button>
        </div>

        {/* Table */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-amber-200 text-left text-gray-700 uppercase text-sm font-semibold">
                <th className="p-3 border-b border-amber-300">ລຳດັບ</th>
                <th className="p-3 border-b border-amber-300">ເລກໂຕະ</th>
                <th className="p-3 border-b border-amber-300">ສະຖານະ</th>
                <th className="p-3 border-b border-amber-300">ຄິວອາໂຄດ</th>
                <th className="p-3 border-b border-amber-300 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {tables.map((item, index) => (
                <tr
                  key={item.id}
                  className={`border-b transition hover:bg-amber-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-amber-50"
                  }`}
                >
                  <td className="p-3 text-gray-600">{index + 1}</td>
                  <td className="p-3">{item.numberID}</td>
                  <td
                    className={
                      item.status === "ວ່າງ"
                        ? "p-3 font-medium text-green-500"
                        : "p-3 font-medium text-red-500"
                    }
                  >
                    {item.status}
                  </td>
                  <td>
                    <button
                      onClick={() => openQRModal(item)}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-green-400 text-white rounded hover:bg-yellow-500 transition"
                    >
                      <Edit3 size={16} /> generate QR
                    </button>
                  </td>
                  <td className="p-3 text-center space-x-2">
                    <button
                      onClick={() => openEditModal(item)}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
                    >
                      <Edit3 size={16} /> Edit
                    </button>
                    <button
                      onClick={() => deleteCategory(item.id)}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </td>
                </tr>
              ))}
              {tables.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center p-3 text-gray-500">
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

        {/* QR Modal */}
        {showQR && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg text-center flex flex-col items-center">
              <h2 className="text-xl font-bold mb-4">
                QR Code: {showQR.numberID}
              </h2>
              <div className="flex justify-center items-center mb-4">
                <QRCode value={showQR.numberID} size={200} />
              </div>
              <button
                onClick={() => setShowQR(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
