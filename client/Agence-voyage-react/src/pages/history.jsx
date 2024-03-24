import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import TiketPdf from "./TicketPdf";
const History = () => {
  const [bookingHistory, setBookingHistory] = useState([]);
  const [Ticket, setTicket] = useState(false);
  const [bookings, setBooking] = useState([]);

  const showHistories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/booking/getUserBooking",
        { withCredentials: true }
      );
      setBookingHistory(response.data.Userbooking);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showHistories();
  }, []);

  console.log(bookingHistory[0]);

  const showBooking = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/booking/getBooking/${id}`
      );
      setBooking(response.data.booking);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showBooking();
  }, []);

  return (
    <div
      className="h-full w-full"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1L71sPT5XKc')`,
      }}
    >
      <Navbar />

      <div className="bg-white m-5 rounded-lg">
        {Ticket && (
          <div
            width={"100%"}
            className="absolute z-50 bg-white top-1/2 left-1/2 transform -translate-x-1/2 shadow-lg p-8 top-8 rounded-xl  items-center flex flex-col"
          >
            <button
              className="ms-auto w-max px-3 py-1 bg-green-700 text-white mb-2 "
              onClick={() => {
                setTicket(false);
              }}
            >
              close
            </button>
            <TiketPdf Ticket={bookings} />
          </div>
        )}
        {bookingHistory.map((h) => (
          <a
            href="#"
            key={h._id}
            className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
          >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-orange-300 via-blue-500 to-orange-600"></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {h?.package_id?.destination?.name}
                </h3>

                <p className="mt-1 text-xs font-medium text-gray-600">
                  By {h?.user_id?.name}
                </p>
              </div>

              <div className="hidden sm:block sm:shrink-0">
                <img
                  alt=""
                  src={`http://localhost:4000/uploads/${h?.package_id?.image}`}
                  className="size-24 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="mt-4">
                <p className="text-pretty text-sm text-gray-500">
                  {h?.package_id?.hotel?.name}
                </p>
              </div>

              <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col">
                  <dt className="text-sm font-medium text-gray-600">
                    Reservation date
                  </dt>
                  <dd className="text-xs text-gray-500">
                    {new Date(h?.reservation_date).toLocaleDateString()}
                  </dd>
                </div>

                <div className="flex flex-col">
                  <dt className="text-sm font-medium text-gray-600">
                    Depart date
                  </dt>
                  <dd className="text-xs text-gray-500">
                    {new Date(h?.package_id?.depart_date).toLocaleDateString()}
                  </dd>
                </div>

                <div className="flex flex-col">
                  <dt className="text-sm font-medium text-gray-600">
                    Total price
                  </dt>
                  <dd className="text-xs text-gray-500">{h?.total_price} $</dd>
                </div>
              </dl>

              <button
                className="font-bold"
                onClick={() => {
                  showBooking(h._id);
                  setTicket(true);
                }}
              >
                Print ticket
              </button>
            </div>
          </a>
        ))}
        {bookingHistory.length === 0 && (
          <div className="w-full flex justify-center py-8 font-semibold text-xl">
            <p>No history</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
