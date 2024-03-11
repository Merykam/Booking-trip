import React, { useState } from "react";
import axios from "axios";
import LandingPage from "../pages/LandingPage";

const signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [success, setSuccess] = useState("");
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/signup",
        formData
      );
      console.log(response.data);
      setSuccess(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <LandingPage>
      {success ? (
        <div className="flex justify-center items-center mb-0">
          <div
            className="w-60 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">{success}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="">
        <div className="flex flex-col w-full mt-20 items-center justify-center   bg-no-repeat">
          <div className="rounded-xl bg-gray-800 bg-opacity-10 px-20 py-16 shadow-lg backdrop-blur-md max-sm:px-8">
            <div className="text-white">
              <div className="mb-8 flex flex-col items-center">
                <span className="font-bold texy-">Register</span>
              </div>
              <form onSubmit={handleSignup}>
                <div className="mb-4 text-lg">
                  <input
                    onChange={handleInputChange}
                    className="rounded-3xl border-none  bg-opacity-50 px-6 py-2 text-center text-black placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                    type="text"
                    name="name"
                    placeholder="User name"
                  />
                </div>
                <div className="mb-4 text-lg">
                  <input
                    onChange={handleInputChange}
                    className="rounded-3xl border-none  bg-opacity-50 px-6 py-2 text-center text-black placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                    type="text"
                    name="email"
                    placeholder="id@email.com"
                  />
                </div>

                <div className="mb-4 text-lg">
                  <input
                    onChange={handleInputChange}
                    className="rounded-3xl border-none  bg-opacity-50 px-6 py-2 text-center text-black placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                    type="Password"
                    name="password"
                    placeholder="*********"
                  />
                </div>
                <div className="mt-8 flex justify-center text-lg">
                  <button
                    type="submit"
                    className="rounded-3xl bg-orange-600 auth px-10 py-2 text-white  transition-colors duration-300"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </LandingPage>
  );
};

export default signup;
