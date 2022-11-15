import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { userContext } from "../../Context/AuthContext";

const ServiceReviewCart = ({ review, handleDelete }) => {
  const { user } = useContext(userContext);

  // const {_id} = review;
  const id = review?._id;
  const customer = review?.customer;
  const message = review?.message;
  
//  const photo = user?.photoURL || <FaUser/>
console.log(review);
// console.log(_id);

 

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full mb-1">
          <tbody className="border">
            <tr className="flex justify-between p-3">
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <img src={user?.photoURL || <FaUser/> } alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{customer}</div>
                  </div>
                </div>
              </td>
              <td className="">
                <span className="badge badge-ghost badge-sm">{message}</span>
              </td>

              <th>
               
               {/* <button className="btn btn-ghost btn-xs  btn-outline mr-2">
                  Edit
                </button> */}
            <button className="btn btn-ghost btn-xs  btn-outline mr-2">
             <Link to={`/update/${id}`}>Edit</Link>
            </button>
              
                <button
                  onClick={() => handleDelete(id)}
                  className="btn btn-ghost btn-xs  btn-outline btn-error"
                >
                  Delete
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceReviewCart;
