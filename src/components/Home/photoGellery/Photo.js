import React from 'react';

const Photo = ({photoGellery}) => {
    return (
        <div className='m-2 bg-black text-white rounded'>
        <img src={photoGellery.img} alt="" className="object-cover object-center w-full  h-72 dark:bg-gray-500 rounded-t" />
        <div className="mt-6 mb-2 bg-black flex justify-around items-center">
           
            <h2 className="text-xl font-semibold tracking-wide">{photoGellery.name}</h2>
            <div className='flex '>
            <img className='w-5 h-5 rounded-full mr-1' src={"icon1.jpg"} alt="" />
            <img className='w-5 h-5 rounded-full mr-1' src={"icon2.jpg"} alt="" />
            <img className='w-5 h-5 rounded-full mr-1' src={"icon13.jpg"} alt="" />
            </div>
        </div>
    </div>
    );
};

export default Photo;