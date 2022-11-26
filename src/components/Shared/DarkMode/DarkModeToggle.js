import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
// import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useTheme from "../../../Hooks/useTheme";
import "./DarkMode.css";

const DarkModeToggle = () => {
  const { setDarkMode, darkMode } = useTheme();
  //   console.log(darkMode);

  const setTheme = (value) => {
    setDarkMode(value);
    localStorage.setItem("darkMode", value);
    console.log(value);
  };
  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        id="check"
        onClick={() => setTheme(!darkMode)}
      />
      <label className="label" for="check">
        <FontAwesomeIcon icon={faMoon} />
        <FontAwesomeIcon icon={faSun} />
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
