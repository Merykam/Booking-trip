import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showPackages } from "../../redux/package";
import { useNavigate } from "react-router-dom";

const table = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const display = useSelector((state) => state.package.display);
  const { value: allPackages, message } = useSelector((state) => state.package);
  const [addPackage, setAddPackage] = useState(true);
  const [delete1, setDelete] = useState(true);

  const deletePackage1 = async (id) => {
    console.log(id);
    try {
      await axios.delete(
        `http://localhost:4000/api/package/deletePackage/${id}`,
        { withCredentials: true }
      );

      setDelete(!delete1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(showPackages());
  }, [display, delete1]);

  const getPackageId = (id) => {
    navigate("/dashboard/edit/" + id);
  };

  return (
    <div>
      <div class="p-6 px-0 ms-8">
        <table class="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Hotel
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
                  Destination{" "}
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
                  Duration{" "}
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
                  Status{" "}
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
                  Depart_date{" "}
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
            {allPackages?.map((singlepackage) => (
              <tr>
                <td class="p-4 border-b border-blue-gray-50">
                  <div class="flex items-center gap-3">
                    <div class="flex flex-col">
                      <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                        {singlepackage?.hotel.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <div class="flex items-center gap-3">
                    <img
                      src={`http://localhost:4000/uploads/${singlepackage.image}`}
                      alt="John Michael"
                      className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"
                    />

                    <div class="flex flex-col">
                      <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                        {singlepackage?.destination.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <div class="flex flex-col">
                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      {singlepackage?.trip_duration}
                    </p>
                    {/* <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                      Organization
                    </p> */}
                  </div>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <div class="w-max">
                    {singlepackage?.status == "available" ? (
                      <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md">
                        <span class="">{singlepackage?.status}</span>
                      </div>
                    ) : (
                      <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-700 py-1 px-2 text-xs rounded-md">
                        <span class="">{singlepackage?.status}</span>
                      </div>
                    )}
                  </div>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    {new Date(singlepackage?.depart_date).toLocaleDateString()}
                  </p>
                </td>
                <td class="p-4 border-b border-blue-gray-50">
                  <button
                    class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                    type="button"
                    onClick={() => {
                      getPackageId(singlepackage?._id);
                    }}
                  >
                    <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-4 w-4"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                      </svg>
                    </span>
                  </button>
                  <button
                    className="bg-red-600 px-2 text-white rounded"
                    onClick={() => {
                      deletePackage1(singlepackage?._id);
                    }}
                  >
                    delete
                  </button>
                  <a
                    href={`/dashboard/packageDetails/${singlepackage?._id}`}
                    className="bg-black-600 px-2 text-black rounded"
                  >
                    Details
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default table;
