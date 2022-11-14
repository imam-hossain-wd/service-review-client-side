import React from "react";
import { FaBook, FaClock, FaStar, FaUser } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import ServiceReview from "./ServiceReview";
import ServiceReviewCart from "./ServiceReviewCart";

const ServiceDetails = ({ service }) => {
  const data = useLoaderData();

  const { date, details, img, name, price, rating, title, _id } = data;

  return (
    <div className="grid grid-cols-2">
      
      <div className="w-full">
        <ServiceReviewCart />

        <ServiceReview />
      </div>

      <div className="w-3/5 mx-auto">
        <div className="bg-black p-5 text-white rounded">
          <h1 className="text-xl font-bold text-center">
            {" "}
            {name} is one of the most beautiful place{" "}
          </h1>
        </div>

        <div>
          <img className="w-3/5 mx-auto  h-full mt-2 h-60" src={img} alt="" />

          <div className="">
            <h2 className="text-2xl m-3">{name}</h2>
          </div>
          <div className="flex justify-between w-2/3">
            <div className="flex items-center">
              <FaBook></FaBook> <p className="ml-2">{price}</p>
            </div>
            <div className="flex items-center">
              <FaUser></FaUser> <p className="ml-2">{_id}</p>
            </div>
            <div className="flex items-center">
              <FaClock></FaClock> <p className="ml-2">{date}</p>
            </div>

            <div className="flex items-center">
              <div className="flex  text-amber-400">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
              </div>
              <p className="ml-2"> {rating}</p>
            </div>
          </div>

          <p className="mt-3">{details}</p>

          <div className="mt-5">
            <h1 className="text-3xl bg-black w-48 p-5 rounded text-white">
              Price: {price}
            </h1>
          </div>

          <button className="px-5 rounded bg-black text-white  mt-3 py-3">
            {" "}
            <Link to={`/checkout/${_id}`}>Booking Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
