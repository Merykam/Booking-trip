import React, { useState } from "react";
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
import axios from "axios";

export default function App({setDisplay, display}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState({
    name: "",
   
  });
  const [success, setSuccess] = useState("");
 
  
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handledata = async (e) => {
    e.preventDefault();
  

    try {
      const response = await axios.post(
        "http://localhost:4000/api/city/addCity",
        formData
      );
      console.log(response.data);
      setSuccess(response.data.message);
      setDisplay(!display)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Add city
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
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
              <ModalHeader className="flex flex-col gap-1">
                Add city
              </ModalHeader>
            <form onSubmit={handledata}>
              <ModalBody>
                <Input
                  autoFocus
                  label="Email"
                  placeholder="Enter city name"
                  variant="bordered"
                  name="name"
                  onChange={handleInputChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button type="submit" color="primary" >
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
