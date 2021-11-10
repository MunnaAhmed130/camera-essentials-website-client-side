import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, description, price } = product;
    return (

        <Col className="px-0">
            <Card className="m-3" style={{ minHeight: "32rem" }}>
                <Card.Img variant="top" src={img} className='card-img' />
                <Card.Body>
                    <Card.Title className="card-name">{name}</Card.Title>
                    <Card.Text className="card-description">{description}
                    </Card.Text>
                    <Button>Buy Now</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Product;