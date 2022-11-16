import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
  const storedUser = useLoaderData();
  const [user, setUser] = useState(storedUser);
  console.log(user);
  // console.log(storedUser);

  const updateReviewHandler = (e) => {
    e.preventDefault();
    
    fetch(`https://service-review-server-xi.vercel.app/users/${storedUser._id}`, {
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data => {
      if (data.modifiedCount > 0){
          // alert('user updated')
          toast.success("User Updated successfully", {
            position: toast.POSITION.TOP_CENTER
          });
          

          console.log(data);
      }
      
  })
};

const handleInputChange = (event) =>{
  const field = event.target.name;
  const value = event.target.value;
  const newUser = {...user}
  newUser[field] = value;
  console.log(newUser);
  setUser(newUser);
}

  return (
    <form onSubmit={updateReviewHandler} className="mt-5 w-3/5 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <input
          onChange={handleInputChange}
          name="name"
          type="text"
          placeholder="FirstName"
          defaultValue={storedUser?.customer}
          className="input input-ghost w-full  input-bordered"
        />

        <input
          onChange={handleInputChange}
          name="email"
          type="text"
          placeholder="Your email"
          className="input input-ghost w-full  input-bordered"
          defaultValue={storedUser?.email}
        />
      </div>
      <textarea
        onChange={handleInputChange}
        name="message"
        className="textarea textarea-bordered h-24 w-full mt-3"
        placeholder="Your Message"
        required
        defaultValue={storedUser?.message}
      ></textarea>

      <div className="w-full">
        <input className="btn w-full" type="submit" value="Give Feedback" />
      </div>
    </form>
  );
};

export default Update;
