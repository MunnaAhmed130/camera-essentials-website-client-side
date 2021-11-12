import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:4000/purchases?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            });
    }, [])
    // useEffect(() => {
    //     fetch('http://localhost:4000/purchases')
    //         .then(res => res.json())
    //         .then(data => {
    //             setOrders(data)
    //         });
    // }, [])


    return (
        <div>
            <h2>This is my orders</h2>
            <Row xs={1} md={2} lg={3} className="g-4 m-4">
                {
                    orders.map(order => <MyOrder key={order._id} order={order}></MyOrder>)
                }
            </Row>
        </div>
    );
};

export default MyOrders;