import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showPackages } from "../redux/package";

const card = () => {
  const dispatch = useDispatch();
  const { value: allPackages, message } = useSelector((state) => state.package);
  useEffect(() => {
    dispatch(showPackages());
  }, []);
  // console.log(allPackages);
  return (
    <div>
      <div class="max-w-screen-xl mx-auto  sm:p-10 md:p-16">
        <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {allPackages?.map((singlepackage) => (
            <div class="relative">
              <a href="#">
                <img
                  class="w-full h-80"
                  src={`http://localhost:4000/uploads/${singlepackage.image}`}
                  alt="Sunset in the mountains"
                />
                <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div class="font-bold absolute bottom-0 left-0 bg-time px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  {singlepackage.destination.name}
                </div>
              </a>

              <a href="!#">
                <div class="text-sm absolute top-0 right-0 bg-time px-4 text-white rounded-full h-12 w-12 flex  items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  <span class="font-bold">{singlepackage.price}</span>
                  <small className="font-bold text-xs">$</small>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default card;
