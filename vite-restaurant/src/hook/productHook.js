import { useState, useCallback } from "react";
import { getProductApi } from "../api/productApi";
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
      console.log(product);
      if (result.data.success) {
        setProduct(result.data.data);
        console.log(product);
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
