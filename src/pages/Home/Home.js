import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Banner from './Banner/Banner';
import Service from '../Home/Service/Service'
import './Home.css'
import Guide from './Guide/Guide';
import WhyWe from './WhyWe/WhyWe';
const Home = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('https://bloodcurdling-ghost-16514.herokuapp.com/travelItem')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <div className="banner">
                <Banner></Banner>
            </div>
            <div className="container mt-4">
                <h2 className="text-center fw-bold sky-color title fs-2 mb-3">Select Your Best Package <br /> For Your Travel</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        service.length === 0 ? <div className="text-center container"><Spinner animation="border" variant="info" /></div> : service.slice(0, 6).map(services => <Service
                            key={services._id}
                            services={services}
                        ></Service>)
                    }
                </div>
            </div>

            <div className="container mt-4 pt-4">
                <h4 className="title fs-5">Why Pack And Go</h4>
                <h2 className="fw-bold mt-4 mb-3">Why You Are Travel With <br /> Pack And Go</h2>
                <WhyWe></WhyWe>
            </div>


            <div className="container mt-4">
                <div className="mt-5 mb-4">
                    <h2 className="fw-bold text-uppercase text-decoration-underline">Our Guide Team</h2>
                </div>
                <Guide></Guide>
            </div>
        </div>
    );
};

export default Home;