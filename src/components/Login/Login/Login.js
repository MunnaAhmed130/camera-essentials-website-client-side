import { Alert, CircularProgress, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
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
        <div >
            <Header />
            <div className="login">
                <h2 className="login-heading">Please Login</h2>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email")} placeholder='Your Email' required="required" /> <br />
                    <input {...register("password")} type='password' placeholder='Your Password' required="required" /> <br />
                    <Link to='/register'>New User? Please Register</Link> <br />
                    <Button className="login-btn m-3" type="submit" variant="contained">Login</Button>
                </form>
                {isLoading && <Box>
                    <CircularProgress /> <br />
                </Box>}
                {user?.email && <Alert severity="success">This is a success alert — check it out!</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
                <Button className="mb-5" variant="contained" onClick={handleGoogleSignIn} type="submit">Google Sign In</Button>
            </div>
            <Footer />
        </div>
    );
};

export default Login;