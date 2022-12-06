import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { Button, IconButton } from "@mui/material";
import { Alert, Divider, Input, Modal, Select, Tooltip } from "antd";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import infoIcon from "../../assets/img/infoPNG.png";
import list from "../../assets/img/list.svg";
import plus from "../../assets/img/plus-sign.svg";

import exercisesData from "../../assets/staticData/chestExercises.json";
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
import { useAuthContext } from "../../hooks/useAuthContext";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
import { ClearIcon } from "../icons/Icons";
import { ChestExosBtnsList as ChestExosList } from "../lists/exosLists/ChestExosBtnsList";

import "./form_styles.scss";

const WorkoutForm = ({
  setCurrentPage,
  workouts,
  paginationClassName,
  showAllExistentWorkouts,
}) => {
  const { user } = useAuthContext();
  const { dispatch } = useWorkoutsContext();

  const [showNotification, setShowNotification] = useState(false);
  const workoutsTitlesArray = [
    ...new Set(workouts?.map((workout) => workout.title)),
  ];

  const currentLocation = useLocation();
  let currentLocat = currentLocation.pathname;
  const chestExos = exercisesData.exercises.chest_Exercises;

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState(``);
  const [exoCategory, setExoCategory] = useState(``);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [showSuggExoTitle, setshowSuggExoTitle] = useState(true);
  const [showInputTitle, setshowInputTitle] = useState(false);
  const [suggestiveListBorder, setSuggestiveListBorder] = useState("");
  const [showFormNewWindow, setShowFormNewWindow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in");
      return;
    }
    //quit the function at this point, if no user is authenticated and logged in, because only logged in users can add workouts or delete them...

    console.log(title, "here");
    const workout = { title, load, reps, exoCategory };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(
        !workoutsTitlesArray.includes(workout.title) ? workout : handleError()
      ),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
      console.log("error occured");
    }
    if (response.ok) {
      setEmptyFields([]);
      setExoCategory(``);
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
      if (showFormNewWindow === true) {
        //close the form modal when user types all required info for a workout and clicks on submit
        setShowFormNewWindow(false);
      }
      //on submit, redirect the user to the 1st page
      setCurrentPage(1);
      if (showNotification === true) {
        setShowNotification(false);
      }
    }
  };

  function handleError() {
    setShowNotification(!showNotification);
    setEmptyFields([]);
    setTitle(null);
    setLoad(null);
    setReps(null);
    setError(null);
    console.log("already exists");
  }

  function handleCustomExo() {
    setshowInputTitle(true);
    setshowSuggExoTitle(false);
  }
  function handleListIconClick() {
    setshowInputTitle(false);
    setshowSuggExoTitle(true);
  }

  //3 JSX blocs
  const ButtonToggleModalDom = (
    <Button
      disableRipple
      onClick={() => setShowFormNewWindow(!showFormNewWindow)}
      className="up-btn-link"
      sx={{
        "&:hover": { background: "none" },
      }}
    >
      <Tooltip
        title={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span style={{ fontSize: "10px" }}>
              {showFormNewWindow
                ? `Minimize this form`
                : `Open this form in a new window.`}
            </span>
          </div>
        }
      >
        <img
          src={
            showFormNewWindow
              ? "https://cdn-icons-png.flaticon.com/512/109/109724.png"
              : `https://cdn-icons-png.flaticon.com/512/2989/2989869.png`
          }
          alt=""
          width={`34px`}
          height={`34px`}
        />
      </Tooltip>
    </Button>
  );
  const formDOM = (
    <>
      <div
        // this means that the class toggle-form-btn will always be applied , and toggle-form-btn-modal class will be added to this div element as a second class if showFormNewWindow ===true
        className={`toggle-form-btn ${
          showFormNewWindow ? "toggle-form-btn-modal" : ""
        }
       
        `}
      >
        {!showAllExistentWorkouts || showFormNewWindow
          ? ButtonToggleModalDom
          : null}
      </div>
      <form
        className={`chest-workouts-form
      ${showAllExistentWorkouts && "workouts-form-allExistentWorkouts"}
      `}
        onSubmit={handleSubmit}
      >
        <div className={`chest-workouts-form-inner`}>
          <div
            className={`chest-workouts-form-inner-btn-and-text`}
            style={{
              display: showAllExistentWorkouts ? `flex` : ``,
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            {showAllExistentWorkouts && !showFormNewWindow && (
              <Button
                onClick={() => setShowFormNewWindow(!showFormNewWindow)}
                className="form-filter-btn-plus-btn"
              >
                <img src={plus} alt="" />
                <span>Add a New Workout</span>
              </Button>
            )}
            {!showFormNewWindow && !showAllExistentWorkouts ? (
              <div className="form-filter-h3">
                <h3>Add a New Workout</h3>
              </div>
            ) : null}
          </div>

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
                          Excercise Title :{" "}
                        </label>
                        <Tooltip
                          zIndex={`999`}
                          title={
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
                          }
                          color="rgba(74, 72, 73,0.75)"
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
                <div className={showFormNewWindow === true ? "d_flex" : ""}>
                  <button className="chest-form-btn">Add Workout</button>
                </div>
              </>
            ) : null}
          </>
        </div>
        {!showAllExistentWorkouts && (
          <div className="error-msg-container">
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
    </>
  );
  const chestExosList = (
    <div className="chest-suggest-btns">
      {currentLocat === "/chest" && (
        <ChestExosList
          paginationClassName={paginationClassName}
          setTitle={setTitle}
          chestExos={chestExos}
          suggestiveListBorder={suggestiveListBorder}
        />
      )}
    </div>
  );

  return (
    <>
      {showNotification && (
        <div className="notification">
          <Alert
            className="ant-alert"
            closeIcon={
              <IconButton onClick={() => setShowNotification(false)}>
                <ClearIcon />
              </IconButton>
            }
            message={
              <span className="noti-text">This workout already exists !</span>
            }
            banner
            closable
          />
        </div>
      )}
      {showFormNewWindow === false && (
        <>
          <div className="chest-workout-form-container">
            <>{!showFormNewWindow && formDOM}</>
            <>{exoCategory === `Chest` && showInputTitle && chestExosList}</>
          </div>
        </>
      )}

      {showFormNewWindow === true && (
        <>
          <Modal
            className="chest-form-ant-modal"
            open={showFormNewWindow}
            maskClosable={true}
            closable={false}
            keyboard={true}
            mask={true}
            onOk={() => setShowFormNewWindow(false)}
            onCancel={() => setShowFormNewWindow(false)}
            width={"70%"}
            footer={null}
            title="Add a New Workout"
          >
            <div className="chest-workout-form-container">
              <>
                {showFormNewWindow || showAllExistentWorkouts ? formDOM : null}
              </>
              <>{exoCategory === `Chest` && showInputTitle && chestExosList}</>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default WorkoutForm;
