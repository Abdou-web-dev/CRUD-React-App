import { Button } from "antd";
import { useEffect, useState } from "react";
import edit_icon from "../../assets/img/edit_icon.png";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
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
  const isSmallScreen = useMediaQuery("(max-width: 550px)");

  return (
    <Button
      className={isSmallScreen ? "profile-edit-btn-small" : "profile-edit-btn"}
      disabled={editDisabled}
      onClick={handleEditclick}
    >
      {!isSmallScreen ? <span>Edit</span> : <img src={edit_icon} alt="" />}
    </Button>
  );
}
