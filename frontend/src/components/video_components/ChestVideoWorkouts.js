import React from "react";

export const ChestVideoWorkouts = ({ videoUrl }) => {
  return (
    <div>
      <video
        style={{ border: "1px solid red" }}
        autoPlay
        loop
        muted
        src={videoUrl}
        width={`100%`}
        height={`100%`}
      ></video>
    </div>
  );
};
