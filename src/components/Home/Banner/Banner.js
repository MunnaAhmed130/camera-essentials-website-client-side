import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "../Home/Home.css";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel fade>
        <Carousel.Item interval={5000}>
          <img
            className="banner__img banner__img1 d-block w-100"
            src="https://i.ibb.co/hRC0Lmg/camera-on-tripod-e1651041561801.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="banner__info">
            <div>
              <h2>
                Capture Your <br /> Beautiful Moments
              </h2>
              <Button
                className="banner__btn"
                href="http://localhost:3000/explore"
              >
                Explore
              </Button>
              <Button className="banner__btn" href="">
                About Us
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className=" banner__img banner__img2 d-block w-100"
            src="https://i.ibb.co/SQ4mNwN/patrick-dozk-Vh-Dyvh-Q-unsplash.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="banner__info">
            <div>
              <h2>
                Capture Your <br /> Beautiful Moments
              </h2>
              <Button
                className="banner__btn"
                href="http://localhost:3000/explore"
              >
                Explore
              </Button>
              <Button className="banner__btn" href="">
                About Us
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
