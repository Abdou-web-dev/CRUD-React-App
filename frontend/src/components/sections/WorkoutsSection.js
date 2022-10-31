import { IconButton } from "@mui/material";
import { Input } from "antd";
import React, { useState } from "react";
import { ClearIcon } from "../icons/Icons";
import "./sections_styles.scss";
import { WorkoutsList } from "./WorkoutsList";

export const WorkoutsSection = ({
  workouts,
  currentPage,
  setCurrentPage,
  setmovePaginationFromBottom,
  setpaginationClassName,
  searchInput,
  setSearchInput,
}) => {
  const [filteredResults, setFilteredResults] = React.useState([]);
  const [showfilteredResults, setshowfilteredResults] = useState(true);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = workouts.filter((workout) => {
        return (
          Object.values(workout.title)
            .join("")
            .toLowerCase()
            .includes(searchInput.toString().toLowerCase()) ||
          Object.values(workout.createdAt)
            .join("")
            .toLowerCase()
            .includes(searchInput.toString().toLowerCase())
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
  const handleClearClick = (e) => {
    setSearchInput("");
    setshowfilteredResults(true);
  };

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
          placeholder=" &nbsp;Search by keyword"
          // allowClear
        ></Input>
      </div>

      {searchInput?.length >= 1 ? ( //if something is being typed in the search input field
        showfilteredResults === true && (
          <WorkoutsList
            {...{
              currentPage,
              setCurrentPage,
              setmovePaginationFromBottom,
              setpaginationClassName,
              filteredResults,
              searchInput,
              setshowfilteredResults,
              showfilteredResults,
            }}
          />
        )
      ) : (
        <WorkoutsList
          {...{
            workouts,
            setCurrentPage,
            searchInput,
            currentPage,
            setmovePaginationFromBottom,
            setpaginationClassName,
          }}
        />
      )}
    </div>
  );
};
