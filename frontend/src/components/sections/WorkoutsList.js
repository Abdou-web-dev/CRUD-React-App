import { Button, Spin } from "antd";
import { useEffect, useState } from "react";
import blocs from "../../assets/img/blocs.png";
import cardIcon from "../../assets/img/cardIcon.svg";
import lessIcon from "../../assets/img/lessIcon.svg";
import listIcon from "../../assets/img/listIcon.png";
import moreIcon from "../../assets/img/plusIcon.svg";
import redCloseIcon from "../../assets/img/redCloseIcon.svg";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { WorkoutsListBtns } from "../buttons/WorkoutsListBtns";
import "./sections_styles.scss";
import { WorkoutDetailsItem } from "./WorkoutDetailsItem";
import { WorkoutDetailsItemCondensed } from "./WorkoutDetailsItemCondensed";
import { WorkoutDetailsItemMobile } from "./WorkoutDetailsItemMobile";

// delete all the code relevant to filteredResults , since a separate component called WorkoutsListFiltered has been created!!!
export function WorkoutsList({
  workouts,
  currentPage,
  setmovePaginationFromBottom,
  setpaginationClassName,
  filteredResults,
  searchInput,
  setCurrentPage,
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
  showMobileFormModal,
  filterBtnClicked,
  setfilterBtnClicked,
}) {
  //always put state variables first , then regular variables, then useEffect statement and the other fncts

  const [showFirstGrp, setshowFirstGrp] = useState(true);
  const [showSecondGrp, setshowSecondGrp] = useState(false);
  const [showThirdGrp, setshowThirdGrp] = useState(false);
  const [showFourthGrp, setshowFourthGrp] = useState(false);
  const [showFifthGrp, setshowFifthGrp] = useState(false);
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
  // let eitherLayout = layoutGrid || layoutList;

  const [containerMarginLeft, setContainerMarginLeft] = useState(`100px`);

  const isSmallScreen = useMediaQuery(
    "(min-width: 0px) and (max-width: 700px)"
  );
  const isDesktopSreen = useMediaQuery("(min-width: 700px)");
  const is_larger_than_980 = useMediaQuery("(min-width: 980px)");

  //functions
  function handleIconClick() {
    setshowAllWorkouts(true);
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
      setContainerMarginLeft("0px");
    } else if (firstIcon === cardIcon) {
      setdetailsContClass(`workout-details-container-as-grid`);
      setcontainerClass("chest-page-workouts showItemsAsGrid"); //here
      setFirsticon(listIcon);
      setmovePaginationFromBottom("590px");
      setpaginationClassName("pagination-content-loaded-grid");
      setDisplayPagination("flex");
      setContainerMarginLeft("0px");
    }
    if (showAllWorkoutsCondensed === false) {
      setshowAllWorkouts(true);
    }
    setsecondBtnDisabled(false);
    if ((filteredResults && layoutGrid) || (filteredResults && layoutList)) {
      setsecondBtnDisabled(true);
    }
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
      if (is_larger_than_980) {
        setBoxShadow(
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        );
      }
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
    // if (showAllWorkouts) console.log(showAllWorkouts, "showAllWorkouts");
  }, [
    searchInput,
    showSecondGrp,
    showThirdGrp,
    showFifthGrp,
    showFourthGrp,
    selectedWorkouts,
    showAllWorkouts,
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
            searchInput,
            setshowFilterBtns,
            searchInput,
            setDisplayPagination,
            addOrRemoveWorkout,
            filterBtnClicked,
            setfilterBtnClicked,
          }}
        />
      </div>

      <>
        {/* workouts filtered or not and closeBtn */}
        {showAllWorkouts === true && (
          <div
            className={
              isSmallScreen
                ? "workouts-section-container-items-and-closebtn workouts_small_screen"
                : "workouts-section-container-items-and-closebtn"
            }
            style={{
              background: bg,
              boxShadow: boxShadow,
            }}
          >
            <div
              // className={`${containerClass ?? ""} means that when containerClass is undefined, the className will be equal to ""
              className={`${containerClass ?? ""}
              ${searchInput ? "apply_overlay" : ""}
              `}
            >
              {!showAllWorkoutsCondensed && (
                <>
                  {/* list of All workouts */}
                  {isDesktopSreen ? (
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
                              showItemsPage7,
                              showItemsPage8,
                              showItemsPage9,
                              showItemsPage10,
                              searchInput,
                              setCurrentPage,
                              addOrRemoveWorkout,
                              containerMarginLeft,
                            }}
                            key={index}
                          ></WorkoutDetailsItem>
                        ))}
                    </>
                  ) : isSmallScreen ? (
                    <div className={"workouts-section-list-container-mobile"}>
                      {workouts &&
                        workouts?.map((workout, index) => (
                          <WorkoutDetailsItemMobile
                            {...{
                              workout,
                              showMobileFormModal,
                            }}
                            key={index}
                          ></WorkoutDetailsItemMobile>
                        ))}
                    </div>
                  ) : null}
                </>
              )}
            </div>
          </div>
        )}
      </>

      {showAllWorkoutsCondensed === true && ( //always put state variables (that control display of children inside them) above the div tags
        <div className="chest-page-workouts-condensed-container">
          <div
            className="chest-page-workouts-condensed-inner"
            style={{ overflowY: showThirdGrp ? `scroll` : `` }}
          >
            <div className="chest-page-workouts-condensed-inner-workouts">
              <>
                {showFirstGrp && (
                  <>
                    {workouts &&
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
                      )}
                  </>
                )}
              </>
              <>
                {showSecondGrp && (
                  <>
                    {workouts &&
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
                      )}
                  </>
                )}
              </>
              <>
                {showThirdGrp && (
                  <>
                    {workouts &&
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
                      )}
                  </>
                )}
              </>
              <>
                {showFourthGrp && (
                  <>
                    {workouts &&
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
                      )}
                  </>
                )}
              </>
              <>
                {showFifthGrp && (
                  <>
                    {workouts &&
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
                      )}
                  </>
                )}
              </>

              <div className="chest-page-workouts-condensed-inner-more-icon">
                {/* avoid using condtion && <Component/>, type instead condition ?  <Component/>, : null , beause in this case , 0 appeard on the page when using && */}
                {showMoreBtn && workouts?.length ? (
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
                ) : null}

                <Spin spinning={spinning} size="large" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
