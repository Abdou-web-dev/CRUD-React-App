import { Button } from "antd";
import { useState } from "react";
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
            <div className="workout-infos-span2-wrapper-div">
              <span className="workout-infos-span2">{infos?.benefits?.b1}</span>
            </div>
            <div className="workout-infos-span2-wrapper-div">
              <span className="workout-infos-span3">{infos?.benefits?.b2}</span>
            </div>
            {infos?.benefits?.b3 && (
              <div className="workout-infos-span2-wrapper-div">
                <span className="workout-infos-span4">
                  {infos?.benefits?.b3}
                </span>
              </div>
            )}
          </div>

          <div className="workout-infos-howto-do">
            <span className="workout-infos-howto-do-span1">How to do it :</span>
          </div>

          <div className="workout-infos-sign">
            <div style={{ overflow: overflow, height: height }}>
              <span className="workout-infos-sign-span">{infos?.howToDo}</span>
            </div>
            <Button className="workout-infos-sign-btn" onClick={handleBtnClick}>
              {overflow === "hidden" ? (
                <img src={plus} alt="" />
              ) : (
                <img src={minus} alt="" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
