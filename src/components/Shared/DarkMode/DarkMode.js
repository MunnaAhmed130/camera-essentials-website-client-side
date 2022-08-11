import React from "react";
import { NavDropdown } from "react-bootstrap";
import useTheme from "../../../Hooks/useTheme";

const DarkMode = () => {
  const { setDarkMode } = useTheme();

  const setTheme = (value) => {
    setDarkMode(value);
    localStorage.setItem("darkMode", value);
    console.log(value);
  };

  return (
    <NavDropdown title="Theme" id="basic-nav-dropdown">
      <NavDropdown.Item href="#" onClick={(e) => setTheme(true)}>
        Dark
      </NavDropdown.Item>
      <NavDropdown.Item href="#" onClick={(e) => setTheme(false)}>
        Light
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default DarkMode;
