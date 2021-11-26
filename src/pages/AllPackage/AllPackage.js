import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../Home/Service/Service';
const AllPackage = () => {

    const [service, setService] = useState([])

    useEffect(() => {
        fetch('https://bloodcurdling-ghost-16514.herokuapp.com/travelItem')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="container">
            <h1 className="fs-1 title mt-3">All Package</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    service.length === 0 ? <div className="text-center container"><Spinner animation="border" variant="info" /></div> : service.map(services => <Service
                        key={services._id}
                        services={services}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AllPackage;