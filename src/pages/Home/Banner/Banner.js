import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div className="container p-50">
            <div className="row">
                <div className="col-lg-6 pb-5 pb-5">
                    <h1 className="main-title">Amazing Tour in Bangladesh</h1>
                    <div className="mb-5">
                        <Link to="/allPackage">
                            <button className="booking-btn btn">Our All Package</button>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;