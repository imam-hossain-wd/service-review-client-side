import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {
const [serviceData, setServiceData]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data=> setServiceData(data))
    },[])
    return (
       <div>
        <h1 className='text-2xl text-center text-yellow-400'>Our All Event</h1>
         <div className='grid grid-cols-3 gap-5 mt-10 w-4/5 mx-auto'>
            {
                serviceData.map(service=> <ServiceCart 
                    key={service._id}
                    service={service}
                
                ></ServiceCart> )
            }
            
        </div>
       </div>
    );
};

export default Services;