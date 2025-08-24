import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginView from "./view/auth/Login";
import RouterPath from "./router/rout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* RouterPath ຈັດການໜ້າຕ່າງໆ */}
      <RouterPath />

      {/* ToastContainer ວາງໄວ້ທີ່ນີ້ເທົ່ານັ້ນ 
          ເພື່ອໃຫ້ທຸກໜ້າສາມາດ toast.success(), toast.error() ໄດ້ */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}

export default App;
