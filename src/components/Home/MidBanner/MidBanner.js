import React from "react";
import YouTube from "react-youtube";
import useTheme from "../../../Hooks/useTheme";

const MidBanner = () => {
  const { darkMode } = useTheme();
  // let viewportWidth;
  // viewportWidth = window.innerWidth;
  let i = 0;
  let videoId_arr = ["CPxdxcnMPHA", "9JdigMAsi1A"];
  let videoId = "CPxdxcnMPHA";
  let startSeconds_arr = [6, 6];
  let endSeconds_arr = [47, 49];
  let section = {
    start: 6,
    end: 47,
  };
  var player;

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: "1",
      playsinline: "1",
      showinfo: "0",
      loop: "1",
      mute: "1",
      autopause: "0",
      controls: "0",
      rel: "0",
      // start: startSeconds_arr[i],
      // end: endSeconds_arr[i],
      // start: section.start,
      // end: endSeconds_arr[i],
      cc_load_policy: "0",
      iv_load_policy: "3",
      modestbranding: "1",
      autohide: "1",
      // origin: "https://www.youtube.com",
      //   origin: "http://localhost:3000",
    },
  };
  const _onReady = (e) => {
    player = e.target;
    // player.j.i.playerVars.seekTo(10);
    // console.log(player.j.i.playerVars);
    console.log(player);
    player.seekTo(section.start);
    player.playVideo();

    // console.log()
  };
  // console.log(YouTube.PlayerState);
  const onStateChange = (e) => {
    player = e.target;
    // eslint-disable-next-line eqeqeq
    if (e.data == YouTube.PlayerState.PLAYING) {
      let duration = endSeconds_arr[i] - section.start;
      setTimeout(restartVideo, duration * 1000);
    }
    // console.log(player.getPlayerState());
  };

  const restartVideo = () => {
    // if (typeof videoId_arr[i] === "undefined") return 0;
    ++i;
    if (typeof videoId_arr[i] === "undefined") {
      i = 0;
      // if (typeof videoId_arr[i] === "undefined") return;
      player.loadVideoById({
        videoId: videoId_arr[i],
        startSeconds: section.start,
        endSeconds: endSeconds_arr[i],
      });
    }
    player.loadVideoById({
      videoId: videoId_arr[i],
      startSeconds: startSeconds_arr[1],
      endSeconds: endSeconds_arr[1],
    });
    // player.seekTo(section.start);
  };
  // let videoId = videoId_arr[i];
  // console.log(videoId);
  return (
    <div
      className={`mid-banner ${
        darkMode ? "dark-mid-banner" : "light-mid-banner"
      }`}
    >
      <div className="mid-banner-info ">
        <p className="text-uppercase  ">post vlogs with camera x9</p>
        <h2>The Best Digital Camera</h2>
      </div>

      <div className="iframe-container">
        {/* <iframe
          className={`iframe ${viewportWidth > 500 ? "iframe_disable" : ""}`}
          type="text/html"
          src="https://www.youtube-nocookie.com/embed/CPxdxcnMPHA?playlist=CPxdxcnMPHA,9JdigMAsi1A&amp;start=6&amp;end=47&amp;loop=1&amp;autoplay=1&amp;mute=1&amp;autopause=0&amp;controls=0&amp;rel=0&amp;playsinline=1&amp;vq=hd1080&amp;iv_load_policy=3&amp;origin=http://localhost:3000/&amp;enablejsapi=1&amp;modestbranding=1"
          title="video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
          allowFullScreen
          // muted
        ></iframe> */}

        <YouTube
          // className={`iframe ${viewportWidth > 500 ? "iframe_disable" : ""}`}
          className="iframe"
          // defer
          videoId={videoId}
          // videoId="CPxdxcnMPHA"
          opts={opts}
          onReady={(e) => _onReady(e)}
          onStateChange={(e) => onStateChange(e)}
          // onEnd={(e) => iframeOnEnd(e)}
        />
      </div>
    </div>
  );
};

export default MidBanner;
