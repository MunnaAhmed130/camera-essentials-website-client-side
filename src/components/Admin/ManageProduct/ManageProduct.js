import { CircularProgress } from '@mui/material';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

const ManageProduct = ({ product }) => {
    const { name, img, description, _id } = product;
    console.log(_id)
    if (!product.length) {
        <CircularProgress />
    }
    const handleDeleteOrder = _id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const url = `http://localhost:4000/products/${_id}`;
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
            <Col className="px-0">
                <Card className="m-3" style={{ minHeight: "32rem" }}>
                    <Card.Img variant="top" src={img} className='card-img' />
                    <Card.Body>
                        <Card.Title className="card-name">{name}</Card.Title>
                        <Card.Text className="card-description">{description}
                        </Card.Text>
                        <Button onClick={() => handleDeleteOrder(_id)} variant="outlined">DELETE</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ManageProduct;