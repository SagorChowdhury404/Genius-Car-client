import React, { useEffect, useState } from 'react';
import ServicesCart from './ServicesCart';

const Services = () => {
    const [services, setServices] = useState([]);
    // console.log(services)
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))


    }, [])
    return (
        <div>
            <div className='text-center mb-8'>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h2 className='text-5xl font-semibold'>Our Service Area</h2>
                <p className=''>the majority have suffered alteration in some form,<br /> by injected humour, or randomised words which don't look even slightly believable. </p>

            </div>
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {
                    services.map(service => <ServicesCart
                        key={service._id}
                        service={service}

                    ></ServicesCart>)
                }

            </div>

        </div>
    );
};

export default Services;