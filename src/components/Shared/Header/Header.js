import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useTheme from "../../../Hooks/useTheme";
import DarkMode from "../DarkMode/DarkMode";
import User from "../User/User";
import "./Header.css";

// const style = {
//   // lineHeight: "40px",
//   // padding: ".5rem",
// };
const Header = () => {
  const { user } = useAuth();
  const { darkMode } = useTheme();
  // console.log(user);
  // if (localStorage) {
  //   let theme = localStorage.getItem("darkTheme");
  //   setDarkMode(theme);
  // }

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      // bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      style={{ zIndex: 1090 }}
      className=" justify-content-center"
    >
      {/* This div is a customizable container */}
      <div className="nav">
        <Navbar.Brand className="nav-name">Camera Essentials</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end collapse">
          <Nav>
            <NavLink
              className="nav_link"
              activeClassName="active-link"
              exact
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="nav_link "
              activeClassName="active-link"
              to="/explore"
            >
              Explore
            </NavLink>
            {/* <Link style={{ ...style, marginRight: "10px" }} to="/purchase">
              Purchase
            </Link> */}

            {user?.email && (
              <NavLink
                className="nav_link"
                activeClassName="active-link"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            )}

            <DarkMode></DarkMode>
            {/* {user?.email && (
              <p
                style={{
                  ...style,
                  marginRight: "10px",
                  display: "inline-block",
                  marginBottom: 0,
                }}
                className="nav_link"
              >
                {user.displayName}
              </p>
            )} */}
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

            {user?.email ? (
              <User></User>
            ) : (
              <NavLink
                className="nav_link"
                activeClassName="active-link"
                to="/login"
              >
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
