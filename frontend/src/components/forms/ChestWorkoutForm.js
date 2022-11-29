import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { Button, IconButton } from "@mui/material";
import { Alert, Input, Modal, Select, Tooltip } from "antd";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import infoIcon from "../../assets/img/infoPNG.png";
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

const WorkoutForm = ({ setCurrentPage, workouts, paginationClassName }) => {
  const { user } = useAuthContext();
  const { dispatch } = useWorkoutsContext();

  const [showNotification, setShowNotification] = useState(false);
  const workoutsTitlesArray = [
    ...new Set(workouts?.map((workout) => workout.title)),
  ];
  // console.log(workoutsTitlesArray.includes('a'));

  const currentLocation = useLocation();
  let currentLocat = currentLocation.pathname;
  const chestExos = exercisesData.exercises.chest_Exercises;

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState(``);
  const [exoCategory, setExoCategory] = useState(``);
  const [exosList, setExosList] = useState(``);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [showSuggExoTitle, setshowSuggExoTitle] = useState(true);
  const [showInputTitle, setshowInputTitle] = useState(false);
  const [suggestiveListBorder, setSuggestiveListBorder] = useState("");
  const [showFormNewWindow, setShowFormNewWindow] = useState(false);
  // const pureString = str.replace(/(?:\r\n|\r|\n)/g, '');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in");
      return;
    }
    //quit the function at this point, if no user is authenticated and logged in, because only logged in users can add workouts or delete them...
    const workout = { title, load, reps };
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
      console.log("errooor");
    }
    if (response.ok) {
      setEmptyFields([]);
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
    if (showInputTitle === true) {
      setshowSuggExoTitle(false);
    }
    if (showSuggExoTitle === true) {
      setshowInputTitle(false);
    }
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
        }`}
      >
        {ButtonToggleModalDom}
      </div>
      <form className="chest-workouts-form" onSubmit={handleSubmit}>
        <div className="chest-workouts-form-inner">
          {showFormNewWindow === false && <h3>Add a New Workout</h3>}
          <>
            <label>Exercice category:</label>
            <Select
              className={""}
              value={exoCategory}
              onChange={(value) => setExoCategory(value)}
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
            />
          </>

          <div className={"form-select-exo-categ-and-info-icon"}>
            {showSuggExoTitle && (
              <>
                <label className={"form-select-exo-categ-label"}>
                  Excercise Title :
                </label>
                <Select
                  className={"form-select-exo-categ"}
                  disabled={!exoCategory ? true : false}
                  value={exosList}
                  onChange={(value) => setExosList(value)}
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
                      .localeCompare((optionB?.value ?? "").toLowerCase())
                  }
                  options={
                    exoCategory === `Hamstrings`
                      ? HamstringsExos
                      : exoCategory === `Hamstrings`
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
                      : exoCategory === `Hamstrings`
                      ? AbsExos
                      : exoCategory === `Abs`
                      ? BackExos
                      : exoCategory === `Triceps`
                      ? TricepsExos
                      : null
                  }
                />
              </>
            )}
            <>
              <Tooltip title="Type a custom exercise">
                <Button
                  className={"form-select-exo-categ-info-btn"}
                  onClick={handleCustomExo}
                >
                  <img
                    className={"form-select-exo-categ-info-btn-icon"}
                    src={infoIcon}
                    alt=""
                  />
                </Button>
              </Tooltip>
            </>
          </div>

          <>
            <label>Excercise Title : </label>
            <Tooltip
              zIndex={`999`}
              title={
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <span style={{ fontSize: "12px" }}>
                    You can always pick the exercise you want from the list
                    below !
                  </span>
                </div>
              }
              color="rgba(74, 72, 73,0.75)"
            >
              {showInputTitle && (
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  onMouseOver={() => {
                    setSuggestiveListBorder(
                      "0.5px solid rgba(26, 172, 131,0.25)"
                    );
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
                    emptyFields?.includes("title") && title?.length === 0 ? (
                      <PriorityHighIcon />
                    ) : null
                  }
                  allowClear
                />
              )}
            </Tooltip>
          </>

          <>
            <label>Load (in kg) :</label>
            <Input
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
          </>

          <>
            <label>Number of Reps :</label>
            <Input
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
          </>

          <div className={showFormNewWindow === true ? "d_flex" : ""}>
            <button className="chest-form-btn">Add Workout</button>
          </div>
        </div>
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
            <>{exoCategory === `Chest` && chestExosList}</>
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
              <>{showFormNewWindow === true && formDOM}</>
              <>{chestExosList}</>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default WorkoutForm;
