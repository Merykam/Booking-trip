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
            {/* Add responsive navigation items here */}
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
