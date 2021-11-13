import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { isLoading } = useAuth();
    useEffect(() => {
        fetch('https://limitless-reaches-30016.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews.name)


    return (
        <div>
            <h2>This is Review</h2>
            <Row xs={1} sm={1} md={2} lg={2} xl={3} className="reviews">
                {
                    reviews.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
                }
            </Row>
        </div>
    );
};

export default Reviews;