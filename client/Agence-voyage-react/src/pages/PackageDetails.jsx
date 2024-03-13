import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showPackageById } from "../redux/package";
import { useParams } from "react-router-dom";

const PackageDetails = () => {
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

  return (
    <div>
      <div class="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
        <div id="viewerButton" class="hidden w-full flex justify-center">
          <button
            onclick="openView()"
            class="bg-white text-indigo-600 shadow-md rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 py-5 px-10 font-semibold"
          >
            Open Quick View
          </button>
        </div>
        <div
          id="viewerBox"
          class="lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900"
        >
          {/* <div class="flex justify-end">
            <button
              onclick="closeView()"
              aria-label="Close"
              class="focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <svg
                class="dark:text-white"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8799 15.9996L23.6133 10.2796C23.8643 10.0285 24.0054 9.688 24.0054 9.33293C24.0054 8.97786 23.8643 8.63733 23.6133 8.38626C23.3622 8.13519 23.0217 7.99414 22.6666 7.99414C22.3115 7.99414 21.971 8.13519 21.7199 8.38626L15.9999 14.1196L10.2799 8.38626C10.0288 8.13519 9.68832 7.99414 9.33325 7.99414C8.97818 7.99414 8.63766 8.13519 8.38659 8.38626C8.13551 8.63733 7.99446 8.97786 7.99446 9.33293C7.99446 9.688 8.13551 10.0285 8.38659 10.2796L14.1199 15.9996L8.38659 21.7196C8.26161 21.8435 8.16242 21.991 8.09473 22.1535C8.02704 22.316 7.99219 22.4902 7.99219 22.6663C7.99219 22.8423 8.02704 23.0166 8.09473 23.179C8.16242 23.3415 8.26161 23.489 8.38659 23.6129C8.51054 23.7379 8.658 23.8371 8.82048 23.9048C8.98296 23.9725 9.15724 24.0073 9.33325 24.0073C9.50927 24.0073 9.68354 23.9725 9.84602 23.9048C10.0085 23.8371 10.156 23.7379 10.2799 23.6129L15.9999 17.8796L21.7199 23.6129C21.8439 23.7379 21.9913 23.8371 22.1538 23.9048C22.3163 23.9725 22.4906 24.0073 22.6666 24.0073C22.8426 24.0073 23.0169 23.9725 23.1794 23.9048C23.3418 23.8371 23.4893 23.7379 23.6133 23.6129C23.7382 23.489 23.8374 23.3415 23.9051 23.179C23.9728 23.0166 24.0077 22.8423 24.0077 22.6663C24.0077 22.4902 23.9728 22.316 23.9051 22.1535C23.8374 21.991 23.7382 21.8435 23.6133 21.7196L17.8799 15.9996Z"
                  fill="#1F2937"
                />
              </svg>
            </button>
          </div> */}
          <div class="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech lg:space-x-8">
            <div class="lg:w-1/2 flex  bg-white-50 ">
              {/* <div class="flex items-center">
                <button
                  onclick="goPrev()"
                  aria-label="slide back"
                  class="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100"
                >
                  <svg
                    class="w-10 h-10 lg:w-16 lg:h-16"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 16L24 32L40 48"
                      stroke="#1F2937"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div> */}
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
              {/* <div class="flex items-center">
                <button
                  onclick="goNext()"
                  aria-label="slide forward"
                  class="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100"
                >
                  <svg
                    class="w-10 h-10 lg:w-16 lg:h-16"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 16L40 32L24 48"
                      stroke="#1F2937"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
            <div class="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
              <h1 class="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white">
                {Package.destination?.name}
              </h1>

              <div className="mt-5">
                <p class="text-base font-bold leading-normal text-gray-600 dark:text-white mt-2">
                  <span className="text-xl">Hotel</span> : {Package.hotel.name}
                </p>
                <p class="text-base font-bold leading-normal text-gray-600 dark:text-white mt-2">
                  <span className="text-xl">Depart date</span> :{" "}
                  {new Date(Package?.depart_date).toLocaleDateString()}
                </p>
                <p class="text-base font-bold leading-normal text-gray-600 dark:text-white mt-2">
                  <span className="text-xl">Price</span> : {Package.price} $
                </p>
                <p class="text-base font-bold leading-normal text-gray-600 dark:text-white mt-2">
                  <span className="text-xl">Trip duration</span> :{" "}
                  {Package.trip_duration} Days
                </p>
              </div>

              <p class="text-base leading-normal text-gray-600 dark:text-white mt-2">
                <span className="text-xl font-bold">Plan of trip : </span>
                {Package.description}
              </p>

              <p class="text-3xl font-medium text-gray-600 dark:text-white mt-8 md:mt-10"></p>
              <div class="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 ">
                <button class="w-full md:w-3/5 border border-orange-800 text-base font-medium leading-none text-white uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-orange-600 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
                  book it now
                </button>
                <button class="w-full md:w-2/5 border border-orange-600 text-base font-medium leading-none text-orange-600 dark:text-white uppercase py-6 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-transparent dark:border-white dark:text-white focus:ring-gray-800 hover:bg-gray-800 hover:text-white hover:bg-orange-600 ">
                  More packages
                </button>
              </div>
              {/* <div class="mt-6">
                <button class="text-xl underline text-gray-800 dark:text-white dark:hover:text-gray-200 capitalize hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                  add to wishlist
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
