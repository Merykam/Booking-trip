import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showPackages } from "../redux/package";
import { Navigate, useNavigate } from "react-router-dom";

const Card = ({ img, children }) => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = React.useState(null);
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    setWidth(cardRef.current.offsetWidth);
    setHeight(cardRef.current.offsetHeight);
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    setMouseX(offsetX - width / 2);
    setMouseY(offsetY - height / 2);
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  const handleMouseLeave = () => {
    const delay = setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);
    setMouseLeaveDelay(delay);
  };

  const cardStyle = {
    transform: `rotateY(${(mouseX / width) * 30}deg) rotateX(${
      (-mouseY / height) * 30
    }deg)`,
  };

  return (
    <div
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div className="card max-w-full mx-auto mt-10" style={cardStyle}>
        <img src={img} alt="black chair with wooden legs" className="w-full h-full" />
        <div className="card-info">{children}</div>
      </div>
    </div>
  );
};

const MyComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { value: allPackages, message } = useSelector((state) => state.package);

  useEffect(() => {
    dispatch(showPackages());
  }, []);

  const filteredPackages = allPackages.filter((package1) => package1.status === "available");

  const getPackageId = (id) => {
    navigate(`/PackageDetails/${id}`);
  };

  return (
    <div className="mx-auto container grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredPackages?.map((singlepackage) => (
        <div key={singlepackage._id}>
          <Card img={`http://localhost:4000/uploads/${singlepackage.image}`}>
            <h1
              onClick={() => {
                getPackageId(singlepackage._id);
              }}
              className="cursor-pointer"
            >
              {singlepackage.destination.name}
            </h1>
            <p className="font-bold text-xl">{singlepackage.price} $</p>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
