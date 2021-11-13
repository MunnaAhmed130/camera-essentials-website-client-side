import { Button } from '@mui/material';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const MyOrder = ({ order, handleDeleteOrder }) => {
    const { _id } = order;
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