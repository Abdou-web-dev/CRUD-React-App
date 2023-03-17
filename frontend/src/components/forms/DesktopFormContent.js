import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { Button, Divider, Input, Select, Tooltip } from "antd";
import infoIcon from "../../assets/img/infoPNG.png";
import list from "../../assets/img/list.svg";
import recycle from "../../assets/img/recycle.png";
import "./form_styles.scss";

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
import { AddWorkoutBtn } from "../buttons/AddWorkoutBtn";
import { ButtonToggleModalForm } from "../buttons/ButtonToggleForm";

export const DesktopFormContent = ({
  showFormNewWindow,
  showAllExistentWorkouts,
  handleSubmit,
  setShowFormNewWindow,
  exoCategory,
  setExoCategory,
  emptyFields,
  setSuggestiveListBorder,
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
  // const isMobileScreen = useMediaQuery("(max-width: 1300px)"); // returns true or false

  return (
    <div
      className={
        showFormNewWindow
          ? "workout-form-container workout-form_on_modal"
          : "workout-form-container"
      }
    >
      <div
        // this means that the class toggle-form-btn will always be applied , and toggle-form-btn-modal class will be added to this div element as a second class if showFormNewWindow ===true
        className={`toggle-form-btn ${
          showFormNewWindow ? "toggle-form-btn-modal" : ""
        }`}
      >
        {!showAllExistentWorkouts ? (
          <>
            {/* when the form modal is open, ButtonToggleModalForm has been used in title ReactNode prop,and when it's closed, ButtonToggleModalForm is used as below */}
            {!showFormNewWindow && (
              <ButtonToggleModalForm
                {...{ setShowFormNewWindow, showFormNewWindow }}
              />
            )}
          </>
        ) : null}
      </div>
      <form
        className={`workouts-form ${
          showAllExistentWorkouts ? "workouts-form-allExistentWorkouts" : ""
        }`}
        onSubmit={handleSubmit}
      >
        <div className={`workouts-form-inner`}>
          {/* the header of the form */}
          <div
            className={`workouts-form-inner-btn-and-text`}
            style={{
              display: showAllExistentWorkouts ? `flex` : ``,
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            {showAllExistentWorkouts && !showFormNewWindow ? (
              <AddWorkoutBtn
                {...{
                  setShowFormNewWindow,
                  showFormNewWindow,
                }}
              />
            ) : null}
            {!showFormNewWindow && !showAllExistentWorkouts ? (
              <div className="form-filter-h3">
                <h3>Add a New Workout</h3>
              </div>
            ) : null}
          </div>

          {/* this is the rest of the form content */}
          <>
            {!showAllExistentWorkouts || showFormNewWindow ? (
              <>
                <>
                  {showFormNewWindow === false && (
                    <Divider style={{ background: "gray" }}></Divider>
                  )}
                </>
                <div className="form-select-exo-categ-label-and-select-component">
                  <label className={"form-select-exo-categ-label"}>
                    Exercise category :
                  </label>
                  <Select
                    className={"form-select-exo-categ"}
                    value={exoCategory}
                    onChange={(value) => setExoCategory(value)}
                    // onClick={null}
                    style={{ width: "200px" }}
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
                  />
                </div>
                <div
                  style={{
                    justifyContent:
                      showFormNewWindow === true ? `flex-start` : "flex-start",
                  }}
                  className={"form-select-exo-title-and-info-icon"}
                >
                  {showSuggExoTitle && (
                    <>
                      <div
                        className={
                          exoCategory === `Chest`
                            ? `form-select-label-and-select-component move-from-right`
                            : "form-select-label-and-select-component"
                        }
                      >
                        <label className={"form-select-exo-title-label"}>
                          Excercise Title :
                        </label>
                        <Select
                          className={"form-select-exo-title"}
                          disabled={!exoCategory ? true : false}
                          value={title}
                          onChange={(value) => {
                            setTitle(value);
                            console.log(value);
                          }}
                          onClick={null}
                          style={{ width: "200px" }}
                          size={"large"}
                          filterOption={(input, option) =>
                            (option?.value ?? "").includes(input)
                          }
                          filterSort={(optionA, optionB) =>
                            //if optionA.value is null ou undefined then "" will be returned instead, and if it has a value , this value will be returned and used
                            (optionA?.value ?? "")
                              .toLowerCase()
                              .localeCompare(
                                (optionB?.value ?? "").toLowerCase()
                              )
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
                            emptyFields?.includes("title") &&
                            title?.length === 0
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
                      </div>
                      <>
                        <Tooltip title="Type a custom exercise">
                          <Button
                            disabled={!exoCategory ? true : false}
                            className={"form-select-exo-title-info-btn"}
                            onClick={handleCustomExo}
                          >
                            <img
                              className={"form-select-exo-title-info-btn-icon"}
                              src={infoIcon}
                              alt=""
                            />
                          </Button>
                        </Tooltip>
                      </>
                    </>
                  )}
                </div>
                <>
                  {showInputTitle && (
                    <div className={"form-title-label-and-input-component"}>
                      <div className={"form-input-title-and-label-wrapper"}>
                        <label className="form-title-label">
                          Excercise Title :
                        </label>
                        <Tooltip
                          zIndex={`999`}
                          title={
                            exoCategory === `Chest` ? (
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <span style={{ fontSize: "12px" }}>
                                  You can always pick the exercise you want from
                                  the list below !
                                </span>
                              </div>
                            ) : null
                          }
                          color="rgba(74, 72, 73,0.75)"
                          // open={exoCategory === `Chest`}
                        >
                          <Input
                            className={"form-input-title-component"}
                            value={title}
                            onChange={(e) => {
                              setTitle(e.target.value);
                              console.log(e.target.value);
                            }}
                            onMouseOver={() => {
                              setSuggestiveListBorder(
                                "0.5px solid rgba(26, 172, 131,0.25)"
                              );
                            }}
                            type="text"
                            status={
                              emptyFields?.includes("title") &&
                              title?.length === 0
                                ? "error"
                                : ""
                            }
                            // title.length === 0 means that nothing is being typed by the user
                            placeholder={
                              emptyFields?.includes("title") &&
                              title?.length === 0
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
                        </Tooltip>
                      </div>
                      <div className={"form-input-title-icon-btn-wrapper"}>
                        <Tooltip title="Choose from a list of workouts">
                          <Button
                            className={"form-input-title-icon-btn"}
                            onClick={handleListIconClick}
                          >
                            <img
                              className={"form-input-title-list-icon"}
                              src={list}
                              alt=""
                            />
                          </Button>
                        </Tooltip>
                      </div>
                    </div>
                  )}
                </>
                <div className="form-load-label-and-load-input-component">
                  <label className="form-load-label">Load (in kg) :</label>
                  <Input
                    className="form-input-load-component"
                    type="number"
                    onChange={(e) => setLoad(e.target.value)}
                    value={load}
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
                <div className="form-reps-label-and-reps-input-component">
                  <label className="form-reps-label">Number of Reps :</label>
                  <Input
                    className="form-input-reps-component"
                    type="number"
                    onChange={(e) => setReps(e.target.value)}
                    value={reps}
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
                <div
                  className={
                    showFormNewWindow === true
                      ? "d_flex form-btns"
                      : "form-btns"
                  }
                >
                  <button className="form-btn">
                    <span>Add Workout</span>
                  </button>
                  <Button
                    onClick={handleResetFields}
                    className="form-reset-btn"
                  >
                    <img src={recycle} alt="" />
                  </Button>
                </div>
              </>
            ) : null}
          </>
        </div>
        {!showAllExistentWorkouts && (
          <div
            className={
              error
                ? "error-msg-container if_error_is_displayed"
                : "error-msg-container"
            }
          >
            {error && (
              <div
                className={
                  showFormNewWindow ? "error-msg-modal" : "form-msg-error"
                }
              >
                {error}
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
};
