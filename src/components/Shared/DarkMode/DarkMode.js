import React, { useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import useTheme from "../../../Hooks/useTheme";

const DarkMode = () => {
  const { setDarkMode } = useTheme();
  // useEffect(() => {}, [setDarkMode]);
  //   console.log(darkMode);
  return (
    <NavDropdown title="Theme" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1" onClick={() => setDarkMode(true)}>
        Dark
      </NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2" onClick={() => setDarkMode(false)}>
        Light
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default DarkMode;
