import React from 'react';
import './WhyWe.css'

const WhyWe = () => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4" >
            <div className="col">
                <div className="card card-bg shadow">
                    <div className="text-center mt-3">
                        <img src="https://i.ibb.co/vBrzFCF/group.png" className="card-img-top img" alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title text-white">10+ year of travel experience</h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card card-bg shadow">
                    <div className="text-center mt-3">
                        <img src="https://i.ibb.co/Wv0ncxH/guide.png" className="card-img-top img" alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title text-white">2000+ Our worldwide guide</h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card card-bg shadow">
                    <div className="text-center mt-3">
                        <img src="https://i.ibb.co/vJQsJHY/guide2.png" className="card-img-top img" alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title text-white">90% of our traveller happy</h3>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card card-bg shadow">
                    <div className="text-center mt-3">
                        <img src="https://i.ibb.co/whBx5q9/safe.png" className="card-img-top img" alt="..." />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title text-white">100% trusted travel agency</h3>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default WhyWe;