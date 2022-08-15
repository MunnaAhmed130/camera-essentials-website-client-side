import React from "react";
import useTheme from "../../../Hooks/useTheme";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import MidBanner from "../MidBanner/MidBanner";
import Newsletter from "../Newsletter/Newsletter";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  const { darkMode } = useTheme();
  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header />
      <Banner />
      <Products />
      <MidBanner />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
