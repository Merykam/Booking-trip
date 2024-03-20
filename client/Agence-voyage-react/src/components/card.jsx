import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showPackages } from "../redux/package";
import { showPackageById } from "../redux/package";
import { Navigate, useNavigate } from "react-router-dom";

const card = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { value: allPackages, message } = useSelector((state) => state.package);
  console.log(allPackages);
  useEffect(() => {
    dispatch(showPackages());
  }, []);

  const filtredPackages = allPackages.filter(filter1);

  function filter1(package1) {
    return package1.status == "available";
  }

  const getPackageId = (id) => {
    navigate(`/PackageDetails/${id}`);
  };

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

    const cardBgTransform = {
      transform: `translateX(${(mouseX / width) * -40}px) translateY(${
        (mouseY / height) * -40
      }px)`,
    };

    // const cardBgImage = {
    //   backgroundImage: `url(${dataImage})`,
    //   backgroundSize: "cover",
    //   width: "300px",
    //   height: "400px",
    // };

    return (
      <div
        className="card-wrap"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={cardRef}
      >
        <div className="card max-w-screen-xl mx-auto mt-10" style={cardStyle}>
          {/* <div
            className="card-bg lg:w-full"
            // style={{ ...cardBgTransform, ...cardBgImage }}
          > */}
            <img
              src={img}
              alt="black chair with wooden legs"
              class="w-full h-full"
            />
          {/* </div> */}
          <div className="card-info">{children}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="mx-auto container grid justify-center items-center grid-cols-1 md:grid-cols-4 sm:grid-cols-2 "
        id="app"
      >
        {filtredPackages?.map((singlepackage) => (
          <Card
            img={`http://localhost:4000/uploads/${singlepackage.image}`}
          >
            <h1
              onClick={() => {
                getPackageId(singlepackage._id);
              }}
            >
              {" "}
              {singlepackage.destination.name}
            </h1>
            <p className="font-bold text-xl">{singlepackage.price} $</p>
          </Card>
        ))}
        {/* <Card dataImage="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
      <h1>Beaches</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Card>
    <Card dataImage="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
      <h1>Trees</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Card>
    <Card dataImage="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop=">
      <h1>Lakes</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Card>  */}
      </div>

      {/* <div>
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
    </div> */}
    </>
  );
};

export default card;
