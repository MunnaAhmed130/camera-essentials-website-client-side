import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const theme = JSON.parse(localStorage.getItem("darkMode"));
  // console.log(theme);
  const [darkMode, setDarkMode] = useState(theme);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
