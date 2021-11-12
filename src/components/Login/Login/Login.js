import { Alert, CircularProgress } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';
import './Login.css'

const Login = () => {
    const { user, error, userLogin, googleSignIn, isLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        userLogin(data.email, data.password, location, history)
    };
    const handleGoogleSignIn = () => {
        googleSignIn(location, history);
    }
    return (
        <div>
            <Header />
            <h2>Please Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} placeholder='Your Email' /> <br />
                <input {...register("password")} type='password' placeholder='Your Password' /> <br />
                <Link to='/register'>New User? Please Register</Link>
                <Button type="submit">Login</Button>
            </form>
            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success">This is a success alert — check it out!</Alert>}
            {error && <Alert severity="error">{error}</Alert>}
            <Button onClick={handleGoogleSignIn} type="submit">Google Sign In</Button>
        </div>
    );
};

export default Login;