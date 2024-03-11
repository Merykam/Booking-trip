import React, { useState } from "react";
import LandingPage from "../pages/LandingPage";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSignin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(
            "http://localhost:4000/api/auth/signin",
            formData,
            { withCredentials: true }
        );
        const userData = response.data;
        console.log(userData);
        if (userData.data.role == '1') {
            navigate('/dashboard');
        } else {
            navigate('/');
        }
    } catch (error) {
        console.error(error);
    }
};
return (
  <LandingPage>
  <div className="">
    <div className="flex flex-col w-full mt-20 items-center justify-center   bg-no-repeat">
      <div className="rounded-xl bg-gray-800 bg-opacity-10 px-20 py-16 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <span className="font-bold texy-">Enter Login Details</span>
          </div>
          <form onSubmit={handleSignin}>
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

}

export default Login;
