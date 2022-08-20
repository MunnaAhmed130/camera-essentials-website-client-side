import React from "react";
import { NavDropdown } from "react-bootstrap";
import useTheme from "../../../Hooks/useTheme";
import "./DarkMode.css";
const DarkMode = () => {
  const { setDarkMode } = useTheme();

  const setTheme = (value) => {
    setDarkMode(value);
    localStorage.setItem("darkMode", value);
    console.log(value);
  };

  return (
    <NavDropdown title="Theme" id="nav_theme_dropdown" className="nav_link">
      <NavDropdown.Item
        href="#"
        className="theme_dropdown_option"
        onClick={(e) => setTheme(true)}
      >
        Dark
      </NavDropdown.Item>
      <NavDropdown.Item
        href="#"
        className="theme_dropdown_option"
        onClick={(e) => setTheme(false)}
      >
        Light
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default DarkMode;
