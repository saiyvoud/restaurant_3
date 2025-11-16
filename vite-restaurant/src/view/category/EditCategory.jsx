import React, { useState, useEffect } from "react";
import { useUpdateCategory } from "../../hook/categoryHook";
import { X } from "lucide-react";

export const EditCategory = ({ isOpen, onClose, category, onSuccess }) => {
  const { updateCategory, loadUpd, errUpd } = useUpdateCategory();

  const [formData, setFormData] = useState({
    name: "",
    icon: null,
  });

  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});

  // ໂຫຼດຂໍ້ມູນເດີມເມື່ອເປີດ modal
  useEffect(() => {
    if (category) {
      setFormData({
        name: category.categoryName || "",
        icon: null,
      });
      // ສະແດງຮູບເດີມ
      if (category.icon) {
        setPreview(category.icon);
      }
    }
  }, [category]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "ກະລຸນາປ້ອນຊື່ Category";
    } else if (formData.name.length < 2) {
      newErrors.name = "ຊື່ Category ຕ້ອງມີຢ່າງໜ້ອຍ 2 ຕົວອັກສອນ";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // ຈັດການເລືອກຮູບພາບໃໝ່
  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      setFormData((prev) => ({ ...prev, icon: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const data = new FormData();
      data.append("categoryName", formData.name);
      
      // ຖ້າມີການເລືອກຮູບໃໝ່ຈຶ່ງສົ່ງໄປ
      if (formData.icon) {
        data.append("icon", formData.icon);
      }

      await updateCategory(category.id, data);

      if (!errUpd) {
        setFormData({ name: "", icon: null });
        setPreview(null);
        setErrors({});
        onClose();
        if (onSuccess) {
          onSuccess();
        }
      }
    } catch (error) {
      console.error("Failed to update category:", error);
    }
  };

  const handleClose = () => {
    setFormData({ name: "", icon: null });
    setPreview(null);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-50 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
        {/* ປິດ Modal */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        <h2 className="text-xl font-bold mb-4 text-amber-600">
          ແກ້ໄຂ Category
        </h2>

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
              value={formData.name}
              onChange={handleChange}
              placeholder="ປ້ອນຊື່..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* ຮູບພາບ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ຮູບພາບ (Icon) - ທາງເລືອກ
            </label>
            <input
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
            <p className="text-xs text-gray-500 mt-1">
              ປ່ອຍຫວ່າງຖ້າບໍ່ຕ້ອງການປ່ຽນຮູບ
            </p>
          </div>

          {/* ຜິດພາດ */}
          {errUpd && <p className="text-red-500 text-sm">{errUpd}</p>}

          {/* ປຸ່ມ */}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              ຍົກເລີກ
            </button>
            <button
              type="submit"
              disabled={loadUpd}
              className="px-4 py-2 bg-amber-400 text-black font-medium rounded hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loadUpd ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-black"></div>
                  ກຳລັງອັບເດດ...
                </>
              ) : (
                "ອັບເດດ"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};