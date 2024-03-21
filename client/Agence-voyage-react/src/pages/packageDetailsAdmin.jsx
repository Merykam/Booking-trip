import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showPackageById } from "../redux/package";
import { useParams } from "react-router-dom";
import { getUserInfo } from "../redux/user";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Layout from "./Layout";

const PackageDetailsDashboard = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  const { id } = useParams();

  const dispatch = useDispatch();

  const { singlePackage: Package } = useSelector((state) => state.package);
  console.log(Package);
  useEffect(() => {
    dispatch(showPackageById(id));
  }, []);

  let slides = document.querySelectorAll(".slide-ana>div");
  let slideSayisi = slides.length;
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");
  for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform = "translateX(" + 100 * index + "%)";
  }
  let loop = 0 + 1000 * slideSayisi;

  function goNext() {
    loop++;
    for (let index = 0; index < slides.length; index++) {
      const element = slides[index];
      element.style.transform =
        "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
    }
  }

  const checkToken = (id) => {
    console.log(id);
    console.log(userInfo[0]);
    if (userInfo[0]._id) {
      console.log(userInfo._id);
      console.log("you can book our package");
      navigate(`/Booking/${id}`);
    } else {
      console.log("you can't book our package");
      navigate("/login");
    }
  };

  return (
    <Layout>
      <div className="relative ">
        <div
          className="absolute bg-cover bg-center bg-no-repeat  top-0 left-0 brightness-50"
          // style={{
          //   backgroundImage: `url('http://localhost:4000/uploads/${Package.image}')`,
          // }}
          style={{
            backgroundImage: `url('http://localhost:4000/uploads/${Package.image}')`,
          }}
        ></div>

        {/* 
      <div class="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4 min-h-[100vh] z-50">
        <div id="viewerButton" class="hidden w-full flex justify-center">
          <button
            onclick="openView()"
            class="bg-white text-indigo-600 shadow-md rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 py-5 px-10 font-semibold"
          >
            Open Quick View
          </button>
        </div>
        <div id="viewerBox" class="lg:p-10 md:p-6 p-4  dark:bg-gray-900">
          <div class="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech lg:space-x-8">
            <div class="lg:w-1/2 flex  bg-white-50 ">
              <div class="slider lg:w-full">
                <div class="slide-ana lg:relative lg:w-full h-96">
                  <div class="flex A lg:w-full">
                    <img
                      src={`http://localhost:4000/uploads/${Package.image}`}
                      alt="A black chair with wooden legs"
                      class="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0 z-50  px-12 rounded-xl">
              <h1 class="text-3xl lg:text-4xl font-semibold text-white dark:text-white">
                {Package?.destination?.name}
              </h1>

              <div className="mt-5">
                <p class="text-base font-bold leading-normal text-gray-200 dark:text-white mt-2">
                  <span className="text-xl">Hotel</span> :{" "}
                  {Package?.hotel?.name}
                </p>
                <p class="text-base font-bold leading-normal text-gray-200 dark:text-white mt-2">
                  <span className="text-xl">Depart date</span> :{" "}
                  {new Date(Package?.depart_date).toLocaleDateString()}
                </p>
                <p class="text-base font-bold leading-normal text-gray-200 dark:text-white mt-2">
                  <span className="text-xl">Price</span> : {Package?.price} $
                </p>
                <p class="text-base font-bold leading-normal text-gray-200 dark:text-white mt-2">
                  <span className="text-xl">Trip duration</span> :{" "}
                  {Package.trip_duration} Days
                </p>
              </div>

              <p class="text-base leading-normal text-gray-200 dark:text-white mt-2">
                <span className="text-xl font-bold">Plan of trip : </span>
                {Package?.description}
              </p>

              <p class="text-3xl font-medium text-gray-600 dark:text-white mt-8 md:mt-10"></p>
              <div class="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 ">
                <button
                  onClick={() => {
                    checkToken(Package?._id);
                  }}
                  class="w-full md:w-3/5 border border-orange-800 text-base font-medium leading-none text-white uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-orange-600 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  book it now
                </button>
                <button class="w-full md:w-2/5 border border-orange-600 text-base font-medium leading-none text-orange-600 dark:text-white uppercase py-6 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-transparent dark:border-white dark:text-white focus:ring-gray-800 hover:bg-gray-800 hover:text-white hover:bg-orange-600 ">
                  More packages
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

        <div class="px-2 py-20 w-full flex justify-center relative">
          <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
            <div class="lg:w-1/2">
              <div
                class="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                style={{
                  backgroundImage: `url('http://localhost:4000/uploads/${Package.image}')`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div class="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
              <h2 class="text-3xl text-gray-800 font-bold">
                {Package?.destination?.name}
                {/* <span class="text-indigo-600">Choices</span> */}
              </h2>
              <p class="mt-4 text-black w-90">
                The "Eco-Tracker" project aims to create a web-based platform
                that encourages individuals to adopt sustainable lifestyle
                choices and
              </p>
              <div className="mt-5">
                <p class="text-base leading-normal text-black dark:text-white mt-2">
                  <span className="">Hotel</span> : {Package?.hotel?.name}
                </p>
                <p class="text-base  leading-normal text-black dark:text-white mt-2">
                  <span className="">Depart date</span> :{" "}
                  {new Date(Package?.depart_date).toLocaleDateString()}
                </p>
                <p class="text-base  leading-normal text-black dark:text-white mt-2">
                  <span className="">Price</span> : {Package?.price} $
                </p>
                <p class="text-base leading-normal text-black dark:text-white mt-2">
                  <span className="">Trip duration</span> :{" "}
                  {Package.trip_duration} Days
                </p>
                <p class="text-base leading-normal text-black dark:text-white mt-2">
                  <span className="">Added By</span> :{" "}
                  <span className="font-bold text-sky-900">
                    {Package.user_id.name}
                  </span>
                </p>
              </div>
              {/* <div
                class="mt-8"
                onClick={() => {
                  checkToken(Package?._id);
                }}
              >
                <a
                  href="#"
                  class="bg-orange-600 text-gray-100 px-5 py-3 font-semibold rounded"
                >
                  Booking now
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PackageDetailsDashboard;
