import { Tooltip } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import * as React from "react";
import { HeartIcon, HeartIconGray } from "../icons/Icons";
import "./checkbox_styles.scss";

export function CustomizedCheckbox({ title, onCheckBoxChange, checked }) {
  function handleClick() {}
  return (
    <div className="custom-check-box">
      {/* in order for Mui tooltip to work properly , its content should be wrapper inside a div */}
      <Tooltip className="custom-check-box-tooltip" title={title}>
        <div className="custom-check-box-wrapper">
          <Checkbox
            className="custom-check-box-checkbox"
            onClick={handleClick}
            // checked={checked}
            onChange={onCheckBoxChange}
            sx={{
              "&:hover": { bgcolor: "transparent" },
            }}
            disableRipple={false}
            color="default"
            checkedIcon={<HeartIcon />} //change the color to yellow when the icon is checked (clicked)
            icon={<HeartIconGray />} //initial gray color when it is unchecked
          />
        </div>
      </Tooltip>
    </div>
  );
}
