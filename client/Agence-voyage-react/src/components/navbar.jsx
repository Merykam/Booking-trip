import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../redux/user";
import { Link } from "react-router-dom";

const Navbar = ({ to }) => {
  const dispatch = useDispatch();
  const getUserData = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  useEffect(() => {
    if (getUserData) console.log(getUserData[0]?.name);
  }, [getUserData]);

  return (
    <nav className="pt-5 relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <h1 className=" text-3xl font-bold logo ">Wonderwave</h1>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {getUserData[0]?.role == "1" ? (
              <a
                href="/Dashboard"
                class="relative text-white bg-color-btn rounded  flex flex-row items-center h-8 focus:outline-none hover:bg-gray-50 text-white border-l-4 border-transparent hover:text-black hover:border-indigo-500 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  Dashboard
                </span>
              </a>
            ) : (
              ""
            )}

            {getUserData[0]?.name ? (
              <Link
                to="/profile"
                className="text-white bg-color-btn  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {getUserData[0]?.name}
              </Link>
            ) : (
              <>
                <Link
                  to="/signup"
                  class="bg-color-btn text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Sign up
                </Link>
                <Link
                  to="/login"
                  class="bg-color-btn text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
