import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";

const history = () => {
  const [history, setHistory] = useState("");

  const showHistories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/booking/getUserBooking",
        { withCredentials: true }
      );
      setHistory(response.data.Userbooking);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showHistories();
  }, []);
  console.log(history[0]);
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1L71sPT5XKc')`,
      }}
    >
      <Navbar />

      <div className="bg-white m-5 rounded-lg">
        {/* {!history && <div>Loading</div>} */}
        {history && history.length == 0 ? (
          <a
            href="#"
            class="flex justify-center items-center relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
          >
            <h1 className="font-bold text-3xl">No history</h1>
          </a>
        ) : history && history.length != 0 ? (
          <a
            href="#"
            class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
          >
            <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-orange-300 via-blue-500 to-orange-600"></span>

            <div class="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                  {history[0]?.package_id?.destination?.name}
                </h3>

                <p class="mt-1 text-xs font-medium text-gray-600">
                  By {history[0]?.user_id?.name}
                </p>
              </div>

              <div class="hidden sm:block sm:shrink-0">
                <img
                  alt=""
                  src={`http://localhost:4000/uploads/${history[0]?.package_id?.image}`}
                  class="size-24 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>

            <div class="mt-4">
              <p class="text-pretty text-sm text-gray-500">
                {history[0]?.package_id?.hotel?.name}
              </p>
            </div>

            <dl class="mt-6 flex gap-4 sm:gap-6">
              <div class="flex flex-col">
                <dt class="text-sm font-medium text-gray-600">
                  Reservation date
                </dt>
                <dd class="text-xs text-gray-500">
                  {" "}
                  {new Date(history[0]?.reservation_date).toLocaleDateString()}
                </dd>
              </div>

              <div class="flex flex-col">
                <dt class="text-sm font-medium text-gray-600">Depart date</dt>
                <dd class="text-xs text-gray-500">
                  {new Date(
                    history[0]?.package_id?.depart_date
                  ).toLocaleDateString()}
                </dd>
              </div>

              <div class="flex flex-col">
                <dt class="text-sm font-medium text-gray-600">Total price</dt>
                <dd class="text-xs text-gray-500">
                  {history[0]?.total_price} $
                </dd>
              </div>
            </dl>
          </a>
        ) : (
          <div className="w-full flex justify-center py-8 font-semibold text-xl">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default history;
