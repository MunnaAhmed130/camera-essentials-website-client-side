import { YoutubeSearchedFor } from "@mui/icons-material";
import React, { useState } from "react";
import { useEffect } from "react";
import YouTube from "react-youtube";
import useTheme from "../../../Hooks/useTheme";

const MidBanner = () => {
  const { darkMode } = useTheme();
  let viewportWidth;
  // let setViewportWidth = function () {
  viewportWidth = window.innerWidth;
  let i = 0;
  let videoId_arr = ["CPxdxcnMPHA", "9JdigMAsi1A", "WeG8_wg9RIA"];
  // let startSeconds_arr = [6, 6, 6];
  // let endSeconds_arr = [8, 8, 8];
  let section = {
    start: 6,
    end: 47,
  };
  var player;
  // function onYouTubeIframeAPIReady() {
  //   player = new YouTube.Player(
  //     'player',
  //     {

  //       height: '360',
  //       width: '640',
  //       videoId: 'CPxdxcnMPHA',
  //       playerVars:{
  //         autoplay: '1',
  //         mute: '1'
  //       },
  //       events: {
  //         'onReady': onPlayerReady,
  //         'onStateChange': onPlayerStateChange
  //       }
  //     }
  //   );
  // }

  // const restartVideoSection = (player) => {
  //   player.seekTo(section.start);
  // };
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
      start: section.start,
      end: section.end,
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
    // player.seekTo(section.start);
    // player.seekTo(startSeconds_arr[i]);
    player.playVideo();

    // console.log()
  };
  // console.log(YouTube.PlayerState);
  const onStateChange = (e) => {
    player = e.target;
    // if (e.data === YouTube.PlayerState.ENDED) {
    //   i++;
    //   if (typeof videoId_arr[i] === "undefined") return;
    //   player.loadVideoById({
    //     videoId: videoId_arr[i],
    //     startSeconds: startSeconds_arr[i],
    //     endSeconds: endSeconds_arr[i],
    //   });
    // }
    if (e.data == YouTube.PlayerState.PLAYING) {
      let duration = section.end - section.start;
      // setTimeout(restartVideoSection(player), duration * 1000);
      setTimeout(restartVideo, duration * 1000);
      // setTimeout((player) => {
      //   player.seekTo(section.start);
      // }, duration * 1000);
    }
    console.log(player.getPlayerState());
  };
  const restartVideo = () => {
    player.seekTo(section.start);
  };
  let videoId = videoId_arr[i];
  // console.log(videoId);
  return (
    <div
      className={`mid-banner ${
        darkMode ? "dark-mid-banner" : "light-mid-banner"
      }`}
    >
      <div className="mid-banner-info ">
        <p className="text-uppercase">post vlogs with camera x9</p>
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
