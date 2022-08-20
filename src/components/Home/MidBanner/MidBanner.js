import React from "react";

const MidBanner = () => {
  let viewportWidth;
  // let setViewportWidth = function () {
  viewportWidth = window.innerWidth;
  return (
    <div className="mid-banner">
      <p>post vlogs with camera x9</p>
      <h2>The Best Digital Camera</h2>
      <div className="iframe-container">
        <iframe
          className={`iframe ${viewportWidth > 500 ? "iframe_disable" : ""}`}
          type="text/html"
          src="https://www.youtube-nocookie.com/embed/CPxdxcnMPHA?playlist=CPxdxcnMPHA&amp;start=6&amp;end=47&amp;loop=1&amp;autoplay=1&amp;mute=1&amp;autopause=0&amp;controls=0&amp;rel=0&amp;playsinline=1&amp;vq=hd1080&amp;iv_load_policy=3&amp;origin=http://localhost:3000/&amp;enablejsapi=1&amp;modestbranding=1"
          title="video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
          allowFullScreen
          // muted
        ></iframe>
      </div>
    </div>
  );
};

export default MidBanner;
