import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = `https://secret-crag-79435.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='my-2' placeholder='Description' {...register("decription")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='photo URL' type="text" {...register("img")} />
                <input type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddService;