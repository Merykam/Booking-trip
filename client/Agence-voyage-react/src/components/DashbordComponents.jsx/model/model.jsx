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

export default function App() {
  const [formData, setFormData] = useState({
    destination: "",
    hotel: "",
    depart_date: "",
    trip_duration: "",
    number_of_seats: "",
    price: "",
    description: "",
    status: "",
    image: null, // Store the image file directly instead of filename
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
      // const formDataObj = new FormData();
      // for (const key in formData) {
      //   formDataObj.append(key, formData[key]);
      // }
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
                    <Input
                      name="trip_duration"
                      onChange={handleInputChange}
                      label="Duration"
                      placeholder="Enter duration"
                      type="text"
                      variant="bordered"
                    />
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
                    <Input
                      name="price"
                      onChange={handleInputChange}
                      label="Price"
                      placeholder="Enter price"
                      type="number"
                      variant="bordered"
                    />
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
                    <Input
                      name="status"
                      onChange={handleInputChange}
                      label="status"
                      placeholder="Enter description of trip"
                      type="text"
                      variant="bordered"
                    />
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
