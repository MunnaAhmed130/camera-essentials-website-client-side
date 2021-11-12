import { CircularProgress } from '@mui/material';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, description, _id } = product;
    if (!product.length) {
        <CircularProgress />
    }
    return (
        <Col className="px-0">
            <Card className="m-3" style={{ minHeight: "32rem" }}>
                <Card.Img variant="top" src={img} className='card-img' />
                <Card.Body>
                    <Card.Title className="card-name">{name}</Card.Title>
                    <Card.Text className="card-description">{description}
                    </Card.Text>
                    <Link to={`/purchase/${_id}`}><Button>Buy Now</Button></Link>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Product;