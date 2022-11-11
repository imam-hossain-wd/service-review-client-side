import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Service = ({service}) => {
    const { _id, img, price, name,title,date, details,rating } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
               <div className='w-24'>
               <div className='flex justify-between items-center'> 
                  <div className='flex text-yellow-400'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </div>
                
                
                <div> {rating}</div>
                 </div>
               </div>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <p>{date}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;