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
};
