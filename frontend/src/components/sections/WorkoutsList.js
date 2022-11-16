import { CloseOutlined } from "@ant-design/icons";
import { IconButton } from "@mui/material";
import { Button } from "antd";
import { useEffect, useState } from "react";
import cardIcon from "../../assets/img/cardIcon.svg";
import listIcon from "../../assets/img/listIcon.png";
import "./sections_styles.scss";
import { WorkoutsDetailsList } from "./WorkoutsDetailsList";

export function WorkoutsList({
  workouts,
  currentPage,
  setmovePaginationFromBottom,
  setpaginationClassName,
  filteredResults,
  searchInput,
  setCurrentPage,
  setshowfilteredResults,
}) {
  const [boxShadow, setBoxShadow] = useState("");
  const [bg, setbg] = useState("");
  const [containerClass, setcontainerClass] = useState("chest-page-workouts");
  const [src, setsrc] = useState(listIcon);
  const [detailsContClass, setdetailsContClass] = useState(
    "workout-details-container-as-list"
  ); //this className detailsContClass is being passed as props to children

  function handleIconClick() {
    if (src === listIcon) {
      setdetailsContClass("workout-details-container-as-list"); //the container of every workout
      setcontainerClass("chest-page-workouts"); //the container of the whole section containing the workouts
      setsrc(cardIcon);
      setmovePaginationFromBottom("180px");
      setpaginationClassName("pagination-content-loaded");
    } else if (src === cardIcon) {
      setdetailsContClass(`workout-details-container-as-grid`);
      setcontainerClass("chest-page-workouts showItemsAsGrid");
      setsrc(listIcon);
      setmovePaginationFromBottom("620px");
      setpaginationClassName("pagination-content-loaded-grid");
    }
  }
  function showItemsPage1(index) {
    let a1 = index >= 0 && index <= 3;
    let b1 = index >= 0 && index <= 5;
    if (detailsContClass === "workout-details-container-as-list") return a1;
    else if (detailsContClass === "workout-details-container-as-grid")
      return b1;
  }
  function showItemsPage2(index) {
    let a2 = index >= 4 && index <= 7;
    let b2 = index >= 6 && index <= 11;
    if (detailsContClass === "workout-details-container-as-list") return a2;
    else if (detailsContClass === "workout-details-container-as-grid")
      return b2;
  }
  function showItemsPage3(index) {
    let a2 = index >= 8 && index <= 11;
    let b2 = index >= 12 && index <= 17;
    if (detailsContClass === "workout-details-container-as-list") return a2;
    else if (detailsContClass === "workout-details-container-as-grid")
      return b2;
  }
  function showItemsPage4(index) {
    let a2 = index >= 12 && index <= 15;
    let b2 = index >= 18 && index <= 23;
    if (detailsContClass === "workout-details-container-as-list") return a2;
    else if (detailsContClass === "workout-details-container-as-grid")
      return b2;
  }
  function showItemsPage5(index) {
    let a2 = index >= 16 && index <= 19;
    let b2 = index >= 24 && index <= 30;
    if (detailsContClass === "workout-details-container-as-list") return a2;
    else if (detailsContClass === "workout-details-container-as-grid")
      return b2;
  }
  function showItemsPage6(index) {
    let a2 = index > 30;
    if (detailsContClass === "workout-details-container-as-list") return a2;
    else if (detailsContClass === "workout-details-container-as-grid")
      return a2;
  }

  let layoutGrid = detailsContClass === "workout-details-container-as-grid";
  useEffect(() => {
    if (searchInput?.length !== 0) {
      setBoxShadow(
        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
      );
    } else {
      setBoxShadow("");
    }
  }, [searchInput]);
  let result = filteredResults?.length === 1 ? `result` : `results`;

  return (
    <div className="workouts-section-container">
      <div className="workouts-section-toggle-btn-container">
        rather make 3 btns , one for grid layout , one for list layout the 2nd
        {/* view of list layout will display the workouts' elements compacted with
        a different bg color and with a scrollbar on the right , between the
        workouts section and the form */}
        <Button
          className="workouts-section-toggle-btn"
          onClick={handleIconClick}
          style={{ height: "fit-content", width: "fit-content" }}
        >
          <img width={"30px"} height="30px" src={src} alt="" />
        </Button>
      </div>

      {searchInput?.length !== 0 &&
        detailsContClass === `workout-details-container-as-grid` && (
          <div className="workouts-section-results">
            {filteredResults?.length !== 0 ? (
              <span>
                You have got {filteredResults?.length} {result} !
              </span>
            ) : filteredResults?.length === 0 ? (
              <div>
                <span>
                  {`Sorry , there is no item with the searched criteria !`}{" "}
                </span>
              </div>
            ) : null}
          </div>
        )}

      <div
        className="workouts-section-container-items-and-closebtn"
        style={{
          background: bg,
          boxShadow: boxShadow,
        }}
      >
        <div
          className={`${
            filteredResults?.length === 1 &&
            detailsContClass === "workout-details-container-as-grid" &&
            "grid-one-item"
          }
        ${containerClass}`}
        >
          {workouts &&
            workouts?.map((workout, index) => (
              <WorkoutsDetailsList
                {...{
                  workout,
                  index,
                  setbg,
                  detailsContClass,
                  setdetailsContClass,
                  setcontainerClass,
                  currentPage,
                  layoutGrid,
                  showItemsPage1,
                  showItemsPage2,
                  showItemsPage3,
                  showItemsPage4,
                  showItemsPage5,
                  showItemsPage6,
                  searchInput,
                  setCurrentPage,
                }}
                key={index}
              ></WorkoutsDetailsList>
            ))}
          {filteredResults &&
            filteredResults?.map((filteredResult, index) => (
              <WorkoutsDetailsList
                {...{
                  filteredResult,
                  index,
                  setbg,
                  detailsContClass,
                  setdetailsContClass,
                  setcontainerClass,
                  currentPage,
                  layoutGrid,
                  searchInput,
                  showItemsPage1,
                  showItemsPage2,
                  showItemsPage3,
                  showItemsPage4,
                  showItemsPage5,
                  showItemsPage6,
                  setCurrentPage,
                }}
                key={index}
              ></WorkoutsDetailsList>
            ))}
        </div>
        {searchInput?.length !== 0 &&
          detailsContClass === `workout-details-container-as-grid` && (
            <div className={"workouts-list-close-icon-div"}>
              <IconButton
                onClick={() => {
                  setshowfilteredResults(false);
                  setmovePaginationFromBottom("180px");
                }}
                className="workouts-list-close-icon-btn"
              >
                <CloseOutlined
                  className="workouts-list-close-icon"
                  style={{ color: "red" }}
                ></CloseOutlined>
              </IconButton>
            </div>
          )}
      </div>
    </div>
  );
}
