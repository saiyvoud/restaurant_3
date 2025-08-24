import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateToken } from "../util/validateToken";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(null); // null = ກຳລັງກວດ token

  useEffect(() => {
    const valid = validateToken(); // ກວດທຸກຄັ້ງເຂົ້າ page
    setIsValid(valid);

    if (!valid) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  if (isValid === null) {
    // ກຳລັງກວດ token → ສະແດງຫຼິ້ນ placeholder ຫຼື null
    return null;
  }

  return isValid ? children : null;
};

export default ProtectedRoute;
