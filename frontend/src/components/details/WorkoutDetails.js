import DeleteIcon from "@mui/icons-material/Delete";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShareIcon from "@mui/icons-material/Share";
import { Backdrop, Collapse, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Button, Drawer, message, Popconfirm, Space } from "antd";
import React, { useEffect, useState } from "react";
import editIconPen from "../../assets/img/editer.png";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
// starIconYellow starIconGray
// date fns package and icons
import InfoIcon from "@mui/icons-material/Info";
import { formatDistanceToNow } from "date-fns";
import AbsIcon from "../../assets/img/AbsIcon.png";
import BackIcon from "../../assets/img/backIcon.png";
import balance from "../../assets/img/balance.png";
import BicepsIcon from "../../assets/img/bicepsIcon.png";
import CalvesIcon from "../../assets/img/calvesIcon.png";
import ChestIcon from "../../assets/img/ChestIcon.svg";
import clock from "../../assets/img/clock.png";
import ForearmsIcon from "../../assets/img/forearmsIcon.png";
import HamstringsIcon from "../../assets/img/HamstringsIcon.svg";
import repetition from "../../assets/img/repetition.png";
import ShouldersIcon from "../../assets/img/shouldersIcon.png";
import TrapeziusIcon from "../../assets/img/TrapeziusIcon.png";
import TricepsIcon from "../../assets/img/TricepsIcon.png";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { CustomizedCheckbox } from "../checkboxes/CustomCheckBox";
import { SocialIcons } from "../drawer_content/SocialIcons";
import { EditModal } from "../modals/EditModal";
import { Stepper } from "../steppers/Stepper";
import "./workout_details.scss";
import "./workout_details_styles.css";

/* Split this component into Smaller components , cut the code inside detailsContClass container into 2 or 3 smaller components */
// transform <CollapseContent /> into a separate JS component

// workoutCondensed and workoutFiltered both are single elements obtained by iterating over workouts ; with js map method
//but workoutIsCondensed is a boolean variable , always set to true
export const WorkoutDetails = ({
  workout,
  index,
  setbg,
  detailsContClass,
  setdetailsContClass,
  setcontainerClass,
  searchInput,
  workoutIsCondensed,
  workoutCondensed,
  filteredWorkout,
  showAllExistentWorkouts,
  indexx,
  showResults,
  addOrRemoveWorkout,
  containerMarginLeft,
}) => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  let createdAt = workout?.createdAt;
  let workoutCateg = workout?.exoCategory;
  const isMobileScreen = useMediaQuery("(max-width: 1245px)"); // returns true or false
  const isScreenSize_less_992 = useMediaQuery("(max-width: 992px)"); // returns true or false
  let layoutList = detailsContClass === "workout-details-container-as-list";
  let layoutGrid = detailsContClass === "workout-details-container-as-grid";
  let notShowOnFilter = !showAllExistentWorkouts && !filteredWorkout; //this means show the 4 control icon btns
  //for deleting an item, sharing ... on the 2 first sections , but not on the 3rd section
  const [openEditModal, setopenEditModal] = useState(false);
  const [className, setClassName] = React.useState(`workout-details`);
  const [containerBoxShadow, setcontainerBoxShadow] = React.useState(
    `0 0 0 0.1rem rgba(26, 172, 131, 0.1)`
  );
  const [showCollapse, setshowCollapse] = React.useState(true);
  const [showCollapseFilter, setshowCollapseFilter] = React.useState(true);
  const [checked, setChecked] = useState(false);
  const [title, setTitle] = useState("Save this workout as favorite.");
  //Concerning the Popconfirm antd
  const [openBackdrop, setOpenBackdrop] = React.useState(false);
  const [openPopconfirm, setOpenPopconfirm] = useState(false);
  const [showBorder, setshowBorder] = useState(false);
  const [border, setborder] = useState("1px solid lightgray");
  //Concerning the Drawer of antd
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openInfosDrawer, setOpenInfosDrawer] = useState(false);
  const [updatedWorkout, setUpdatedWorkout] = useState({});

  //functions
  const handleCollapseclick = () => {
    if (showCollapse === true) {
      setshowCollapse(false);
      setcontainerBoxShadow(`0 0 0 0.1rem rgba(26, 172, 131, 0.65`);
    } else {
      setshowCollapse(true);
      setcontainerBoxShadow(`0 0 0 0.1rem rgba(26, 172, 131, 0.1`);
    }
    // console.log(showCollapse);
  };
  function handleCollapseClickFilter() {
    if (showCollapseFilter === true) {
      setshowCollapseFilter(false);
      setcontainerBoxShadow(``);
    } else {
      setshowCollapseFilter(true);
      setcontainerBoxShadow(``);
    }
  }
  const handleDelete = async () => {
    if (!user) {
      return;
    }
    //if there is no user, do not bother and run the code below, so the handleClick is abandoned

    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  const confirm = () => {
    handleDelete();
    setOpenBackdrop(!openBackdrop);
    message.success("Deleted !", 0.6); //This is a prompt message for success, and it will disappear in 0.6 seconds
    setOpenPopconfirm(false);
    setshowBorder(!showBorder);
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
  const handleShare = () => {
    setOpenDrawer(true);
  };
  const handleInfos = () => {
    setOpenInfosDrawer(true);
  };
  const handleEdit = () => {
    setborder("1px solid black");
    setopenEditModal(true);
    setUpdatedWorkout(workout);
  };
  const onClose = () => {
    setOpenDrawer(false);
  };
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
  const onCheckBoxChange = (e) => {
    setChecked(e.target.checked);
    addOrRemoveWorkout(workout, e.target.checked);
    //this if statement check should be placed in this function , in this component, not in addOrRemoveWorkout function , inside WorkoutsList.js
    if (e.target.checked) {
      setTitle(`Saved as favorite !`);
    } else {
      setTitle(`No longer favorite !`);
    }
  };
  //this function works as a charm
  function countWords(str) {
    const arr = str.split(" ");
    return arr.filter((word) => word !== "").length;
  }

  React.useEffect(() => {
    if (openDrawer === true || openInfosDrawer) {
      setborder("1px solid black");
    } else if (openDrawer === false || !openInfosDrawer) {
      setborder("");
    }
    if (layoutGrid) {
      //if the wotkout is collapsed (minimized), then maximize it when the display is changed to grid
      setshowCollapse(true);
    }
  }, [openDrawer, openInfosDrawer, layoutGrid]);

  //JSX fragment
  let CollapseContent = (
    <div className="work-details-single-workout">
      {showResults && (
        //the collapse Icon
        <div className="work-details-content-filters-btns-collapse-icon">
          <IconButton
            className="work-details-left-inner-iconbtn"
            onClick={handleCollapseClickFilter}
          >
            {showCollapseFilter ? (
              <ExpandLessIcon
                style={{ color: "white", width: "64px", height: `64px` }}
              />
            ) : (
              <ExpandMoreIcon
                style={{ color: "white", width: "64px", height: `64px` }}
              />
            )}
          </IconButton>
        </div>
      )}
      {showAllExistentWorkouts && (
        <CustomizedCheckbox
          onCheckBoxChange={onCheckBoxChange}
          checked={checked}
          title={title}
        />
      )}
      <h4 className="work-details-content-filters-btns-title">
        {workout?.title}
      </h4>
      <div className="work-details-content-filters-btns-infos">
        <div className="work-details-content-filters-btns-load">
          <img className="work-details-load-img" src={balance} alt="" />
          <span className="load-span1">
            <strong>
              Load (<span className="span1-kg">kg</span> )
            </strong>
          </span>
          <span className="load-span2"> : {workout?.load}</span>
        </div>

        <div className={"work-details-content-filters-btns-reps"}>
          <div className="reps-inner">
            <img className="reps-img" src={repetition} alt="" />
            <span className="reps-span1">
              <strong>Number of reps </strong>
            </span>
            <span className="reps-span2">: {workout?.reps}</span>
          </div>
        </div>

        <div className="work-details-content-filters-btns-date">
          <img className="date-img" src={clock} alt="" />
          <span className="date-text">
            {createdAt &&
              formatDistanceToNow(new Date(createdAt), {
                addSuffix: true,
              })}
          </span>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    if (filteredWorkout) console.log("filteredWorkout");
    if (showAllExistentWorkouts) console.log("showAllExistentWorkouts");
  }, [filteredWorkout, showAllExistentWorkouts]);

  return (
    <div className={showResults ? "workout-details-top-container" : ""}>
      <>
        {showResults && (
          <div className="index-text-wrapper">
            <span className="index-text">{indexx + 1}</span>
          </div>
        )}
      </>

      {/* Split this component into Smaller components , cut the code inside detailsContClass container into 2 or 3 smaller components */}

      <div
        className={`${
          detailsContClass ?? ""
          // this means that when detailsContClass is undefined or null , "" will be returned instead
        }
        
        ${
          !showAllExistentWorkouts && !workoutIsCondensed && layoutGrid
            ? `move_to_left_grid`
            : ""
        }
        ${
          !showAllExistentWorkouts && !workoutIsCondensed && layoutList
            ? `move_to_left_list`
            : ""
        }
         site-drawer-render-in-current-wrapper
         workout-details-container
         workout-details-container${
           index ?? 0
           //this means that when index is undefined or null , 0 will be returned instead
           // this className rule must not be deleted because the drawer uses it as a container to render the content in the current container
         }
          ${
            showBorder === true && !isMobileScreen ? `border-selected-red` : ``
          } 
          ${
            searchInput?.length !== 0 &&
            !showAllExistentWorkouts &&
            !filteredWorkout
              ? `workout-details-filtered`
              : ``
          } 
          ${
            workoutIsCondensed === true ? `condensed-workouts` : `` //2nd btn styles
          }  
          ${
            workoutCondensed && showAllExistentWorkouts
              ? `workouts-details-filter-btns-clicked`
              : `` //3rd btn styles
          }         
          ${
            filteredWorkout && !showAllExistentWorkouts
              ? `condensed-workouts-filter-results`
              : `` //3rd btn styles when clicking filter btn
          }
         `}
        style={{
          marginLeft: isScreenSize_less_992 && containerMarginLeft,
          boxShadow: containerBoxShadow,
          border: border,
          height:
            showAllExistentWorkouts && countWords(workout?.title) >= 4
              ? `295px`
              : workoutIsCondensed
              ? `220px`
              : showAllExistentWorkouts
              ? `295px`
              : ``, //this works as a charm
          //Stability Bent Over Dumbbell Rear Delt Raise , this long title caused the element to have a height more than 295px
        }}
        onMouseOver={handleContainerHover}
        onMouseLeave={handleContainerLeave}
      >
        {notShowOnFilter ? (
          <>
            <Collapse
              in={showCollapse}
              collapsedSize="90px"
              style={{ width: !notShowOnFilter ? `100%` : `` }}
            >
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
                    <h4 className="work-details-left-content-inner-title">
                      {workout?.title}
                    </h4>

                    <div className="work-details-left-inner-load">
                      <span className="work-details-left-inner-load-span1">
                        <strong>
                          Load (<span className="span1-kg">kg</span> ) :
                        </strong>
                      </span>
                      <span className="work-details-left-inner-load-span2">
                        &nbsp;{workout?.load}
                      </span>
                    </div>

                    <div className={"work-details-left-inner-reps"}>
                      <div className="work-details-left-inner-reps-span1span2">
                        <span className="work-details-left-inner-reps-span1">
                          <strong>Number of reps : </strong>
                        </span>
                        <span className="work-details-left-inner-reps-span2">
                          {workout?.reps}
                        </span>
                      </div>
                    </div>

                    <div className="work-details-left-inner-date">
                      <span>
                        {createdAt &&
                          formatDistanceToNow(new Date(createdAt), {
                            addSuffix: true,
                          })}
                        {/*"createdAt && "solves this error : invalid time value */}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="work-details-right-content"
                  style={{
                    width:
                      layoutList && searchInput?.length
                        ? "20%"
                        : layoutList
                        ? `25%`
                        : layoutGrid
                        ? `20%`
                        : "",
                  }}
                >
                  {notShowOnFilter && (
                    <div className="work-details-right-inner control-btns">
                      {layoutGrid && !searchInput?.length ? ( //!searchInput?.length  means when the search input is empty
                        <div
                          className={layoutGrid ? "control-btns-checkbox" : ``}
                        >
                          <CustomizedCheckbox
                            onCheckBoxChange={onCheckBoxChange}
                            checked={checked}
                            title={title}
                          />
                        </div>
                      ) : layoutList && !searchInput?.length ? (
                        //layoutList , the div wrapper caused a problem , hence this :
                        <CustomizedCheckbox
                          onCheckBoxChange={onCheckBoxChange}
                          checked={checked}
                          title={title}
                        />
                      ) : null}
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
                        <img className={"edit-img"} src={editIconPen} alt="" />
                      </IconButton>
                    </div>
                  )}
                </div>
              </Stack>
            </Collapse>

            {/* this is the exo icon and exo category that shows on hover */}
            <>
              {!workoutIsCondensed && (
                <div className="exo-category-icon-wrapper">
                  <img
                    className="exo-category-icon"
                    src={
                      workoutCateg === `Hamstrings`
                        ? HamstringsIcon
                        : workoutCateg === `Chest`
                        ? ChestIcon
                        : workoutCateg === `Trapezius`
                        ? TrapeziusIcon
                        : workoutCateg === `Shoulders`
                        ? ShouldersIcon
                        : workoutCateg === `Forearms`
                        ? ForearmsIcon
                        : workoutCateg === `Calves`
                        ? CalvesIcon
                        : workoutCateg === `Biceps`
                        ? BicepsIcon
                        : workoutCateg === `Abs`
                        ? AbsIcon
                        : workoutCateg === `Back`
                        ? BackIcon
                        : workoutCateg === `Triceps`
                        ? TricepsIcon
                        : null
                    }
                    alt=""
                  />
                  <h4 className="exo-category-workout-category">
                    {workout?.exoCategory}
                  </h4>
                </div>
              )}
            </>
          </>
        ) : (
          //all this content is shown when the user clicks on the 3rd (filter) btn
          <>
            {/* so that the collapse icon and the collapse functionality is applied only to the filtered results of workouts */}
            {showResults ? (
              <Collapse
                in={showCollapseFilter}
                collapsedSize="30px"
                style={{ width: !notShowOnFilter ? `100%` : `` }}
                className=""
              >
                {CollapseContent}
              </Collapse>
            ) : (
              <>{CollapseContent}</>
            )}
          </>
        )}
      </div>

      <>
        {/* Antd Backdrop  */}
        <>
          <Backdrop
            className="workout-details-backdrop"
            // onKeyDown={() => setOpenBackdrop(!openBackdrop)}
            sx={{ bgcolor: "rgba(0, 0, 0, 0.2)", zIndex: 1 }}
            open={openBackdrop}
          >
            {/* content */}
          </Backdrop>
        </>
        <>
          {/* Antd Drawer  */}
          {!showAllExistentWorkouts && (
            <>
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
                      layoutGrid
                        ? "workout-details-imgs-grid"
                        : "workout-details-imgs"
                    }
                  >
                    <SocialIcons
                      {...{ layoutGrid }}
                      workoutTitle={workout?.title}
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
                      workoutTitle={workout?.title}
                    />
                  </div>
                </Drawer>
              </div>
            </>
          )}
        </>
        {/* Antd Edit Modal  */}
        <>
          <EditModal
            {...{
              workout,
              dispatch,
              setUpdatedWorkout,
              updatedWorkout,
              openEditModal,
              setopenEditModal,
              layoutGrid,
            }}
            setshowModal={setopenEditModal}
          ></EditModal>
        </>
      </>
    </div>
  );
};
