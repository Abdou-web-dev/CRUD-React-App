import { Button } from "antd";
import plus from "../../assets/img/plus-sign.svg";
import "./btns_elems.scss";

export const AddWorkoutBtn = ({
  setShowFormNewWindow,
  showFormNewWindow,
  AddWorkoutBtnDisabled,
}) => {
  return (
    <>
      <Button
        disabled={AddWorkoutBtnDisabled}
        onClick={() => setShowFormNewWindow(!showFormNewWindow)}
        className="form-filter-btn-plus-btn"
      >
        <img src={plus} alt="" />
        <span>Add a New Workout</span>
      </Button>
    </>
  );
};
