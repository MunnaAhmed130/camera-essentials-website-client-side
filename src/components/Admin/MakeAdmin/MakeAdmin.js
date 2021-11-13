import { TextField, Button, Alert } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email }
        axios.put('https://limitless-reaches-30016.herokuapp.com/users/admin', user
        )
            .then(res => {

                if (res.data.modifiedCount) {
                    console.log(res.data)
                    setEmail('')
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2 className="admin-heading">Make a New Admin</h2>
            <form className="admin-form" onSubmit={handleAdminSubmit}>
                <input
                    label="Email"
                    placeholder="Enter admin email"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br />
                <Button type='submit' variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Your have successfully made a new admin</Alert>}
        </div>
    );
};

export default MakeAdmin;