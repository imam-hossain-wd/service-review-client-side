import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userContext } from "../../Context/AuthContext";
import ServiceReviewCart from "./ServiceReviewCart";

const ServiceReview = () => {
  const [userRivew, setUSerReview] = useState([]);
  const { user } = useContext(userContext);
  const data = useLoaderData();
  const { date, details, img, name, price, rating, title, _id } = data;

  // const photo = data.img;
  // const price = data.price;
  // const place = data.name;

  // console.log(photo);


  //review handler

  const reviewHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const comment = {
      price,
      customer: name,
      email,
      message,
      photo : img,
      place : data.name,
      rating,
      date,
    
    };

    
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('Service-token')}` 
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data.acknowledged) {
          // setUSerReview(data)
          toast.success("Give feedback successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

//get reviews

useEffect(()=>{
  fetch("http://localhost:5000/users")
  .then((res) => res.json())
  .then((data) => setUSerReview(data));
}, [userRivew]);

// delete handler 

const handleDelete = (id) => {
  const proceed = window.confirm(
    "Are you sure, you want to cancel this order"
  );
  if (proceed) {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("service-booking")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("deleted successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
          const remaining = userRivew.filter((rvw) => rvw._id !== id);
          setUSerReview(remaining);
        }
      });
  }
};
  return (
    <div>
      <div className='text-3xl font-bold mb-3'>This service has : {userRivew.length} review</div>
      <div className="mb-3">

        {
          userRivew.map(review=>  <ServiceReviewCart
            key={review._id}
            review={review} 
            handleDelete={handleDelete}       
            ></ServiceReviewCart>)
        }
      </div>

      <form onSubmit={reviewHandler} className="mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="name"
            type="text"
            placeholder="FirstName"
            className="input input-ghost w-full  input-bordered"
          />
          <input
            name="email"
            type="text"
            placeholder="Your email"
            className="input input-ghost w-full  input-bordered"
            defaultValue={user?.email}
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full mt-3"
          placeholder="Your Message"
          required
        ></textarea>

        <div className="w-full">
          <input
            
            className="btn w-full"
            type="submit"
            value="Give Feedback"
          />
        </div>
      </form>
    </div>
  );
};

export default ServiceReview;
