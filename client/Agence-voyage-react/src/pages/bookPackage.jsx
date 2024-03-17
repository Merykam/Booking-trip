import React, { useEffect, useState } from "react";
import { getUserInfo } from "../redux/user";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { booking } from "../redux/booking";

const bookPackage = () => {
    const navigate = useNavigate()
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


  const successReservation = useSelector((state) => state.booking.value);
  console.log(successReservation.message);


  useEffect(() => {
    if (successReservation.message) {
        console.log(successReservation.message._id);
        const id2 = successReservation.message._id
   
        navigate(`/BookingSuccess/${id2}`)
      
    }
    return
  }, [successReservation, navigate]);

  return (
    <div>
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
