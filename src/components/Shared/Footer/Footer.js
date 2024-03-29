import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faHome,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import useTheme from "../../../Hooks/useTheme";
import "./Footer.css";

const Footer = () => {
  const { darkMode } = useTheme();
  // let footer_bg = darkMode ? "dark-bg" : "light-bg";
  // let darkImg = "https://i.ibb.co/BVcqW6j/one-camera-lens-on-dark-surface.jpg";
  return (
    <>
      <footer
        className={`footer ${darkMode ? "dark-bg dark_footer" : "light-bg"}`}
      >
        {/* <Container className="top-footer  "> */}
        <div className="main-footer">
          <div className="">
            <Container fluid className="p-0">
              <Row
                className="footer-info w-100 m-0"
                lg={4}
                md={2}
                sm={2}
                xs={1}
              >
                <Col xl={4} lg={4} className="p-0">
                  <div className="footer-section">
                    <h4 className="m-0">Why Always Us</h4>
                    <p className="p-0 m-0">
                      We provide quality product with best service for old and
                      new camera Models.
                    </p>
                    <h5 className="pt-3 m-0">Follow Us</h5>
                    <div className="icon-links">
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook"
                      >
                        <FontAwesomeIcon icon={faFacebookF} />
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
                <Col xl={2} lg={2} className="p-0">
                  <div className="links">
                    <h4>Quick LInks</h4>
                    <Link to="#">Service</Link>
                    <Link to="/explore">Explore</Link>
                    <Link to="#">About Us</Link>
                    <Link to="#">Shipping</Link>
                    <Link to="#">Contact</Link>
                  </div>
                </Col>
                <Col xl={3} lg={3} className="p-0">
                  <div className="links information">
                    <h4>Information</h4>
                    <Link to="#">Privacy Policy</Link>
                    <Link to="#">Terms & Conditions</Link>
                    <Link to="#">Disclaimer</Link>
                    <Link to="#">Support</Link>
                    <Link to="#">Account</Link>
                    <Link to="#">Return Policy</Link>
                  </div>
                </Col>
                <Col xl={3} lg={3} className="p-0">
                  <div className="contacts">
                    <h4>Get In Touch</h4>
                    <p>
                      <span>
                        <FontAwesomeIcon icon={faHome} />
                      </span>
                      &nbsp; &nbsp; Nishinomiya, Japan
                    </p>
                    <p>
                      <span>
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                      &nbsp; &nbsp; (+880) 188 822 2633
                    </p>
                    <p>
                      <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      &nbsp; &nbsp; support@camess.com
                    </p>
                    <p>
                      <span>
                        <FontAwesomeIcon icon={faClock} />
                      </span>
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
            </Container>
          </div>
        </div>

        {/* </Container> */}
      </footer>
    </>
  );
};

export default Footer;
