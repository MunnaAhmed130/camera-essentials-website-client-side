import { Alert, Button } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Review.css';

const Review = () => {
    const { user } = useAuth();
    const [success, setSuccess] = useState();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://limitless-reaches-30016.herokuapp.com/reviews', data)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    setSuccess(true);
                }
            })
    };
    return (
        <div>
            <h2>Please Give Us Your valuable opinion!</h2>
            {success && <Alert severity="success">You have successfully add a review</Alert>}
            {/* <form onSubmit="">
                <input type="text" placeholder="Your name" defaultValue={user.displayName} /> <br />
                <input type="text" placeholder="Your profession" /> <br />
                <input type="number" placeholder="Rating" /> <br />
                <textarea type="text" placeholder="description" /> <br />

            </form> */}
            <form className="review-form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Your Name" defaultValue={user.displayName} required="required" /> <br />
                <input {...register("profession")} placeholder="Your Profession" required="required" /> <br />
                {user.photoURL && <div><input {...register("img")} placeholder="Img url" defaultValue={user.photoURL} /> <br /></div>}
                <input type="number" {...register("rating")} placeholder="Rating(0-5)" required="required" />  <br />
                <textarea type="text" {...register("description")} placeholder="Short description" required="required" /> <br />
                <Button type="submit" variant="contained">Submit</Button>
            </form>
        </div>
    );
};

export default Review;