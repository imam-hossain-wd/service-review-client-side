import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../Context/AuthContext";
import BookingRow from "./BookingRow";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useTitle } from "../../hooks/useTittle";

const Booking = () => {
  const { user, logOut } = useContext(userContext);
  const [bookings, setBookings] = useState([]);
  useTitle('Booking')

  // console.log(user.email);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('Service-token')}`
      }
    })
      .then((res) => {
        if(res.status === 401 || res.status === 403){
          logOut()
        }
        return res.json()
      }) 
        
      .then((data) => setBookings(data));
  }, [user?.email, logOut]);
  

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
      <h2 className="text-3xl text-center m-3">You have Bookings {bookings.length}</h2>

      <div className="overflow-x-auto w-full mb-5">
        <table className="table sm:w-full md:w-full  lg:w-96 mx-auto" >
          <thead >
            <tr>
              <th></th>
              <th>Customer Details</th>
              <th>Place</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((bookingDetails) => (
              <BookingRow
                key={bookingDetails._id}
                bookingDetails={bookingDetails}
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
