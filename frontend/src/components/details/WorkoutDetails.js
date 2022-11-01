import DeleteIcon from "@mui/icons-material/Delete";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShareIcon from "@mui/icons-material/Share";
import editIcon from "../../assets/img/editer.png";

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

export const WorkoutDetails = ({
  workout,
  index,
  setbg,
  detailsContClass,
  setdetailsContClass,
  setcontainerClass,
  searchInput,
}) => {
  const { dispatch } = useWorkoutsContext();

  const [className, setClassName] = React.useState(`workout-details`);
  const [containerBoxShadow, setcontainerBoxShadow] = React.useState(
    `0 0 0 0.1rem rgba(26, 172, 131, 0.1)`
  );
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
  const [openBackdrop, setOpenBackdrop] = React.useState(false);
  const [openPopconfirm, setOpenPopconfirm] = useState(false);
  const [showBorder, setshowBorder] = useState(false);
  const [border, setborder] = useState("1px solid lightgray");

  const confirm = () => {
    handleDelete();
    setOpenBackdrop(!openBackdrop);
    message.success("Deleted !", 0.6); //This is a prompt message for success, and it will disappear in 0.6 seconds
    setOpenPopconfirm(false);
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

  const handleShare = () => {
    setOpenDrawer(true);
  };
  const handleInfos = () => {
    setOpenInfosDrawer(true);
  };
  const [showRepsInput, setshowRepsInput] = useState(false);
  const [updatedReps, setupdatedReps] = useState(false);

  //
  const [reps, setReps] = useState(workout?.reps);
  const [title, setTitle] = useState(workout?.title);
  const [load, setLoad] = useState(workout?.load);
  //
  const [updName, setupdName] = useState("");
  const [updLoad, setupdLoad] = useState("");
  const [updReps, setupdReps] = useState("");
  //
  const [repsValue, setRepsValue] = useState("");

  const handleEdit = async () => {
    setshowRepsInput(true);
    setborder("1px solid black");
    // const workout = { title, load, reps };
    var updatedWorkout = {
      updName,
      updLoad,
      updReps,
    };
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "PATCH", //if it does not work , use "PUT"
      body: JSON.stringify(updatedWorkout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log("error occured during updating");
    }
    if (response.ok) {
      // setEmptyFields([]);
      setTitle(updName);
      setReps(updReps);
      setLoad(updLoad);
      dispatch({ type: "UPDATE_WORKOUT", payload: json });
      console.log("success");
    }
  };

  const onClose = () => {
    setOpenDrawer(false);
  };
  React.useEffect(() => {
    if (openDrawer === true || openInfosDrawer) {
      setborder("1px solid black");
    } else if (openDrawer === false || !openInfosDrawer) {
      setborder("");
    }
  }, [openDrawer, openInfosDrawer]);

  const handleContainerHover = () => {
    if (detailsContClass === "workout-details-container-as-grid") {
      setcontainerBoxShadow(
        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
      );
    }
  };
  const handleContainerLeave = () => {
    if (detailsContClass === "workout-details-container-as-grid") {
      setcontainerBoxShadow(!containerBoxShadow);
    }
  };
  let layoutGrid = detailsContClass === "workout-details-container-as-grid";
  // let layoutList = detailsContClass === "workout-details-container-as-list";
  let createdAt = workout?.createdAt;
  return (
    <>
      <div
        className={`${detailsContClass}
         site-drawer-render-in-current-wrapper
         workout-details-container${index}
          ${showBorder === true ? `border-selected` : ``} 
          ${searchInput?.length !== 0 ? `filtered-workouts` : ``} 

          
         `}
        style={{
          boxShadow: containerBoxShadow,
          border: border,
        }}
        onMouseOver={handleContainerHover}
        onMouseLeave={handleContainerLeave}
      >
        <Collapse in={showCollapse} collapsedSize="90px">
          <Stack className={className} direction="row">
            {/* <span>{index} </span> */}
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
                <h4>{title}</h4>
                <div className="work-details-left-inner-load">
                  <span className="work-details-left-inner-load-span1">
                    <strong>
                      Load (<span className="span1-kg">kg</span> ) :
                    </strong>
                  </span>
                  <span className="work-details-left-inner-load-span2">
                    {load}
                  </span>
                </div>

                <div className="work-details-left-inner-reps">
                  <span className="work-details-left-inner-reps-span1">
                    <strong>Number of reps : </strong>
                  </span>
                  {reps !== updReps && (
                    <span className="work-details-left-inner-reps-span2">
                      {reps}
                    </span>
                  )}
                  {updatedReps && (
                    <span className="work-details-left-inner-reps-span2">
                      {repsValue}
                    </span>
                  )}
                  {reps === updReps && showRepsInput && (
                    <input
                      value={repsValue}
                      onChange={(e) => {
                        setRepsValue(e.target.value);
                      }}
                      type="number"
                    />
                  )}
                  {reps === updReps && (
                    <Button
                      onClick={() => {
                        setReps(updReps);
                        setshowRepsInput(false);
                        setupdatedReps(true);
                        console.log(repsValue);
                      }}
                    >
                      edit
                    </Button>
                  )}
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

            <div
              className="work-details-right-content"
              style={{ width: "20%" }}
            >
              <div className="work-details-right-inner control-btns">
                <Popconfirm
                  title="Are you sure to delete this task?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                  open={openPopconfirm}
                >
                  <IconButton
                    className="work-details-right-inner-iconbtn"
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

                <IconButton
                  className="work-details-right-inner-iconbtn"
                  onClick={handleShare}
                >
                  <ShareIcon></ShareIcon>
                </IconButton>

                <IconButton
                  className="work-details-right-inner-iconbtn"
                  onClick={handleInfos}
                >
                  <InfoIcon />
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
        </Collapse>
      </div>
      <Backdrop
        className="workout-details-backdrop"
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
          <div
            className={
              layoutGrid ? "workout-details-imgs-grid" : "workout-details-imgs"
            }
          >
            <SocialIcons
              {...{ layoutGrid }}
              workoutTitle={workout.title}
            ></SocialIcons>
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
          destroyOnClose
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
            <Stepper
              {...{
                setOpenInfosDrawer,
                setbg,
                setdetailsContClass,
                setcontainerClass,
              }}
              workoutTitle={workout.title}
            />
          </div>
        </Drawer>
      </div>
    </>
  );
};

// const response = await fetch("/api/workouts", {
//   method: "PATCH",
//   body: JSON.stringify(workout),
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
