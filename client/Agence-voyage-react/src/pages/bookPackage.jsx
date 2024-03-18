import React, { useEffect, useState } from "react";
import { getUserInfo } from "../redux/user";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { booking } from "../redux/booking";
import Navbar from "../components/navbar";

const bookPackage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("this is package id" + id);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [formData, setFormData] = useState({
    number_of_seats: "",
    packageId: id,
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(booking(formData));
    } catch (error) {
      console.log(error);
    }
  };
  const [error, setError]=useState("")

  const successReservation = useSelector((state) => state.booking.value);
  console.log(successReservation.message);

  useEffect(() => {
    if (successReservation.success == true) {
      console.log(successReservation.message._id);
      const id2 = successReservation.message._id;

      navigate(`/BookingSuccess/${id2}`);
    }else{
      setError(successReservation.message)
    }
    return;
  }, [successReservation, navigate]);

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1L71sPT5XKc')`,
      }}
    >
      <Navbar></Navbar>

      {error ? (
          <div className="flex justify-center items-center mb-0">
            <div
              className="m-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
            </div>
          </div>
        ) : (
          ""
        )}
      <div class="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">

      
        <div class="text-2xl py-4 px-6 bg-orange-600 text-white text-center font-bold uppercase">
          Book a Trip
        </div>
        <form class="py-4 px-6" onSubmit={handleFormSubmit}>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
              Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={userInfo[0].name}
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={userInfo[0].email}
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
              Number of Seats
            </label>
            <input
              onChange={handleInputChange}
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="number_of_seats"
              placeholder="Choose number of seats"
            />
          </div>

          <div class="flex items-center justify-center mb-4">
            <button
              class="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Book Trip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default bookPackage;
