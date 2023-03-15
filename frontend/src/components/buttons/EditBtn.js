import { Button } from "antd";
import { useEffect, useState } from "react";
import "./btns_elems.scss";

export function EditBTn({
  handleEditclick,
  showInput,
  inputValue,
  showCountrySelect,
}) {
  const [editDisabled, setEditDisabled] = useState(false);
  useEffect(() => {
    if (!showInput) {
      setEditDisabled(false);
    } else {
      setEditDisabled(true);
    }
  }, [showInput]);

  useEffect(() => {
    if (inputValue) {
      setEditDisabled(true);
    } else {
      setEditDisabled(false);
    }
  }, [inputValue]);

  useEffect(() => {
    if (showCountrySelect) {
      setEditDisabled(true);
    }
  }, [showCountrySelect]);

  return (
    <Button
      disabled={editDisabled}
      className="profile-edit-btn"
      onClick={handleEditclick}
    >
      <span>Edit</span>
    </Button>
  );
}
