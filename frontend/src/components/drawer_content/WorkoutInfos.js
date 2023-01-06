import { Button } from "antd";
import { useState } from "react";
import googleIcon from "../../assets/img/googleIcon.svg";
import minus from "../../assets/img/minus.png";
import plus from "../../assets/img/plus-sign.svg";
import "./drawer_content_styles.scss";

export const WorkoutInfos = ({ workoutTitle, infos }) => {
  const [overflow, setoverflow] = useState("hidden");
  const [height, setheight] = useState("55px");
  const [paddingBottom, setpaddingBottom] = useState("");

  function handleBtnClick() {
    if (overflow === "hidden") {
      setoverflow("visible");
      setheight("fit-content");
      setpaddingBottom("300px");
    } else if (overflow === "visible") {
      setoverflow("hidden");
      setheight("55px");
      setpaddingBottom("100px");
    }
  }
  return (
    <div className="workout-infos" style={{ paddingBottom: paddingBottom }}>
      <div className="workout-infos-left">
        <div className="workout-infos-title">
          <span>{workoutTitle}</span>
        </div>

        <div className="workout-infos-other-infos">
          <div className="workout-infos-span1-wrapper">
            <span>{infos?.description}</span>
          </div>

          <div className="workout-infos-span2-wrapper">
            <span className="workout-infos-span1">
              The workout's benefits :
            </span>
            {infos?.benefits ? (
              <>
                <div className="workout-infos-span2-wrapper-div">
                  <span className="workout-infos-span2">
                    {infos?.benefits?.b1}
                  </span>
                </div>
                <div className="workout-infos-span2-wrapper-div">
                  <span className="workout-infos-span3">
                    {infos?.benefits?.b2}
                  </span>
                </div>
                {infos?.benefits?.b3 && (
                  <div className="workout-infos-span2-wrapper-div">
                    <span className="workout-infos-span4">
                      {infos?.benefits?.b3}
                    </span>
                  </div>
                )}
              </>
            ) : (
              // <div className="workout-google-btn1">
              <Button
                className="workout-google-btn1"
                target="_blank"
                href={`https://www.google.com/search?q=${workoutTitle}`}
                // q stans for query
              >
                <span>Google it</span>
              </Button>
              // </div>
            )}
          </div>

          <div className="workout-infos-howto-do">
            <span className="workout-infos-howto-do-span1">How to do it :</span>
          </div>

          <div className="workout-plus-sign-and-how-to-do-text">
            {infos?.howToDo ? (
              <div style={{ overflow: overflow, height: height }}>
                <span className="workout-plus-sign-span">{infos?.howToDo}</span>
              </div>
            ) : (
              <div className="workout-google-btn2-wrapper">
                <Button
                  className="workout-google-btn2"
                  target="_blank"
                  href={`https://www.google.com/search?q=${
                    "how to do " + workoutTitle
                  }`}
                  // q stans for query
                >
                  <img width={`34px`} height="34px" src={googleIcon} alt="" />
                </Button>
              </div>
            )}
            {infos && (
              <Button
                className="workout-plus-sign-btn"
                onClick={handleBtnClick}
              >
                {overflow === "hidden" ? (
                  <img src={plus} alt="" />
                ) : (
                  <img src={minus} alt="" />
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
