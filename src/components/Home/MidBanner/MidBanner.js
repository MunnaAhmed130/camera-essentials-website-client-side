import React from "react";

const MidBanner = () => {
  return (
    <div className="mid-banner">
      {/* <video width="600" height="400" autoPlay muted loop>
        <source
          src="https://www.youtube.com/embed/CPxdxcnMPHA?controls=0&amp;start=6"
          type="video/mp4" */}
      {/* /> */}
      {/* <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"width="788.54" height="443" type="text/html" src="https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=4&end=0&vq=hd1080&origin=http://youtubeembedcode.com"> */}
      <div className="iframe-container">
        <iframe
          className="iframe"
          src="https://www.youtube.com/embed/CPxdxcnMPHA?controls=0&start=6"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      {/* </video> */}
    </div>
  );
};

export default MidBanner;
