import React from "react";
import closeX from "../../assets/img/closeX.svg";
import emailIcon from "../../assets/img/emailIcon.svg";
import passwordIcon from "../../assets/img/passwordIcon.svg";
import trashIcon from "../../assets/img/trashIcon.svg";
import userIcon from "../../assets/img/userIcon.svg";

import favorite from "../../assets/img/favorite.png";
import favoriteGray from "../../assets/img/favoriteGray.png";
import infoPNG from "../../assets/img/infoPNG.png";
import left from "../../assets/img/left-arr.svg";
import leftArrowIcon from "../../assets/img/left-arrow.png";
import left_green from "../../assets/img/left_green.svg";
import clearIcon from "../../assets/img/remove.png";
import right from "../../assets/img/right-arr.svg";
import rightArrowIcon from "../../assets/img/right-arrow.png";
import right_green from "../../assets/img/right_green.svg";
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
export const RightArrow = () => {
  return <img src={rightArrowIcon} alt="" />;
};
export const LeftArrow = () => {
  return <img src={leftArrowIcon} alt="" />;
};
export const ClearIcon = () => {
  return (
    <img style={{ width: "20px", height: "20px" }} src={clearIcon} alt="" />
  );
};
export const NextArrow = () => {
  return <img style={{ width: "70px", height: "70px" }} src={right} alt="" />;
};
export const PrevArrow = () => {
  return <img style={{ width: "70px", height: "70px" }} src={left} alt="" />;
};

export const NextArrowList = () => {
  return (
    <img style={{ width: "50px", height: "50px" }} src={right_green} alt="" />
  );
};
export const PrevArrowList = () => {
  return (
    <img style={{ width: "50px", height: "50px" }} src={left_green} alt="" />
  );
};
export const HeartIcon = () => {
  return (
    <img style={{ width: "30px", height: "30px" }} src={favorite} alt="" />
  );
};

export const HeartIconGray = () => {
  return (
    <img style={{ width: "30px", height: "30px" }} src={favoriteGray} alt="" />
  );
};
export const EmailIcon = () => {
  return (
    <img src={emailIcon} style={{ width: "50px", height: "50px" }} alt="" />
  );
};

export const UserIcon = () => {
  return (
    <img src={userIcon} style={{ width: "50px", height: "50px" }} alt="" />
  );
};
export const PasswordIcon = () => {
  return (
    <img src={passwordIcon} style={{ width: "50px", height: "50px" }} alt="" />
  );
};
export const TrashIcon = () => {
  return (
    <>
      <img src={trashIcon} alt="" style={{ width: "30px", height: "30px" }} />
    </>
  );
};
export const CloseX = () => {
  return (
    <>
      <img src={closeX} alt="" style={{ width: "30px", height: "30px" }} />
    </>
  );
};
