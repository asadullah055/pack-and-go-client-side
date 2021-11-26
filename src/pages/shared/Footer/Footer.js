import React from 'react';

const Footer = () => {
    return (
        <div className="card-bg mt-5">
            <div className="container w-50">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col">
                        <h3 className="text-white fw-bold p-3 text-start">Contact Us</h3>
                        <div className="">
                            <ul className="list list-unstyled text-white text-start ">
                                <li className="p-2 fw-bold">Phone : +8801724-002000</li>
                                <li className="p-2 fw-bold">Email : packandgo@gmail.com</li>
                                <li className="p-2 fw-bold">Address: Mirpur-10 <br /> Dhaka-1200</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <h3 className="text-white fw-bold p-3 text-start">Support</h3>
                        <ul className="list list-unstyled text-white text-start ">
                            <li className="p-2 fw-bold">Contact Us</li>
                            <li className="p-2 fw-bold">supportpackandgo@gmail.com</li>
                            <li className="p-2 fw-bold">Address: Mirpur-10 <br /> Dhaka-1200</li>
                        </ul>
                    </div>
                </div>
                <hr className="bg-white" />
            </div>
            <div className="text-white fw-bolder p-2 pb-3">Copyright 2021 <span className="title fs-6 fw-bold">Pack And Go</span> </div>
        </div>
    );
};

export default Footer;