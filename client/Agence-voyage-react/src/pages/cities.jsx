import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Model from "../components/DashbordComponents.jsx/model/model";
import axios from "axios";
import CityModel from '../components/DashbordComponents.jsx/cityModel'

const cities = () => {
  const [cities, setCities] = useState([]);
  const [display, setDisplay] = useState(false);

  const showCities = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/city/getAllCities",
        { withCredentials: true }
      );
      setCities(response.data.cities);
   
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showCities();
  }, [display]);


  return (
    <Layout>
      <div className="flex justify-between">
        <h1 className="ms-8 mt-8">
          <span className="text-slate-500 font-bold">Cities</span> / Table
        </h1>
        <div className="mt-8"><CityModel setDisplay={setDisplay} display={display}></CityModel></div>
      </div>


      <div class="p-6 px-0 ms-8">
        <table class="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  City
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    ></path>
                  </svg>
                </p>
              </th>
              <th class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Actions
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {cities.map((c) => (
              <tr>
                <td class="p-4 border-b border-blue-gray-50">
                  <div class="flex items-center gap-3">
                    <div class="flex flex-col">
                      <p class="block antialiased  text-sm leading-normal text-blue-gray-900 font-bold">
                        {c?.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  {" "}
                  <button className="bg-red-600 px-2 text-white rounded">
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default cities;
