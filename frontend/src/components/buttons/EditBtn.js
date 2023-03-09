import { Button } from "antd";
import "./btns_elems.scss";
export function EditBTn({ handleEditclick, showInput, inputValue }) {
  return (
    <Button
      disabled={!showInput ? false : inputValue ? true : null}
      className="profile-edit-btn"
      onClick={handleEditclick}
    >
      <span>Edit</span>
    </Button>
  );
}
