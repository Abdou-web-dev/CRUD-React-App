import { Button } from "antd";
import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import redirect from "../../assets/img/redirect.png";
import { PlayIcon } from "../icons/Icons";
import "./video_styles.scss";

export const ChestVideoWorkouts = ({ videoUrl }) => {
  const [border, setborder] = useState("");

  function handlemouseOver() {
    setTimeout(() => {
      setborder("2px solid gray");
    }, 500);
  }
  if (videoUrl) {
    return (
      <div className="player-wrapper">
        <div className="player-wrapper-vid">
          <ReactPlayer
            width="100%"
            height="90%"
            className="react-player"
            playIcon={<PlayIcon />}
            controls
            light
            url={videoUrl}
            style={{ border: border, padding: "2px" }}
            // onError={() => console.log("none")}
          />
        </div>
        <div className="player-wrapper-redirect">
          <Button
            onMouseOver={handlemouseOver}
            className="player-wrapper-red-btn"
          >
            <a href={videoUrl} target="_blank">
              <img src={redirect} alt="" />
            </a>
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="chest-video-text">
        <span>Search in Youtube to know more about this workout !</span>
      </div>
    );
  }
};

// Are you trying to play a Youtube video in the the <video> tag?
// That won't work because a Youtube link gives a web page (eg: .html text) but for playback in a video tag you need a video file (eg: .mp4).
//You must ensure the URL contains embed rather watch as the /embed endpoint allows outside requests, whereas the /watch endpoint does not.
//<div>
// <iframe
//   style={{ border: "1px solid red" }}
//   src={videoUrl}
//   width={`100%`} height={`100%`}
//   frameborder="0"
//   allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen
// ></iframe>
// </div>
