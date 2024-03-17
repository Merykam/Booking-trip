import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showPackageById } from "../redux/package";
import { useParams } from "react-router-dom";
import { getUserInfo } from "../redux/user";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

const PackageDetails = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  const { id } = useParams();
  console.log(id);
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

  function goPrev() {
    loop--;
    for (let index = 0; index < slides.length; index++) {
      const element = slides[index];
      element.style.transform =
        "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
    }
  }

  function openView() {
    document.getElementById("viewerButton").classList.add("hidden");
    document.getElementById("viewerBox").classList.remove("hidden");
  }
  function closeView() {
    document.getElementById("viewerBox").classList.add("hidden");
    document.getElementById("viewerButton").classList.remove("hidden");
  }

  const checkToken = (id) => {
    console.log(id);
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
    <div className="relative ">
      <div
        className="absolute bg-cover bg-center bg-no-repeat h-full w-full top-0 left-0 brightness-50"
        // style={{
        //   backgroundImage: `url('http://localhost:4000/uploads/${Package.image}')`,
        // }}
        style={{
          backgroundImage: `url('https://source.unsplash.com/1L71sPT5XKc')`,
        }}
      ></div>

      <Navbar></Navbar>

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
                  {/* <div class="flex B">
                    <img
                      src={`http://localhost:4000/uploads/${Package.image}`}
                      alt="A black chair with wooden legs"
                      class="w-full h-full"
                    />
                  </div>
                  <div class="flex C">
                    <img
                      src={`http://localhost:4000/uploads/${Package.image}`}
                      alt="A black chair with wooden legs"
                      class="w-full h-full"
                    />
                  </div> */}
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
      </div>
    </div>
  );
};

export default PackageDetails;
