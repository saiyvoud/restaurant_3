import { useState, useCallback } from "react";
import { getCategoryApi, addCategoryApi, updateCategoryApi, deleteCategoryApi } from "../api/categoryApi";
import { toast } from "react-toastify";

export const useCategory = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState(null);

    // useCallback เพื่อป้องกันการสร้าง function ใหม่ทุก render
    const getCategory = useCallback(async () => {
        setLoading(true);
        try {
            const result = await getCategoryApi();

            if (result.data.success) {
                setCategory(result.data.data);

            } else {
                setError(result.data.message);
                toast.error(result.data.message || "Get category failed ❌");
            }
        } catch (err) {
            setError(err.message);
            toast.error(`Failed: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }, []);

    return { getCategory, loading, error, category };
};
export const useAddCategory = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState(null);

    // useCallback เพื่อป้องกันการสร้าง function ใหม่ทุก render
    const addCategory = useCallback(async (formData) => {
        setLoading(true);
        try {
          
            const result = await addCategoryApi(formData);
            
            if (result) {
                 setCategory(result.data.data);
                 toast.success(`ເພີ່ມຂໍ້ມູນສຳເລັດ`);
            } else {
                setError(result.data.data.message);
                toast.error(result.data.data.message);
            }
        } catch (err) {
            setError(err.message);
            toast.error(`Failed: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }, []);

    return { addCategory, loading, error, category };
};
export const useUpdateCategory = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState(null);

    // useCallback เพื่อป้องกันการสร้าง function ใหม่ทุก render
    const updateCategory = useCallback(async (formData) => {
        setLoading(true);
        try {
            const result = await updateCategoryApi(formData);

            if (result.data.success) {
                setCategory(result.data.data);
                toast.success(`ອັບເດດຂໍ້ມູນສຳເລັດ`);
            } else {
                setError(result.data.message);
                toast.error(result.data.message || "Get category failed ❌");
            }
        } catch (err) {
            setError(err.message);
            toast.error(`Failed: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }, []);

    return { updateCategory, loading, error, category };
};
export const useDeleteCategory = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState(null);

    // useCallback เพื่อป้องกันการสร้าง function ใหม่ทุก render
    const deleteCategory = useCallback(async (id) => {
        setLoading(true);
        try {
            const result = await deleteCategoryApi(id);

            if (result.data.success) {
                toast.success(`ລົບຂໍ້ມູນສຳເລັດ`);
            } else {
                setError(result.data.message);
                toast.error(result.data.message || "Get category failed ❌");
            }
        } catch (err) {
            setError(err.message);
            toast.error(`Failed: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }, []);

    return { deleteCategory, loading, error, category };
};
