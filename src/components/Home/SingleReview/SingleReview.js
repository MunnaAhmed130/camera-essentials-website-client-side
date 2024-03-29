import { Rating } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
// import "./SingleReview.css";

const SingleReview = ({ review }) => {
  const { profession, description, name, rating, img } = review;
  const [value, setValue] = React.useState(rating);
  // console.log(img);
  return (
    <Col>
      <Row className="single-review">
        <Col>
          <div className="reviewer">
            <h3>{name}</h3>
            {img && <img className="review-img" src={img} alt="reviewer img" />}
            <br />
          </div>
          <h4>{profession}</h4>
          <br />
          <Rating name="read-only" value={value} readOnly />
          <br />
          <p className="">{description}</p>
        </Col>
      </Row>
    </Col>
  );
};

export default SingleReview;
