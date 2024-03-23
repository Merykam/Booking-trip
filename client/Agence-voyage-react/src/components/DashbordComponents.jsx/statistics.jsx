import React, { useEffect, useState } from "react";
import Dashboard from "../../pages/Dashboard";
import Table from "./table";
import axios from "axios";

const statistics = () => {
  const [count, setCount] = useState("");
  const [count1, setCount1] = useState("");
  const [count2, setCount2] = useState("");
  const [earning, setEarning] = useState("");

  const [display, setDisplay] = useState(false);

  const countBookings = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/booking/countBookings",
        { withCredentials: true }
      );
      console.log(response.data);
      setCount(response.data.countReservations);
    } catch (error) {
      console.error(error);
    }
  };
  const countUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/user/countUsers",
        { withCredentials: true }
      );
      console.log(response.data);
      setCount1(response.data.count);
    } catch (error) {
      console.error(error);
    }
  };
  const countPackages = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/package/countPackage",
        { withCredentials: true }
      );
      console.log(response.data);
      setCount2(response.data.count);
    } catch (error) {
      console.error(error);
    }
  };

  const TotalEarnings = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/booking/countPrice",
        { withCredentials: true }
      );
      console.log(response.data);
      setEarning(response.data.countPrice[0].totalPrice);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    countBookings();
    countUsers();
    countPackages();
    TotalEarnings();
  }, []);
  return (
    <div className="">
      <div class=" grid grid-cols-1 gap-8 p-10 mt-14 lg:grid-cols-2 xl:grid-cols-4">
        <div class="flex items-center shadow justify-between p-4 bg-white rounded-md dark:bg-darker">
          <div>
            <h6 class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light">
              Earnings
            </h6>
            <span class="text-xl font-semibold">{earning}</span>
            <span class="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
              +4.4%
            </span>
          </div>
          <div>
            <span>
              <svg
                class="w-12 h-12 text-sky-700 dark:text-primary-dark"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <div class="flex items-center shadow justify-between p-4 bg-white rounded-md dark:bg-darker">
          <div>
            <h6 class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light">
              Users
            </h6>
            <span class="text-xl font-semibold">{count1}</span>
            <span class="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
              +2.6%
            </span>
          </div>
          <div>
            <span>
              <svg
                class="w-12 h-12 text-sky-700 dark:text-primary-dark"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <div class="flex items-center shadow justify-between p-4 bg-white rounded-md dark:bg-darker">
          <div>
            <h6 class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light">
              Packages
            </h6>
            <span class="text-xl font-semibold">{count2}</span>
            <span class="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
              +3.1%
            </span>
          </div>
          <div>
            <span>
              <svg
                class="w-12 h-12 text-sky-700 dark:text-primary-dark"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <div class="flex items-center shadow justify-between p-4 bg-white rounded-md dark:bg-darker">
          <div>
            <h6 class="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase dark:text-primary-light">
              Tickets
            </h6>
            <span class="text-xl font-semibold">{count}</span>
            <span class="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
              +3.1%
            </span>
          </div>
          <div>
            <span>
              <svg
                class="w-12 h-12 text-sky-700 dark:text-primary-dark"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default statistics;
