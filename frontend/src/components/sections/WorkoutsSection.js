import { IconButton } from "@mui/material";
import { Input } from "antd";
import { formatDistanceToNow } from "date-fns";
import React, { useState } from "react";
import { ClearIcon } from "../icons/Icons";
import "./sections_styles.scss";
import {
  WorkoutsList,
  WorkoutsList as WorkoutsListFiltered,
} from "./WorkoutsList";

export const WorkoutsSection = ({
  workouts,
  currentPage,
  setCurrentPage,
  setmovePaginationFromBottom,
  setpaginationClassName,
  searchInput,
  setSearchInput,
  setDisplayPagination,
  detailsContClass,
  setdetailsContClass,
  filteredResults,
  setFilteredResults,
}) => {
  const [showfilteredResults, setshowfilteredResults] = useState(true);
  const [containerClass, setcontainerClass] = useState("chest-page-workouts");
  const [showAllExistentWorkouts, setshowAllExistentWorkouts] = useState(false);
  const [border, setBorder] = useState(``);
  const [showMsg, setshowMsg] = useState(false);
  let layoutGrid = detailsContClass === "workout-details-container-as-grid"; //returns a boolean value
  let layoutList = detailsContClass === "workout-details-container-as-list";
  let msg = `To search for an item, you need to click on the 1st button below !`;
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = workouts.filter((workout) => {
        const createdAtFormatted = formatDistanceToNow(
          new Date(workout.createdAt),
          {
            addSuffix: true,
          }
        );
        return (
          Object.values(createdAtFormatted)
            .join("")
            .toLowerCase()
            .includes(searchInput.toString().toLowerCase()) ||
          Object.values(workout.title)
            .join("")
            .toLowerCase()
            .includes(searchInput.toString().toLowerCase())
          // Object.values(user.userName).join("").toLowerCase() === searchInput.toString().toLowerCase() for exact search matching
        );
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(workouts);
    }
  };
  const handleChange = (e) => {
    searchItems(e.target.value);
  };

  const handleClearClick = () => {
    setSearchInput("");
    setshowfilteredResults(true);
    if (layoutGrid) {
      setcontainerClass("chest-page-workouts showItemsAsGrid");
    }
    if (layoutList) {
      setcontainerClass("chest-page-workouts");
    }
  };
  function handleInputHover() {
    if (showAllExistentWorkouts) {
      setBorder(`1px solid red`);
      setshowMsg(true);
    }
  }

  const clearIconJSX = (
    <IconButton onClick={handleClearClick}>
      <ClearIcon />
    </IconButton>
  );

  return (
    <div className="workouts-section">
      <div className="workouts-section-input">
        <Input
          suffix={clearIconJSX}
          value={searchInput}
          onChange={handleChange}
          className="workouts-search-ant-input"
          style={{ width: "800px" }}
          placeholder=" &nbsp;Search a workout"
          onMouseOver={handleInputHover}
          disabled={showAllExistentWorkouts ? true : false}
        ></Input>
        {showMsg && showAllExistentWorkouts && (
          <div className="workouts-search-ant-input-msg">
            <span>{msg}</span>
          </div>
        )}
      </div>

      {searchInput?.length >= 1 ? ( //if something is being typed in the search input field
        showfilteredResults === true && (
          <WorkoutsListFiltered
            {...{
              filteredResults, //filtered workouts
              currentPage,
              setCurrentPage,
              searchInput,
              setmovePaginationFromBottom,
              setpaginationClassName,
              showfilteredResults,
              setshowfilteredResults,
              detailsContClass,
              setdetailsContClass,
              setDisplayPagination,
              containerClass,
              setcontainerClass,
            }}
          />
        )
      ) : (
        <WorkoutsList
          {...{
            workouts, //all workouts
            currentPage,
            setCurrentPage,
            searchInput,
            setmovePaginationFromBottom,
            setpaginationClassName,
            setDisplayPagination,
            detailsContClass,
            setdetailsContClass,
            setcontainerClass,
            containerClass,
            border,
            setshowAllExistentWorkouts,
            showAllExistentWorkouts,
          }}
        />
      )}
    </div>
  );
};
