import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://secret-crag-79435.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div id='services' className='container'>
            <div className="row">
                <h1 className='text-center mt-5 text-primary'>Our Services</h1>
                <div className='services-container'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;