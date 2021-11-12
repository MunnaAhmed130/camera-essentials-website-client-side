import { CircularProgress, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyOrder = ({ order, setSuccess, setOrders, handleDeleteOrder }) => {
    const { key, _id } = order;
    // console.log(order)
    // const [product, setProduct] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:4000/products')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);

    //             if (data.length) {
    //                 const dataFound = data.find(data => data._id === key)
    //                 setProduct(dataFound)

    //             }
    //             else {
    //                 <CircularProgress />
    //             }
    //         })
    // }, [])

    // console.log(product)
    console.log(order)


    return (
        <div>
            <Col>
                <Card className="card">
                    <Card.Img variant="top" className="card-img" src={order?.img} />
                    <Card.Body>
                        <Card.Title className="title">{order?.productName}</Card.Title>
                        <Card.Text>{order?.description}</Card.Text>
                        <Button onClick={() => handleDeleteOrder(_id)} variant="outlined" color="error">DELETE</Button>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default MyOrder;