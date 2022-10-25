import DeleteIcon from "@mui/icons-material/Delete";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShareIcon from "@mui/icons-material/Share";
import { Backdrop, Collapse, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Drawer, message, Popconfirm } from "antd";
import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
// date fns package
import InfoIcon from "@mui/icons-material/Info";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import "./workout_details.scss";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const [className, setClassName] = React.useState(`workout-details`);
  React.useEffect(() => {
    if (workout) {
      setTimeout(() => setClassName("changeBGColor workout-details"), 2000);
    }
  }, []);

  const [showCollapse, setshowCollapse] = React.useState(true);

  const handleCollapseclick = () => {
    if (showCollapse === true) {
      setshowCollapse(false);
    } else {
      setshowCollapse(true);
    }
  };

  const handleDelete = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  //Concerning the Popconfirm antd
  const [openPopconfirm, setOpenPopconfirm] = useState(false);
  const [showBorder, setshowBorder] = useState(false);
  const [openBackdrop, setOpenBackdrop] = React.useState(false);

  const confirm = () => {
    handleDelete();
    setOpenBackdrop(!openBackdrop);
    message.success("Deleted !", 0.6); //This is a prompt message for success, and it will disappear in 0.6 seconds
  };
  const cancel = () => {
    setOpenPopconfirm(false);
    setOpenBackdrop(!openBackdrop);
    setshowBorder(!showBorder);
    message.error("Kept !", 0.6);
  };
  const handleDeleteWorkout = () => {
    setOpenPopconfirm(true);
    setOpenBackdrop(!openBackdrop);
    setshowBorder(!showBorder);
  };
  //Concerning the Drawer of antd
  const [openDrawer, setOpenDrawer] = useState(false);
  const showDrawer = () => {
    setOpenDrawer(true);
  };
  const onClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <div
        className={`workout-details-container ${
          showBorder === true ? `border-selected` : ``
        } `}
      >
        <div className="site-drawer-render-in-current-wrapper">
          <Collapse in={showCollapse} collapsedSize="90px">
            <Stack direction="row" className={className}>
              <div
                className="work-details-left-content"
                style={{
                  width: "85%",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    flexDirection: `column`,
                  }}
                >
                  <IconButton
                    style={{
                      alignSelf: "flex-start",
                    }}
                    onClick={handleCollapseclick}
                  >
                    {showCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                  <h4>{workout.title}</h4>
                  <span>
                    <strong>Load (kg) : </strong>
                    {workout.load}
                  </span>
                  <span>
                    <strong>Number of reps : </strong>
                    {workout.reps}
                  </span>
                  <span>
                    {formatDistanceToNow(new Date(workout.createdAt), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
              </div>

              <div
                className="work-details-right-content"
                style={{ width: "15%" }}
              >
                {/* add a modal to do a prompt check before deleting an item */}
                <Popconfirm
                  title="Are you sure to delete this task?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                  open={openPopconfirm}
                >
                  <IconButton
                    //differnce  between setOpenBackdrop(false) and setOpenBackdrop(cur=>!cur) or setOpenBackdrop(!openBackdrop) is that the 2 last statement will create a toggle logic hence a infinite loop onclick on esc , whereas the 1st one will trigger only once
                    onKeyDown={() => {
                      setOpenPopconfirm(false);
                      setshowBorder(false);
                      setOpenBackdrop(false);
                    }} //onClick on Esc key
                    // never use onBlur method here because it prevents the items from being deleted
                    onClick={handleDeleteWorkout}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Popconfirm>

                <IconButton>
                  <ShareIcon></ShareIcon>
                </IconButton>

                <IconButton onClick={showDrawer}>
                  <InfoIcon />
                </IconButton>
              </div>
            </Stack>
          </Collapse>
        </div>
      </div>
      <Backdrop
        // onKeyDown={() => setOpenBackdrop(!openBackdrop)}
        sx={{ color: "red", zIndex: 1 }}
        open={openBackdrop}
      >
        {/* content */}
      </Backdrop>
      {/* Antd Drawer  */}
      <Drawer
        title="Basic Drawer"
        // placement="right"
        closable={false}
        onClose={onClose}
        open={openDrawer}
        getContainer={false}
        style={{
          position: "absolute",
        }}
      >
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default WorkoutDetails;

// <div className={`workout-details ${workout ? "changeBGColor" : ""}`}>
// 7-10-2022
