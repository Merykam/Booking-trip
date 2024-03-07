import "./App.css";
import AppRoutes from "../AppRoutes";
import { NextUIProvider } from "@nextui-org/react";

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
