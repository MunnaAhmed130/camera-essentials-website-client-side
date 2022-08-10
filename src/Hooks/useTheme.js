import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";

const useTheme = () => {
  const Theme = useContext(ThemeContext);
  return Theme;
};
// const darkMode = useContext(ThemeContext);
export default useTheme;
