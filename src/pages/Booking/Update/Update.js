import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import Swal from 'sweetalert2';

const Update = () => {
    const { orderId } = useParams()
    const [order, setUpdateOrder] = useState()
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/manageAllBooking'
    useEffect(() => {
        const url = `https://bloodcurdling-ghost-16514.herokuapp.com/order/${orderId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdateOrder(data))
    }, [orderId])

    const handleAction = e => {
        const updateAction = (e.target.value);
        const updateUser = { ...order }
        updateUser.action = updateAction
        setUpdateOrder(updateUser)
    }
    const handleUpdateUser = e => {
        const url = `https://bloodcurdling-ghost-16514.herokuapp.com/order/${orderId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Update Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    history.push(redirect_uri)
                    // setUpdateOrder('')
                }
            })
        e.preventDefault()
    }

    return (
        <div className="container">
            <h2 className="title mt-4 mb-3">Update {order?.title}</h2>
            <form onSubmit={handleUpdateUser}>
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
                        order && <tbody>
                            <tr>
                                <td data-label="Name">{order.name}</td>
                                <td data-label="Email">{order.email}</td>
                                <td data-label="Booked Title">{order.title}</td>
                                <td data-label="Date">{order.date}</td>
                                <td data-label="Status"><select className="form-select text-uppercase" onChange={handleAction} value={order.action || ''}>
                                    <option className="text-uppercase" value="pending">pending</option>
                                    <option className="text-uppercase" value="approved">approved</option>
                                </select></td>
                            </tr>
                        </tbody>
                    }


                </table>

                <input className="btn btn-primary text-uppercase text-white" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;