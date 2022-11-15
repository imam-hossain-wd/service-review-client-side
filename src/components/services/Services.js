import React, { useEffect, useState } from 'react';
import { useTitle } from '../../hooks/useTittle';
import ServiceCart from './ServiceCart';

const Services = () => {
const [serviceData, setServiceData]= useState([])
useTitle('Service')
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data=> setServiceData(data))
    },[])
    return (
       <div>
        <div className='mt-5 bg-slate-900 text-white w-2/5 p-3 mx-auto rounded'>
        <h1 className='text-3xl text-center text-orange-400 font-bold'>Our All Services</h1>
        <p className='text-center text-xl'>Hope You wanna visit there </p>
        </div>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10 w-4/5 mx-auto'>
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