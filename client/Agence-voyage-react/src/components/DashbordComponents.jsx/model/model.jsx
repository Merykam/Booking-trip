import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { getHotels } from "../../../redux/Hotel.js";
import { getCities } from "../../../redux/city.js";
import {setDisplay} from '../../../redux/package.js'
import axios from "axios";
import Joi from "joi";

export default function App() {
  const [success, setSuccess] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const schema = Joi.object({
    destination: Joi.string().required(),
    hotel: Joi.string().required(),
    depart_date: Joi.date().iso().required(),
    trip_duration: Joi.string().required(),
    number_of_seats: Joi.number().integer().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    status: Joi.string().required(),
    image: Joi.any().required(),
  });
  const [formErrors, setFormErrors] = useState("");
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

  const display = useSelector((state) => state.package.display);
useEffect(()=>{console.log(display);},[display])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);

    setFormData({ ...formData, status: e.target.value });
    console.log(selectedStatus);
    console.log(e.target.value);
  };

  const handlePackageData = async (e) => {
    e.preventDefault();
    try {
      const validationResult = schema.validate(formData, { abortEarly: false });
      if (validationResult.error) {
        const err = validationResult.error.details;
        setFormErrors(err[0].message);
        return;
      }

      console.log(formData);
      const response = await axios.post(
        "http://localhost:4000/api/package/insertPackage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      dispatch(setDisplay(!display))


      setSuccess(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const allHotels = useSelector((state) => state.hotel.value);
  const allCities = useSelector((state) => state.city.value);

  const showHotels = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/hotel/getAllHotels",
        { withCredentials: true }
      );
      dispatch(getHotels(response.data.hotels));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showHotels();
  }, []);

  const showCities = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/city/getAllCities",
        { withCredentials: true }
      );
      dispatch(getCities(response.data.cities));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showCities();
  }, []);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Add package
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={handlePackageData} encType="multipart/form-data">
                <ModalHeader className="flex flex-col gap-1">
                  Add package
                </ModalHeader>

                {formErrors ? (
                  <div
                    className="m-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <span className="block sm:inline">{formErrors}</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
                  </div>
                ) : (
                  ""
                )}

                {success ? (
                  <div
                    className="m-5 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <span className="block sm:inline">{success}</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
                  </div>
                ) : (
                  ""
                )}
                <ModalBody>
                  <div className="flex gap-2">
                    <Select
                      name="destination"
                      label="Select city"
                      className=""
                      onChange={handleInputChange}
                    >
                      {allCities.map((city) => (
                        <SelectItem key={city.name} value={city.name}>
                          {city.name}
                        </SelectItem>
                      ))}
                    </Select>
                    {formErrors.destination && (
                      <span className="text-red-500">
                        {formErrors.destination}
                      </span>
                    )}

                    <Select
                      name="hotel"
                      label="Select Hotel"
                      className=""
                      onChange={handleInputChange}
                    >
                      {allHotels.map((hotel) => (
                        <SelectItem key={hotel.name} value={hotel.name}>
                          {hotel.name}
                        </SelectItem>
                      ))}
                    </Select>
                    {formErrors.hotel && (
                      <span className="text-red-500">{formErrors.hotel}</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      name="depart_date"
                      onChange={handleInputChange}
                      label="Depart Date"
                      placeholder="Enter date"
                      type="date"
                      variant="bordered"
                    />
                    {formErrors.depart_date && (
                      <span className="text-red-500">
                        {formErrors.depart_date}
                      </span>
                    )}
                    <Input
                      name="trip_duration"
                      onChange={handleInputChange}
                      label="Duration"
                      placeholder="Enter duration"
                      type="number"
                      variant="bordered"
                    />
                    {formErrors.trip_duration && (
                      <span className="text-red-500">
                        {formErrors.trip_duration}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      name="number_of_seats"
                      onChange={handleInputChange}
                      label="Seats"
                      placeholder="Enter number of seats"
                      type="number"
                      variant="bordered"
                    />
                    {formErrors.number_of_seats && (
                      <span className="text-red-500">
                        {formErrors.number_of_seats}
                      </span>
                    )}
                    <Input
                      name="price"
                      onChange={handleInputChange}
                      label="Price"
                      placeholder="Enter price"
                      type="number"
                      variant="bordered"
                    />
                    {formErrors.price && (
                      <span className="text-red-500">{formErrors.price}</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      name="description"
                      onChange={handleInputChange}
                      label="Description"
                      placeholder="Enter description of trip"
                      type="text"
                      variant="bordered"
                    />
                    {formErrors.description && (
                      <span className="text-red-500">
                        {formErrors.description}
                      </span>
                    )}
                    {/* <Input
                      name="status"
                      onChange={handleInputChange}
                      label="status"
                      placeholder="Enter description of trip"
                      type="text"
                      variant="bordered"
                    /> */}

                    <select
                      name="status"
                      label="Select status"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      value={selectedStatus}
                      onChange={handleStatusChange}
                    >
                      <option value="available">Available</option>
                      <option value="saturated">Saturated</option>
                    </select>

                    {formErrors.status && (
                      <span className="text-red-500">{formErrors.status}</span>
                    )}
                  </div>

                  <Input
                    onChange={handleImageChange}
                    name="image"
                    label=""
                    placeholder="Select image"
                    type="file"
                    variant="bordered"
                  />
                  {formErrors.image && (
                    <span className="text-red-500">{formErrors.image}</span>
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button type="submit" color="primary">
                    Add
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
