import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import { Button, Card, Divider, Modal } from "antd";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import AbsIcon from "../../assets/img/AbsIcon.png";
import BackIcon from "../../assets/img/backIcon.png";
import BicepsIcon from "../../assets/img/bicepsIcon.png";
import CalvesIcon from "../../assets/img/calvesIcon.png";
import ChestIcon from "../../assets/img/ChestIcon.svg";
import editIconPen from "../../assets/img/editer.png";
import ForearmsIcon from "../../assets/img/forearmsIcon.png";
import HamstringsIcon from "../../assets/img/HamstringsIcon.svg";
import ShouldersIcon from "../../assets/img/shouldersIcon.png";
import TrapeziusIcon from "../../assets/img/TrapeziusIcon.png";
import TricepsIcon from "../../assets/img/TricepsIcon.png";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
import { TrashIcon } from "../icons/Icons";
import { DeleteWorkoutMobile } from "../mobile/DeleteWorkoutMobile";
import "../mobile/delete_details_mobile.scss";
import { EditWorkoutMobile } from "../mobile/EditWorkoutMobile";
import { ShareWorkoutMobile } from "../mobile/ShareWorkoutMobile";
import "./workout_details_mobile.scss";

// import starIconGray from "../../assets/img/starIconGray.svg";
export function WorkoutDetailsItemMobile({
  workout,
  layoutGrid,
  addOrRemoveWorkout,
}) {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  let createdAt = workout?.createdAt;
  let workoutCateg = workout?.exoCategory;
  const [showModal, setshowModal] = useState(false);
  const [showDeleteModalContent, setshowDeleteModalContent] = useState(false);
  const [showEditModalContent, setshowEditModalContent] = useState(false);
  const [showShareModalContent, setshowShareModalContent] = useState(false);

  const isMobileScreen = useMediaQuery(
    "(min-width: 550px) and (max-width: 700px)"
  );
  const isSoSmallScreen = useMediaQuery(
    "(min-width: 0px) and (max-width: 550px)"
  );
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
    <div className="workout-details-mobile-container">
      <div
        className="workout-details-mobile-inner"
        style={{ background: "rgb(240, 242, 245)" }}
      >
        <Card
          className="workout-details-mobile-card"
          title={
            <div className="card-title">
              <div className="card-title-wrapper">
                <span>{workout?.title}</span>
              </div>
              <img
                className="card-title-icon"
                src={
                  workoutCateg === `Hamstrings`
                    ? HamstringsIcon
                    : workoutCateg === `Chest`
                    ? ChestIcon
                    : workoutCateg === `Trapezius`
                    ? TrapeziusIcon
                    : workoutCateg === `Shoulders`
                    ? ShouldersIcon
                    : workoutCateg === `Forearms`
                    ? ForearmsIcon
                    : workoutCateg === `Calves`
                    ? CalvesIcon
                    : workoutCateg === `Biceps`
                    ? BicepsIcon
                    : workoutCateg === `Abs`
                    ? AbsIcon
                    : workoutCateg === `Back`
                    ? BackIcon
                    : workoutCateg === `Triceps`
                    ? TricepsIcon
                    : null
                }
                alt=""
              />
            </div>
          }
          bordered={false}
          style={{ width: 300 }}
        >
          <div className="workout-details-mobile-card-content-text">
            <div className="workout-mobile-card-content-load">
              <span className="span1">
                <strong>
                  Load (<span className="span1-kg">kg</span> ) :
                </strong>
              </span>
              <span className="span2">&nbsp;{workout?.load}</span>
            </div>

            <div className="workout-mobile-card-content-reps">
              <span className="span1">
                <strong>Number of reps : </strong>
              </span>

              <span className="span2">{workout?.reps}</span>
            </div>

            <div className="workout-mobile-card-content-date">
              <span>
                {formatDistanceToNow(new Date(createdAt), {
                  addSuffix: true,
                })}
              </span>
            </div>
          </div>

          <div>
            <Divider></Divider>
          </div>

          <div className="workout-details-mobile-card-content-icons">
            <Button
              className="workout-mobile-card-content-delete-iconbtn"
              onClick={handleDeleteWorkout}
            >
              <DeleteIcon color="warning" />
            </Button>
            <Button
              className="workout-mobile-card-content-share-iconbtn"
              onClick={handleShare}
            >
              <ShareIcon color="info"></ShareIcon>
            </Button>
            <Button
              className="workout-mobile-card-content-edit-iconbtn"
              onClick={handleEdit}
            >
              <img className={"edit-img"} src={editIconPen} alt="" />
            </Button>
          </div>
        </Card>
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
