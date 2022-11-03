import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import editImg from "../../assets/img/editIcon.svg";
// import checkmarkIcon from "../../assets/img/checked.svg";
// import editIconPen from "../../assets/img/editer.png";
import { CloseOutlined } from "@ant-design/icons";
import "./update_styles.scss";

export function RepsUpdate({
  showModifyReps,
  setshowModifyReps,
  setReps,
  workout,
  dispatch,
}) {
  const [repsValue, setRepsValue] = useState("");
  const [showInput, setshowInput] = useState(false);
  const [showCloseBtn, setshowCloseBtn] = useState(false);
  const [closeDisabled, setcloseDisabled] = useState(false);
  const [editDisabled, seteditDisabled] = useState(false);

  const handleEditReps = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "PATCH", //if it does not work , use "PUT"
      // body: JSON.stringify(updatedWorkout.updReps),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      // console.log("error occured during updating");
    }
    if (response.ok) {
      setReps(repsValue);
      // console.log(json);
      dispatch({ type: "UPDATE_WORKOUT", payload: json });
    }
    if (repsValue?.length !== 0) {
      setshowBtns(false);
    }
  };
  const [showBtns, setshowBtns] = useState(false);
  useEffect(() => {
    if (repsValue?.length !== 0) {
      setReps("");
    }
    if (repsValue?.length !== 0) {
      setcloseDisabled(true);
      seteditDisabled(true);
    } else if (repsValue?.length === 0) {
      console.log(showInput);
      setcloseDisabled(false);
    }
    if (showInput === false) {
      seteditDisabled(false);
    }
  }, [repsValue, showInput]); //this dependency is important, otherwise the changes wont work
  return (
    <div className="reps-update-controller">
      {showBtns && (
        <div className="reps-update-controller-input-and-btns">
          {showInput && (
            <Input
              allowClear
              value={repsValue}
              onChange={(e) => {
                setRepsValue(e.target.value);
              }}
              type="number"
              className="reps-input-edit"
            />
          )}

          <div className="work-details-left-inner-reps-editbtns-wrapper">
            <Button
              disabled={editDisabled}
              onClick={() => {
                setshowInput(true);
                setshowCloseBtn(true);
              }}
              className="work-details-left-inner-reps-editbtn-editpen"
              style={{
                borderRight: showCloseBtn === true && "1px solid #5898f9b5",
              }}
            >
              <img className="reps-update-edit-icon" src={editImg} alt="" />
            </Button>
            {showCloseBtn && (
              <Button
                disabled={closeDisabled}
                onClick={() => {
                  setshowInput(false);
                  setshowCloseBtn(false);
                }}
                className="work-details-left-inner-reps-editbtn-closeicon"
              >
                <CloseOutlined className="reps-update-close-icon" />
              </Button>
            )}
          </div>

          <Button
            className="work-details-left-inner-reps-edit-okbtn"
            onClick={handleEditReps}
          >
            <span>ok</span>
          </Button>
        </div>
      )}
      {/* trigger the modification by the btn below */}
      {showModifyReps && (
        <div className="reps-update-controller-modify">
          <Button
            onClick={() => {
              setshowBtns(!showBtns);
              setshowModifyReps(!showModifyReps);
            }}
            className="reps-update-controller-modify-btn"
          >
            <span>modify</span>
          </Button>
        </div>
      )}
    </div>
  );
}
