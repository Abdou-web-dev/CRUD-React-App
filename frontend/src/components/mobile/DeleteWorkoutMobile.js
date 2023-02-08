import "./delete_details_mobile.scss";

import { Button } from "antd";

export function DeleteWorkoutMobile({ handleDelete, setshowModal }) {
  function deleteWorkout() {
    handleDelete();
    setTimeout(() => {
      setshowModal(false);
    }, 200);
  }
  function cancel() {
    setshowModal(false);
  }
  return (
    <div className="delete-workout-mobile-container">
      <div className="delete-workout-mobile-inner">
        <div className="delete-workout-mobile-text">
          <span>Are you sure you want to delete this workout ?</span>
        </div>
        <div className="delete-workout-mobile-btns">
          <Button
            className="delete-workout-mobile-yes-btn"
            onClick={deleteWorkout}
          >
            <span>Yes</span>
          </Button>
          <Button className="delete-workout-mobile-no-btn" onClick={cancel}>
            <span>No</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
