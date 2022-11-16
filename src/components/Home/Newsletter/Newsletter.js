import { Button } from "@mui/material";
import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const submit = (e) => {
    e.preventDefault();
    document.getElementById("newsletter-email").value = "";
  };
  return (
    <div className="newsletter">
      <div className="newsletter__content ">
        <div className="heading__container">
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <h6>GET UPDATE FOR NEWS, OFFERS</h6>
        </div>
        <form onSubmit={(e) => submit(e)} className="newsletter__form">
          <input
            id="newsletter-email"
            type="email"
            placeholder="john@mail.com"
            required
          />
          <Button type="submit">Subscribe</Button>
          {/* <button type="submit">SUBSCRIBE</button> */}
        </form>
        <p className="text-uppercase m-0">Don't worry, We don't spam</p>
      </div>
    </div>
  );
};

export default Newsletter;
