import { IconButton } from "@mui/material";
import { Button, Input, message, Modal } from "antd";
import { formatDistanceToNow } from "date-fns";
import top_arrow from "../../assets/img/top-arrow.svg";

import React, { useEffect, useState } from "react";
import magnifying_glass from "../../assets/img/magnifying_glass.svg";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { ClearIcon, CloseX } from "../icons/Icons";
import { SearchInputModal } from "../inputs/SearchInputModal";
import { AwesomeSpinner } from "../spinners/AwesomeSpinner";
import "./sections_styles.scss";
import { WorkoutsList } from "./WorkoutsList";
import { WorkoutsListFiltered } from "./WorkoutsListFiltered";
import { WorkoutsListMobile as WorkoutsListMobileFiltered } from "./WorkoutsListMobile";

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
  showMobileFormModal, //the modal that opens when the users clicks on Add Workout btn
  openSearchInputModal, //the modal that opens when the users clicks on the search icon
  setopenSearchInputModal,
  filterBtnClicked,
  setfilterBtnClicked,
}) => {
  const [searchValue, setSearchValue] = useState(``);
  const [filteredResultsByMobileModal, setFilteredResultsByMobileModal] =
    useState([]);
  const [openFilteredListModal, setOpenFilteredListModal] = useState(false);
  const [displaySpinner, setdisplaySpinner] = useState(true);
  const [containerClass, setcontainerClass] = useState("chest-page-workouts");
  const [showAllWorkoutsCondensed, setshowAllWorkoutsCondensed] =
    useState(false);
  const [border, setBorder] = useState(``);
  const [showMsg, setshowMsg] = useState(false);
  // let layoutGrid = detailsContClass === "workout-details-container-as-grid"; //returns a boolean value
  // let layoutList = detailsContClass === "workout-details-container-as-list";
  let msg = `To search for an item, you need to click on the 1st button below !`;
  const isMobileScreen = useMediaQuery("(max-width: 992px)"); // returns true or false
  const isWideScreen = useMediaQuery(
    "(max-width: 800px) and (min-width: 1240px)"
  );
  const is_between_700_and_800 = useMediaQuery(
    "(min-width: 700px) and (max-width: 800px)"
  );
  const isDesktopScreen = useMediaQuery("(min-width: 1260px)");
  const is_less_than_700 = useMediaQuery("(max-width: 700px)");
  const is_more_than_700 = !is_less_than_700;
  // searchItems on Click on Ok Btn or on Enter keyboard key
  const searchItems = () => {
    if (searchInput !== "") {
      const filteredData = workouts.filter((workout) => {
        // const pureString = str.replace(/(?:\r\n|\r|\n)/g, '');

        const createdAtFormatted = formatDistanceToNow(
          new Date(workout.createdAt),
          {
            addSuffix: true,
          }
        );
        return (
          Object.values(createdAtFormatted).join("").toLowerCase().includes(
            searchInput.toString().toLowerCase()
            // .replace(/(?:\r\n|\r|\n)/g, "")
          ) ||
          Object.values(workout.title).join("").toLowerCase().includes(
            searchInput.toString().toLowerCase()
            // .replace(/(?:\r\n|\r|\n)/g, "")
          )
          // Object.values(user.userName).join("").toLowerCase() === searchInput.toString().toLowerCase() for exact search matching
        );
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(workouts);
    }
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleOKClick = (e) => {
    searchItems(e.target.value);
    if (filteredResults?.length >= 1) {
      setOpenFilteredListModal(true);
      setdisplaySpinner(true);
    } else {
      setOpenFilteredListModal(false);
    }
    if (!filteredResults?.length) {
      setTimeout(() => {
        message.info(`There is no result !`, 1); //This is a prompt message for success, and it will disappear in 0.6 seconds
      }, 800);
      setdisplaySpinner(false);
    }
  };
  const handlePressEnter = (e) => {
    handleOKClick(e);
  };

  const handleClearClick = () => {
    setSearchInput("");
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

  useEffect(() => {
    // when the modal is closed and when there is no results regarding the search query, clear the input field, and if no result is found, display this msg : No Item was found
    if (!openSearchInputModal) {
      if (searchValue) {
        if (!filteredResultsByMobileModal?.length) {
          setSearchValue("");
          message.info("No Item was found !", 0.6); //This is a prompt message for success, and it will disappear in 0.6 seconds
        }
      }
    }
  }, [openSearchInputModal]);

  let result_word = filteredResults?.length === 1 ? `result` : "results";

  useEffect(() => {
    if (openFilteredListModal) {
      setTimeout(() => {
        message.info(
          `You have got ${filteredResults?.length} ${result_word}`,
          0.6
        ); //This is a prompt message for success, and it will disappear in 0.6 seconds
      }, 800);
    }
    if (filteredResults?.length === 0) {
      setOpenFilteredListModal(false);
    }
  }, [openFilteredListModal]);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
              <div
                className={
                  searchInput
                    ? "workouts-search-input-suffix-btns user-typing-suffix"
                    : "workouts-search-input-suffix-btns"
                }
              >
                <Button
                  disabled={!searchInput}
                  className={
                    searchInput
                      ? "workouts-search-input-ok-btn user-typing"
                      : "workouts-search-input-ok-btn user-not-typing"
                  }
                  onClick={handleOKClick}
                >
                  <span>OK</span>
                </Button>
                {searchInput ? (
                  <IconButton
                    className={"workouts-search-input-delete-btn"}
                    onClick={handleClearClick}
                  >
                    <ClearIcon />
                  </IconButton>
                ) : null}
              </div>
            }
            placeholder=" &nbsp;Search a workout"
            onMouseOver={handleInputHover}
            onPressEnter={(e) => {
              handlePressEnter(e);
            }}
            disabled={
              showAllExistentWorkouts || showAllWorkoutsCondensed ? true : false
            }
          ></Input>
        ) : is_less_than_700 ? (
          <>
            {!showMobileFormModal && (
              //when the Add workout modal is closed, show this btn, if not : hide it
              <Button
                onClick={() => {
                  setopenSearchInputModal(true);
                }}
                className="workouts-magnifying_glass-btn"
              >
                <img
                  className={openSearchInputModal ? `glass_clouded` : ""}
                  src={magnifying_glass}
                  alt=""
                />
              </Button>
            )}
          </>
        ) : null}

        {showMsg && showAllExistentWorkouts && (
          <div className="workouts-search-ant-input-msg">
            <span>{msg}</span>
          </div>
        )}
      </div>
      {/* display a spinner at the cneter of the page , when the user tries to find a workout , hide it , when the modal is open */}
      {/* the results and data when the user searches from the desktop text Field */}
      {is_more_than_700 && (
        <>
          <>
            {searchInput?.length >= 1 ? (
              <>
                {is_between_700_and_800 ? (
                  <WorkoutsListFiltered
                    {...{
                      filteredResults,
                      showMobileFormModal,
                      is_between_700_and_800,
                    }}
                  />
                ) : (
                  <>
                    <Modal
                      className={
                        filteredResults?.length >= 2
                          ? `workouts-list-filtered-modal`
                          : "workouts-list-filtered-modal no_scroll_bar"
                      }
                      open={openFilteredListModal}
                      maskClosable={true}
                      closable={filteredResults?.length >= 1}
                      keyboard={true}
                      mask={true}
                      onOk={() => setOpenFilteredListModal(false)}
                      onCancel={() => setOpenFilteredListModal(false)}
                      footer={null}
                      title={null}
                      bodyStyle={{
                        background: "rgba(211, 211, 211, 0.9)",
                      }}
                      maskStyle={{
                        background: "rgba(211, 211, 211, 0.44)",
                      }}
                      closeIcon={<CloseX></CloseX>}
                    >
                      <WorkoutsListFiltered
                        {...{
                          filteredResults,
                          showMobileFormModal,
                        }}
                      />
                      <Button onClick={goToTop}>
                        <img
                          width={`60px`}
                          height="60px"
                          src={top_arrow}
                          style={{ height: "fit-content" }}
                          alt=""
                        />
                      </Button>
                    </Modal>
                    {!openFilteredListModal && displaySpinner ? (
                      <AwesomeSpinner />
                    ) : null}
                  </>
                )}
              </>
            ) : (
              <>
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
                    filterBtnClicked,
                    setfilterBtnClicked,
                  }}
                />
              </>
            )}
          </>
        </>
      )}
      {/* the results and data when the user searches from the mobile modal text Field */}
      {is_less_than_700 && (
        <>
          {/* <span>is_less_than_700</span> */}
          {searchValue?.length >= 1 && !openSearchInputModal ? (
            <WorkoutsListMobileFiltered
              {...{
                filteredResultsByMobileModal,
                searchValue,
                showMobileFormModal,
              }}
            ></WorkoutsListMobileFiltered>
          ) : (
            <>
              <WorkoutsList
                {...{
                  workouts,
                  showMobileFormModal,
                }}
              />
            </>
          )}
        </>
      )}
      {/* when the viewport width is_less_than_700px */}
      <Modal
        className={`search-field-mobile-modal`}
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
        bodyStyle={{
          background: "rgba(211, 211, 211, 0.38)",
        }}
        maskStyle={{
          background: "rgba(211, 211, 211, 0.15)",
        }}
        closeIcon={<CloseX></CloseX>}
      >
        <SearchInputModal
          {...{
            workouts,
            searchValue,
            setSearchValue,
            filteredResultsByMobileModal,
            setFilteredResultsByMobileModal,
            openSearchInputModal,
            setopenSearchInputModal,
          }}
        ></SearchInputModal>
      </Modal>
      {/* {openFilteredListModal && (
        <>
          <BackTop />
          <span>BackTop</span>
        </>
      )} */}
    </div>
  );
};
