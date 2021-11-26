import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyBooking.css'
const MyBooking = () => {
    const [order, setOrder] = useState([])
    const { user } = useAuth()

    useEffect(() => {

        fetch('https://bloodcurdling-ghost-16514.herokuapp.com/order')
            .then(res => res.json())
            .then(data => {

                const users = data.filter(order => order.email === user.email)
                setOrder(users);
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
            <h2 className="title fs-2 mt-4 mb-3"> Booking History</h2>
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
                        order.map(orders => <tbody key={orders._id}>
                            <tr>
                                <td data-label="Name">{orders.name}</td>
                                <td data-label="Email">{orders.email}</td>
                                <td data-label="Booked Title">{orders.title}</td>
                                <td data-label="Date">{orders.date}</td>
                                <td data-label="Status"><span className="text-uppercase btn btn-primary">{orders.action}</span>
                                    <button className="ms-2 btn-danger rounded" onClick={() => handleDeleteOrder(orders._id)}><i className="far fa-trash-alt"></i></button>

                                </td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyBooking;