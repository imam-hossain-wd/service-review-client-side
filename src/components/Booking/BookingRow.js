import React, {  useEffect, useState } from "react";


const BookingRow = ({ bookingDetails, handleDelete , handleStatusUpdate }) => {
  const {
    customer,
    email,
    phone,
    _id,
    message,
    price,
    bookingId,
    bookingName,
    status
  } = bookingDetails;
  

  console.log(bookingDetails);

  const [bookingService, setBookingService] = useState({});


  useEffect(() => {
    if(!bookingDetails?.bookingId) return
 
      fetch(`https://service-review-server-xi.vercel.app/service/${bookingId}`)
          .then(res => res.json())
          .then(data => setBookingService(data));
  }, [bookingId])

  return (
    <tr>
      <th>
        <label>
          <button onClick={()=>handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded-full w-14 h-14">
              {bookingService?.img && (
                <img
                  src={bookingService.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {bookingName}

        <br />
        <span className="badge badge-ghost badge-sm">{price}</span>
      </td>

      <td>
        <p>{email}</p>
      </td>
      
      <th>
                <button 
                onClick={() => handleStatusUpdate(_id)}
                className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
    </tr>
  );
};

export default BookingRow;
