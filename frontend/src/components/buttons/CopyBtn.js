import { Button } from "antd";
import copy_icon from "../../assets/img/copy.svg";

export function CopyBtn({ handleCopyClick }) {
  return (
    <Button onClick={handleCopyClick} className="profile-email-copy-btn">
      <img src={copy_icon} alt="" />
    </Button>
  );
}
