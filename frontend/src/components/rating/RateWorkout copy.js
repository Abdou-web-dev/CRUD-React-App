import DeleteIcon from "@mui/icons-material/Delete";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import editIcon from "../../assets/img/editer.png";

import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
// date fns package
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import "./workout_details.scss";

export const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const handleDeleteWorkout = () => {
    setOpenPopconfirm(true);
    setOpenBackdrop(!openBackdrop);
    setshowBorder(!showBorder);
    setcontainerBoxShadow(`none`);
  };
  const handleEdit = () => {
    setborder("1px solid black");
    //code to the delete from the frontend must be added here
  };

  return (
    <Stack className={className} direction="row">
      <div
        className="work-details-left-content"
        style={{
          width: "80%",
        }}
      >
        <div className="work-details-left-content-inner">
          <IconButton
            className="work-details-left-inner-iconbtn"
            onClick={handleCollapseclick}
          >
            {showCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <h4>{workout?.title}</h4>
          <div className="work-details-left-inner-load">
            <span className="work-details-left-inner-load-span1">
              <strong>
                Load (<span className="span1-kg">kg</span> ) :
              </strong>
            </span>
            <span className="work-details-left-inner-load-span2">
              {workout?.load}
            </span>
          </div>

          <div className="work-details-left-inner-reps">
            <span className="work-details-left-inner-reps-span1">
              <strong>Number of reps : </strong>
            </span>
            <span className="work-details-left-inner-reps-span2">
              {workout?.reps}
            </span>
          </div>

          <div className="work-details-left-inner-date">
            <span>
              {formatDistanceToNow(new Date(createdAt), {
                addSuffix: true,
              })}
            </span>
          </div>
        </div>
      </div>

      <div className="work-details-right-content" style={{ width: "20%" }}>
        <div className="work-details-right-inner control-btns">
          <IconButton
            className="work-details-right-inner-iconbtn"
            onClick={handleDeleteWorkout}
          >
            <DeleteIcon />
          </IconButton>

          <IconButton
            className="icon-btn-edit work-details-right-inner-iconbtn"
            onBlur={() => setborder("")}
            onKeyDown={() => setborder("")}
            onClick={handleEdit}
          >
            <img className="edit-img" src={editIcon} alt="" />
          </IconButton>
        </div>
      </div>
    </Stack>
  );
};
