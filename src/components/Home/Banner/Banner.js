import React from "react";
import { Button, Carousel } from "react-bootstrap";
import useTheme from "../../../Hooks/useTheme";
import "../Home/Home.css";

const Banner = () => {
  const { darkMode } = useTheme();
  return (
    <div className={`banner ${darkMode ? "dark" : "light"}`}>
      <Carousel fade>
        <Carousel.Item interval={5000}>
          <img
            className="banner_img d-block w-100"
            // src="https://i.ibb.co/qDgVpsB/d-ng-tr-n-qu-c-HRk-O49-Hle-Gc-unsplash.jpg"
            // src="https://i.ibb.co/hRC0Lmg/camera-on-tripod-e1651041561801.jpg"
            src="https://i.ibb.co/hRC0Lmg/camera-on-tripod-e1651041561801.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="banner-info">
            <div>
              <h2>Capture Your Beautiful Moments</h2>
              <Button
                className="banner-btn me-3"
                href="http://localhost:3000/explore"
              >
                Explore
              </Button>
              <Button className="banner-btn" href="">
                {" "}
                About Us
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className=" banner_img d-block w-100"
            // src="https://i.ibb.co/XZrzkq8/bg-1.jpg"
            src="https://i.ibb.co/SQ4mNwN/patrick-dozk-Vh-Dyvh-Q-unsplash.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="banner-info">
            <div>
              <h2>Capture Your Beautiful Moments</h2>
              <Button
                className="banner-btn me-3"
                href="http://localhost:3000/explore"
              >
                Explore
              </Button>
              <Button className="banner-btn" href="">
                {" "}
                About Us
              </Button>
            </div>
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
