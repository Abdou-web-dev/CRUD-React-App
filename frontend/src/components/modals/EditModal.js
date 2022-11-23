import { Button, Input } from "antd";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./modals_styles.scss";

export function EditModal({
  setopenEditModal,
  workout,
  dispatch,
  setUpdatedWorkout,
  updatedWorkout,
}) {
  const { user } = useAuthContext();

  const [currentReps, setcurrentReps] = useState(updatedWorkout?.reps);
  const [currentLoad, setcurrentLoad] = useState(updatedWorkout?.load);
  const [currentTitle, setcurrentTitle] = useState(updatedWorkout?.title);

  const handleRepsChange = (e) => {
    setcurrentReps(e.target.value);
    setUpdatedWorkout((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleLoadChange = (e) => {
    setcurrentLoad(e.target.value);
    setUpdatedWorkout((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleTitleChange = (e) => {
    setcurrentTitle(e.target.value);
    setUpdatedWorkout((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSaveEdit = async () => {
    if (!user) {
      return;
    }
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "PATCH", //PUt and PATCH are equivalent
      body: JSON.stringify(updatedWorkout),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log("error occured during updating");
    }
    if (response.ok) {
      console.log(updatedWorkout);
      dispatch({ type: "UPDATE_WORKOUT", payload: json });
    }
    setopenEditModal(false);
  };

  return (
    <div className="edit-modal">
      <div className="edit-modal-title-wrapper">
        <Input
          className="edit-modal-title-input"
          value={currentTitle}
          onChange={handleTitleChange}
          type="text"
          name="title"
          onClick={() => {
            setcurrentTitle("");
          }}
          onBlur={() => {
            setcurrentTitle(updatedWorkout?.title);
          }}
          allowClear
        />
      </div>
      <div className="edit-modal-reps-load-wrapper">
        <div className="edit-modal-block1">
          <label className="edit-modal-label1" htmlFor="load">
            load :
          </label>

          <Input
            className="edit-modal-load-input"
            value={currentLoad}
            onChange={handleLoadChange}
            type="number"
            name="load"
            onClick={() => {
              setcurrentLoad("");
            }}
            onBlur={() => {
              setcurrentLoad(updatedWorkout?.load);
            }}
          />
        </div>

        <div className="edit-modal-block2">
          <label className="edit-modal-label2" htmlFor="reps">
            reps :
          </label>
          <Input
            className="edit-modal-reps-input"
            value={currentReps}
            onChange={handleRepsChange}
            type="number"
            name="reps"
            onClick={() => {
              setcurrentReps("");
            }}
            onBlur={() => {
              setcurrentReps(updatedWorkout?.reps);
            }}
          />
        </div>
      </div>

      <div className="edit-modal-btns">
        <Button
          className="edit-modal-cancel-btn"
          onClick={() => setopenEditModal(false)}
        >
          <span>Cancel</span>
        </Button>
        <Button className="edit-modal-save-btn" onClick={handleSaveEdit}>
          <span>Save</span>
        </Button>
      </div>
    </div>
  );
}
