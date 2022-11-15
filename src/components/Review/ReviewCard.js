import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../Context/AuthContext";

const ReviewCard = ({ reviewDetail , handleDelete }) => {
  const {_id, email, customer,message,price, place, photo,date}= reviewDetail;
  console.log(reviewDetail);
  
  const { user } = useContext(userContext);
  
  return (
      <tr className="w-full">
        <td>
          <div className="">
            <p className="text-xl font-bold mb-2">{place}</p>
            <div className="avatar">
              <div className=" w-28 h-24 rounded">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
              <div className="text-xl font-bold">{price} Tk</div>
          </div>
        </td>

        <td>
          
          <span className="badge badge-ghost font-bold">{message}</span>
        </td>
        <td>{date}</td>

        <th>
           
           <button className="btn btn-ghost btn-xs  btn-outline mr-2">
             <Link to={`/update/${_id}`}>Edit</Link>
            </button>
           
            <button onClick={()=>{handleDelete(_id)}} className="btn btn-ghost btn-xs  btn-outline btn-error">
              Delete
            </button>
           </th>
      </tr>

  );
};

export default ReviewCard;
