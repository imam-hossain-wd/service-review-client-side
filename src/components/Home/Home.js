import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../../hooks/useTittle";
import PhotoGellery from "./photoGellery/PhotoGellery";
import Service from "./Service";




const Home = () => {
  const [services, setServices] = useState([]);
  useTitle('Home')

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
      <div className="m-5 bg-black text-white w-4/5 mx-auto p-5 rounded">
        <h1 className="text-4xl lg:text-center font-bold ">Plan Your Travel with Best Tour Guide Now!</h1>
        <p className="text-center text-xl mt-2">Experience the various exciting tour and travel with 5 year's of experinced Tour <br /> and Travel guide and management person.</p>
      </div>

      <div>
        <h1 className="text-4xl text-center my-7 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold w-2/5 mx-auto p-5 rounded text-white hover:text-black"> Our Upcoming Events</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-4/5 mx-auto">

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

      <PhotoGellery/>
    </div>
  );
};

export default Home;
