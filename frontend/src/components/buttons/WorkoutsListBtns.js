import { Button, Tooltip } from "antd";
import { useState } from "react";
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
import { WorkoutDetailsItemCondensed } from "../sections/WorkoutDetailsItemCondensed";

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

export function WorkoutsListBtns({
  detailsContClass,
  handleIconClick,
  firstIcon,
  secondBtnDisabled,
  handleCondensedIconClick,
  secondIcon,
  showAllWorkoutsCondensed,
  setshowAllWorkoutsCondensed,
  showFilterButton,
  setshowAllWorkouts,
  showAllWorkouts,
  workouts,
  showAllExistentWorkouts,
  setshowAllExistentWorkouts,
}) {
  const [showChestResults, setShowChestResults] = useState(false);
  const [showHamstringsResults, setShowHamstringsResults] = useState(false);
  const [showAbsResults, setShowAbsResults] = useState(false);
  const [showCalvesResults, setShowCalvesResults] = useState(false);
  // const [showHamstringsResults, setShowHamstringsResults] = useState(false);
  // const [showHamstringsResults, setShowHamstringsResults] = useState(false);
  // const [showHamstringsResults, setShowHamstringsResults] = useState(false);

  const [showFilterBtns, setshowFilterBtns] = useState(false);

  const chowResults =
    showChestResults ||
    showHamstringsResults ||
    showAbsResults ||
    showCalvesResults;
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
  const backWorkouts = [
    ...new Set(workouts?.filter((workout) => workout?.exoCategory === `Back`)),
  ];
  const calvesWorkouts = [
    ...new Set(
      workouts?.filter((workout) => workout?.exoCategory === `Calves`)
    ),
  ];
  function hideAllWorkouts() {
    setShowAbsResults(false);
    setShowChestResults(false);
    setShowHamstringsResults(false);
    setShowCalvesResults(false);

    setshowAllExistentWorkouts(false);
  }
  function handleFilterWorkouts(exo) {
    switch (exo) {
      case `Chest`:
        hideAllWorkouts();
        setShowChestResults(true);
        break;
      case `Hamstrings`:
        hideAllWorkouts();
        setShowHamstringsResults(true);
        break;
      case `Abs`:
        hideAllWorkouts();
        setShowAbsResults(true);
        break;
      case `Calves`:
        hideAllWorkouts();
        setShowCalvesResults(true);
        break;
      case `Abs`:
        hideAllWorkouts();
        setShowAbsResults(true);
        break;
      case `Abs`:
        hideAllWorkouts();
        setShowAbsResults(true);
        break;
      case `Abs`:
        hideAllWorkouts();
        setShowAbsResults(true);
        break;
      case `Abs`:
        hideAllWorkouts();
        setShowAbsResults(true);
        break;

      default:
        break;
    }
  }
  function handleShowFilterBtns() {
    //toggle logic, so that when the user clicks on the filter btn, the filter list of btns is displayed, and when he clicks again, this list is hidden
    setshowFilterBtns(!showFilterBtns);
    setshowAllWorkoutsCondensed(false);
    setshowAllWorkouts(false);
    setshowAllExistentWorkouts(true);
  }

  return (
    <>
      <Tooltip
        title={
          detailsContClass === `workout-details-container-as-grid`
            ? `Display as list`
            : `Display as grid`
        }
      >
        <Button
          className="workouts-section-toggle-btn"
          onClick={handleIconClick}
          style={{ height: "fit-content", width: "fit-content" }}
        >
          <img width={"30px"} height="30px" src={firstIcon} alt="" />
        </Button>
      </Tooltip>
      <Tooltip title="Display all items in one section">
        <Button
          disabled={secondBtnDisabled}
          onClick={handleCondensedIconClick}
          style={{ height: "fit-content", width: "fit-content" }}
        >
          <img width={"30px"} height="30px" src={secondIcon} alt="" />
        </Button>
      </Tooltip>
      {showFilterButton && (
        <Tooltip title="Filter these workouts">
          <Button
            className="workouts-section-filter-btn"
            // disabled={secondBtnDisabled}
            onClick={handleShowFilterBtns}
            style={{ height: "fit-content", width: "fit-content" }}
          >
            <img width={"30px"} height="30px" src={filterIcon} alt="" />
          </Button>
        </Tooltip>
      )}
      <>
        {showFilterBtns && !showAllWorkouts && !showAllWorkoutsCondensed && (
          <div>
            {categories &&
              categories?.map((category, index) => (
                <Button
                  key={index}
                  className={`workouts-section-${category.exoTitle}-filter-btn`}
                  onClick={() => {
                    handleFilterWorkouts(category.exoTitle);
                  }}
                  style={{ height: "fit-content", width: "fit-content" }}
                  // disabled={secondBtnDisabled}
                >
                  <span>{category.exoTitle}</span>
                  <img
                    width={"30px"}
                    height="30px"
                    src={category.icon}
                    alt=""
                  />
                </Button>
              ))}
          </div>
        )}
      </>
      <>
        {showAllExistentWorkouts &&
          workouts &&
          workouts?.map((workoutCondensed) => (
            <div>
              <WorkoutDetailsItemCondensed //all items condensed
                {...{
                  workoutCondensed,
                  showAllExistentWorkouts,
                }}
                key={workoutCondensed?._id}
              />
            </div>
          ))}
      </>
      <>
        {showChestResults &&
          chestWorkouts &&
          chestWorkouts?.map((workoutFiltered) => (
            <div>
              <WorkoutDetailsItemCondensed //all items condensed
                {...{
                  workoutFiltered,
                  showAllExistentWorkouts,
                  chowResults,
                }}
                key={workoutFiltered?._id}
              />
            </div>
          ))}
      </>

      <>
        {showHamstringsResults &&
          hamstringsWorkouts &&
          hamstringsWorkouts?.map((workoutFiltered) => (
            <div>
              <WorkoutDetailsItemCondensed //all items condensed
                {...{
                  workoutFiltered,
                  showAllExistentWorkouts,
                  chowResults,
                }}
                key={workoutFiltered?._id}
              />
            </div>
          ))}
      </>

      <>
        {showAbsResults &&
          AbsWorkouts &&
          AbsWorkouts?.map((workoutFiltered) => (
            <div>
              <WorkoutDetailsItemCondensed //all items condensed
                {...{
                  workoutFiltered,
                  showAllExistentWorkouts,
                  chowResults,
                }}
                key={workoutFiltered?._id}
              />
            </div>
          ))}
      </>

      <>
        {showCalvesResults &&
          calvesWorkouts &&
          calvesWorkouts?.map((workoutFiltered) => (
            <div>
              <WorkoutDetailsItemCondensed //all items condensed
                {...{
                  workoutFiltered,
                  showAllExistentWorkouts,
                  chowResults,
                }}
                key={workoutFiltered?._id}
              />
            </div>
          ))}
      </>
    </>
  );
}

// onClick={(category) => {
//   handleFilterWorkouts(category.exoTitle);
// }}
// wont trigger the click , because of the category argument pased to the function, it must recieve no arg
