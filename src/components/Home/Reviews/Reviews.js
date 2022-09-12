import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Rating } from "@mui/material";
// import SingleReview from "../SingleReview/SingleReview";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  // const [value, setValue] = React.useState(rating);

  useEffect(() => {
    fetch("https://limitless-reaches-30016.herokuapp.com/reviews/query?limit=3")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // console.log(reviews.name)

  return (
    <div className="reviews_container">
      <div className="review_info">
        <h2>Some Valuable Opinions!</h2>
        <h3>Reviews</h3>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <Row xs={1} sm={1} md={2} lg={3} xl={3} className="reviews">
          {reviews.map((reviewer) => (
            <SwiperSlide key={reviewer._id}>
              <Col className="single-review">
                <div className="reviewer">
                  <h3>{reviewer.name}</h3>
                  {reviewer.img && (
                    <img
                      className="review-img"
                      src={reviewer.img}
                      alt="reviewer img"
                    />
                  )}
                  <br />
                </div>
                <h4>{reviewer.profession}</h4>
                <br />
                <Rating name="read-only" value={reviewer.rating} readOnly />
                <br />
                <p className="">{reviewer.description}</p>
              </Col>
            </SwiperSlide>
          ))}
        </Row>
        {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Reviews;
