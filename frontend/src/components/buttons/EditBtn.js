import { Button } from "antd";
import { useEffect, useState } from "react";
import "./btns_elems.scss";

export function EditBTn({
  handleEditclick,
  showInput,
  inputValue,
  showCountrySelect,
  selectedCountry,
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

  useEffect(() => {
    if (selectedCountry) {
      setEditDisabled(false);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (!showCountrySelect) {
      setEditDisabled(false);
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
