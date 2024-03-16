import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import axios from "axios";

const Reservations = () => {
  const [bookings, setBookings] = useState([]);
  //   const [status, setStatus] = useState(true);
  //   console.log(users);
  console.log(bookings);
  const showBookings = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/booking/getAllBookings"
      );
      setBookings(response.data.bookings);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showBookings();
  }, []);

  return (
    <Layout>
      <div>
        <div class="p-6 px-0 ms-8">
          <table class="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                    Client Name
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
                    Client Email
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
                    Client number
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
                    reservation_date
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
                    Seats_reserved
                  </p>
                </th>
                <th class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                    Total_price
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking) => (
                <tr>
                  <td class="p-4 border-b border-blue-gray-50">
                    <div class="flex items-center gap-3">
                      {/* <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                        alt="John Michael"
                        className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"
                      /> */}

                      <div class="flex flex-col">
                        <p class="font-bold block antialiased  text-sm leading-normal text-blue-gray-900 ">
                          {booking?.user_id.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <div class="flex items-center gap-3">
                      <div class="flex flex-col">
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                          {booking?.user_id.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <div class="flex flex-col">
                      <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                        0603456598
                      </p>
                      {/* <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                      Organization
                    </p> */}
                    </div>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <div class="w-max">
                      <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-orange-100 text-orange-700 py-1 px-2 text-xs rounded-md">
                        <span class="">
                          {booking?.package_id.destination.name}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      {new Date(booking?.reservation_date).toLocaleDateString()}
                    </p>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <button
                      class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                      type="button"
                    >
                      <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none  text-black py-2 px-2 text-md rounded-md">
                          <span class="">
                            {" "}
                            {booking?.number_of_seats_reserved}
                          </span>
                        </div>
                      </span>
                    </button>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <button
                      class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                      type="button"
                    >
                      <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <div
                          //   onClick={() => {
                          //     updateStatus(user._id);
                          //   }}
                          class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-sky-500/20 text-sky-600 py-2 px-2 text-xs rounded-md"
                        >
                          <span class="">{booking.total_price} $</span>
                        </div>
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Reservations;
