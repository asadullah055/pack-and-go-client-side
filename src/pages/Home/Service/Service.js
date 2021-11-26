import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ services }) => {
    const { img, title, price, regular, duration, _id } = services

    return (
        <div className="col">
            <div className="card border-0 h-100 shadow pb-3">
                <img height="225px" src={img} className="card-img-top rounded-3" alt="..." />
                <div className="card-body">
                    <div className="text-start d-flex justify-content-between">
                        <h4 className="fw-bold"> Taka {price} <span className="regular">{regular}  </span></h4>
                        <p className="text-capitalize">{duration}</p>
                    </div>
                    <div className=" text-start">
                        <h4 className="card-title title text-capitalize">{title}</h4>
                    </div>

                </div>
                <div className="ms-3 text-start margin-top">
                    <Link to={`/placeOrder/${_id}`}>
                        <button className="btn booking-btn border btn-bg ">Booking Now &gt;&gt; </button>
                    </Link>
                </div>


            </div>
        </div>

    );
};

export default Service;