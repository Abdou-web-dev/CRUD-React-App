import DeleteIcon from "@mui/icons-material/Delete";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShareIcon from "@mui/icons-material/Share";
import { Backdrop, Collapse, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Button, Drawer, message, Popconfirm, Space } from "antd";
import React, { useState } from "react";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
// date fns package
import InfoIcon from "@mui/icons-material/Info";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { SocialIcons } from "../drawer_content/SocialIcons";
import { Stepper } from "../steppers/Stepper";
import "./workout_details.scss";

export const WorkoutDetails = ({ workout, index }) => {
  // console.log(workout);
  const { dispatch } = useWorkoutsContext();

  const [className, setClassName] = React.useState(`workout-details`);
  const [containerBoxShadow, setcontainerBoxShadow] = React.useState(
    `0 0 0 0.1rem rgba(26, 172, 131, 0.1)`
  );

  React.useEffect(() => {
    if (workout) {
      setTimeout(() => setClassName("changeBGColor workout-details"), 2000); //to delete later
    }
  }, []);
  // box-shadow: 0 0 0 0.1rem rgba(26, 172, 131, 0.25)
  const [showCollapse, setshowCollapse] = React.useState(true);

  const handleCollapseclick = () => {
    if (showCollapse === true) {
      setshowCollapse(false);
      setcontainerBoxShadow(`0 0 0 0.1rem rgba(26, 172, 131, 0.65`);
    } else {
      setshowCollapse(true);
      setcontainerBoxShadow(`0 0 0 0.1rem rgba(26, 172, 131, 0.1`);
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
    setcontainerBoxShadow(`none`);
  };
  //Concerning the Drawer of antd
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openInfosDrawer, setOpenInfosDrawer] = useState(false);

  const showShareDrawer = () => {
    setOpenDrawer(true);
  };
  const showInfosDrawer = () => {
    setOpenInfosDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <div
        className={`
         site-drawer-render-in-current-wrapper
         workout-details-container
         workout-details-container${index}
         ${showBorder === true ? `border-selected` : ``} 
                 `}
        style={{ boxShadow: containerBoxShadow }}
      >
        <div className="">
          <Collapse in={showCollapse} collapsedSize="90px">
            <Stack
              // style={{ background: "red" }}
              direction="row"
              className={className}
            >
              <div
                style={{
                  width: "85%",
                }}
                className="work-details-left-content"
              >
                <div
                  className="work-details-left-content-inner"
                  style={{
                    display: "flex",
                    flexDirection: `column`,
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
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
                style={{ width: "15%" }}
                className="work-details-right-content"
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

                <IconButton onClick={showShareDrawer}>
                  <ShareIcon></ShareIcon>
                </IconButton>

                <IconButton onClick={showInfosDrawer}>
                  <InfoIcon />
                </IconButton>
              </div>
            </Stack>
          </Collapse>
        </div>
      </div>
      <Backdrop
        // onKeyDown={() => setOpenBackdrop(!openBackdrop)}
        sx={{ bgcolor: "rgba(0, 0, 0, 0.2)", zIndex: 1 }}
        open={openBackdrop}
      >
        {/* content */}
      </Backdrop>
      {/* Antd Drawer  */}
      <div className="workout-details-drawer-container">
        <Drawer
          className="workout-details-drawer"
          title="Share on..."
          placement="top"
          closable={true}
          onClose={onClose}
          open={openDrawer}
          // closeIcon
          getContainer={`.workout-details-container${index}`}
          style={{
            position: "absolute",
          }}
        >
          <div className="workout-details-imgs">
            <SocialIcons workoutTitle={workout.title}></SocialIcons>
          </div>
        </Drawer>
      </div>
      <div className="workout-infos-drawer-container">
        <Drawer
          className="workout-infos-drawer"
          placement="right"
          closable={true}
          onClose={() => {
            setOpenInfosDrawer(false);
          }}
          open={openInfosDrawer}
          size={"large"}
          // destroyOnClose === Whether to unmount child components on closing drawer or not
          extra={
            <Space>
              <Button
                type="dashed"
                size="large"
                onClick={() => {
                  setOpenInfosDrawer(false);
                }}
              >
                {`Hide`}
              </Button>
            </Space>
          }
        >
          <div className="workout-infos-wrapper">
            <Stepper workoutTitle={workout.title} />
          </div>
        </Drawer>
      </div>
    </>
  );
};
