import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../Context/AuthContext';
import BookingRow from './BookingRow';

const Booking = () => {
    const {user, logOut}= useContext(userContext);
    const [bookings, setBookings] = useState([]);

    
    useEffect(()=>{
        fetch(`http://localhost:5000/bookings?email=${user.email}`)
        .then(res=> res.json())
        .then(data => setBookings(data))
    },[user?.email]);
    return (
        <div>
             <h2 className="text-5xl">You have Bookings {bookings.length}</h2>
       
       <div className="overflow-x-auto w-full">
           <table className="table w-full">
               <thead>
                   <tr>
                       <th>
                       </th>
                       <th>Name</th>
                       <th>Job</th>
                       <th>Favorite Color</th>
                       <th></th>
                   </tr>
               </thead>
               <tbody>
                   {/* {
                       bookings.map(order => <OrderRow
                           key={order._id}
                           order={order}
                           handleDelete={handleDelete}
                           handleStatusUpdate={handleStatusUpdate}
                       ></OrderRow>)
                   } */}

                   {
                    bookings.map(booking => <BookingRow
                    key={booking._id}
                    booking={booking}
                    ></BookingRow> )
                   }
               </tbody>
           </table>
       </div>
   </div>
       
    );
};

export default Booking;