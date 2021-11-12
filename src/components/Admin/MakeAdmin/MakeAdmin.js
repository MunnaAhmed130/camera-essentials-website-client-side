import { TextField, Button, Alert } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email }
        axios.put('http://localhost:4000/users/admin', user
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
            <h2>make a new admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    id="standard-basic"
                    label="Email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type='submit' variant="contained">MakeAdmin</Button>
            </form>
            {success && <Alert severity="success">This is a success alert — check it out!</Alert>}
        </div>
    );
};

export default MakeAdmin;