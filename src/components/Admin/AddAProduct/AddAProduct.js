import React, { useState } from 'react';
import { Alert } from '@mui/material';
import axios from 'axios';
import { useForm } from "react-hook-form";


const AddAProduct = () => {
    const { register, handleSubmit } = useForm();
    const [success, setSuccess] = useState(false);
    const onSubmit = data => {
        console.log(data)
        axios.post('https://limitless-reaches-30016.herokuapp.com/products', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    setSuccess(true)
                }
            })
    };


    return (
        <div>
            <h2>Add a Product for admin</h2>
            {success && <Alert severity="success">A New Product has been Successfully added</Alert>}
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