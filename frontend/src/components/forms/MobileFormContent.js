import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { Button, Input, Select } from "antd";
import { useEffect, useState } from "react";
import categ from "../../assets/img/categ.svg";
import categGray from "../../assets/img/categGray.svg";
import derrick from "../../assets/img/derrick.svg";
import derrickGray from "../../assets/img/derrickGray.svg";
import plusSign from "../../assets/img/plusSignDark.svg";
import recycle from "../../assets/img/recycle.png";
import repeat from "../../assets/img/repeat.svg";
import repeatGray from "../../assets/img/repeatGray.svg";
import alphabet from "../../assets/img/title.svg";
import alphabetGray from "../../assets/img/titleGray.svg";

import {
  AbsExos,
  BackExos,
  BicepsExos,
  CalvesExos,
  ChestExos,
  ForearmsExos,
  HamstringsExos,
  ShouldersExos,
  TrapeziusExos,
  TricepsExos,
} from "../../assets/staticData/exosData";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import {
  MobileFormChooseTooltip,
  MobileFormTypeTooltip,
} from "../tooltips/MobileFormTooltips";
import "./mobile_form_styles.scss";

export const MobileFormContent = ({
  handleSubmit,
  exoCategory,
  setExoCategory,
  emptyFields,
  showInputTitle,
  handleCustomExo,
  setTitle,
  title,
  load,
  setLoad,
  reps,
  setReps,
  error,
  handleResetFields,
  handleListIconClick,
  showSuggExoTitle,
}) => {
  const isMobileScreen = useMediaQuery("(max-width: 600px)"); // returns true or false
  const is_less_than_500px = useMediaQuery("(max-width: 500px)"); // returns true or false
  const is_between_400px_and_800px = useMediaQuery(
    "(min-width: 400px) and (max-width: 800px) "
  ); // returns true or false

  const [categIcon, setCategIcon] = useState(categ);
  const [derrickIcon, setDerrickIcon] = useState(derrick);
  const [repeatIcon, setRepeatIcon] = useState(repeat);
  const [alphabetIcon, setAlphabetIcon] = useState(alphabet);

  useEffect(() => {
    if (!reps) {
      setRepeatIcon(repeatGray);
    } else {
      setRepeatIcon(repeat);
    }
    if (!load) {
      setDerrickIcon(derrickGray);
    } else {
      setDerrickIcon(derrick);
    }
    if (!title) {
      setAlphabetIcon(alphabetGray);
    } else {
      setAlphabetIcon(alphabet);
    }
    if (!exoCategory) {
      setCategIcon(categGray);
    } else {
      setCategIcon(categ);
    }
  }, [exoCategory, title, load, reps]);

  return (
    <>
      <form className={`workouts-mobile-form`} onSubmit={handleSubmit}>
        <div className={`workouts-mobile-form-inner`}>
          <>
            <div className="mobile-form-select-exo-categ-label-and-select-component">
              {!isMobileScreen && (
                <label className={"mobile-form-select-exo-categ-label"}>
                  Exercise category :
                </label>
              )}
              <div className="mobile-form-select-exo-categ-icon-and-select">
                {isMobileScreen && (
                  <img style={{ width: "30px" }} src={categIcon} alt="" />
                )}
                <Select
                  className={"mobile-form-exo-categ-select"}
                  value={exoCategory}
                  onChange={(value) => setExoCategory(value)}
                  // style={{ width: "200px" }}
                  size={"large"}
                  filterOption={(input, option) =>
                    (option?.value ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    //if optionA.value is null ou undefined then "" will be returned instead, and if it has a value , this value will be returned and used
                    (optionA?.value ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.value ?? "").toLowerCase())
                  }
                  options={[
                    { value: "Chest" },
                    { value: "Triceps" },
                    { value: "Trapezius" },
                    { value: "Shoulders" },
                    { value: "Hamstrings" },
                    { value: "Forearms" },
                    { value: "Calves" },
                    { value: "Biceps" },
                    { value: "Back" },
                    { value: "Abs" },
                  ]}
                  status={
                    emptyFields?.includes("exoCategory") &&
                    exoCategory?.length === 0
                      ? "error"
                      : ""
                  }
                  suffixIcon={
                    emptyFields?.includes("exoCategory") &&
                    exoCategory?.length === 0 ? (
                      <PriorityHighIcon />
                    ) : null
                  }
                  // bordered={true}
                />
              </div>
            </div>

            <div
              className={"mobile-form-select-exo-title-and-info-icon"}
              style={{
                justifyContent: "flex-start",
              }}
            >
              {/* select an exo title from a dropdown menu */}
              {showSuggExoTitle && (
                <div className={`mobile-form-title-select-label-and-component`}>
                  <div className="info-icon-and-title-label-wrapper">
                    {/* here  */}
                    {!isMobileScreen && (
                      <MobileFormTypeTooltip
                        {...{ handleCustomExo, exoCategory }}
                      />
                    )}
                    {!isMobileScreen && (
                      <label className={"mobile-form-title-select-label"}>
                        Excercise Title :
                      </label>
                    )}
                  </div>

                  <div
                    style={{ marginLeft: isMobileScreen ? "73px" : "" }}
                    className="mobile-form-select-exo-title-icon-and-select"
                  >
                    {isMobileScreen && (
                      <img
                        style={{ width: "30px" }}
                        src={alphabetIcon}
                        alt=""
                      />
                    )}
                    <Select
                      className={"mobile-form-title-select-exo-title"}
                      disabled={!exoCategory ? true : false}
                      value={title}
                      onChange={(value) => {
                        setTitle(value);
                        console.log(value);
                      }}
                      onClick={null}
                      // style={{ width: "200px" }}
                      size={"large"}
                      filterOption={(input, option) =>
                        (option?.value ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        //if optionA.value is null ou undefined then "" will be returned instead, and if it has a value , this value will be returned and used
                        (optionA?.value ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.value ?? "").toLowerCase())
                      }
                      options={
                        exoCategory === `Hamstrings`
                          ? HamstringsExos
                          : exoCategory === `Chest`
                          ? ChestExos
                          : exoCategory === `Trapezius`
                          ? TrapeziusExos
                          : exoCategory === `Shoulders`
                          ? ShouldersExos
                          : exoCategory === `Forearms`
                          ? ForearmsExos
                          : exoCategory === `Calves`
                          ? CalvesExos
                          : exoCategory === `Biceps`
                          ? BicepsExos
                          : exoCategory === `Abs`
                          ? AbsExos
                          : exoCategory === `Back`
                          ? BackExos
                          : exoCategory === `Triceps`
                          ? TricepsExos
                          : null
                      }
                      status={
                        emptyFields?.includes("title") && title?.length === 0
                          ? "error"
                          : ""
                      }
                      suffixIcon={
                        emptyFields?.includes("title") &&
                        title?.length === 0 ? (
                          <PriorityHighIcon />
                        ) : null
                      }
                    />
                    {isMobileScreen && !is_less_than_500px && (
                      <MobileFormTypeTooltip
                        {...{ handleCustomExo, isMobileScreen, exoCategory }}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>

            <>
              {/* type the workout title */}
              {showInputTitle && (
                <div className={"mobile-form-title-label-and-input-component"}>
                  <div className={"mobile-form-input-title-and-label-wrapper"}>
                    <div
                      className={
                        "mobile-form-input-title-and-label-and-list-icon"
                      }
                    >
                      <div
                        className={"mobile-form-input-title-icon-btn-wrapper"}
                      >
                        {!isMobileScreen && (
                          <MobileFormChooseTooltip
                            {...{ handleListIconClick, isMobileScreen }}
                          />
                        )}
                      </div>

                      {!isMobileScreen && (
                        <label className="mobile-form-title-label">
                          Excercise Title :
                        </label>
                      )}
                    </div>

                    <div
                      style={{ marginLeft: isMobileScreen ? "85px" : "" }}
                      className="mobile-form-titleIcon-and-input-wrapper"
                    >
                      {isMobileScreen && (
                        <img
                          className="title-icon"
                          style={{ width: "30px" }}
                          src={alphabetIcon}
                          alt=""
                        />
                      )}
                      <Input
                        className={"mobile-form-input-title-component"}
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                          console.log(e.target.value);
                        }}
                        type="text"
                        status={
                          emptyFields?.includes("title") && title?.length === 0
                            ? "error"
                            : ""
                        }
                        // title.length === 0 means that nothing is being typed by the user
                        placeholder={
                          emptyFields?.includes("title") && title?.length === 0
                            ? `You have forgotten to type a title`
                            : "Type a title"
                        }
                        prefix={
                          emptyFields?.includes("title") &&
                          title?.length === 0 ? (
                            <PriorityHighIcon />
                          ) : null
                        }
                        allowClear
                      />
                      {isMobileScreen && (
                        <MobileFormChooseTooltip
                          {...{ handleListIconClick, isMobileScreen }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}
            </>

            <div className="mobile-form-load-label-and-load-input-component">
              {!isMobileScreen && (
                <label className="mobile-form-load-label">Load (in kg) :</label>
              )}

              <div className="mobile-form-icon-and-load-input">
                {isMobileScreen && (
                  <img style={{ width: "30px" }} src={derrickIcon} alt="" />
                )}
                <Input
                  className="mobile-form-input-load-component"
                  value={load}
                  onChange={(e) => setLoad(e.target.value)}
                  type="number"
                  status={
                    emptyFields?.includes("load") && load?.length === 0
                      ? "error"
                      : ""
                  }
                  placeholder={
                    emptyFields?.includes("load") && load?.length === 0
                      ? `You have forgotten to type a load`
                      : "Type a load"
                  }
                  prefix={
                    emptyFields?.includes("load") && load?.length === 0 ? (
                      <PriorityHighIcon />
                    ) : null
                  }
                  allowClear
                />
              </div>
            </div>

            <div className="mobile-form-reps-label-and-reps-input-component">
              {!isMobileScreen && (
                <label className="mobile-form-reps-label">
                  Number of Reps :
                </label>
              )}
              <div className="mobile-form-icon-and-reps-input">
                {isMobileScreen && (
                  <img style={{ width: "30px" }} src={repeatIcon} alt="" />
                )}
                <Input
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                  className="mobile-form-input-reps-component"
                  type="number"
                  status={
                    emptyFields?.includes("reps") && reps?.length === 0
                      ? "error"
                      : ""
                  }
                  // reps.length === 0 means that nothing is being typed by the user
                  placeholder={
                    emptyFields?.includes("reps") && reps?.length === 0
                      ? `You have forgotten to type reps`
                      : "Type reps"
                  }
                  prefix={
                    emptyFields?.includes("reps") && reps?.length === 0 ? (
                      <PriorityHighIcon />
                    ) : null
                  }
                  allowClear
                />
              </div>
            </div>

            <div className={"mobile-form-btns"}>
              <button className="mobile-form-add-btn">
                {is_less_than_500px ? (
                  <img
                    width={`50px`}
                    height="50px"
                    className="plus-sign"
                    src={plusSign}
                    alt=""
                  />
                ) : null}
                <span>
                  {"Add"} {!is_less_than_500px && "Workout"}
                </span>
                {load &&
                reps &&
                title &&
                exoCategory &&
                is_between_400px_and_800px ? (
                  <span> ! </span>
                ) : null}
              </button>
              <Button
                onClick={handleResetFields}
                className="mobile-form-reset-btn"
              >
                <img src={recycle} alt="" />
              </Button>
            </div>
          </>
        </div>

        {error && (
          <div className="error-msg-container">
            <span>{error}</span>
          </div>
        )}
      </form>
    </>
  );
};

// WOrk on Search input; when less tahn 800px
// first display a search icon; when the user clicks on it, display the search field in a modal
// this search fiels must be simple, with a black border and a white bg
// when the user types its search term and clicks on enter or OK button , the modal will be closed
// and the results will be shown , the search icon will be hidden
