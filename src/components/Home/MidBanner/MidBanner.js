import React from "react";

const MidBanner = () => {
  return (
    <div className="mid-banner">
      <div className="iframe-container">
        <iframe
          className="iframe"
          src="https://www.youtube.com/embed/CPxdxcnMPHA?playlist=CPxdxcnMPHA&amp;autopause=0&amp;controls=0&mp;start=6&amp;end=46&amp;rel=0&amp;playsinline=1&amp;vq=hd1080&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;enablejsapi=1"
          title="video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
          // allowFullScreen
          // muted
        ></iframe>
      </div>
    </div>
  );
};

export default MidBanner;
