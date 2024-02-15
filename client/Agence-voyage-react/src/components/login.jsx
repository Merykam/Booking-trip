import React, { useState } from "react";

const Login = () => {
  return (
    <div className="">
      <div className="flex flex-col w-full mt-20 items-center justify-center   bg-no-repeat">
        <div className="rounded-xl bg-gray-800 bg-opacity-10 px-20 py-16 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <span className="font-bold texy-">Enter Login Details</span>
            </div>
            <form>
              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none  bg-opacity-50 px-6 py-2 text-center text-black placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="email"
                  placeholder="id@email.com"
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none  bg-opacity-50 px-6 py-2 text-center text-black placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="Password"
                  name="password"
                  placeholder="*********"
                />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-sky-900  px-10 py-2 text-white  transition-colors duration-300"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
