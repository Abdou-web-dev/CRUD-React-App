import { CloseOutlined } from "@ant-design/icons";
import { IconButton } from "@mui/material";
import { Button } from "antd";
import { useEffect, useState } from "react";
import blocs from "../../assets/img/blocs.png";
import cardIcon from "../../assets/img/cardIcon.svg";
import lessIcon from "../../assets/img/lessIcon.svg";
import listIcon from "../../assets/img/listIcon.png";
import moreIcon from "../../assets/img/plusIcon.svg";

import redCloseIcon from "../../assets/img/redCloseIcon.svg";

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
}) {
  //always put state variables first , then regular variables, then useEffect statement and the other fncts
  const [containerClass, setcontainerClass] = useState("chest-page-workouts");
  const [detailsContClass, setdetailsContClass] = useState(
    "workout-details-container-as-list"
  ); //this className detailsContClass is being passed as props to children
  const [boxShadow, setBoxShadow] = useState("");
  const [bg, setbg] = useState("");
  const [firstIcon, setFirsticon] = useState(listIcon);
  const [secondIcon, setSecondIcon] = useState(blocs);
  const [showAllWorkoutsCondensed, setshowAllWorkoutsCondensed] =
    useState(false);
  let layoutGrid = detailsContClass === "workout-details-container-as-grid";
  let result = filteredResults?.length === 1 ? `result` : `results`;

  function handleIconClick() {
    setshowAllWorkoutsCondensed(false);
    if (firstIcon === listIcon) {
      setdetailsContClass("workout-details-container-as-list"); //the container of every workout
      setcontainerClass("chest-page-workouts"); //the container of the whole section containing the workouts
      setFirsticon(cardIcon);
      setmovePaginationFromBottom("180px");
      setpaginationClassName("pagination-content-loaded");
    } else if (firstIcon === cardIcon) {
      setdetailsContClass(`workout-details-container-as-grid`);
      setcontainerClass("chest-page-workouts showItemsAsGrid");
      setFirsticon(listIcon);
      setmovePaginationFromBottom("620px");
      setpaginationClassName("pagination-content-loaded-grid");
    }
  }
  function handleCondensedIconClick() {
    setshowAllWorkoutsCondensed(true);
    setDisplayPagination("none");
    if (secondIcon === blocs) {
      setSecondIcon(redCloseIcon);
    } else if (secondIcon === redCloseIcon) {
      setSecondIcon(blocs);
    }
  }
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
    let b2 = index >= 24 && index <= 30;
    if (detailsContClass === "workout-details-container-as-list") return a2;
    else if (detailsContClass === "workout-details-container-as-grid")
      return b2;
  }
  function showItemsPage6(index) {
    let a2 = index > 30;
    if (detailsContClass === "workout-details-container-as-list") return a2;
    else if (detailsContClass === "workout-details-container-as-grid")
      return a2;
  }
  // const slicedArray1 = workouts.slice(0, 10);
  // const slicedArray2 = workouts.slice(10, 20);
  // const slicedArray3 = workouts.slice(20, 30);
  // console.log(slicedArray3);
  const [showSecondGrp, setshowSecondGrp] = useState(false);
  const [showIcon, setshowIcon] = useState(moreIcon);

  function handleClick() {
    setshowSecondGrp(true);

    if (showIcon === moreIcon) {
      if (showSecondGrp === true) {
        setshowThirdGrp(true);
      }
      if (showSecondGrp && showThirdGrp === true) {
        setshowFourthGrp(true);
      }
      if (showSecondGrp && showThirdGrp && showFourthGrp) {
        setshowFifthGrp(true);
      }
    }
    if (showIcon === lessIcon) {
      setshowSecondGrp(false);
      setshowThirdGrp(false);
      setshowFourthGrp(false);
      setshowFifthGrp(false);
    }
  }

  const secondGroup =
    workouts &&
    workouts?.map(
      (workoutCondensed, index) =>
        index < 16 &&
        index >= 8 && (
          <WorkoutDetailsItemCondensed
            {...{
              workoutCondensed,
            }}
            key={workoutCondensed._id}
          />
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
            }}
            key={workoutCondensed._id}
          />
        )
    );
  //
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
            }}
            key={workoutCondensed._id}
          />
        )
    );
  //
  const [showFifthGrp, setshowFifthGrp] = useState(false);
  const fifthGroup =
    workouts &&
    workouts?.map(
      (workoutCondensed, index) =>
        index >= 32 && (
          <WorkoutDetailsItemCondensed
            {...{
              workoutCondensed,
            }}
            key={workoutCondensed._id}
          />
        )
    );
  useEffect(() => {
    if (searchInput?.length !== 0) {
      setBoxShadow(
        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
      );
    } else {
      setBoxShadow("");
    }
    if (showSecondGrp && showThirdGrp && showFifthGrp && showFourthGrp) {
      setshowIcon(lessIcon);
    }
    if (!showSecondGrp && !showThirdGrp && !showFifthGrp && !showFourthGrp) {
      setshowIcon(moreIcon);
    }
  }, [searchInput, showSecondGrp, showThirdGrp, showFifthGrp, showFourthGrp]);

  let hiddenWorkouts = !showSecondGrp && !showThirdGrp ? true : false;
  return (
    <div className="workouts-section-container">
      <div className="workouts-section-toggle-btn-container">
        <Button
          className="workouts-section-toggle-btn"
          onClick={handleIconClick}
          style={{ height: "fit-content", width: "fit-content" }}
        >
          <img width={"30px"} height="30px" src={firstIcon} alt="" />
        </Button>
        <Button
          onClick={handleCondensedIconClick}
          style={{ height: "fit-content", width: "fit-content" }}
        >
          <img width={"30px"} height="30px" src={secondIcon} alt="" />
        </Button>
      </div>

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

      {/* workouts and closeBtn */}
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
                      searchInput,
                      setCurrentPage,
                    }}
                    key={index}
                  ></WorkoutDetailsItem>
                ))}
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
                    }}
                    key={index}
                  ></WorkoutDetailsItem>
                ))}
            </>
          )}
        </div>

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
      </div>
      {showAllWorkoutsCondensed === true && ( //always put state variables (that control display of children inside them) above the div tags
        <div className="chest-page-workouts-condensed-container">
          <div className="chest-page-workouts-condensed-inner">
            <div className="chest-page-workouts-condensed-inner-workouts">
              {workouts &&
                workouts?.map(
                  (workoutCondensed, index) =>
                    index < 8 &&
                    index >= 0 && (
                      <WorkoutDetailsItemCondensed //this is the initial first group
                        {...{
                          workoutCondensed,
                          hiddenWorkouts,
                        }}
                        key={workoutCondensed._id}
                      />
                    )
                )}
              <>{showSecondGrp && secondGroup}</>
              <>{showThirdGrp && thirdGroup}</>
              <>{showFourthGrp && fourthGroup}</>
              <>{showFifthGrp && fifthGroup}</>

              <div className="chest-page-workouts-condensed-inner-more-icon">
                <Button
                  onClick={handleClick}
                  className="chest-page-workouts-condensed-inner-more-icon-btn"
                >
                  <img width={`54px`} height={`54px`} src={showIcon} alt="" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// rather make 3 btns , one for grid layout , one for list layout the 2nd
// view of list layout will display the workouts' elements compacted with
//a different bg color and with a scrollbar on the right , between the workouts section and the form
