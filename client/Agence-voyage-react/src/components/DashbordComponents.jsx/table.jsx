import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPackages } from "../../redux/package";

const table = () => {
  const dispatch = useDispatch();
  const allPackages = useSelector((state) => state.package.value);
  const showPackages = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/package/getAllPackages",
        { withCredentials: true }
      );
      dispatch(getPackages(response.data.packages));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showPackages();
  }, []);
  console.log(allPackages);
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
                    {singlepackage?.status == "available" ? 
                    <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md">
                      <span class="">{singlepackage?.status}</span>
                    </div> : <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-700 py-1 px-2 text-xs rounded-md">
                      <span class="">{singlepackage?.status}</span>
                    </div> 
                      }
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
                </td>
              </tr>
            ))}
            {/* <tr>
              <td class="p-4 border-b border-blue-gray-50">
                <div class="flex items-center gap-3">
                  <div class="flex flex-col">
                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      React Project
                    </p>
                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                      Start date: 10 Dec 2023
                    </p>
                  </div>
                </div>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <div class="flex items-center gap-3">
                  <img
                    src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                    alt="John Michael"
                    class="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"
                  />
                  <div class="flex flex-col">
                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      John Michael
                    </p>
                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                      john@creative-tim.com
                    </p>
                  </div>
                </div>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <div class="flex flex-col">
                  <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    Manager
                  </p>
                  <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                    Organization
                  </p>
                </div>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <div class="w-max">
                  <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md">
                    <span class="">Completed</span>
                  </div>
                </div>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                  23/04/18
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <button
                  class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                  type="button"
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
              </td>
            </tr> */}

            {/* <tr>
              <td class="p-4 border-b border-blue-gray-50">
                <div class="flex items-center gap-3">
                  <div class="flex flex-col">
                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      Astro Project
                    </p>
                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                      Start date: 10 Dec 2023
                    </p>
                  </div>
                </div>
              </td>
              <td class="p-4">
                <div class="flex items-center gap-3">
                  <img
                    src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg"
                    alt="Richard Gran"
                    class="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"
                  />
                  <div class="flex flex-col">
                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      Richard Gran
                    </p>
                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                      richard@creative-tim.com
                    </p>
                  </div>
                </div>
              </td>
              <td class="p-4">
                <div class="flex flex-col">
                  <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    Manager
                  </p>
                  <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                    Executive
                  </p>
                </div>
              </td>
              <td class="p-4">
                <div class="w-max">
                  <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-700 py-1 px-2 text-xs rounded-md">
                    <span class="">Pending</span>
                  </div>
                </div>
              </td>
              <td class="p-4">
                <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                  04/10/21
                </p>
              </td>
              <td class="p-4">
                <button
                  class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                  type="button"
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
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
      {/* <footer class="relative pt-8 pb-6 mt-16">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-6/12 px-4 mx-auto text-center">
        <div class="text-sm text-gray-500  py-1">
          Made with <a href="https://www.creative-tim.com/product/soft-ui-dashboard-tailwind" class="text-gray-900 hover:text-gray-800" target="_blank">Soft UI</a> by <a href="https://www.creative-tim.com" class="text-gray-900 hover:text-gray-800" target="_blank"> Creative Tim</a>.
        </div>
      </div>
    </div>
  </div>
</footer> */}
    </div>
  );
};

export default table;
