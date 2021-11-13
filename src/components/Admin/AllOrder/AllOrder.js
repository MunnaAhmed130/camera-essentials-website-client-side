import { Button } from '@mui/material';
import React from 'react';
import { Col, Card } from 'react-bootstrap';

const AllOrder = ({ allOrder }) => {
    return (
        <div>
            <Col>
                <Card className="card">
                    <Card.Img variant="top" className="card-img" src={allOrder?.img} />
                    <Card.Body>
                        <Card.Title className="title">{allOrder?.productName}</Card.Title>
                        <Card.Text>{allOrder?.description}</Card.Text>
                        <Button variant="outlined">Ship</Button>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default AllOrder;