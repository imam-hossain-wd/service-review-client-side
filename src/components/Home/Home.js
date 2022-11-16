import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../../hooks/useTittle";
import PhotoGellery from "./photoGellery/PhotoGellery";
import Service from "./Service";





const Home = () => {
  const [services, setServices] = useState([]);
  useTitle('Home')

  useEffect(() => {
    fetch("https://service-review-server-xi.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const height = {
    height: "500px",
  };
  return (
    <div>
      
      <div >
        <img src={"c1.jpg"} className="w-full" style={{height:"400px"}} alt="" />

      </div>

      <div className="m-5 bg-black text-white sm:w-full lg:w-4/5 lg:mx-auto p-5 rounded">
        <h1 className="text-4xl lg:text-center font-bold ">Plan Your Travel with Best Tour Guide Now!</h1>
        <p className="lg:text-center text-xl mt-2">Experience the various exciting tour and travel with 5 year's of experinced Tour <br /> and Travel guide and management person.</p>
      </div>

      <div>
        <h1 className="text-4xl lg:text-center md:text-center my-7 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold lg:w-2/5 md:w-2/5 lg:mx-auto md:mx-auto p-5 rounded text-white hover:text-black"> Our Upcoming Events</h1>

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
