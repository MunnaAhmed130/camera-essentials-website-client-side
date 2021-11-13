import { CircularProgress, Button, } from '@mui/material';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

const ManageProduct = ({ product }) => {
    const { name, img, description, _id, price } = product;
    // console.log(_id)
    if (!product.length) {
        <CircularProgress />
    }
    const handleDeleteOrder = _id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const url = `https://limitless-reaches-30016.herokuapp.com/products/${_id}`;
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
        <div className="p-0">
            <Col className="p-2">
                <Card className="m-1 " >
                    <Card.Img variant="top" src={img} className='card-img' />
                    <Card.Body>
                        <Card.Title className="card-name">{name}</Card.Title>
                        <Card.Text className="card-description">{description}
                        </Card.Text>
                        <h6>Price:   &#x24;{price}</h6>
                        <Button onClick={() => handleDeleteOrder(_id)} variant="outlined" color="error">DELETE</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ManageProduct;