import { IconButton } from "@mui/material";
import { Input } from "antd";
import { formatDistanceToNow } from "date-fns";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
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
  showAllExistentWorkouts,
  setshowAllExistentWorkouts,
  showMobileFormModal,
}) => {
  const [showfilteredResults, setshowfilteredResults] = useState(true);
  const [containerClass, setcontainerClass] = useState("chest-page-workouts");
  const [showAllWorkoutsCondensed, setshowAllWorkoutsCondensed] =
    useState(false);
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
  const isMobileScreen = useMediaQuery("(max-width: 992px)"); // returns true or false
  const isWideScreen = useMediaQuery(
    "(max-width: 800px) and (min-width: 1240px)"
  ); // returns true or false
  const isDesktopScreen = useMediaQuery("(min-width: 1260px)"); // returns true or false

  useEffect(() => {
    if (showAllWorkoutsCondensed) {
      console.log(showAllWorkoutsCondensed, "showAllWorkoutsCondensed");
    }
    if (isMobileScreen) {
      setcontainerClass("chest-page-workouts showItemsAsGrid-one-per-line");
      setDisplayPagination("none");
    } else if (!isMobileScreen) {
      setcontainerClass("chest-page-workouts");
    } else if (isWideScreen) {
      setDisplayPagination("none");
    } else if (isDesktopScreen) {
      setDisplayPagination("flex");
    }
  }, [showAllWorkoutsCondensed, isMobileScreen]);

  return (
    <div className="workouts-section">
      <div className="workouts-section-input">
        <Input
          suffix={clearIconJSX}
          value={searchInput}
          onChange={handleChange}
          className="workouts-search-ant-input"
          placeholder=" &nbsp;Search a workout"
          onMouseOver={handleInputHover}
          disabled={
            showAllExistentWorkouts || showAllWorkoutsCondensed ? true : false
          }
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
            showAllWorkoutsCondensed,
            setshowAllWorkoutsCondensed,
            showMobileFormModal,
          }}
        />
      )}
    </div>
  );
};
