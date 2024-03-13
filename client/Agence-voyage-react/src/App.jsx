import "./App.css";
import AppRoutes from "../AppRoutes";
import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";

function App() {
  
  return (
    <div>
      
      <NextUIProvider>
        <AppRoutes />
      </NextUIProvider>
    </div>
  );
}

export default App;
