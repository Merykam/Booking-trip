import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Signup from "./components/signup";
import Card from "./components/card";
import Search from "./components/search";

function App() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("");
  const toggle = (state) => {
    setStatus(state);
  };

  return (
    <>
      <div className="container00">
        <div className="overlay">
          <Navbar to={toggle} />
          {status == "" ? (
            // <h1 className="text-6xl message p-16 pt-28">
            //   EXPLORE <br /> DREAM <br /> DESTINATION
            // </h1>
            <div className="flex justify-center items-center h-screen travel">
              <h1 className=" text-9xl">Travel with us</h1>
            </div>
          ) : (
            ""
          )}
          {/* <div className="flex justify-center ">
            {status == "" ? <Search></Search> : ""}
          </div> */}

          {status == "login" ? <Login></Login> : ""}

          {status == "signup" ? <Signup></Signup> : ""}
        </div>
      </div>

      <div className="tripTitle">
        <h1 className="text-sky-900">ALL Trips</h1>
      </div>

      <Card></Card>
    </>
  );
}

export default App;
