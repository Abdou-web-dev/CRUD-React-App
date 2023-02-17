import { IconButton } from "@mui/material";
import { Button, Input, Modal } from "antd";
import { formatDistanceToNow } from "date-fns";
import React, { useEffect, useState } from "react";
import magnifying_glass from "../../assets/img/magnifying_glass.svg";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { ClearIcon } from "../icons/Icons";
import { InputModal } from "../inputs/InputModal";

import "./sections_styles.scss";
import {
  WorkoutsList,
  WorkoutsList as WorkoutsListFiltered,
} from "./WorkoutsList";
import { WorkoutsListMobile } from "./WorkoutsListMobile";

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
  const [searchValue, setSearchValue] = useState(``);
  const [filteredResultsByMobileModal, setFilteredResultsByMobileModal] =
    useState([]);

  const [showfilteredResults, setshowfilteredResults] = useState(true);
  const [containerClass, setcontainerClass] = useState("chest-page-workouts");
  const [showAllWorkoutsCondensed, setshowAllWorkoutsCondensed] =
    useState(false);
  const [border, setBorder] = useState(``);
  const [showMsg, setshowMsg] = useState(false);
  const [openSearchInputModal, setopenSearchInputModal] = useState(false);
  let layoutGrid = detailsContClass === "workout-details-container-as-grid"; //returns a boolean value
  let layoutList = detailsContClass === "workout-details-container-as-list";
  let msg = `To search for an item, you need to click on the 1st button below !`;
  const isMobileScreen = useMediaQuery("(max-width: 992px)"); // returns true or false
  const isWideScreen = useMediaQuery(
    "(max-width: 800px) and (min-width: 1240px)"
  ); // returns true or false
  const isDesktopScreen = useMediaQuery("(min-width: 1260px)");
  const is_less_than_700 = useMediaQuery("(max-width: 700px)");
  const is_more_than_700 = !is_less_than_700;

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

  // useEffect(() => {
  //   if (filteredResultsByMobileModal?.length)
  //     console.log(filteredResultsByMobileModal);
  //   else console.log("0 results");
  // }, [filteredResultsByMobileModal]);

  return (
    <div className="workouts-section">
      <div
        className={
          is_less_than_700
            ? "workouts-section-magnifying_glass"
            : "workouts-section-input"
        }
      >
        {is_more_than_700 ? (
          <Input
            value={searchInput}
            onChange={handleChange}
            className="workouts-search-ant-input"
            suffix={
              <IconButton onClick={handleClearClick}>
                <ClearIcon />
              </IconButton>
            }
            placeholder=" &nbsp;Search a workout"
            onMouseOver={handleInputHover}
            disabled={
              showAllExistentWorkouts || showAllWorkoutsCondensed ? true : false
            }
          ></Input>
        ) : is_less_than_700 ? (
          <Button
            onClick={() => {
              setopenSearchInputModal(true);
            }}
            className="workouts-magnifying_glass-btn"
          >
            <img src={magnifying_glass} alt="" />
          </Button>
        ) : null}

        {showMsg && showAllExistentWorkouts && (
          <div className="workouts-search-ant-input-msg">
            <span>{msg}</span>
          </div>
        )}
      </div>

      {/* the results and data when the user searches from the desktop text Field */}
      <>
        {searchInput?.length >= 1 ? ( //if something is being typed in the search input field
          showfilteredResults === true && (
            <WorkoutsListFiltered
              {...{
                filteredResults,
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
          <>
            {!searchValue?.length >= 1 && (
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
          </>
        )}
      </>

      {/* the results and data when the user searches from the mobile modal text Field */}
      <div>
        {searchValue?.length >= 1 ? (
          <div>
            <WorkoutsListMobile
              {...{ filteredResultsByMobileModal, searchValue }}
            ></WorkoutsListMobile>
          </div>
        ) : (
          <WorkoutsListMobile
            {...{ workouts, searchValue }}
          ></WorkoutsListMobile>
        )}
      </div>

      <Modal
        className={``}
        open={openSearchInputModal}
        maskClosable={true}
        closable={true}
        keyboard={true}
        mask={true}
        onOk={() => setopenSearchInputModal(false)}
        onCancel={() => setopenSearchInputModal(false)}
        // width={layoutGrid ? "50%" : "60%"}
        footer={null}
        title={null}
        // style={{ background: "" }}
      >
        <InputModal
          {...{
            workouts,
            searchValue,
            setSearchValue,
            setFilteredResultsByMobileModal,
            filteredResultsByMobileModal,
            setopenSearchInputModal,
          }}
        ></InputModal>
      </Modal>
    </div>
  );
};
