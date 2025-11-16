import { useState, useCallback } from "react";
import { getProductApi, getProductByApi,addProductApi,updateProductApi,deleteProductApi } from "../api/productApi";
import { toast } from "react-toastify";

export const useProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);

  // useCallback เพื่อป้องกันการสร้าง function ใหม่ทุก render
  const getProduct = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await getProductApi();

      if (result.data.success) {
        setProduct(result.data.data);
      } else {
        setError(result.data.message);
        toast.error(result.data.message || "Get product failed ❌");
      }
    } catch (err) {
      setError(err.message);
      toast.error(`Failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, []);

  return { getProduct, loading, error, product };
};

export const useProductBy = ({ categeryId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productBy, setProducBy] = useState(null);
  const getProductBy = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await getProductByApi(categeryId);
      console.log(result);
      if (result.data.success) {
        setProducBy(result.data.data);
      } else {
        setError(result.data.message);
        toast.error(result.data.message || "Get product By failed ❌");
      }
    } catch (error) {
      setError(err.message);
      toast.error(`Failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, []);
  return { getProductBy, loading, error, productBy };
}
export const useAddProduct = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [product, setProduct] = useState(null);

    // useCallback เพื่อป้องกันการสร้าง function ใหม่ทุก render
    const addProduct = useCallback(async (formData) => {
        setLoading(true);
        try {
            const result = await addProductApi(formData);

            if (result.data.success) {
                setProduct(result.data.data);
                 toast.done(`ເພີ່ມຂໍ້ມູນສຳເລັດ`);
            } else {
                setError(result.data.message);
                toast.error(result.data.message || "add Product failed ❌");
            }
        } catch (err) {
            setError(err.message);
            toast.error(`Failed: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }, []);

    return { addProduct, loading, error, product };
};
export const useUpdateProduct = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [product, setProduct] = useState(null);

    // useCallback เพื่อป้องกันการสร้าง function ใหม่ทุก render
    const updateProduct = useCallback(async (formData) => {
        setLoading(true);
        try {
            const result = await updateProductApi(formData);

            if (result.data.success) {
                setProduct(result.data.data);
                toast.done(`ອັບເດດຂໍ້ມູນສຳເລັດ`);
            } else {
                setError(result.data.message);
                toast.error(result.data.message || "Update Product failed ❌");
            }
        } catch (err) {
            setError(err.message);
            toast.error(`Failed: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }, []);

    return { updateProduct, loading, error, product };
};
export const useDeleteProduct = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [Product, setProduct] = useState(null);

    // useCallback เพื่อป้องกันการสร้าง function ใหม่ทุก render
    const deleteProduct = useCallback(async (id) => {
        setLoading(true);
        try {
            const result = await deleteProductApi(id);
            if (result.data.success) {
                toast.done(`ລົບຂໍ້ມູນສຳເລັດ`);
            } else {
                setError(result.data.message);
                toast.error(result.data.message || "Delete Product failed ❌");
            }
        } catch (err) {
            setError(err.message);
            toast.error(`Failed: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }, []);

    return { deleteProduct, loading, error, Product };
};