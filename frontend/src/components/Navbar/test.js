import React from "react";
import VideoPlayer from "react-background-video-player";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <VideoPlayer
        className="video"
        src={
          "https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1d34728e1b77983805b34daad7&profile_id=165&oauth2_token_id=57447761"
        }
        autoPlay={true}
        muted={true}
      />
      <div className="mainInput">
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Where to?"
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
