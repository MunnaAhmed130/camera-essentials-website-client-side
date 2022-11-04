import { Button } from "@mui/material";
import React from "react";
import useTheme from "../../../Hooks/useTheme";
import "./Newsletter.css";

const Newsletter = () => {
  const { darkMode } = useTheme();
  const submit = (e) => {
    e.preventDefault();
    document.getElementById("newsletter-email").value = "";
  };
  return (
    <div
      className={`newsletter ${
        darkMode ? "dark_newsletter" : "light_newsletter"
      }`}
    >
      <div className="newsletter-info ">
        <div className="newsletter-heading-container">
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <h3>GET UPDATE FOR NEWS, OFFERS</h3>
        </div>
        <form onSubmit={(e) => submit(e)} className="newsletter-form">
          <input
            id="newsletter-email"
            type="email"
            placeholder="john@mail.com"
            required
          />
          <Button type="submit">Subscribe</Button>
          {/* <button type="submit">SUBSCRIBE</button> */}
        </form>
        <p className=" text-uppercase m-0">Don't worry, We don't spam</p>
      </div>
    </div>
  );
};

export default Newsletter;
