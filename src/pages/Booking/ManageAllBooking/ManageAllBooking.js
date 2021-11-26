import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const ManageAllBooking = () => {
    const [order, setOrder] = useState([])

    useEffect(() => {

        fetch('https://bloodcurdling-ghost-16514.herokuapp.com/order')
            .then(res => res.json())
            .then(data => {
                setOrder(data);
            })

    }, [])

    const handleDeleteOrder = orderId => {
        const proceed = window.confirm('Are you sure, you want to deleted')
        if (proceed) {
            const url = `https://bloodcurdling-ghost-16514.herokuapp.com/order/${orderId}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingOrders = order.filter(order => order._id !== orderId)
                        setOrder(remainingOrders)
                    }
                })
        }
    }




    return (
        <div className="container">
            <h1 className="title fs-1 text-capitalize mb-4 mt-3">all booking</h1>
            <div className="row">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Booked Title</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    {
                        order.map(orders => <tbody key={orders._id} >
                            <tr>
                                <td data-label="Name">{orders.name}</td>
                                <td data-label="Email">{orders.email}</td>
                                <td data-label="Booked Title">{orders.title}</td>
                                <td data-label="Date">{orders.date}</td>
                                <td data-label="Status"> <span className="text-uppercase btn btn-primary">{orders.action}</span>
                                    <span className="ms-2">
                                        <Link to={`/update/${orders._id}`}><button className="btn-info border rounded"><i className="far fa-edit text-white"></i></button></Link>
                                        <button className="ms-2 btn-danger rounded" onClick={() => handleDeleteOrder(orders._id)}><i className="far fa-trash-alt"></i></button>
                                    </span>
                                </td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageAllBooking;