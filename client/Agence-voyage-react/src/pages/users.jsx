import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import axios from "axios";
import { getUserInfo } from "../redux/user";
import { useDispatch, useSelector } from "react-redux";

const UsersPage = () => {
  const dispatch = useDispatch();
  const getUserData = useSelector((state) => state.user.userInfo);
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(true);
  console.log(users);
  const showUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/user/getAllUsers"
      );
      setUsers(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };


  const updateUserStatus = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/user/updateStatus/${id}`
      );
      setStatus(!status);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showUsers();
    console.log("ffff ");
  }, [status]);

  const updateStatus = (id) => {
    console.log(id);
    updateUserStatus(id);
  };

  return (
    <Layout>
      <div>
        <div class="p-6 px-0 ms-8">
          <table class="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                    Name
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      ></path>
                    </svg>
                  </p>
                </th>
                <th class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                    Email
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      ></path>
                    </svg>
                  </p>
                </th>
                <th class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                    CIN
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      ></path>
                    </svg>
                  </p>
                </th>
                <th class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                    Status{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      ></path>
                    </svg>
                  </p>
                </th>
                <th class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                    Inscription date
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      ></path>
                    </svg>
                  </p>
                </th>
                <th class="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p class="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                    Actions
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr>
                  <td class="p-4 border-b border-blue-gray-50">
                    <div class="flex items-center gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                        alt="John Michael"
                        className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"
                      />

                      <div class="flex flex-col">
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                          {user?.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <div class="flex items-center gap-3">
                      <div class="flex flex-col">
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <div class="flex flex-col">
                      <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                        JM75756
                      </p>
                      {/* <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                      Organization
                    </p> */}
                    </div>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <div class="w-max">
                      {user?.role == "1" ? (
                        <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-1 px-2 text-xs rounded-md">
                          <span class="">Admin</span>
                        </div>
                      ) : (
                        <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-sky text-sky-700 py-1 px-2 text-xs rounded-md">
                          <span class="">Visitor</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td class="p-4 border-b border-blue-gray-50">
                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      {/* {new Date(singlepackage?.depart_date).toLocaleDateString()} */}
                      15/03/2024
                    </p>
                  </td>

                  {getUserData[0]?.role == "2" ? <td class="p-4 border-b border-blue-gray-50">
                    <button
                      class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                      type="button"
                    >
                      <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <div
                          onClick={() => {
                            updateStatus(user._id);
                          }}
                          class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-600 py-2 px-2 text-xs rounded-md"
                        >
                          <span class="">Update status</span>
                        </div>
                      </span>
                    </button>
                  </td> : "" }
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default UsersPage;
