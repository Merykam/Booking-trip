import React, { useEffect } from "react";
import logo from "../../public/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../redux/user";

const navbar = ({ to }) => {
  const dispatch = useDispatch();
  const getUserData = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  useEffect(() => {
    if (getUserData) console.log(getUserData[0]?.name);
  }, [getUserData]);

  return (
    <div>
      <nav class="pt-5">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="flex  items-center">
              <a href="/">
                <h1 className="logo">Wonderwave</h1>
              </a>
              {/* <img class="h-8 w-auto" src={logo} alt="Your Company" /> */}
            </div>
            <div class="flex  items-center    ">
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md "
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    class="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md "
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    class="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md "
                  >
                    Calendar
                  </a>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">View notifications</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>

              <div class="relative ml-3">
                {getUserData[0]?.name ? (
                  <div className="flex">
                    <button
                      type="button"
                      class="ml-5 relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <a
                        href=""
                        class="btn-auth font-bold rounded-md px-3 py-2 "
                        aria-current="page"
                      >
                        {getUserData[0]?.name}
                      </a>
                    </button>
                  </div>
                ) : (
                  <div className="flex">
                    <button
                      type="button"
                      class="ml-5 relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <a
                        href="/signup"
                        class="btn-auth font-bold rounded-md px-3 py-2 "
                        aria-current="page"
                      >
                        Sign up
                      </a>
                    </button>

                    <button
                      type="button"
                      class="ml-5 relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <a
                        href="/login"
                        class="btn-auth font-bold rounded-md px-3 py-2 "
                        aria-current="page"
                      >
                        Login
                      </a>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Team
            </a>
            <a
              href="#"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
