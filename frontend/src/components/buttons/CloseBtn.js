import { Button } from "antd";
import cancelLittleIcon from "../../assets/img/cancelIcon.svg";
import "./btns_elems.scss";

export function CloseBtn({ setShowEditInput, cancelIcon }) {
  return (
    <Button
      className="x_icon-btn"
      onClick={() => {
        setShowEditInput(false);
      }}
    >
      <img className="x_icon" src={cancelIcon || cancelLittleIcon} alt="" />
    </Button>
  );
}
