import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'
import { Link } from 'react-router-dom';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <div className="footer-top">
                <Container className="top-footer  pt-3">
                    <Row>
                        <Col sm={12} md={6}>
                            <div >
                                <h4>Camera Essensials</h4>
                                <p><FontAwesomeIcon icon={faPhone} /> 01888222633</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> www.cameraessentials@.com</p>
                                <p><FontAwesomeIcon icon={faFacebook} /> Visit Our FB Page</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div className='links'>
                                <Link to='/home'>Home</Link> <br />
                                <Link to='/explore'>explore</Link> <br />
                                <a href="#">About Us</a> <br />
                                <Link to='/login'>Login</Link> <br />
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
            <div className="footer-bottom">
                <p>&copy;All Rights Reserved By Munna Ahmed</p>
            </div>
        </>
    );
};

export default Footer;