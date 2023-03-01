import { Button } from "antd";
import { useState } from "react";
import redCloseIcon from "../../assets/img/redCloseIcon.svg";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { WorkoutDetails } from "../details/WorkoutDetails";
import "./sections_styles.scss";

// workoutCondensed and workoutFiltered both are single elements obtained by iterating over workouts ; with js map method
//but workoutIsCondensed is a boolean variable , always set to true
export function WorkoutDetailsItemCondensed({
  workoutCondensed,
  workoutFiltered,
  counter,
  showAllExistentWorkouts,
  showResults,
  filteredWorkout,
  indexx,
  showNotification,
  addOrRemoveWorkout,
}) {
  const [showWorkout, setshowWorkout] = useState(true);
  const [showClosebtn, setshowClosebtn] = useState(false);
  const [displayItem, setdisplayItem] = useState("");
  let workoutIsCondensed = true; //a boolean variable to be passed as prop to the child comp in order to apply a diff className on the container

  function handleCloseClick() {
    setdisplayItem("none");
  }

  const isMobileScreen = useMediaQuery("(max-width: 800px)"); // returns true or false

  if (showAllExistentWorkouts || showResults) {
    return (
      // WorkoutDetailsItemCondensed , 3rd section
      <>
        {!isMobileScreen && (
          <div className="workout-details-item-condensed__third_section_filters">
            <WorkoutDetails
              {...{
                workoutCondensed,
                filteredWorkout,
                showAllExistentWorkouts,
                showResults,
                indexx,
                showNotification,
                addOrRemoveWorkout,
                //this prop prevents the exo icons from displaying on this component
              }}
              workout={
                workoutFiltered
                  ? workoutFiltered
                  : workoutCondensed
                  ? workoutCondensed
                  : null
              }
            />
          </div>
        )}
      </>
    );
  }
  //else
  return (
    // WorkoutDetailsItemCondensed , 2nd section
    <div
      className={`${showClosebtn === true ? "bg1" : ""} ${
        showWorkout ? "bg2" : ""
      }
      workout-details-item-condensed
  `}
      // workout-details-item-condensed , this className is applied to every workout element, on the 2nd section, when the user clicks on the 2nd btn , underneath the search field, on Desktop screens of course
      style={{ display: displayItem }}
    >
      <div
        onMouseOver={() => {
          if (counter === 2) {
            setshowWorkout(false);
            setshowClosebtn(true);
          }
        }}
        className="workout-details-item-condensed-workout"
      >
        {showWorkout && !showClosebtn && (
          <WorkoutDetails
            {...{
              workoutIsCondensed,
              workoutCondensed,
            }}
            workout={workoutCondensed}
          />
        )}
      </div>
      {showClosebtn && !showWorkout && (
        <div
          onMouseLeave={() => {
            setshowWorkout(true);
            setshowClosebtn(false);
          }}
        >
          <Button
            className="workout-details-item-condensed-close-btn"
            onClick={handleCloseClick}
            style={{ height: "fit-content", width: "fit-content" }}
          >
            <img width={"100px"} height="100px" src={redCloseIcon} alt="" />
          </Button>
        </div>
      )}
    </div>
  );
}
