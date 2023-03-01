import { Button, IconButton } from "@mui/material";
import { Alert, message, Modal } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import plusSign from "../../assets/img/plusSign.svg";
import warning_icon from "../../assets/img/warning_icon.svg";
import exercisesData from "../../assets/staticData/chestExercises.json";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";
import { ButtonToggleModalForm } from "../buttons/ButtonToggleForm";
import { CloseX } from "../icons/Icons";
import { ChestExosList } from "../lists/ChestExosList";
import { NiceSpinner } from "../spinners/NiceSpinner";
import { DesktopFormContent } from "./DesktopFormContent";
import "./form_styles.scss";
import { MobileFormContent } from "./MobileFormContent";

export const WorkoutsForm = ({
  setCurrentPage,
  workouts,
  paginationClassName,
  showAllExistentWorkouts,
  showMobileFormModal,
  setShowMobileFormModal,
  openSearchInputModal,
  filterBtnClicked,
}) => {
  const { user } = useAuthContext();
  const { dispatch } = useWorkoutsContext();
  const isMobileScreen = useMediaQuery("(max-width: 800px)"); // returns true or false
  // const is_less_than_500px = useMediaQuery("(max-width: 500px)"); // returns true or false

  const [showNotification, setShowNotification] = useState(false);
  const workoutsTitlesArray = [
    ...new Set(workouts?.map((workout) => workout.title)),
  ];

  const currentLocation = useLocation();
  let currentLocat = currentLocation?.pathname;
  const chestExos = exercisesData?.exercises.chest_Exercises;

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
  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps, exoCategory };
    if (!user || workoutsTitlesArray.includes(workout.title)) {
      // meaning if the user is logged out , or if the workout that the user tries to register has been already entered through the form
      if (showFormNewWindow) {
        message.info("This Workout already exists, choose another one !", 2.5); //This is a prompt message for success, and it will disappear in 0.6 seconds
        setExoCategory("");
      } else {
        handleError();
        if (!isMobileScreen) {
          setExoCategory("");
        }
        // console.log("You must be logged in");
      }
      return;
    }
    //quit the function at this point, if no user is authenticated and logged in, because only logged in users can add workouts or delete them...

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
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
      if (isMobileScreen) {
        setShowMobileFormModal(false);
      }
    }
  };

  function handleError() {
    if (isMobileScreen) {
      message.warning("This Workout already exists !", 1);
    } else {
      //when isDesktopScreen
      setShowNotification(!showNotification);
      setEmptyFields([]);
      setTitle(null);
      setLoad(null);
      setReps(null);
      setError(null);
      console.log("already exists");
    }
  }
  function handleCustomExo() {
    setshowInputTitle(true);
    setshowSuggExoTitle(false);
  }
  function handleListIconClick() {
    setshowInputTitle(false);
    setshowSuggExoTitle(true);
  }
  function handleResetFields() {
    setTitle("");
    setLoad("");
    setReps("");
    setExoCategory("");
  }
  // all these nested components have been transformed to separate React components
  // const ButtonToggleModalForm
  // DesktopFormContent
  // const chestExosList
  // const MobileFormContent

  useEffect(() => {
    if (title && load && reps && exoCategory) {
      console.log(title, load, reps, exoCategory);
    }
  }, [title, load, reps, exoCategory]);
  // this is how we use a Spinner corretly in React

  // on first render of the Component, run this code :
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1200);
  }, []);
  // and on evry time that the modal is opened, run this code : display the spinner, hide it after1.5s and then open the modal content

  useEffect(() => {
    if (showMobileFormModal) {
      setloading(true);
      setTimeout(() => {
        setloading(false);
      }, 1200);
      setShowMobileFormModal(true);
    }
  }, [showMobileFormModal]);

  useEffect(() => {
    // const workout = { title, load, reps, exoCategory };
    // if (showFormNewWindow && workoutsTitlesArray?.includes(workout?.title)) {
    //   // && workoutsTitlesArray?.includes(workout?.title)
    //   message.info("This Workout already exists, choose another one !", 2.5); //This is a prompt message for success, and it will disappear in 0.6 seconds
    //   console.log("This Workout already exists, choose another one");
    // }
  }, [showFormNewWindow]);

  if (isMobileScreen) {
    return (
      <>
        {showMobileFormModal ? (
          <Modal
            className={
              loading
                ? "loading-mobile-form-ant-modal"
                : "mobile-form-ant-modal"
            }
            open={showMobileFormModal}
            maskClosable={true}
            closable={loading ? false : true}
            keyboard={true}
            mask={true}
            onOk={() => setShowMobileFormModal(false)}
            onCancel={() => setShowMobileFormModal(false)}
            footer={null}
            title={!loading && "Add a new Workout"}
            closeIcon={!loading ? <CloseX /> : null}
            // style={{ height: "1000px" }}
          >
            {loading ? (
              <NiceSpinner></NiceSpinner>
            ) : (
              <MobileFormContent
                {...{
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
                }}
              ></MobileFormContent>
            )}

            {/* Change this mobileFormDOM's content , delete some className and unnecessary code */}
            {/* and make it mobile reponsive */}
          </Modal>
        ) : (
          <>
            <Button
              // when clicking on the magnifiying glass icon, hide this btn
              style={{ visibility: openSearchInputModal ? "hidden" : "" }}
              className="add-workout-btn"
              onClick={() => {
                setShowMobileFormModal(true);
              }}
            >
              <img src={plusSign} alt="" />
              <span>Add a Workout</span>
            </Button>
          </>
        )}
      </>
    );
  } else {
    return (
      <>
        <>
          {/* JSX to show a notification if the user tries to enter a workout that already exists */}
          {showNotification && !showFormNewWindow && (
            <div className="notification">
              <Alert
                className="ant-alert"
                closeIcon={
                  <IconButton
                    className="ant-alert-close-icon-btn"
                    // style={{ width: "40px" }}
                    onClick={() => setShowNotification(false)}
                  >
                    <CloseX />
                  </IconButton>
                }
                message={
                  <span className="noti-text">This workout already exists</span>
                }
                banner
                closable
                icon={<img width={`40px`} src={warning_icon} alt="" />}
              />
            </div>
          )}
        </>

        <>
          {/* JSX to show the form on the same page */}
          {showFormNewWindow === false && (
            <>
              <DesktopFormContent
                {...{
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
                  filterBtnClicked,
                }}
              />

              <>
                {exoCategory === `Chest` && showInputTitle && (
                  <ChestExosList
                    {...{
                      currentLocat,
                      paginationClassName,
                      setTitle,
                      chestExos,
                      suggestiveListBorder,
                    }}
                  />
                )}
              </>
            </>
          )}
        </>

        <>
          {/* JSX to show the form on a modal, and hide it on the page underneath */}
          {showFormNewWindow === true && (
            <>
              <Modal
                className="desktop-form-ant-modal"
                open={showFormNewWindow}
                maskClosable={true}
                closable={false}
                keyboard={true}
                mask={true}
                onOk={() => setShowFormNewWindow(false)}
                onCancel={() => setShowFormNewWindow(false)}
                width={"70%"}
                footer={null}
                title={
                  <div className="desktop-form-ant-modal-header">
                    <span>Add a New Workout</span>
                    <div className="desktop-form-ant-modal-header-toggle-btn-wrapper">
                      <ButtonToggleModalForm
                        {...{ setShowFormNewWindow, showFormNewWindow }}
                      />
                    </div>
                  </div>
                }
              >
                <>
                  {showFormNewWindow || showAllExistentWorkouts ? (
                    <DesktopFormContent
                      {...{
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
                      }}
                    />
                  ) : null}
                </>
                <>
                  {exoCategory === `Chest` && showInputTitle && (
                    <ChestExosList
                      {...{
                        currentLocat,
                        paginationClassName,
                        setTitle,
                        chestExos,
                        suggestiveListBorder,
                      }}
                    />
                  )}
                </>
              </Modal>
            </>
          )}
        </>
      </>
    );
  }
};
