import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import { Button, Card, Divider } from "antd";
import { formatDistanceToNow } from "date-fns";
import Highlight from "react-highlighter";
import AbsIcon from "../../assets/img/AbsIcon.png";
import BackIcon from "../../assets/img/backIcon.png";
import BicepsIcon from "../../assets/img/bicepsIcon.png";
import CalvesIcon from "../../assets/img/calvesIcon.png";
import ChestIcon from "../../assets/img/ChestIcon.svg";
import editIconPen from "../../assets/img/editer.png";
import fallBackIcon from "../../assets/img/fallback.png";
import ForearmsIcon from "../../assets/img/forearmsIcon.png";
import HamstringsIcon from "../../assets/img/HamstringsIcon.svg";
import ShouldersIcon from "../../assets/img/shouldersIcon.png";
import TrapeziusIcon from "../../assets/img/TrapeziusIcon.png";
import TricepsIcon from "../../assets/img/TricepsIcon.png";
import "../mobile/delete_details_mobile.scss";
import "../sections/workout_details_mobile.scss";

export function WorkoutCard({
  searchValue,
  workout,
  handleDeleteWorkout,
  handleShare,
  handleEdit,
  filteredResult,
}) {
  let createdAt = workout?.createdAt;
  let workoutCateg = workout?.exoCategory;

  return (
    <Card
      className={
        filteredResult
          ? "workout-details-mobile-card workout-details-mobile-card-filtered"
          : "workout-details-mobile-card"
      }
      title={
        <div className="card-title">
          <div className="card-title-wrapper">
            <Highlight search={searchValue}>{workout?.title}</Highlight>
          </div>
          <img
            width={`60px`}
            height="60px"
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
                : fallBackIcon
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
            {createdAt &&
              formatDistanceToNow(new Date(createdAt), {
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
  );
}
