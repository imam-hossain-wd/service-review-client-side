import React, { useEffect, useState } from 'react';
import Service from './Service';

const Home = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('https://service-review-server-xi.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
             
            
                <h1>service : {services.length}</h1> 

                 {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
 

        </div>
    );
};

export default Home;