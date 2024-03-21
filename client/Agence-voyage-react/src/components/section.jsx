import React from "react";
import img2 from "../../public/2.jpg";

const section = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row justify-center m-16">
      <div className="text-center sm:text-left sm:mr-8">
      <h1 className="welcomeTitle">
          We Provide You Bes <br /> Europe Sightseeing Tours
        </h1>
        <p className="mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aperiam{" "}
          <br />
          incidunt provident eligendi quam mollitia, in, ipsa dicta quisquam{" "}
          <br />
          reprehenderit sequi fuga amet maxime, repellendus itaque corrupti{" "}
          <br />
          tempore corporis possimus.
        </p>
        <button
          type="button"
          className="mt-3 relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <a
            href="#"
            className="btn-auth font-bold rounded-md px-3 py-2"
            aria-current="page"
          >
            View Packages
          </a>
        </button>
      </div>
      <div className="img-cont mt-8 sm:mt-0">
        <img className="w-full sm:w-auto" src={img2} alt="" />
      </div>
    </div>
  );
};

export default section;
