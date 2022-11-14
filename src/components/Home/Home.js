import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const height = {
    height: "500px",
  };
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={"c1.jpg"} alt="" className="w-full h-96" style={height} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={"c2.jpg"} alt="" className="w-full" style={height} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={"c3.jpg"} alt="" className="w-full" style={height} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={"c4.jpg"} alt="" className="w-full" style={height} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-4xl text-center my-7 text-yellow-500">Upcoming Events</h1>

        <div className="grid grid-cols-3 gap-5 mt-10 w-4/5 mx-auto">

          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}

        </div>
        <div className="flex justify-center m-5">
          <button className="btn  btn-primary text center ">
            {" "}
            <Link to="/services">see All Events</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
