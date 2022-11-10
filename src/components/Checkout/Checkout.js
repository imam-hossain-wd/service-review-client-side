import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const { _id, title, price } = useLoaderData();
    return (
        <div className=' mx-auto' style={{width:"700px"}}>
            <form >
                <h2 className="text-4xl text-center">You are about to order: {title}</h2>
                <h4 className="text-3xl">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email"  className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-3" placeholder="Your Message" required></textarea>

                <input className='btn mt-2' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default Checkout;