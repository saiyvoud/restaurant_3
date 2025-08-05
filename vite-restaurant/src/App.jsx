import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginView from "./view/auth/Login";
import RouterPath from "./router/rout";
function App() {
  const [count, setCount] = useState(0);

  return (
   
      <RouterPath />
 
  );
}

export default App;
