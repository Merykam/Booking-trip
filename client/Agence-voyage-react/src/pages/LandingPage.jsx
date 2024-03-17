import { useState } from "react";
import Navbar from "../components/navbar";
import Login from "../components/login";
import Signup from "../components/signup";
import Card from "../components/card";
import Search from "../components/search";
import Section from "../components/section";
import ServiceSection from "../components/serviceSection";
import Footer from "../components/footer";


const LandingPage = ({ children }) => {


  const [status, setStatus] = useState("");

  const toggle = (state) => {
    setStatus(state);
  };

  return (
    <div>
      <div className="container00"  >
        <div className="overlay">
          <Navbar to={toggle} />

          {children}

          {status == "" ? (
            <div className="flex justify-center items-center h-screen travel">
              <h1 className=" text-9xl">Travel with us</h1>
            </div>
          ) : (
            ""
          )}

        </div>
      </div>
      <Section></Section>
      <ServiceSection></ServiceSection>
      <div className="tripTitle">
        <h1 className="">Our International Packages</h1>
      </div>

      <Card></Card>

      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
