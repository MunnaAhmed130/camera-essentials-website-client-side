import React from "react";
import useTheme from "../../../Hooks/useTheme";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import ExploreSection from "../ExploreSection.js/ExploreSection";
// import ExploreProducts from "../ExploreProducts/ExploreProducts";
import "./Explore.css";

const Explore = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`explore ${darkMode && "dark"}`}>
      <Header />
      <ExploreSection />
      <Footer />
    </div>
  );
};

export default Explore;
