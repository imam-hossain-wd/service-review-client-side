import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { userContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { _id, title, price} = useLoaderData();
    const {user} = useContext(userContext)
    console.log(title);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const booking = {
            booking: _id,
            bookingName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
       

        fetch('http://localhost:5000/booking', {
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
        <div className=' mx-auto' style={{width:"700px"}}>
            
            <form  onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl text-center">You are about to order: {title}</h2>
                <h4 className="text-3xl">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" required />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" required/>
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email"  className="input input-ghost w-full  input-bordered" defaultValue={user?.email} readOnly />
                  
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-3" placeholder="Your Message" required></textarea>

                <input className='btn mt-2' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default Checkout;