import { Button } from "antd";
import { useState } from "react";
import cardIcon from "../../assets/img/cardIcon.svg";
import listIcon from "../../assets/img/listIcon.png";
import { WorkoutDetails } from "../details/WorkoutDetails";
import "./sections_styles.scss";

export const WorkoutsSection = ({ workouts, currentPage }) => {
  const [sectionBorder, setSectionBorder] = useState("");
  const [bg, setbg] = useState("");
  const [containerClass, setcontainerClass] = useState("chest-page-workouts");

  const [detailsContClass, setdetailsContClass] = useState(
    "workout-details-container-as-list"
  );
  const [src, setsrc] = useState(listIcon);

  function handleIconClick() {
    if (src === listIcon) {
      setdetailsContClass("workout-details-container-as-list");
      setcontainerClass("chest-page-workouts");

      setsrc(cardIcon);
    } else if (src === cardIcon) {
      setdetailsContClass(`workout-details-container-as-grid`);
      setcontainerClass("chest-page-workouts showItemsAsGrid");
      setsrc(listIcon);
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
    let a2 = index >= 7 && index <= 10;
    let b2 = index >= 12 && index <= 17;
    if (detailsContClass === "workout-details-container-as-list") return a2;
    else if (detailsContClass === "workout-details-container-as-grid")
      return b2;
  }

  function showItemsPage4(index) {
    let a2 = index >= 10 && index <= 13;
    let b2 = index >= 18 && index <= 23;
    if (detailsContClass === "workout-details-container-as-list") return a2;
    else if (detailsContClass === "workout-details-container-as-grid")
      return b2;
  }
  function showItemsPage5(index) {
    let a2 = index >= 13 && index <= 16;
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
  return (
    <>
      <div className="">
        <Button
          onClick={handleIconClick}
          style={{ height: "fit-content", width: "fit-content" }}
        >
          <img width={"30px"} height="30px" src={src} alt="" />
        </Button>
      </div>
      <div
        className={containerClass}
        style={{ background: bg, border: sectionBorder }}
      >
        {workouts &&
          workouts.map((workout, index) => (
            <div
              style={{
                position: "relative",
                bottom:
                  currentPage === 2 && layoutGrid
                    ? "30px"
                    : currentPage === 3 && layoutGrid
                    ? "70px"
                    : currentPage === 4 && layoutGrid
                    ? "110px"
                    : currentPage === 5 && layoutGrid
                    ? "150px"
                    : currentPage === 6 && layoutGrid
                    ? "190px"
                    : "",
              }}
              key={index}
            >
              {showItemsPage1(index) && currentPage === 1 ? (
                <WorkoutDetails
                  {...{
                    workout,
                    index,
                    setbg,
                    detailsContClass,
                    setdetailsContClass,
                    setcontainerClass,
                  }}
                  key={workout._id}
                />
              ) : showItemsPage2(index) && currentPage === 2 ? (
                <WorkoutDetails
                  {...{
                    workout,
                    index,
                    setbg,
                    detailsContClass,
                    setdetailsContClass,
                    setcontainerClass,
                  }}
                  key={workout._id}
                />
              ) : showItemsPage3(index) && currentPage === 3 ? (
                <WorkoutDetails
                  {...{
                    workout,
                    index,
                    setbg,
                    detailsContClass,
                    setdetailsContClass,
                    setcontainerClass,
                  }}
                  key={workout._id}
                />
              ) : showItemsPage4(index) && currentPage === 4 ? (
                <WorkoutDetails
                  {...{
                    workout,
                    index,
                    setbg,
                    detailsContClass,
                    setdetailsContClass,
                    setcontainerClass,
                  }}
                  key={workout._id}
                />
              ) : showItemsPage5(index) && currentPage === 5 ? (
                <WorkoutDetails
                  {...{
                    workout,
                    index,
                    setbg,
                    detailsContClass,
                    setdetailsContClass,
                    setcontainerClass,
                  }}
                  key={workout._id}
                />
              ) : showItemsPage6(index) && currentPage === 6 ? (
                <WorkoutDetails
                  key={workout._id}
                  {...{
                    workout,
                    index,
                    setbg,
                    detailsContClass,
                    setdetailsContClass,
                    setcontainerClass,
                  }}
                />
              ) : null}
            </div>
          ))}
      </div>
    </>
  );
};

// key={workout._id}
