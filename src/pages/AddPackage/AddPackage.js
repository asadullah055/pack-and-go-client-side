import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddPackage = () => {



    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://bloodcurdling-ghost-16514.herokuapp.com/travelItem', {
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
                        title: 'Add Package Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    reset()
                }
            })


        // console.log(data)
    };



    return (
        <div className="container">

            <div className="row justify-content-center">
                <h1 className="title fs-1 mb-3 mt-4">Add Package</h1>
                <div className="col-md-6">
                    <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control form-control-lg mb-3" type="text" {...register("title")} placeholder="Title" />

                        <input className="form-control form-control-lg mb-3" type="number" {...register("price")} placeholder="Discount Price" />

                        <input className="form-control form-control-lg mb-3" type="number" {...register("regular")} placeholder="Regular Price" />

                        <input className="form-control form-control-lg mb-3" type="text" {...register("duration")} placeholder="5 Days / 6 Night" />

                        <input className="form-control form-control-lg mb-3" type="text" {...register("img")} placeholder="Image Url" />

                        <textarea className="form-control form-control-lg mb-3" type="text" {...register("overview")} placeholder="Overview" />
                        <input className="booking-btn btn btn-bg text-uppercase" type="submit" value="Upload" />
                    </form>
                </div>
            </div>



        </div>
    );
};

export default AddPackage;