import React, { useEffect, useState } from "react";
import LandingPage from "../pages/LandingPage";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { handleSignin, setFormData } from "../redux/user";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const userData = useSelector((state) => state.user.value);
  const errorMessage = useSelector((state) => state.user.errorMessage);

  useEffect(() => {
    if (userData) {
      userData.role === "2" ||   userData.role === "1" 
        ? navigate("/dashboard")
        : userData.role === "0"
        ? navigate("/")
        : "";
    }
  }, [userData, navigate]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(handleSignin(formData));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <LandingPage>
      <div className="">
        {errorMessage ? (
          <div className="flex justify-center items-center mb-0">
            <div
              className="m-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{errorMessage}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="flex flex-col w-full mt-20 items-center justify-center   bg-no-repeat">
          <div className="rounded-xl bg-gray-800 bg-opacity-10 px-20 py-16 shadow-lg backdrop-blur-md max-sm:px-8">
            <div className="text-white">
              <div className="mb-8 flex flex-col items-center">
                <span className="font-bold texy-">Enter Login Details</span>
              </div>
              <form onSubmit={(e) => handleFormSubmit(e)}>
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
                <div className="mt-8 flex justify-center text-lg text-white auth">
                  <button
                    type="submit"
                    className="auth bg-orange-600 rounded-3xl px-10 py-2 text-white  transition-colors duration-300"
                  >
                    Login
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

export default Login;
