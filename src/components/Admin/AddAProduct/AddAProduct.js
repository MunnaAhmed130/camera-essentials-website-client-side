import React, { useState } from 'react';
import { Alert, Button } from '@mui/material';
import axios from 'axios';
import { useForm } from "react-hook-form";


const AddAProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState(false);
    const onSubmit = data => {
        console.log(data.value)
        axios.post('https://limitless-reaches-30016.herokuapp.com/products', data)
            .then(res => {
                // console.log(res)
                if (res.data.insertedId) {
                    setSuccess(true)
                    reset();
                }
            })
    };


    return (
        <div>
            <h2>Add a Product for admin</h2>
            {success && <Alert severity="success">A New Product has been Successfully added</Alert>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Product Name" /> <br />
                <input {...register("img")} placeholder="Img Url" /> <br />
                <input type="text" {...register("description")} placeholder="Short description" /> <br />
                <input type="number" {...register("price")} placeholder="price" /> <br />
                <Button type="submit" style={{ marginTop: "5px" }} variant="contained">Add</Button>
            </form>
        </div>
    );
};

export default AddAProduct;