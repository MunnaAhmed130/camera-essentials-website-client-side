import React from "react";
import { Button, Carousel } from "react-bootstrap";
import useTheme from "../../../Hooks/useTheme";
import "../Home/Home.css";

const Banner = () => {
  const { darkMode } = useTheme();
  return (
    <div>
      <Carousel fade>
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
            <Button className="banner-btn" href="http://localhost:3000/explore">
              Explore
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className=" banner d-block w-100"
            // src="https://i.ibb.co/2N0VWQk/here-bg-1.jpg"
            src={
              darkMode
                ? "https://i.ibb.co/XZrzkq8/bg-1.jpg"
                : "https://i.ibb.co/SQ4mNwN/patrick-dozk-Vh-Dyvh-Q-unsplash.jpg"
            }
            alt="Second slide"
          />
          <Carousel.Caption className="banner-info">
            <h3>
              Capture Your <br /> Beautiful Moments
            </h3>
            <Button className="banner-btn" href="http://localhost:3000/explore">
              Explore
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item interval={5000}>
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
            <Button className="banner-btn">Explore</Button>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default Banner;
