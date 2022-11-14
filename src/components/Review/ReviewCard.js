import React, { useContext } from "react";
import { userContext } from "../../Context/AuthContext";

const ReviewCard = ({ reviewDetail , handleDelete }) => {
  // console.log(reviewDetail);
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
            Edit
            </button>
            <button onClick={()=>{handleDelete(_id)}} className="btn btn-ghost btn-xs  btn-outline btn-error">
              Delete
            </button>
           </th>
      </tr>
  



    // <table className="table w-3/5 mx-auto mb-1">
    //   <tbody className="border">
    //     <tr className="flex justify-between p-3">
    //       <td>

    //         <div className="flex items-center space-x-3">
    //           <div className="avatar">
    //             <div className="mask mask-squircle w-10 h-10">
    //               <img src={user.photoURL} alt="" />
    //             </div>
    //           </div>
    //           <div>
    //             <div className="font-bold">{reviewDetail?.customer}</div>
    //           </div>
    //         </div>
    //       </td>
    //       <td className="">
    //         <span className="badge badge-ghost badge-sm">
    //           {reviewDetail?.message}
    //         </span>
    //       </td>

    //       <th>
    //         <button className="btn btn-ghost btn-xs  btn-outline mr-2">
    //           Edit
    //         </button>
    //         <button onClick={()=>{handleDelete(_id)}} className="btn btn-ghost btn-xs  btn-outline btn-error">
    //           Delete
    //         </button>
    //       </th>
    //     </tr>
    //   </tbody>
    // </table>
  );
};

export default ReviewCard;
