import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Signup from "./components/signup";
import Card from "./components/card";
import Search from "./components/search";
import Section from "./components/section";
import ServiceSection from './components/serviceSection'

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
      <Section></Section>
      <ServiceSection></ServiceSection>
      <div className="tripTitle">
        <h1 className="">Our International Packages</h1>
      </div>

      <Card></Card>
    </>
  );
}

export default App;
