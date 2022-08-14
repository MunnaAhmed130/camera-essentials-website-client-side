import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faHome,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import useTheme from "../../../Hooks/useTheme";

const Footer = () => {
  const { darkMode } = useTheme();
  // let footer_bg = darkMode ? "dark-bg" : "light-bg";
  let darkImg = "https://i.ibb.co/BVcqW6j/one-camera-lens-on-dark-surface.jpg";
  return (
    <>
      <footer className={`footer-top ${darkMode ? "dark-bg" : "light-bg"}`}>
        {/* <Container className="top-footer  "> */}
        <div className="top-footer">
          <div className="mx-1 px-3">
            <Row
              className="footer-info w-100 m-0  pb-5 "
              g={2}
              md={2}
              sm={2}
              xs={1}
            >
              <Col lg={5} className="p-0">
                <div className="footer-section">
                  <h4>Why Always Us</h4>
                  <p className="p-0 m-0">
                    We provide quality product with best service for old and new
                    camera Models.
                  </p>
                  <h5 className="py-3">Follow Us</h5>
                  <div className="icon-links">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="facebook"
                    >
                      <FontAwesomeIcon icon={faFacebookF} bounce />
                    </a>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="twitter"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="instagram"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedIn"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={2} className="p-0">
                <div className="links">
                  <h4>Quick LInks</h4>
                  <Link to="#">Service</Link> <br />
                  <Link to="/explore">Explore</Link> <br />
                  <Link to="#">About Us</Link> <br />
                  <Link to="#">Shipping</Link> <br />
                  <Link to="#">Contact</Link> <br />
                </div>
              </Col>
              <Col lg={2} className="p-0">
                <div className="links information">
                  <h4>Information</h4>
                  <Link to="#">Privacy Policy</Link> <br />
                  <Link to="$">Terms & Conditions</Link> <br />
                  <Link to="#">Disclaimer</Link> <br />
                  <Link to="#">Support</Link> <br />
                  <Link to="#">Account</Link> <br />
                  <Link to="#">Return Policy</Link> <br />
                </div>
              </Col>
              <Col lg={3} className="p-0">
                <div className="contacts">
                  <h4>Get In Touch</h4>
                  <p>
                    <FontAwesomeIcon icon={faHome} />
                    &nbsp; &nbsp;Nishinomiya, Japan
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPhone} />
                    &nbsp; &nbsp; (+880) 188 822 2633
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} />
                    &nbsp; &nbsp; support@camess.com
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faClock} />
                    &nbsp; &nbsp; Everyday 08:00 - 18:00
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="footer-bottom w-100 m-0">
              <Col>
                <p className="text-center pb-3 pt-3">
                  Copyright &copy; 2022 - All Rights Reserved By Munna Ahmed
                </p>
              </Col>
            </Row>
          </div>
        </div>

        {/* </Container> */}
      </footer>
    </>
  );
};

export default Footer;
