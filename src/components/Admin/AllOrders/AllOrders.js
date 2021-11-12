import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AllOrder from '../AllOrder/AllOrder';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/purchases')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [])
    console.log(allOrders)
    return (
        <div>
            <h2>All Order for admin</h2>
            <Row xs={1} md={2} lg={3} className="g-4 m-4">
                {
                    allOrders.map(allOrder => <AllOrder key={allOrder._id} allOrder={allOrder}></AllOrder>)
                }
            </Row>
        </div>
    );
};

export default AllOrders;