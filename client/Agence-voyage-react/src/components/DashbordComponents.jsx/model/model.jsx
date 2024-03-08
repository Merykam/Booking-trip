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
import axios from "axios";
import Joi from "joi";

export default function App() {
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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePackageData = async (e) => {
    e.preventDefault();
    try {
      const validationResult = schema.validate(formData, { abortEarly: false });
      if (validationResult.error) {
        const err = validationResult.error.details;
        setFormErrors(err[0].message);

        // const errors = {};
        // validationResult.error.details.forEach((detail) => {
        //   errors[detail.context.key] = detail.message;
        // });
        // setFormErrors(errors);
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
        }
      );
      console.log(response.data);
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
  console.log(allHotels);
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

  console.log(allCities);
  useEffect(() => {
    showCities();
  }, []);

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
                <ModalHeader className="flex flex-col gap-1">
                  Add package
                </ModalHeader>
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
                      type="text"
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
                    <Input
                      name="status"
                      onChange={handleInputChange}
                      label="status"
                      placeholder="Enter description of trip"
                      type="text"
                      variant="bordered"
                    />
                    {formErrors.status && (
                      <span className="text-red-500">{formErrors.status}</span>
                    )}
                    {/* <Select
                      name="status"
                      label="Select satus"
                      className=""
                      onChange={handleInputChange}
                    >
                      <SelectItem key="">available</SelectItem>
                      <SelectItem key="">saturated</SelectItem>
                    </Select> */}
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
