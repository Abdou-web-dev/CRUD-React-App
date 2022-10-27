import React from "react";
import infoPNG from "../../assets/img/infoPNG.png";
import rate from "../../assets/img/star.png";

export const VideoPlayer = () => {
  return (
    <svg
      width="45px"
      height="45px"
      viewBox="0 0 24 24"
      id="60e21fbe-e09d-4856-b904-62b7762606e2"
      data-name="Livello 1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <title>prime</title> */}
      <path
        id="31625ee0-a24e-42ee-acc5-7a19af8dfb28"
        data-name="video"
        d="M20.27,6.38L16,11V8a2,2,0,0,0-2-2H4A2,2,0,0,0,2,8V18a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V15.5l4.29,4.29A1,1,0,0,0,22,19.09v-12A1,1,0,0,0,20.27,6.38Z"
      />
    </svg>
  );
};
export const InfosvgIcon = () => {
  return <img width={45} height={45} src={infoPNG} alt="" />;
};
export const RateIcon = () => {
  return <img width={45} height={45} src={rate} alt="" />;
};

export const PlayIcon = () => {
  return (
    <svg
      width={68}
      height={68}
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 201.751 201.751"
      // style="enable-background:new 0 0 201.751 201.751;"
    >
      <g>
        <path
          // style="fill:#010002;"
          d="M39.027,0v201.751l123.696-100.87L39.027,0z M45.516,13.668l106.943,87.217L45.516,188.094V13.668z"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
