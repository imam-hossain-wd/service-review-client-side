import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const { _id, img, price, name,title,date, details,rating } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <p>{rating}</p>
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