import { CircularProgress, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyOrder = ({ order }) => {
    const { key, _id } = order;
    console.log(key)
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

    const handleDeleteOrder = _id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const url = `http://localhost:4000/purchases/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        alert('deleted successfully');

                    }

                })
        }

    }

    return (
        <div>
            <Col>
                <Card className="card">
                    <Card.Img variant="top" className="card-img" src={order?.img} />
                    <Card.Body>
                        <Card.Title className="title">{order?.name}</Card.Title>
                        <Card.Text>{order?.description}</Card.Text>
                        <Button onClick={() => handleDeleteOrder(_id)} variant="outlined">DELETE</Button>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default MyOrder;