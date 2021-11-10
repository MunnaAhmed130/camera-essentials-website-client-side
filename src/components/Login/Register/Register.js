import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const { userRegister } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        if (data.password !== data.password2) {
            alert('your password did not match')
            return
        }
        userRegister(data.name, data.email, data.password)
    };
    return (
        <div>
            <h2>Please Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} /> <br />
                <input {...register("email", { required: true })} /> <br />
                <input type="password" {...register("password", { required: true })} /> <br />
                <input type="password" {...register("password2", { required: true })} /> <br />
                <Link to='./login'>Already Registered? Login</Link> <br />
                <Button type="submit">Register</Button>
            </form>
        </div>
    );
};

export default Register;