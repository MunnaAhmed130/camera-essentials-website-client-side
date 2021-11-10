import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const { userLogin } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        userLogin(data.email, data.password)
    };
    return (
        <div>
            <h2>Please Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} placeholder='Your Email' /> <br />
                <input {...register("password")} type='password' placeholder='Your Password' /> <br />
                <Link to='/register'>New User? Please Register</Link>
                <Button type="submit">Login</Button>
            </form>
        </div>
    );
};

export default Login;