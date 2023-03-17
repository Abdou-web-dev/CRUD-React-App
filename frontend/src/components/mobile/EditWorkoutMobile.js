import { useEffect } from "react";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
import { EditModalMobile } from "../modals/EditModalMobile";
import "./delete_details_mobile.scss";

export function EditWorkoutMobile({
  workout,
  updatedWorkout,
  setUpdatedWorkout,
  showModal,
  setshowModal,
}) {
  const { dispatch } = useWorkoutsContext();

  useEffect(() => {}, []);

  return (
    <div className="edit-workout-mobile-container">
      <EditModalMobile
        {...{
          showModal,
          setshowModal,
          workout,
          dispatch,
          setUpdatedWorkout,
          updatedWorkout,
        }}
      />
    </div>
  );
}
