import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../Context/AuthContext";
import BookingRow from "./BookingRow";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Booking = () => {
  const { user, logOut } = useContext(userContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/booking/${id}`, {
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
            const remaining = bookings.filter((odr) => odr._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = id => {
    fetch(`http://localhost:5000/booking/${id}`, {
        method: 'PATCH', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'Approved'})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0) {
            const remaining = bookings.filter(bok => bok._id !== id);
            const approving = bookings.find(bok => bok._id === id);
            approving.status = 'Approved'

            const newBooking = [approving, ...remaining];
            setBookings(newBooking);
        }
    })
}

  return (
    <div>
      <h2 className="text-5xl">You have Bookings {bookings.length}</h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
