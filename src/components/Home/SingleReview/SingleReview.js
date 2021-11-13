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
                <Col>
                    <div className="reviewer">
                        <h3>{name}</h3><img className="review-img" src={img} /><br />
                    </div>
                    <h4>{profession}</h4><br />
                    <Rating name="read-only" value={value} readOnly />
                    <br />
                    <p className="">{description}</p>
                </Col>



            </Row>
        </Col>

    );
};

export default SingleReview;