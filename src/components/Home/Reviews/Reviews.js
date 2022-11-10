import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
// import SingleReview from "../SingleReview/SingleReview";
import ShowMoreText from "react-show-more-text";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://limitless-reaches-30016.herokuapp.com/reviews/query?limit=3")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // console.log(reviews.name)
  // console.log(reviews[0].ratingAsNumber);
  return (
    <div className="reviews_section">
      <div className="reviews_heading">
        <h2>Some Valuable Opinions</h2>
        <h6 className="text-uppercase">Reviews</h6>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        // effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        // autoplay
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        hashNavigation={{
          watchState: true,
        }}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="reviews-container">
          {reviews.map((reviewer) => (
            <SwiperSlide key={reviewer._id} className="review">
              <div className="single-review">
                {reviewer.img && (
                  <img
                    className="review-img"
                    src={reviewer.img}
                    alt="reviewer img"
                  />
                )}
                <h3>{reviewer.name}</h3>
                <h4>{reviewer.profession}</h4>
                <Rating
                  name="read-only"
                  className="rating"
                  precision={0.1}
                  emptyIcon={<StarIcon className="empty_rating" />}
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
                  // width less value looks bad in responsiveness
                  width={10000}
                  truncatedEndingComponent={"... "}
                >
                  {reviewer.description}
                </ShowMoreText>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Reviews;
