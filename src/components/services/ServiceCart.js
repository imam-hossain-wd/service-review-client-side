import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCart = ({ service }) => {
  const { _id, img, price, name, title, date, details, rating } = service;
  return (
    <div className="card card-compact w-80 rounded bg-base-100 shadow-xl">
      <div>
        <img src={img} alt="Shoes" className="h-48 w-full rounded" />
      </div>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {/* <p>{details}</p> */}
        <div className="flex items-center justify-between">
          <div className="w-24">
            <div className="flex justify-between items-center">
              <div className="flex text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div> {rating}</div>
            </div>
          </div>
          <p className="text-xl text-orange-600 font-semibold ml-16">
            Price: {price}
          </p>
        </div>
        <p>{date}</p>

        <div className="flex justify-between">
          <div className="card-actions justify-end">
            <Link to={`/services/${_id}`}>
              <button className="btn btn-primary">See details</button>
            </Link>
          </div>

          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-primary">Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
