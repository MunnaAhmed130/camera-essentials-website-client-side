import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const style = {
    lineHeight: '35px',
    textDecoration: 'none',
    color: 'white',
    fontWeight: 600
}
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Camera Essentials</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav >
                            <Link style={{ ...style, marginRight: "10px" }} to='/home'>Home</Link>
                            <Link style={{ ...style, marginRight: "10px" }} to='/explore'>explore</Link>
                            <Link style={{ ...style }} to='/login'>Login</Link>
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;