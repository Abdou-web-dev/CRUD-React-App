import { CloseOutlined } from "@ant-design/icons";
import { IconButton } from "@mui/material";
import { Button, Spin } from "antd";
import { useEffect, useState } from "react";
import blocs from "../../assets/img/blocs.png";
import cardIcon from "../../assets/img/cardIcon.svg";
import lessIcon from "../../assets/img/lessIcon.svg";
import listIcon from "../../assets/img/listIcon.png";
import moreIcon from "../../assets/img/plusIcon.svg";
import redCloseIcon from "../../assets/img/redCloseIcon.svg";
import { WorkoutsListBtns } from "../buttons/WorkoutsListBtns";
import "./sections_styles.scss";
import { WorkoutDetailsItem } from "./WorkoutDetailsItem";
import { WorkoutDetailsItemCondensed } from "./WorkoutDetailsItemCondensed";

export function WorkoutsList({
  workouts,
  currentPage,
  setmovePaginationFromBottom,
  setpaginationClassName,
  filteredResults,
  searchInput,
  setCurrentPage,
  setshowfilteredResults,
  setDisplayPagination,
  detailsContClass,
  setdetailsContClass,
  setcontainerClass,
  containerClass,
  border,
  setshowAllExistentWorkouts,
  showAllExistentWorkouts,
  showAllWorkoutsCondensed,
  setshowAllWorkoutsCondensed,
}) {
  //always put state variables first , then regular variables, then useEffect statement and the other fncts

  const [boxShadow, setBoxShadow] = useState("");
  const [bg, setbg] = useState("");
  const [firstIcon, setFirsticon] = useState(listIcon);
  const [secondIcon, setSecondIcon] = useState(blocs);
  const [showAllWorkouts, setshowAllWorkouts] = useState(true);
  const [spinning, setSpinning] = useState(false);
  const [showMoreBtn, setshowMoreBtn] = useState(true);
  const [showMoreIcon, setshowMoreIcon] = useState(moreIcon);
  const [counter, setcounter] = useState(0);
  const [secondBtnDisabled, setsecondBtnDisabled] = useState(false);
  const [filterBtnDisabled, setFilterBtnDisabled] = useState(true); //passed as prop
  const [showFilterBtns, setshowFilterBtns] = useState(false);
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);

  let layoutGrid = detailsContClass === "workout-details-container-as-grid";
  let layoutList = detailsContClass === "workout-details-container-as-list";
  let result = filteredResults?.length === 1 ? `result` : `results`;

  //JSX Fragments

  const [showFirstGrp, setshowFirstGrp] = useState(true);
  const firstGroup =
    workouts &&
    workouts?.map(
      (workoutCondensed, index) =>
        index < 8 &&
        index >= 0 && (
          <WorkoutDetailsItemCondensed //this is the initial first group
            {...{
              workoutCondensed,
              counter,
            }}
            key={workoutCondensed._id}
          />
        )
    );

  const [showSecondGrp, setshowSecondGrp] = useState(false);
  const secondGroup =
    workouts &&
    workouts?.map(
      (workoutCondensed, index) =>
        index < 16 &&
        index >= 8 && (
          <div>
            <WorkoutDetailsItemCondensed
              {...{
                workoutCondensed,
                counter,
              }}
              key={workoutCondensed._id}
            />
          </div>
        )
    );
  //
  const [showThirdGrp, setshowThirdGrp] = useState(false);
  const thirdGroup =
    workouts &&
    workouts?.map(
      (workoutCondensed, index) =>
        index < 24 &&
        index >= 16 && (
          <WorkoutDetailsItemCondensed
            {...{
              workoutCondensed,
              counter,
            }}
            key={workoutCondensed._id}
          />
        )
    );
  const [showFourthGrp, setshowFourthGrp] = useState(false);
  const fourthGroup =
    workouts &&
    workouts?.map(
      (workoutCondensed, index) =>
        index < 32 &&
        index >= 24 && (
          <WorkoutDetailsItemCondensed
            {...{
              workoutCondensed,
              counter,
            }}
            key={workoutCondensed._id}
          />
        )
    );
  const [showFifthGrp, setshowFifthGrp] = useState(false);
  const fifthGroup =
    workouts &&
    workouts?.map(
      (workoutCondensed, index) =>
        index >= 32 && (
          <WorkoutDetailsItemCondensed
            {...{
              workoutCondensed,
              counter,
            }}
            key={workoutCondensed._id}
          />
        )
    );
  //functions
  function handleIconClick() {
    setshowAllWorkoutsCondensed(false);
    setshowAllExistentWorkouts(false);
    setshowFilterBtns(false);
    if (firstIcon === listIcon) {
      setdetailsContClass("workout-details-container-as-list"); //the container of every workout
      setcontainerClass("chest-page-workouts"); //the container of the whole section containing the workouts
      setFirsticon(cardIcon);
      setmovePaginationFromBottom("180px");
      setpaginationClassName("pagination-content-loaded");
      setDisplayPagination("flex");
    } else if (firstIcon === cardIcon) {
      setdetailsContClass(`workout-details-container-as-grid`);
      setcontainerClass("chest-page-workouts showItemsAsGrid"); //here
      setFirsticon(listIcon);
      setmovePaginationFromBottom("620px");
      setpaginationClassName("pagination-content-loaded-grid");
      setDisplayPagination("flex");
    }
    if (showAllWorkoutsCondensed === false) {
      setshowAllWorkouts(true);
    }
    setsecondBtnDisabled(false);
    if ((filteredResults && layoutGrid) || (filteredResults && layoutList)) {
      setsecondBtnDisabled(true);
    }
    setshowAllWorkouts(true);
  }

  function handleCondensedIconClick() {
    setshowAllWorkoutsCondensed(false);
    setshowAllWorkoutsCondensed(true);
    setshowAllExistentWorkouts(false);
    setDisplayPagination("none");
    if (secondIcon === blocs) {
      setsecondBtnDisabled(true);
    } else if (secondIcon === redCloseIcon) {
      setSecondIcon(blocs);
      setshowAllWorkoutsCondensed(false);
      setshowAllWorkouts(false);
    }
    setFilterBtnDisabled(false);
  }

  // let workoutsIds = workouts?.map((workout) => workout._id);
  //this function should be written in this component, as this commponent is the parent of WorkoutDetailsItem
  const addOrRemoveWorkout = (workoutObject, isChecked) => {
    let newSelectedWorkouts = [...selectedWorkouts]; //must declare an empty array here
    // Case 1 : The user checks the box
    if (isChecked) {
      newSelectedWorkouts.push(workoutObject); // === newSelectedWorkouts = [...selectedWorkouts, workoutId];
    }
    // Case 2 : The user unchecks the box
    else {
      newSelectedWorkouts.splice(newSelectedWorkouts.indexOf(workoutObject), 1);
    }
    setSelectedWorkouts(newSelectedWorkouts);
  };

  function showItemsPage1(index) {
    let a1 = index >= 0 && index <= 3;
    let b1 = index >= 0 && index <= 5;
    if (detailsContClass === "workout-details-container-as-list") return a1;
    else if (detailsContClass === "workout-details-container-as-grid")
      return b1;
  }
  function showItemsPage2(index) {
    let a2 = index >= 4 && index <= 7;
    let b2 = index >= 6 && index <= 11;
    if (detailsContClass === "workout-details-container-as-list") return a2;
    else if (detailsContClass === "workout-details-container-as-grid")
      return b2;
  }
  function showItemsPage3(index) {
    let a2 = index >= 8 && index <= 11;
    let b2 = index >= 12 && index <= 17;
    if (detailsContClass === "workout-details-container-as-list") return a2;
    else if (detailsContClass === "workout-details-container-as-grid")
      return b2;
  }
  function showItemsPage4(index) {
    let a2 = index >= 12 && index <= 15;
    let b2 = index >= 18 && index <= 23;
    if (detailsContClass === "workout-details-container-as-list") return a2;
    else if (detailsContClass === "workout-details-container-as-grid")
      return b2;
  }
  function showItemsPage5(index) {
    let a2 = index >= 16 && index <= 19;
    let b2 = index >= 24 && index < 30;
    if (detailsContClass === "workout-details-container-as-list") return a2;
    else if (detailsContClass === "workout-details-container-as-grid")
      return b2;
  }
  function showItemsPage6(index) {
    let a2 = index >= 19 && index <= 22;
    let b2 = index >= 30 && index < 36;
    if (detailsContClass === "workout-details-container-as-list") return a2;
    else if (detailsContClass === "workout-details-container-as-grid")
      return b2;
  }
  function showItemsPage7(index) {
    let a2 = index >= 23 && index <= 26;
    let b2 = index >= 36 && index < 42;
    if (detailsContClass === "workout-details-container-as-list") return a2;
    else if (detailsContClass === "workout-details-container-as-grid")
      return b2;
  }
  function showItemsPage8(index) {
    let a2 = index >= 27 && index <= 30;
    let b2 = index >= 42 && index < 48;
    if (detailsContClass === "workout-details-container-as-list") return a2;
    else if (detailsContClass === "workout-details-container-as-grid")
      return b2;
  }
  function showItemsPage9(index) {
    let a2 = index >= 31 && index <= 34;
    let b2 = index >= 48 && index < 54;
    if (detailsContClass === "workout-details-container-as-list") return a2;
    else if (detailsContClass === "workout-details-container-as-grid")
      return b2;
  }
  function showItemsPage10(index) {
    let a2 = index > 39;
    let b2 = index >= 60;
    if (detailsContClass === "workout-details-container-as-list") return a2;
    else if (detailsContClass === "workout-details-container-as-grid")
      return b2;
  }

  function handleClick() {
    setshowSecondGrp(true);
    setSecondIcon(redCloseIcon);
    setsecondBtnDisabled(false);

    if (showMoreIcon === moreIcon) {
      if (showSecondGrp === true) {
        setshowThirdGrp(true);
      }
      if (showSecondGrp && showThirdGrp === true) {
        setshowFourthGrp(true);
        setcounter(counter + 1);
      }
      if (showSecondGrp && showThirdGrp && showFourthGrp) {
        setshowFifthGrp(true);
        setcounter(counter + 1);
      }
    }
    if (showMoreIcon === lessIcon) {
      setcounter(0);
      setSpinning(true);
      setshowMoreBtn(false);
      setTimeout(() => {
        setshowSecondGrp(false);
        setshowThirdGrp(false);
        setshowFourthGrp(false);
        setshowFifthGrp(false);
      }, 1000);
    }
  }

  useEffect(() => {
    if (searchInput?.length !== 0) {
      setsecondBtnDisabled(true);
      setFilterBtnDisabled(true);
      setBoxShadow(
        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
      );
    } else {
      setBoxShadow("");
      setFilterBtnDisabled(false);
    }
    if (showSecondGrp && showThirdGrp && showFifthGrp && showFourthGrp) {
      setshowMoreIcon(lessIcon);
    }
    if (!showSecondGrp && !showThirdGrp && !showFifthGrp && !showFourthGrp) {
      setshowMoreBtn(true);
      setshowMoreIcon(moreIcon);
      setSpinning(false);
    }
    console.log(selectedWorkouts);
  }, [
    searchInput,
    showSecondGrp,
    showThirdGrp,
    showFifthGrp,
    showFourthGrp,
    secondGroup,
    selectedWorkouts,
  ]);

  //save selectedWorkouts to the brower's local storage
  useEffect(() => {
    localStorage.setItem(
      "selectedWorkoutsState",
      JSON.stringify(selectedWorkouts)
    );
  }, [selectedWorkouts]);

  return (
    <div className="workouts-section-container">
      <div className="workouts-section-toggle-btn-container">
        <WorkoutsListBtns
          {...{
            firstIcon,
            secondIcon,
            detailsContClass,
            secondBtnDisabled,
            handleCondensedIconClick,
            handleIconClick,
            showAllWorkoutsCondensed,
            setshowAllWorkoutsCondensed,
            filterBtnDisabled,
            showAllWorkouts,
            setshowAllWorkouts,
            workouts,
            showAllExistentWorkouts,
            setshowAllExistentWorkouts,
            border,
            showFilterBtns,
            filteredResults,
            searchInput,
            setshowFilterBtns,
            searchInput,
            setDisplayPagination,
            addOrRemoveWorkout,
          }}
        />
      </div>

      <>
        {/* nbr of Results sentence */}
        {searchInput?.length !== 0 &&
          detailsContClass === `workout-details-container-as-grid` && (
            <div className="workouts-section-results">
              {filteredResults?.length !== 0 ? (
                <span>
                  You have got {filteredResults?.length} {result} !
                </span>
              ) : filteredResults?.length === 0 ? (
                <div>
                  <span>
                    {`Sorry , there is no item with the searched criteria !`}{" "}
                  </span>
                </div>
              ) : null}
            </div>
          )}
      </>
      <>
        {/* workouts filtered or not and closeBtn */}
        {showAllWorkouts === true && (
          <div
            className="workouts-section-container-items-and-closebtn"
            style={{
              background: bg,
              boxShadow: boxShadow,
            }}
          >
            <div
              className={`${
                filteredResults?.length === 1 &&
                detailsContClass === "workout-details-container-as-grid" &&
                "grid-one-item"
              }
              ${containerClass}`}
            >
              {!showAllWorkoutsCondensed && (
                <>
                  {/* list of All workouts */}
                  {workouts &&
                    workouts?.map((workout, index) => (
                      <WorkoutDetailsItem
                        {...{
                          workout,
                          index,
                          setbg,
                          detailsContClass,
                          setdetailsContClass,
                          setcontainerClass,
                          currentPage,
                          layoutGrid,
                          showItemsPage1,
                          showItemsPage2,
                          showItemsPage3,
                          showItemsPage4,
                          showItemsPage5,
                          showItemsPage6,
                          showItemsPage7,
                          showItemsPage8,
                          showItemsPage9,
                          showItemsPage10,
                          searchInput,
                          setCurrentPage,
                          addOrRemoveWorkout,
                        }}
                        key={index}
                      ></WorkoutDetailsItem>
                    ))}

                  {/* list of workouts after the search */}
                  {filteredResults &&
                    filteredResults?.map((filteredResult, index) => (
                      <WorkoutDetailsItem
                        {...{
                          filteredResult,
                          index,
                          setbg,
                          detailsContClass,
                          setdetailsContClass,
                          setcontainerClass,
                          currentPage,
                          layoutGrid,
                          searchInput,
                          showItemsPage1,
                          showItemsPage2,
                          showItemsPage3,
                          showItemsPage4,
                          showItemsPage5,
                          showItemsPage6,
                          setCurrentPage,
                          showItemsPage7,
                          showItemsPage8,
                          showItemsPage9,
                          showItemsPage10,
                        }}
                        key={index}
                      ></WorkoutDetailsItem>
                    ))}
                </>
              )}
            </div>

            <>
              {searchInput?.length !== 0 &&
                detailsContClass === `workout-details-container-as-grid` && (
                  <div className={"workouts-list-close-icon-div"}>
                    <IconButton
                      onClick={() => {
                        setshowfilteredResults(false);
                        setmovePaginationFromBottom("180px");
                      }}
                      className="workouts-list-close-icon-btn"
                    >
                      <CloseOutlined
                        className="workouts-list-close-icon"
                        style={{ color: "red" }}
                      ></CloseOutlined>
                    </IconButton>
                  </div>
                )}
            </>
          </div>
        )}
      </>

      {showAllWorkoutsCondensed === true && ( //always put state variables (that control display of children inside them) above the div tags
        <div className="chest-page-workouts-condensed-container">
          <div
            className="chest-page-workouts-condensed-inner"
            style={{ overflowY: showThirdGrp && thirdGroup ? `scroll` : `` }}
          >
            <div className="chest-page-workouts-condensed-inner-workouts">
              <>{showFirstGrp && firstGroup}</>
              <>{showSecondGrp && secondGroup}</>
              <>{showThirdGrp && thirdGroup}</>
              <>{showFourthGrp && fourthGroup}</>
              <>{showFifthGrp && fifthGroup}</>

              <div className="chest-page-workouts-condensed-inner-more-icon">
                {showMoreBtn && (
                  <Button
                    onClick={handleClick}
                    className="chest-page-workouts-condensed-inner-more-icon-btn"
                    disabled={false}
                  >
                    <img
                      width={`54px`}
                      height={`54px`}
                      src={showMoreIcon}
                      alt=""
                    />
                  </Button>
                )}

                <Spin spinning={spinning} size="large" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
