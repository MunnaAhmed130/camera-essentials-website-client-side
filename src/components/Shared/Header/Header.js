import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'


const style = {
    lineHeight: '35px',
    textDecoration: 'none',
    color: 'white',
    fontWeight: 600
}
const Header = () => {
    const { user, logOut } = useAuth();
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
                            <Link style={{ ...style, marginRight: "10px" }} to='/purchase'>Purchase</Link>

                            {user?.email && <Link style={{ ...style, marginRight: "10px" }} to='/dashboard'>Dashboard</Link>}
                            {user?.email && <p style={{ ...style, marginRight: "10px", display: 'inline-block', marginBottom: 0 }}>{user.displayName}</p>}
                            {user?.photoURL && <img className="profile-img" src={user.photoURL} />}
                            {user?.email
                                ?
                                <Button onClick={logOut}>Log Out</Button>
                                :
                                <Link style={{ ...style }} to='/login'>Login</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;