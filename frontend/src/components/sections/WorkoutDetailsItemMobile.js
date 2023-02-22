import { Modal } from "antd";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
import { WorkoutCard } from "../card/WorkoutCard";
import { TrashIcon } from "../icons/Icons";
import { DeleteWorkoutMobile } from "../mobile/DeleteWorkoutMobile";
import "../mobile/delete_details_mobile.scss";
import { EditWorkoutMobile } from "../mobile/EditWorkoutMobile";
import { ShareWorkoutMobile } from "../mobile/ShareWorkoutMobile";
import "./workout_details_mobile.scss";

// import starIconGray from "../../assets/img/starIconGray.svg";
export function WorkoutDetailsItemMobile({
  workout,
  showMobileFormModal,
  searchValue,
  filteredResult,
}) {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const [showModal, setshowModal] = useState(false);
  const [showDeleteModalContent, setshowDeleteModalContent] = useState(false);
  const [showEditModalContent, setshowEditModalContent] = useState(false);
  const [showShareModalContent, setshowShareModalContent] = useState(false);
  const [updatedWorkout, setUpdatedWorkout] = useState({});

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
  const handleDeleteWorkout = () => {
    setshowModal(true);
    setshowDeleteModalContent(true);
    setshowEditModalContent(false);
    setshowShareModalContent(false);
  };
  const handleEdit = () => {
    setshowModal(true);
    setshowEditModalContent(true);
    setshowDeleteModalContent(false);
    setshowShareModalContent(false);
    setUpdatedWorkout(workout);
  };
  const handleShare = () => {
    setshowModal(true);
    setshowShareModalContent(true);
    setshowDeleteModalContent(false);
    setshowEditModalContent(false);
  };

  return (
    // showMobileFormModal , Add a Workout modal
    <div
      className={`${
        showMobileFormModal
          ? "workout-details-mobile-container move_a_bit_from_left"
          : "workout-details-mobile-container"
      }
      ${filteredResult ? "workout-details-mobile-container-filtered" : ""}`}
    >
      <div
        className="workout-details-mobile-inner"
        style={{ background: "rgb(240, 242, 245)" }}
      >
        <WorkoutCard
          {...{
            searchValue,
            workout,
            handleDeleteWorkout,
            handleShare,
            handleEdit,
            filteredResult,
          }}
        />
      </div>

      {/* Delete Modal */}
      <>
        <Modal
          className={
            showEditModalContent
              ? "mobile-control-modal edit-modal-wrapper"
              : "mobile-control-modal"
          }
          open={showModal}
          maskClosable={true}
          closable={true}
          keyboard={true}
          mask={true}
          onOk={() => setshowModal(false)}
          onCancel={() => setshowModal(false)}
          // width={layoutGrid ? "50%" : "60%"}
          footer={null}
          closeIcon={<TrashIcon />}
        >
          {showDeleteModalContent && (
            <DeleteWorkoutMobile
              {...{ handleDelete, setshowModal }}
            ></DeleteWorkoutMobile>
          )}
          {showEditModalContent && (
            <EditWorkoutMobile
              {...{
                workout,
                updatedWorkout,
                setUpdatedWorkout,
                showModal,
                setshowModal,
              }}
            ></EditWorkoutMobile>
          )}
          {showShareModalContent && (
            <ShareWorkoutMobile
              {...{
                setshowModal,
              }}
            ></ShareWorkoutMobile>
          )}
        </Modal>
      </>
    </div>
  );
}
