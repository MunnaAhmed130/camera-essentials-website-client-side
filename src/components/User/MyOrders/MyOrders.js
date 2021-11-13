import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    const [success, setSuccess] = useState(false);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://limitless-reaches-30016.herokuapp.com/purchases/user?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            });
    }, [])

    const handleDeleteOrder = _id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const url = `https://limitless-reaches-30016.herokuapp.com/purchases/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        const remainingOrders = orders.filter(order => order._id !== _id)
                        setOrders(remainingOrders)

                        setSuccess(true)
                        return
                    }

                })
        }

    }
    // useEffect(() => {
    //     fetch('https://limitless-reaches-30016.herokuapp.com/purchases')
    //         .then(res => res.json())
    //         .then(data => {
    //             setOrders(data)
    //         });
    // }, [])


    return (
        <div>
            <h2>This is my orders</h2>
            {success && <Alert severity="success">Your Order has been successfully deleted</Alert>}
            <Row xs={1} md={2} lg={3} className="g-4 m-4">
                {
                    orders.map(order => <MyOrder key={order._id} setSuccess={setSuccess} setOrders={setOrders} handleDeleteOrder={handleDeleteOrder} order={order}></MyOrder>)
                }
            </Row>
        </div>
    );
};

export default MyOrders;