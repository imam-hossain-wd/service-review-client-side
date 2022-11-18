import React from "react";
import { useTitle } from "../../../hooks/useTittle";


const AddService = () => {
  useTitle('AddService')
    // const [addService, setAddService] = useState([])
  const addServiceHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.name.value;
    const details = form.details.value;
    const price = form.price.value;
    const review = form.review.value;
    const img = form.photoURL.value;
    const rating = form.rating.value;
    const date = form.date.value;
    const insertTime = new Date().getTime();
    // form.reset();
    const addPackze = {title , details, price , review , img,rating, date, insertTime}

    fetch("https://service-review-server-xi.vercel.app/services", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem('Service-token')}` 
        },
        body: JSON.stringify(addPackze),
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
  
          
          if (data.acknowledged) {
            // setUSerReview(data)
            // toast.success("Give feedback successfully", {
            //   position: toast.POSITION.TOP_CENTER,
            // });
            form.reset();
          }
        })
        .catch((er) => console.error(er));
    




  };

  return (
    <div>
      <div
        onSubmit={addServiceHandler}
        style={{ backgroundColor: "#111827" }}
        className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 text-white mt-5 mx-auto"
      >
        <h1 className="text-2xl font-bold text-center ">Add Packse</h1>

        <form
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label forhtml="name" className="block ">
              Tourist Place Name
            </label>
            <input
              type="text"
              name="name"
              id="username"
              placeholder="Tourist Place"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label forhtml="despriton" className="block ">
              Description
            </label>
            <input
              type="text"
              name="details"
              id="details"
              placeholder="Tourist Place Description"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label forhtml="price" className="block ">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Tourist Place Description"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label forhtml="name" className="block ">
              Review
            </label>
            <input
              type="text"
              name="review"
              id="review"
              placeholder="Review"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label forhtml="name" className="block ">
              Date
            </label>
            <input
              type="text"
              name="date"
              id="date"
              placeholder="Date"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label forhtml="name" className="block ">
              Rating
            </label>
            <input
              type="text"
              name="rating"
              id="rating"
              placeholder="Rating"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label forhtml="name" className="block ">
              Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
              id="photoURL"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-black focus:dark:border-violet-400"
            />
          </div>

          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-violet-400">
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
