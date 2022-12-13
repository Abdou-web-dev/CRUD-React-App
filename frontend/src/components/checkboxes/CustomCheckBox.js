import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import * as React from "react";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 5,
  border: "1px solid #969696",
  width: 26,
  height: 26,
  // margin: "50px 0px",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  // backgroundColor: '#44AF69',
  "&:before": {
    display: "block",
    width: 26,
    height: 26,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%44AF69'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    // backgroundColor: '#106ba3',
  },
});

// Inspired by blueprintjs
export function CustomizedCheckbox(props) {
  return (
    <Checkbox
      checked={props.checked}
      onChange={props.onChange}
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple={false}
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
    />
  );
}
