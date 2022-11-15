import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../Context/AuthContext";
import ReviewCard from "./ReviewCard";
import { toast } from "react-toastify";
import { useTitle } from "../../hooks/useTittle";

const Review = () => {
  useTitle('Review')
  const { user } = useContext(userContext);
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [user?.email]);

  //delete a review
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
            const remaining = review.filter((odr) => odr._id !== id);
            setReview(remaining);
          }
        });
    }
  };

  return (
    <div >
      <h1 className="text-center m-3 text-3xl font-bold">
        Total Activity : {review.length}
      </h1>
      <div className="overflow-x-auto w-full mx-auto ">
        <table className="table sm:w-full md:w-full  lg:w-96 mx-auto ">
          <thead>
            <tr>
              <th>Service Information</th>
              <th>Review</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {review.map((reviewDetail) => (
              <ReviewCard
                key={reviewDetail._id}
                reviewDetail={reviewDetail}
                handleDelete={handleDelete}
              ></ReviewCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Review;
