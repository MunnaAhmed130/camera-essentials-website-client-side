import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddAProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:4000/products', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('successfully added a new product')
                }
            })
    };


    return (
        <div>
            <h2>Add a Product for admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Product Name" defaultValue="product" /> <br />
                <input {...register("img")} placeholder="Img Url" defaultValue="https://i.ibb.co/b1QMV6M/Sony-20-1-MP-Digital-camera.jpg" /> <br />
                <input type="text" {...register("description")} placeholder="Short description" defaultValue="new Product" /> <br />
                <input type="number" {...register("price")} placeholder="price" defaultValue="500" /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddAProduct;