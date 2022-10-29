import React from "react";
import { Col, Row } from "react-bootstrap";
import useTheme from "../../../Hooks/useTheme";
import "./Newsletter.css";

const Newsletter = () => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`newsletter ${
        darkMode ? "dark_newsletter" : "light_newsletter"
      }`}
    >
      {/* <Container className=""> */}
      <Row
        className="newsletter-row w-100 mx-auto"
        xl={2}
        xs={1}
        sm={1}
        md={1}
        lg={2}
      >
        <Col className="newsletter-info ">
          <div className="newsletter-heading-container">
            <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
            <h3>GET UPDATE FOR NEWS, OFFERS</h3>
          </div>
          <form>
            <input type="email" placeholder="Email" />
          </form>
          <p className=" text-uppercase m-0">Don't worry, We don't spam</p>
          {/* </div> */}
        </Col>
        {/* <Col>
          <div className="newsletter-img-container">
            <img
              className="newsletter-img"
              src={
                darkMode
                  ? "https://i.ibb.co/nMNcMfX/black-camera.jpg"
                  : "https://i.ibb.co/JqSrNTw/christian-wiediger-8n-XKXYd-O-Wk-unsplash.jpg"
              }
              alt="black camera"
            />
          </div>
        </Col> */}
      </Row>
      {/* </Container> */}
    </div>
  );
};

export default Newsletter;
