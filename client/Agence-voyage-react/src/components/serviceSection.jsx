import React from "react";
import guid from "../../public/tour-guide.png";
import medical from "../../public/medical-team.png";
import mosque from "../../public/mosque.png";
import travelling from "../../public/travelling.png";

const serviceSection = () => {
  return (
    <div className="flex flex-col items-center mt-20 mb-20 serviceSection ">
      <h1 className="services-title">We offer best services</h1>
      <div className="overlay2">
        <div className="flex flex-wrap justify-center items-center mt-16">
          <div className="flex flex-col items-center mb-8 sm:mb-0 sm:w-1/2 md:w-auto md:mb-0">
            <img className="w-14 h-14" src={guid} alt="img" />
            <h1 className="font-bold mt-2">Guided Tours</h1>
            <p className="mt-2 text-center w-48">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col items-center mb-8 sm:mb-0 sm:w-1/2 md:w-auto md:mb-0">
            <img className="w-14 h-14" src={travelling} alt="img" />
            <h1 className="font-bold mt-2">Best flight options</h1>
            <p className="mt-2 text-center w-48">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col items-center mb-8 sm:mb-0 sm:w-1/2 md:w-auto md:mb-0">
            <img className="w-14 h-14" src={mosque} alt="img" />
            <h1 className="font-bold mt-2">Religion Tours</h1>

            <p className="mt-2 text-center w-48">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col items-center mb-8 sm:mb-0 sm:w-1/2 md:w-auto md:mb-0">
            <img className="w-14 h-14" src={medical} alt="img" />
            <h1 className="font-bold mt-2">Medical team</h1>
            <p className="mt-2 text-center w-48">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default serviceSection;
