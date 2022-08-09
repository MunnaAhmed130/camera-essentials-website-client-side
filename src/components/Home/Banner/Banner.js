import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "../Home/Home.css";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="banner d-block w-100"
            src="https://i.ibb.co/yYjfJ9y/slider-4.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="banner-info">
            <h3>
              Capture Your <br /> Beautiful Moments
            </h3>
            <Button className="banner-btn"> Learn More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className=" banner d-block w-100"
            // src="https://i.ibb.co/2N0VWQk/here-bg-1.jpg"
            src="https://i.ibb.co/XZrzkq8/bg-1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="banner-info">
            <h3>
              Capture Your <br /> Beautiful Moments
            </h3>
            <Button className="banner-btn"> Learn More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className=" banner d-block w-100"
            // src="https://i.ibb.co/LrhG9Mx/slider-3.jpg"
            src="https://i.ibb.co/SQ4mNwN/patrick-dozk-Vh-Dyvh-Q-unsplash.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="banner-info">
            <h3>
              Capture Your <br /> Beautiful Moments
            </h3>
            <Button className="banner-btn"> Learn More</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
