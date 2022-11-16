import React from "react";
import { FaClock, FaRegMoneyBillAlt, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { useTitle } from "../../hooks/useTittle";
import ServiceReview from "./ServiceReview";
import ServiceReviewCart from "./ServiceReviewCart";

const ServiceDetails = ({ service }) => {
  useTitle("ServiceDetails");
  const data = useLoaderData();

  const { date, details, img, name, price, rating, title, _id } = data;

  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-10">
      <div className="m-5">
        <ServiceReview />
      </div>

      <div className="mx-auto m-5 text-white" style={{backgroundColor:'#111827'}} >
        <div className="bg-black p-5 text-white rounded mb-5">
          <h1 className="text-xl font-bold text-center">
            {" "}
            {name} is one of the most beautiful place{" "}
          </h1>
        </div>

        <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={img}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="">
            <h2 className="text-2xl m-3 font-bold text-center">{name}</h2>
          </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaRegMoneyBillAlt></FaRegMoneyBillAlt>{" "}
                  <p className="ml-2">{price}</p>
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
            </div>

            <p className="mt-3">{details}</p>

         <div className="flex justify-between">
         <div className="mt-5">
            <h1 className="text-xl bg-black w-48 p-5 rounded text-white">
              Price: {price}
            </h1>
          </div>

          <button className="px-5 rounded bg-black text-white  mt-3 py-3 text-xl">
            {" "}
            <Link to={`/checkout/${_id}`}>Booking Now</Link>
          </button>
         </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ServiceDetails;
