import { LoadingOutlined } from "@ant-design/icons";
import { BackTop, Pagination, Spin } from "antd";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import "./pages_styles.scss";
// components
import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import WorkoutForm from "../components/forms/ChestWorkoutForm";
import { WorkoutsSection } from "../components/sections/WorkoutsSection";
import { AntdSkeleton } from "../components/skeletons/AntdSkeleton";

const Chest = ({}) => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    fetchWorkouts();
  }, [dispatch]);

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 50,
      }}
    />
  );
  const [currentPage, setCurrentPage] = useState(1);

  const MuiSkeletonJSX = (
    <Skeleton
      sx={{
        border: `2px solid rgba(26, 173, 131, 0.4 )`,
        borderRadius: `5px`,
        bgcolor: "#FDFDFB",
        padding: `15px 0 0 25px`,
      }}
      variant="rectangular"
      width={964}
      height={191}
    >
      <AntdSkeleton></AntdSkeleton>
    </Skeleton>
  );

  if (!workouts) {
    return (
      <div className="skeleton-content-not-loaded">
        <Pagination
          disabled
          className="pagination-content-not-loaded"
          total={50}
          showSizeChanger={false}
          style={{ position: "relative", bottom: `30px` }}
        />
        {/* Mui Skeleton for the container of the workout */}
        <div style={{ position: "relative", bottom: `10px` }}>
          <div style={{ marginBottom: `40px` }}> {MuiSkeletonJSX}</div>
          <div style={{ marginBottom: `40px` }}> {MuiSkeletonJSX}</div>
          <div style={{ marginBottom: `40px` }}> {MuiSkeletonJSX}</div>
          <div style={{ marginBottom: `40px` }}> {MuiSkeletonJSX}</div>
        </div>
        <Spin
          className="spinner"
          style={{ marginBottom: `0px` }}
          spinning={true}
          indicator={antIcon}
        />
      </div>
    );
  } else {
    return (
      <>
        <div className="chest-page-container">
          <div className="chest-workouts">
            <WorkoutsSection {...{ workouts, currentPage }}></WorkoutsSection>
          </div>
          <div className="chest-form">
            <WorkoutForm {...{ setCurrentPage }} />
          </div>
          <BackTop />
        </div>
        <Pagination
          style={{
            border: `1px solid lightgray`,
            padding: `50px 0`,
          }}
          className="pagination-content-loaded"
          total={
            workouts.length > 0 && workouts.length <= 10
              ? 30 //3 pages
              : workouts.length >= 10 && workouts.length <= 20
              ? 60 //6 pages
              : workouts.length >= 20 && workouts.length <= 30
              ? 90
              : workouts.length >= 30 && workouts.length <= 40
              ? 120
              : workouts.length >= 40 && workouts.length <= 50
              ? 150
              : workouts.length >= 50 && workouts.length <= 60
              ? 180
              : 250
          }
          // total={200} //200 means 20 page
          current={currentPage}
          onChange={(page, e) => {
            setCurrentPage(page);
          }}
          showSizeChanger={false}
          showQuickJumper
        />
      </>
    );
  }
};

export default Chest;
//so the solution to the scrolling prb is either to set the height of the container to 1500px min, or to put the pagination before the container
//add a Skeleton component for the form and the list of btns in Chest page!!!!!
// var A = ["Ram", "Z", "k", "geeksforgeeks"];
// var iterator = A.values();
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// console.log(workoutsTitlesArray.values(), "workoutsTitlesArray");
// console.log(Array.isArray(workoutsTitlesArray), "workoutsTitlesArray");
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element > 100);
//this amazing line of code returns an array composed of titles of all workouts without duplicates
// ['Barbell Incline Bench Press', 'Barbell Flat Bench Pressa', '   Barbell Flat Bench Press', 'Barbell Decline Bench Press', 'Chest Flye', ' Pause Push-Up', 'Barbell Flat Bench Press', 'Barbell Test', ' Cable Iron Cross', ' Close-Grip Push-Up', ' Chest Flye', ' Chaos Push-Up', 'Dip', ' Side-to-Side Landmine Press']
// const workoutsTitlesArray = [
//   ...new Set(workouts?.map((workout) => workout.title)),
// ];

//How can I compare two strings ignoring new line characters, white spaces, non-breaking space?
//const pureString = str.replace(/(?:\r\n|\r|\n)/g, '');
