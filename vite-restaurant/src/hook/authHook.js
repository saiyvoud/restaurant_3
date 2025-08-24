import { useState } from "react";
import { LoginApi } from "../api/authApi"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { SaveToken } from "../util/cookie";
export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async ({ email, password }) => {
    setLoading(true);
    setError(null);

    try {
      const result = await LoginApi({ email, password });

      if (result.data.success === true) {
        setUser(result.data.data);
        SaveToken( result.data.data.token , result.data.data.refreshToken);
        navigate('/home')
        toast.success("Login successful 🎉");
      } else {
        setError(result.data.message);
        toast.error("Login failed ❌");
      }
      setLoading(false);
    } catch (error) {
      toast.error(`Email and Password `);
      setLoading(false);
    }
  };

  return { login, loading, error, user };
};
