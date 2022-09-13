import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Rating } from "@mui/material";
// import SingleReview from "../SingleReview/SingleReview";
import ShowMoreText from "react-show-more-text";
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
  // console.log(reviews[0].ratingAsNumber);
  return (
    <div className="reviews_container">
      <div className="review_info">
        <h2>Some Valuable Opinions!</h2>
        <h3>Reviews</h3>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        hashNavigation={{
          watchState: true,
        }}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {/* <Row xs={1} sm={1} md={2} lg={3} xl={3} className="reviews"> */}
        <div className="reviews">
          {reviews.map((reviewer) => (
            <SwiperSlide key={reviewer._id} className="reviews">
              {/* <Col className="single-review"> */}
              <div className="single-review">
                {/* <div className="reviewer"> */}
                {reviewer.img && (
                  <img
                    className="review-img"
                    src={reviewer.img}
                    alt="reviewer img"
                  />
                )}
                <h3>{reviewer.name}</h3>

                {/* <br /> */}
                {/* </div> */}
                <h4>{reviewer.profession}</h4>
                <Rating
                  name="read-only"
                  value={Number(reviewer.rating)}
                  readOnly
                />
                <br />
                <ShowMoreText
                  /* Default options */
                  lines={3}
                  more="Show more"
                  less="Show less"
                  className="description_text"
                  anchorClass="see_more"
                  // onClick={this.executeOnClick}
                  expanded={false}
                  // width={280}
                  truncatedEndingComponent={"... "}
                >
                  {reviewer.description}
                </ShowMoreText>
                {/* <p className="">{reviewer.description}</p> */}
              </div>
              {/* </Col> */}
            </SwiperSlide>
          ))}
        </div>
        {/* </Row> */}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Reviews;
