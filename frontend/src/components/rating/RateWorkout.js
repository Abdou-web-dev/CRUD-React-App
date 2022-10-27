import { Button, Rate } from "antd";
import React, { useState } from "react";
import ratingIcon from "../../assets/img/ratingIcon.svg";
import "./rate_styles.scss";

export const RateWorkout = ({ workoutTitle }) => {
  const [value, setvalue] = useState(1);
  function handleChange() {
    setvalue(value);
  }
  const [disabled, setdisabled] = useState(false);
  const [cursor, setCursor] = useState("");
  const [color, setcolor] = useState("");
  const [rated, setrated] = useState(false);
  const [btnDisabled, setbtnDisabled] = useState(false);
  const [topBorder, settopBorder] = useState(false);

  function handleRateClick() {
    setdisabled(true);
    setCursor("not-allowed");
    setTimeout(() => {
      setcolor("rgba(255, 255, 0, 0.6)");
      setbtnDisabled(true);
    }, 1500);
    setTimeout(() => {
      setrated(true);
    }, 1500);
    setTimeout(() => {
      settopBorder("1px solid lightgray");
    }, 2500);
  }

  return (
    <div className="rate-workout">
      <div className="rate-workout-top" style={{ border: topBorder }}>
        {workoutTitle && (
          <div className="rate-workout-top-title">
            <span>{workoutTitle}</span>
          </div>
        )}
        <div className="rate-workout-top-btn-and-rate">
          <div className="rate-workout-rateantd-div" style={{ cursor: cursor }}>
            <Rate
              disabled={disabled}
              className="rate-workout-rateantd"
              allowClear={true}
              defaultValue={1}
              // onChange={handleChange}
              // value={value}
              style={{ color: color }}
            />
          </div>
          <div className="rate-workout-btn">
            <Button
              disabled={btnDisabled}
              onClick={handleRateClick}
              className="rate-workout-antbtn"
            >
              <img src={ratingIcon} alt="" />
              <span>Rate</span>
            </Button>
          </div>
        </div>
      </div>
      {rated && (
        <div className="rate-workout-bottom">
          <span>
            {`You have successfully rated this chest workout. Check out the other workouts !`}
          </span>
        </div>
      )}
    </div>
  );
};
