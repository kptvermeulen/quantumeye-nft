import React from "react";
//import QEVideo from "assets/img/QEVideo.mp4";
//import QEVideoOGV from "assets/img/QEVideo.ogv";
//import QEVideoWEBM from "assets/img/QEVideo.webm";
//import videoGIF from "assets/img/video.gif";
import "styles/videoShowcase.css";
//import LazyLoad from "react-lazyload";
import ReactPlayer from "react-player";

export default function VideoShowcase() {
  return (
    <div className="maxWidthContainer" style={{ padding: 0 }}>
      <div className="videoShowcaseContainer">
        <h1 className="vSTitle">The Quantum Tower</h1>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            playing
            loop
            controls={false}
            onContextMenu={(e) => e.preventDefault()}
            muted
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  showinfo: 0,
                },
              },
            }}
            width="100%"
            height="100%"
            url="https://youtu.be/H_VMArZCGOI?modestbranding=1&showinfo=0"
          />
        </div>
        {/*<div className="playButtonContainer">
          <div
            className="playButtonVideo"
            id="playButtonVideo"
            onClick={() => {
              if (
                !document
                  .getElementById("playButtonVideo")
                  .className.includes("active")
              ) {
                document.getElementById("showCaseVideo").play();
              } else {
                document.getElementById("showCaseVideo").pause();
              }
              document
                .getElementById("playButtonVideo")
                .classList.toggle("active");
            }}
          >
            <svg viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                class=""
              ></path>
            </svg>
          </div>
        </div>
        <LazyLoad>
          <video
            className="QEVideo"
            id="showCaseVideo"
            loop
            onClick={() => {
              if (
                !document
                  .getElementById("playButtonVideo")
                  .className.includes("active")
              ) {
                document.getElementById("showCaseVideo").play();
              } else {
                document.getElementById("showCaseVideo").pause();
              }
              document
                .getElementById("playButtonVideo")
                .classList.toggle("active");
            }}
          >
            <source src={QEVideo} type="video/mp4" />
            <source src={QEVideoOGV} type="video/ogg" />
            <source src={QEVideoWEBM} type="video/webm" />
          </video>
          <img
            className="QEVideoGIF"
            style={{
              position: "absolute",
              left: 0,
              zIndex: -1,
            }}
            src={videoGIF}
            alt="quantum eye video gif"
          />
          </LazyLoad>*/}
      </div>
    </div>
  );
}
