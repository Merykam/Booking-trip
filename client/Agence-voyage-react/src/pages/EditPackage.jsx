import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useSelector, useDispatch } from "react-redux";
import { showPackageById } from "../redux/package";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdatePackage = () => {
  const { id } = useParams();
  const [cities, setCities] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedHotel, setSelectedHotel] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    destination: "",
    hotel: "",
    depart_date: "",
    trip_duration: "",
    number_of_seats: "",
    price: "",
    description: "",
    status: "",
    image: null,
  });


  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);

    setFormData({ ...formData, status: e.target.value });
  };

  const [error, setError] = useState("");

  const showCities = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/city/getAllCities",
        { withCredentials: true }
      );
      setCities(response.data.cities);
    } catch (error) {
      console.error(error);
    }
  };

  const showHotels = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/hotel/getAllHotels",
        { withCredentials: true }
      );
      setHotels(response.data.hotels);
    } catch (error) {
      console.error(error);
    }
  };

  const dispatch = useDispatch();
  const { singlePackage: Package } = useSelector((state) => state.package);
  const [selectedStatus, setSelectedStatus] = useState(Package?.status);

  useEffect(() => {
    showCities();
    showHotels();
    dispatch(showPackageById(id));
  }, []);

  useEffect(() => {
    if (Package) {
      setSelectedCity(Package?.destination?.name || "");
      setSelectedHotel(Package?.hotel?.name || "");
      setSelectedImage(Package?.image || null);
      setFormData({
        destination: Package?.destination?.name || "",
        hotel: Package?.hotel?.name || "",
        depart_date: Package?.depart_date || "",
        trip_duration: Package?.trip_duration || "",
        number_of_seats: Package?.number_of_seats || "",
        price: Package?.price || "",
        description: Package?.description || "",
        status: Package?.status || "",
        image: null,
      });
    }
  }, [Package]);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setFormData({ ...formData, destination: e.target.value });
  };

  const handleHotelChange = (e) => {
    setSelectedHotel(e.target.value);
    setFormData({ ...formData, hotel: e.target.value });
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
    console.log("e.target.files[0] :" + e);
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const updateData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:4000/api/package/updatePackage/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      console.log("Update successful:", response.data);
      setSuccess(response.data.message);
    } catch (error) {
      setError(error.response.data.error);
      console.log("Update error:", error.message);
    }
  };
  return (
    <Layout>
      <div className="bg-white border border-4 rounded-lg shadow relative m-10">
        {success && (
          <div className="flex justify-center items-center mb-4">
            <div
              className="w-60 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{success}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
            </div>
          </div>
        )}

        {error ? (
          <div
            className="m-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
          </div>
        ) : (
          ""
        )}
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Edit package</h3>
        </div>

        <div className="p-6 space-y-6">
          <form onSubmit={updateData}>
            <div className="grid grid-cols-6 gap-6">
              {/* City select dropdown */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="city-select"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  City Name
                </label>
                <select
                  id="city-select"
                  name="destination"
                  value={selectedCity}
                  onChange={handleCityChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required
                >
                  {cities.map((city) => (
                    <option key={city?.id} value={city?.name}>
                      {city?.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* Hotel select dropdown */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="hotel-select"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Hotel Name
                </label>
                <select
                  id="hotel-select"
                  name="hotel"
                  value={selectedHotel}
                  onChange={handleHotelChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required
                >
                  {hotels.map((hotel) => (
                    <option key={hotel?.id} value={hotel?.name}>
                      {hotel?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="brand"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  Depart date
                </label>
                <input
                  type="text"
                  name="depart_date"
                  defaultValue={Package?.depart_date}
                  onChange={handleInputChange}
                  id="brand"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Apple"
                  required
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="price"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={Package?.price}
                  onChange={handleInputChange}
                  id="price"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="$2300"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="price"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  Trip duration
                </label>
                <input
                  type="number"
                  name="trip_duration"
                  defaultValue={Package?.trip_duration}
                  onChange={handleInputChange}
                  id="price"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="$2300"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="price"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  Number seats
                </label>
                <input
                  type="number"
                  name="number_of_seats"
                  defaultValue={Package?.number_of_seats}
                  onChange={handleInputChange}
                  id="price"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="$2300"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="price"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  status
                </label>
                {/* <input
                  type="text"
                  name="status"
                  defaultValue={Package?.status}
                  onChange={handleInputChange}
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="$2300"
                  required=""
                /> */}

                <select
                  name="status"
                  label="Select status"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  defaultValue={selectedStatus}
                  onChange={handleStatusChange}
                >
                  <option value="available">Available</option>
                  <option value="saturated">Saturated</option>
                </select>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="product-details"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  defaultValue={Package?.description}
                  onChange={handleInputChange}
                  id="price"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="$2300"
                  required=""
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="image-input"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  id="image-input"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <div className="flex items-center space-x-4">
                  <label
                    htmlFor="image-input"
                    className="cursor-pointer text-cyan-600 hover:text-cyan-800"
                  >
                    Select Image
                  </label>
                  {selectedImage && (
                    <span className="text-gray-500">
                      Selected: {selectedImage.name}
                    </span>
                  )}
                </div>
                {selectedImage && (
                  <img
                    src={`http://localhost:4000/uploads/${selectedImage}`}
                    alt="Selected Image"
                    className="mt-2 h-40 object-cover"
                  />
                )}
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 rounded-b">
              <button
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="submit"
              >
                Save all
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default UpdatePackage;
