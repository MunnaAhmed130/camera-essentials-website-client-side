import React from "react";
import { Col, Row } from "react-bootstrap";
import useTheme from "../../../Hooks/useTheme";
import "./Newsletter.css";

const Newsletter = () => {
  const { darkMode } = useTheme();
  return (
    <div className="newsletter">
      {/* <Container className=""> */}
      <Row className="newsletter-row" xl={2} xs={1} sm={1} md={1} lg={2}>
        <Col className="newsletter-info">
          <div>
            <h2>SUBSCRIBE OUR NEWLETTER</h2> <br />
            <h3>GET UPDATE FOR NEWS, OFFERS</h3> <br />
            <form>
              <input type="email" placeholder="Email" />
            </form>
            <p className="pt-2 fs-6">Don't worry, We don't spam</p>
          </div>
        </Col>
        <Col>
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
        </Col>
      </Row>
      {/* </Container> */}
    </div>
  );
};

export default Newsletter;
