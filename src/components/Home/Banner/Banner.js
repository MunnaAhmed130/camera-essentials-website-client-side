import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Banner.css';

const BannerStyle = {
    height: '600px',
    objectFit: 'cover'
}


const Banner = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item interval={1000} >
                    <img
                        style={{ ...BannerStyle, objectPosition: 'center' }}
                        className="d-block w-100"
                        src="https://i.ibb.co/yYjfJ9y/slider-4.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="banner-info">
                        <h3 >Capture Your <br /> Beautiful Moments</h3>
                        <Button className="banner-btn"> Learn More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        style={{ ...BannerStyle }}
                        className="d-block w-100"

                        src="https://i.ibb.co/2N0VWQk/here-bg-1.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="banner-info">
                        <h3 >Capture Your <br /> Beautiful Moments</h3>
                        <Button className="banner-btn"> Learn More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        style={{ ...BannerStyle }}
                        className="d-block w-100"
                        src="https://i.ibb.co/LrhG9Mx/slider-3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="banner-info">
                        <h3>Capture Your <br /> Beautiful Moments</h3>
                        <Button className="banner-btn"> Learn More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;