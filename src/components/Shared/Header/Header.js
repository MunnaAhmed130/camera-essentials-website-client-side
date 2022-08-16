import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useTheme from "../../../Hooks/useTheme";
import DarkMode from "../DarkMode/DarkMode";
import User from "../User/User";
import "./Header.css";

const style = {
  // lineHeight: "40px",
  padding: ".5rem",
  textDecoration: "none",
  fontWeight: 400,
  fontSize: "16px",
};
const Header = () => {
  const { user, logOut } = useAuth();
  const { darkMode } = useTheme();
  console.log(user);
  // if (localStorage) {
  //   let theme = localStorage.getItem("darkTheme");
  //   setDarkMode(theme);
  // }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      style={{ zIndex: 1090 }}
    >
      <Container fluid className="nav">
        <Navbar.Brand className="nav-name">Camera Essentials</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end collapse">
          <Nav>
            <Link style={{ ...style, marginRight: "10px" }} to="/home">
              Home
            </Link>
            <Link style={{ ...style, marginRight: "10px" }} to="/explore">
              Explore
            </Link>
            {/* <Link style={{ ...style, marginRight: "10px" }} to="/purchase">
              Purchase
            </Link> */}
            <DarkMode></DarkMode>

            {user?.email && (
              <Link style={{ ...style, marginRight: "10px" }} to="/dashboard">
                Dashboard
              </Link>
            )}
            {user?.email && (
              <p
                style={{
                  ...style,
                  marginRight: "10px",
                  display: "inline-block",
                  marginBottom: 0,
                }}
              >
                {user.displayName}
              </p>
            )}
            {/* {user?.photoURL && (
              <div className="profile-pic">
                <img
                  className="profile-img"
                  src={user.photoURL}
                  alt="profile-pic"
                />
              </div>
            )} */}
            {/* {user?.email ? (
              <Button className="nav-button" onClick={logOut}>
                Log Out
              </Button>
            ) : (
              <Link style={{ ...style }} to="/login">
                Login
              </Link>
            )} */}

            {user?.email && <User></User>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
