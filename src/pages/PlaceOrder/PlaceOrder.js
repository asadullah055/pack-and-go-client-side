import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation, useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { user } = useAuth()
    const { id } = useParams()
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/myBooking'

    const [orderDetails, setOrderDetails] = useState([])
    useEffect(() => {
        fetch(`https://bloodcurdling-ghost-16514.herokuapp.com/travelItem/${id}`)
            .then(res => res.json())
            .then(data => setOrderDetails(data))
    }, [id])

    //form
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.action = "pending"

        fetch('https://bloodcurdling-ghost-16514.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Order Place Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })

                    history.push(redirect_uri)
                }
            })


        // console.log(data)
    };


    return (
        <div className="mt-3">
            <div className="container mt-4">
                <div className="row text-start">
                    <div className="col-md-7">
                        <div className="card mb-3">
                            <img src={orderDetails.img} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title text-start title mb-3">{orderDetails.title}</h4>
                                <div className="text-start d-flex justify-content-between  border-top border-bottom border-info p-3">
                                    <h4>Taka {orderDetails.price}</h4>
                                    <h4>{orderDetails.duration}</h4>
                                </div>
                            </div>
                            <h2 className="text-start ms-4">Overview</h2>
                            <p className="text-justify p-3">{orderDetails.overview}</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 ms-3">
                        <h2 className="mb-3 title fs-2">Book This Package</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {
                                orderDetails && orderDetails.title && <input className="form-control mb-3 p-3" defaultValue={orderDetails.title} type="text" placeholder="Your Name" {...register("title")} required readOnly />
                            }


                            <input className="form-control mb-3 p-3" defaultValue={user.displayName} type="text" placeholder="Your Name" {...register("name")} required readOnly />

                            <input className="form-control mb-3 p-3" type="email" defaultValue={user.email} placeholder="Your Email" {...register("email")} readOnly required />

                            {
                                orderDetails && orderDetails.price && <input placeholder="Price" defaultValue={orderDetails.price} className="form-control mb-3 p-3" type="number" {...register("price")} readOnly required />
                            }

                            <input className="form-control mb-3 p-3" type="tell" placeholder="Phone Number" {...register("phone")} required />

                            <input className="form-control mb-3 p-3" type="date" {...register("date")} required />

                            <input className="form-control mb-3 p-3"
                                placeholder="Quantity"
                                type="number" {...register("quantity")} required />

                            <input className="btn btn-info p-3 ps-4 pe-4 fw-bold text-white" type="submit" value="BOOKING" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlaceOrder;