import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Alert, CircularProgress } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';

const Register = () => {
    const { user, error, userRegister, isLoading } = useAuth();
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        if (data.password !== data.password2) {
            alert('your password did not match')
            return
        }
        userRegister(data.email, data.password, data.name, history);
        console.log(user)
    };
    return (
        <div>
            <Header />
            <h2>Please Register</h2>
            {!isLoading &&
                <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} defaultValue={user.displayName} /> <br />
                <input {...register("email", { required: true })} /> <br />
                <input type="password" {...register("password", { required: true })} /> <br />
                <input type="password" {...register("password2", { required: true })} /> <br />
                <Link to='./login'>Already Registered? Login</Link> <br />
                <Button type="submit">Register</Button>
                </form>}
            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success">This is a success alert — check it out!</Alert>}
            {error && <Alert severity="error">{error}</Alert>}
        </div>
    );
};

export default Register;