import { Alert, Button, Tooltip } from "antd";
import { useEffect, useState } from "react";
import AbsIcon from "../../assets/img/AbsIcon.png";
import BackIcon from "../../assets/img/backIcon.png";
import BicepsIcon from "../../assets/img/bicepsIcon.png";
import CalvesIcon from "../../assets/img/calvesIcon.png";
import ChestIcon from "../../assets/img/ChestIcon.svg";
import filterIcon from "../../assets/img/filterIcon.svg";
import ForearmsIcon from "../../assets/img/forearmsIcon.png";
import HamstringsIcon from "../../assets/img/HamstringsIcon.svg";
import ShouldersIcon from "../../assets/img/shouldersIcon.png";
import TrapeziusIcon from "../../assets/img/TrapeziusIcon.png";
import TricepsIcon from "../../assets/img/TricepsIcon.png";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { WorkoutDetailsItemCondensed } from "../sections/WorkoutDetailsItemCondensed";
import { AddWorkoutBtn } from "./AddWorkoutBtn";
import "./btns_elems.scss";
let categories = [
  { exoTitle: `Triceps`, icon: TricepsIcon },
  { exoTitle: `Chest`, icon: ChestIcon },
  { exoTitle: `Trapezius`, icon: TrapeziusIcon },
  { exoTitle: `Shoulders`, icon: ShouldersIcon },
  { exoTitle: `Hamstrings`, icon: HamstringsIcon },
  { exoTitle: `Forearms`, icon: ForearmsIcon },
  { exoTitle: `Calves`, icon: CalvesIcon },
  { exoTitle: `Biceps`, icon: BicepsIcon },
  { exoTitle: `Abs`, icon: AbsIcon },
  { exoTitle: `Back`, icon: BackIcon },
];

// Refactor this file, split it into smaller components !!!!

export function WorkoutsListBtns({
  detailsContClass,
  handleIconClick,
  firstIcon,
  secondBtnDisabled,
  handleCondensedIconClick,
  secondIcon,
  showAllWorkoutsCondensed,
  setshowAllWorkoutsCondensed,
  filterBtnDisabled,
  setshowAllWorkouts,
  showAllWorkouts,
  workouts,
  showAllExistentWorkouts,
  setshowAllExistentWorkouts,
  border,
  showFilterBtns,
  setshowFilterBtns,
  setDisplayPagination,
  addOrRemoveWorkout,
  filterBtnClicked,
  setfilterBtnClicked,
}) {
  let hideOtherWorkouts = !showAllWorkoutsCondensed && !showAllWorkouts;
  const [showChestResults, setShowChestResults] = useState(false);
  const [showHamstringsResults, setShowHamstringsResults] = useState(false);
  const [showAbsResults, setShowAbsResults] = useState(false);
  const [showCalvesResults, setShowCalvesResults] = useState(false);
  const [showTricepsResults, setShowTricepsResults] = useState(false);
  const [showTrapeziusResults, setShowTrapeziusResults] = useState(false);
  const [showForearmsResults, setShowForearmsResults] = useState(false);
  const [showShouldersResults, setShowShouldersResults] = useState(false);
  const [showBicepsResults, setShowBicepsResults] = useState(false);
  const [showBackResults, setShowBackResults] = useState(false);
  const [filteredWorkout, setFilteredWorkout] = useState(false); //in order to apply styles in child component to work detailer wrapper when clicking on filter btns
  const [showNotification, setshowNotification] = useState(false);
  const [workoutCateg, setworkoutCateg] = useState(``);
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);

  const showResults =
    showChestResults ||
    showHamstringsResults ||
    showAbsResults ||
    showCalvesResults ||
    showTricepsResults ||
    showTrapeziusResults ||
    showForearmsResults ||
    showShouldersResults ||
    showBicepsResults ||
    showBackResults;
  const chestWorkouts = [
    ...new Set(workouts?.filter((workout) => workout?.exoCategory === `Chest`)),
  ];
  const hamstringsWorkouts = [
    ...new Set(
      workouts?.filter((workout) => workout?.exoCategory === `Hamstrings`)
    ),
  ];
  const AbsWorkouts = [
    ...new Set(workouts?.filter((workout) => workout?.exoCategory === `Abs`)),
  ];
  const calvesWorkouts = [
    ...new Set(
      workouts?.filter((workout) => workout?.exoCategory === `Calves`)
    ),
  ];
  const TricepsWorkouts = [
    ...new Set(
      workouts?.filter((workout) => workout?.exoCategory === `Triceps`)
    ),
  ];
  const TrapeziusWorkouts = [
    ...new Set(
      workouts?.filter((workout) => workout?.exoCategory === `Trapezius`)
    ),
  ];
  const ForearmsWorkouts = [
    ...new Set(
      workouts?.filter((workout) => workout?.exoCategory === `Forearms`)
    ),
  ];
  const ShouldersWorkouts = [
    ...new Set(
      workouts?.filter((workout) => workout?.exoCategory === `Shoulders`)
    ),
  ];
  const BicepsWorkouts = [
    ...new Set(
      workouts?.filter((workout) => workout?.exoCategory === `Biceps`)
    ),
  ];
  const BackWorkouts = [
    ...new Set(workouts?.filter((workout) => workout?.exoCategory === `Back`)),
  ];

  let nbrOfItems = showChestResults
    ? chestWorkouts?.length
    : showHamstringsResults
    ? hamstringsWorkouts?.length
    : showAbsResults
    ? AbsWorkouts?.length
    : showBackResults
    ? BackWorkouts?.length
    : showCalvesResults
    ? calvesWorkouts?.length
    : showForearmsResults
    ? ForearmsWorkouts?.length
    : showTricepsResults
    ? TricepsWorkouts?.length
    : showTrapeziusResults
    ? TrapeziusWorkouts?.length
    : showShouldersResults
    ? ShouldersWorkouts?.length
    : showBicepsResults
    ? BicepsWorkouts?.length
    : null;

  const isMobileScreen = useMediaQuery("(min-width: 800px)"); // returns true or false

  function hideAllWorkouts() {
    setShowAbsResults(false);
    setShowChestResults(false);
    setShowHamstringsResults(false);
    setShowCalvesResults(false);
    setShowTricepsResults(false);
    setShowTrapeziusResults(false);
    setShowForearmsResults(false);
    setShowShouldersResults(false);
    setShowBicepsResults(false);
    setShowBackResults(false);
    setshowAllExistentWorkouts(false);
  }
  function handleFilterWorkouts(exo) {
    switch (exo) {
      case `Chest`:
        hideAllWorkouts();
        setworkoutCateg(`Chest`);
        setShowChestResults(true);
        break;
      case `Hamstrings`:
        hideAllWorkouts();
        setworkoutCateg(`Hamstrings`);
        setShowHamstringsResults(true);
        break;
      case `Abs`:
        hideAllWorkouts();
        setworkoutCateg(`Abs`);
        setShowAbsResults(true);
        break;
      case `Calves`:
        hideAllWorkouts();
        setworkoutCateg(`Calves`);
        setShowCalvesResults(true);
        break;
      case `Triceps`:
        hideAllWorkouts();
        setworkoutCateg(`Triceps`);
        setShowTricepsResults(true);
        break;
      case `Trapezius`:
        hideAllWorkouts();
        setworkoutCateg(`Trapezius`);
        setShowTrapeziusResults(true);
        break;
      case `Shoulders`:
        hideAllWorkouts();
        setworkoutCateg(`Shoulders`);
        setShowShouldersResults(true);
        break;
      case `Forearms`:
        hideAllWorkouts();
        setworkoutCateg(`Forearms`);
        setShowForearmsResults(true);
        break;
      case `Biceps`:
        hideAllWorkouts();
        setworkoutCateg(`Biceps`);
        setShowBicepsResults(true);
        break;
      case `Back`:
        hideAllWorkouts();
        setworkoutCateg(`Back`);
        setShowBackResults(true);
        break;
      default:
        break;
    }
    setFilteredWorkout(true);
    setDisplayPagination("none");
    setshowNotification(true);
    setfilterBtnClicked(true);
    console.log(filterBtnClicked);
  }
  function handleShowFilterBtns() {
    //toggle logic, so that when the user clicks on the filter btn, the filter list of btns is displayed, and when he clicks again, this list is hidden
    setshowFilterBtns(!showFilterBtns);
    setshowAllWorkoutsCondensed(false);
    setshowAllWorkouts(false);
    setshowAllExistentWorkouts(true);
    setDisplayPagination("none");
    setshowNotification(false);
  }

  //save selectedWorkouts to the brower's local storage
  useEffect(() => {
    localStorage.setItem(
      "selectedWorkoutsState",
      JSON.stringify(selectedWorkouts)
    );
  }, [selectedWorkouts]);

  useEffect(() => {
    if (showResults) {
      console.log("showResults !!!!");
    }
  }, [showResults]);

  return (
    <div className="workouts-list-and-btns-container">
      {/* notification */}
      <>
        {/* show the notification only when the user clicks the 3rd btn and then clicks on on of the filter btns */}
        {showNotification && !showAllWorkoutsCondensed && !showAllWorkouts && (
          <div className="filtered-results-notification notification">
            <Alert
              className="ant-alert ant-alert-filtered"
              message={
                <div className="noti-wrapper">
                  <span className="noti-text">
                    There is &nbsp; {nbrOfItems} &nbsp;
                    {nbrOfItems > 1 ? `items` : `item`} &nbsp; of the &nbsp;
                  </span>
                  <span className="noti-text">
                    {workoutCateg} &nbsp; category !
                  </span>
                </div>
              }
              banner
              // closable
            />
          </div>
        )}
      </>
      <div className="workouts-btns-and-elements">
        <div className="workouts-btns-and-elements-three-btns">
          {/* the 3 control btns */}

          {isMobileScreen && (
            <>
              {/* 1st btn */}
              <>
                <Tooltip
                  title={
                    detailsContClass === `workout-details-container-as-grid`
                      ? `Display as list`
                      : `Display as grid`
                  }
                >
                  <Button
                    className="workouts-section-toggle-btn btn1"
                    onClick={handleIconClick}
                    style={{
                      height: "fit-content",
                      width: "fit-content",
                      border: showAllExistentWorkouts ? border : ``,
                    }}
                  >
                    <img width={"30px"} height="30px" src={firstIcon} alt="" />
                  </Button>
                </Tooltip>
              </>

              <>
                {/* 2nd btn */}
                <Tooltip title="Display all items in one section">
                  <Button
                    className="btn2"
                    disabled={secondBtnDisabled}
                    onClick={handleCondensedIconClick}
                    style={{ height: "fit-content", width: "fit-content" }}
                  >
                    <img width={"30px"} height="30px" src={secondIcon} alt="" />
                  </Button>
                </Tooltip>
              </>

              <>
                {/* 3rd btn */}
                <Tooltip title="Filter these workouts">
                  <Button
                    className="workouts-section-filter-btn btn3"
                    disabled={filterBtnDisabled}
                    onClick={handleShowFilterBtns}
                    style={{ height: "fit-content", width: "fit-content" }}
                  >
                    <img width={"30px"} height="30px" src={filterIcon} alt="" />
                  </Button>
                </Tooltip>
              </>
            </>
          )}
        </div>
        {/* Filter btns */}
        <>
          {showFilterBtns &&
            !showAllWorkouts &&
            !showAllWorkoutsCondensed &&
            isMobileScreen && (
              <>
                <div className="workouts-btns-and-elements-categ-btns-wrapper grp1">
                  {categories &&
                    categories?.map(
                      (category, index) =>
                        index < 5 && (
                          <Button
                            disabled={!workouts?.length}
                            className={`workouts-btns-and-elements-categ-btn-elem
                           workouts-btns-and-elements-categ-btn-${category?.exoTitle}-filter-btn
                           filter-btn${index}
                          `}
                            key={index}
                            onClick={() => {
                              handleFilterWorkouts(category?.exoTitle);
                            }}
                            style={{
                              height: "fit-content",
                              width: "fit-content",
                            }}
                          >
                            <span>{category?.exoTitle}</span>
                            <img
                              width={"30px"}
                              height="30px"
                              src={category?.icon}
                              alt=""
                            />
                          </Button>
                        )
                    )}
                </div>
                <div className="workouts-btns-and-elements-categ-btns-wrapper grp2">
                  {categories &&
                    categories?.map(
                      (category, index) =>
                        index > 5 && (
                          <Button
                            // if there is no workout on the list, then this btn will be disabled
                            disabled={!workouts?.length}
                            className={`
                            workouts-btns-and-elements-categ-btn-elem
                            workouts-btns-and-elements-categ-btn-${category?.exoTitle}-filter-btn
                            filter-btn${index}
                            `}
                            key={index}
                            onClick={() => {
                              handleFilterWorkouts(category?.exoTitle);
                            }}
                            style={{
                              height: "fit-content",
                              width: "fit-content",
                            }}
                            // disabled={secondBtnDisabled}
                          >
                            <span>{category?.exoTitle}</span>
                            <img
                              width={"30px"}
                              height="30px"
                              src={category?.icon}
                              alt=""
                            />
                          </Button>
                        )
                    )}
                </div>
              </>
            )}
        </>
        {/* All existent workouts */}
        {showAllExistentWorkouts && (
          <div className="all-existent-workouts-as-grid">
            {workouts &&
              workouts?.map((workoutCondensed) => (
                <WorkoutDetailsItemCondensed //all items condensed
                  {...{
                    workoutCondensed,
                    showAllExistentWorkouts,
                    showAllWorkoutsCondensed,
                    filteredWorkout,
                    addOrRemoveWorkout,
                  }}
                  key={workoutCondensed?._id}
                />
              ))}
          </div>
        )}

        <>
          {showAllExistentWorkouts && (
            <div className="no_workout">
              <span>First, add some workouts to your page , through the </span>
              <AddWorkoutBtn AddWorkoutBtnDisabled={true} />
              <span> button above !</span>
            </div>
          )}
        </>
        {/* Filtered Results */}
        {!showAllExistentWorkouts && (
          <>
            <>
              {hideOtherWorkouts &&
                showChestResults &&
                chestWorkouts &&
                chestWorkouts?.map((workoutFiltered, indexx) => (
                  <WorkoutDetailsItemCondensed //all items condensed
                    {...{
                      workoutFiltered,
                      showAllExistentWorkouts,
                      showAllWorkoutsCondensed,
                      showResults,
                      filteredWorkout,
                      indexx,
                      showNotification,
                    }}
                    key={workoutFiltered?._id}
                  />
                ))}
            </>

            <>
              {hideOtherWorkouts &&
                showHamstringsResults &&
                hamstringsWorkouts &&
                hamstringsWorkouts?.map((workoutFiltered, indexx) => (
                  <WorkoutDetailsItemCondensed //all items condensed
                    {...{
                      workoutFiltered,
                      showAllExistentWorkouts,
                      showAllWorkoutsCondensed,
                      showResults,
                      filteredWorkout,
                      indexx,
                      showNotification,
                    }}
                    key={workoutFiltered?._id}
                  />
                ))}
            </>

            <>
              {hideOtherWorkouts &&
                showAbsResults &&
                AbsWorkouts &&
                AbsWorkouts?.map((workoutFiltered, indexx) => (
                  <WorkoutDetailsItemCondensed //all items condensed
                    {...{
                      workoutFiltered,
                      showAllExistentWorkouts,
                      showAllWorkoutsCondensed,
                      showResults,
                      filteredWorkout,
                      indexx,
                      showNotification,
                    }}
                    key={workoutFiltered?._id}
                  />
                ))}
            </>

            <>
              {hideOtherWorkouts &&
                showCalvesResults &&
                calvesWorkouts &&
                calvesWorkouts?.map((workoutFiltered, indexx) => (
                  <WorkoutDetailsItemCondensed //all items condensed
                    {...{
                      workoutFiltered,
                      showAllExistentWorkouts,
                      showAllWorkoutsCondensed,
                      showResults,
                      filteredWorkout,
                      indexx,
                      showNotification,
                    }}
                    key={workoutFiltered?._id}
                  />
                ))}
            </>

            <>
              {hideOtherWorkouts &&
                showTricepsResults &&
                TricepsWorkouts &&
                TricepsWorkouts?.map((workoutFiltered, indexx) => (
                  <WorkoutDetailsItemCondensed //all items condensed
                    {...{
                      workoutFiltered,
                      showAllExistentWorkouts,
                      showAllWorkoutsCondensed,
                      showResults,
                      filteredWorkout,
                      indexx,
                      showNotification,
                    }}
                    key={workoutFiltered?._id}
                  />
                ))}
            </>

            <>
              {hideOtherWorkouts &&
                showTrapeziusResults &&
                TrapeziusWorkouts &&
                TrapeziusWorkouts?.map((workoutFiltered, indexx) => (
                  <WorkoutDetailsItemCondensed //all items condensed
                    {...{
                      workoutFiltered,
                      showAllExistentWorkouts,
                      showAllWorkoutsCondensed,
                      showResults,
                      filteredWorkout,
                      indexx,
                      showNotification,
                    }}
                    key={workoutFiltered?._id}
                  />
                ))}
            </>

            <>
              {hideOtherWorkouts &&
                showForearmsResults &&
                ForearmsWorkouts &&
                ForearmsWorkouts?.map((workoutFiltered, indexx) => (
                  <WorkoutDetailsItemCondensed //all items condensed
                    {...{
                      workoutFiltered,
                      showAllExistentWorkouts,
                      showResults,
                      showAllWorkoutsCondensed,
                      filteredWorkout,
                      indexx,
                      showNotification,
                    }}
                    key={workoutFiltered?._id}
                  />
                ))}
            </>

            <>
              {hideOtherWorkouts &&
                showShouldersResults &&
                ShouldersWorkouts &&
                ShouldersWorkouts?.map((workoutFiltered, indexx) => (
                  <WorkoutDetailsItemCondensed //all items condensed
                    {...{
                      workoutFiltered,
                      showAllExistentWorkouts,
                      showAllWorkoutsCondensed,
                      showResults,
                      filteredWorkout,
                      indexx,
                      showNotification,
                    }}
                    key={workoutFiltered?._id}
                  />
                ))}
            </>

            <>
              {hideOtherWorkouts &&
                showBicepsResults &&
                BicepsWorkouts &&
                BicepsWorkouts?.map((workoutFiltered, indexx) => (
                  <WorkoutDetailsItemCondensed //all items condensed
                    {...{
                      workoutFiltered,
                      showAllExistentWorkouts,
                      showAllWorkoutsCondensed,
                      showResults,
                      filteredWorkout,
                      indexx,
                      showNotification,
                    }}
                    key={workoutFiltered?._id}
                  />
                ))}
            </>

            <>
              {hideOtherWorkouts &&
                showBackResults &&
                BackWorkouts &&
                BackWorkouts?.map((workoutFiltered, indexx) => (
                  <WorkoutDetailsItemCondensed //all items condensed
                    {...{
                      workoutFiltered,
                      showAllExistentWorkouts,
                      showAllWorkoutsCondensed,
                      showResults,
                      filteredWorkout,
                      indexx,
                      showNotification,
                    }}
                    key={workoutFiltered?._id}
                  />
                ))}
            </>
          </>
        )}
      </div>
    </div>
  );
}
//when the user clicks on filter btn, decrease the size of the form and of all inputs and select
//components inside...
