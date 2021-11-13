import { Rating } from '@mui/material';
import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import './SingleReview.css'
const SingleReview = ({ review }) => {

    const { profession, description, name, rating, img } = review;
    const [value, setValue] = React.useState(rating);
    console.log(img);
    return (
        // <div></div>


        <Col >
            <Row className="single-review">
                <Col lg={8}>
                    <h3>{name}</h3>
                    <h4>{profession}</h4>
                    <Rating name="read-only" value={value} readOnly />
                    <br />
                    <p className="">{description}</p>
                </Col>
                <Col lg={4} style={{ textAlign: 'left' }}>
                    {img && <img className="review-img" src={img} />}</Col>


            </Row>
        </Col>

    );
};

export default SingleReview;