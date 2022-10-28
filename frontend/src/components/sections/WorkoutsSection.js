import { Button } from "antd";
import { useEffect, useState } from "react";
import cardIcon from "../../assets/img/cardIcon.svg";
import listIcon from "../../assets/img/listIcon.png";
import { WorkoutDetails } from "../details/WorkoutDetails";
import "./sections_styles.scss";

export const WorkoutsSection = ({ workouts, currentPage }) => {
  const [sectionBorder, setSectionBorder] = useState("");

  const [bg, setbg] = useState("");
  const [containerClass, setcontainerClass] = useState("chest-page-workouts");
  const [displayContainer, setdisplayContainer] = useState("onePerRow");
  const [listClicked, setListclicked] = useState(false);
  const [cardClicked, setCardclicked] = useState(false);

  useEffect(() => {
    if (sectionBorder === `1.5px solid #1aac83`) {
      setcontainerClass("chest-page-workouts showItemsAsGrid");
    } else if (
      sectionBorder !== `1.5px solid #1aac83` &&
      listClicked === true
    ) {
      setcontainerClass("chest-page-workouts");
    }
    //
    if (cardClicked === false) {
      setcontainerClass("chest-page-workouts");
    } else if (cardClicked === true) {
      setcontainerClass("chest-page-workouts showItemsAsGrid");
    }
  }, [sectionBorder]);
  return (
    <>
      <div className="">
        <Button
          onClick={() => setCardclicked(!cardClicked)}
          style={{ height: "fit-content", width: "fit-content" }}
        >
          <img width={"30px"} height="30px" src={cardIcon} alt="" />
        </Button>
        <Button
          onClick={() => setListclicked(!listClicked)}
          style={{ height: "fit-content", width: "fit-content" }}
        >
          <img width={"30px"} height="30px" src={listIcon} alt="" />
        </Button>
      </div>
      <div
        className={containerClass}
        style={{ background: bg, border: sectionBorder }}
      >
        {workouts &&
          workouts.map((workout, index) => (
            <div key={index}>
              {index >= 0 && index <= 3 && currentPage === 1 ? (
                <WorkoutDetails
                  {...{
                    workout,
                    index,
                    setSectionBorder,
                    setbg,
                    sectionBorder,
                    displayContainer,
                    listClicked,
                    cardClicked,
                  }}
                  key={workout._id}
                />
              ) : index >= 4 && index <= 7 && currentPage === 2 ? (
                <WorkoutDetails
                  {...{
                    workout,
                    index,
                    setSectionBorder,
                    setbg,
                    sectionBorder,
                    displayContainer,
                  }}
                  key={workout._id}
                />
              ) : index >= 7 && index <= 10 && currentPage === 3 ? (
                <WorkoutDetails
                  {...{
                    workout,
                    index,
                    setSectionBorder,
                    setbg,
                    sectionBorder,
                    displayContainer,
                  }}
                  key={workout._id}
                />
              ) : index >= 10 && index <= 13 && currentPage === 4 ? (
                <WorkoutDetails
                  {...{
                    workout,
                    index,
                    setSectionBorder,
                    setbg,
                    sectionBorder,
                    displayContainer,
                  }}
                  key={workout._id}
                />
              ) : index >= 13 && index <= 16 && currentPage === 5 ? (
                <WorkoutDetails
                  {...{
                    workout,
                    index,
                    setSectionBorder,
                    setbg,
                    sectionBorder,
                    displayContainer,
                  }}
                  key={workout._id}
                />
              ) : index > 16 && currentPage === 6 ? (
                <WorkoutDetails
                  key={workout._id}
                  {...{
                    workout,
                    index,
                    setSectionBorder,
                    setbg,
                    sectionBorder,
                    displayContainer,
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
