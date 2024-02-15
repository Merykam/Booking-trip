import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("");
  const toggle = (state) => {
    setStatus(state);
  };

  return (
    <>
      <div className=" container0">
        <Navbar to={toggle} />
        {status == "" ? (
          <h1 className="text-6xl message p-16 pt-28">
            EXPLORE <br /> DREAM <br /> DESTINATION
          </h1>
        ) : (
          ""
        )}

        {status == "login" ? <Login></Login> : ""}
        

        {status == "signup" ? <Signup></Signup> : ""}
      </div>
    </>
  );
}

export default App;
