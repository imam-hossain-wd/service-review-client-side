import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { userContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';
import { useTitle } from '../../hooks/useTittle';

const Checkout = () => {
    const { _id, title, price,img,rating,date} = useLoaderData();
    const {user} = useContext(userContext)
    useTitle('Checkout')

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const booking = {
            bookingId: _id,
            bookingName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
       

        fetch('https://service-review-server-xi.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('service-booking')}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast.success('booking placed successfully',
                        {
                            position: toast.POSITION.TOP_CENTER
                          }
                    )
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));



    }

    return (
        <div className=' mx-auto w-3/6 m-5'>
            
            <form  onSubmit={handlePlaceOrder}>
                <h2 className="text-2xl text-center mt-5 bg-black text-white p-5 font-bold">You are about to booking: {title}</h2>
                <img src={img} className="w-4/5 h-64 mx-auto mt-5 rounded" alt="" />
                <div className='flex justify-between items-center'>
                <h4 className="text-xl m-2">Price: {price}</h4>
                <p> Date: {date} </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" required />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" required/>
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email"  className="input input-ghost w-full  input-bordered" defaultValue={user?.email} readOnly />
                  
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-3" placeholder="Your Message" required></textarea>

                <input className='btn mt-2' type="submit" value="Booking Now" />
            </form>
        </div>
    );
};

export default Checkout;