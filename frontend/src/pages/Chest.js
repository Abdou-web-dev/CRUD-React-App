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
            {/* <div style={{ border: "1px solid red" }}>
              <video src="https://www.dailymotion.com/video/x8d4w35"></video>
            </div> */}
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
