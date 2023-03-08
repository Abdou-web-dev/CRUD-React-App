import { Button } from "antd";
import "./btns_elems.scss";
export function EditBTn({ handleEditclick }) {
  return (
    <Button className="profile-edit-btn" onClick={handleEditclick}>
      <span>Edit</span>
    </Button>
  );
}
