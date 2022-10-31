import { LoadingOutlined } from "@ant-design/icons";
import { BackTop, Pagination, Spin } from "antd";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import "./pages_styles.scss";
// components
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import WorkoutForm from "../components/forms/ChestWorkoutForm";
import {
  LeftArrow as PrevIcon,
  RightArrow as NextIcon,
} from "../components/icons/Icons";
import { WorkoutsSection } from "../components/sections/WorkoutsSection";
import { AntdSkeleton } from "../components/skeletons/AntdSkeleton";

const Chest = ({}) => {
  const { workouts, dispatch } = useWorkoutsContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    fetchWorkouts();
    //this line of code redirects the results to page 1, without it and if the pagination is not displayed , results will not be displayed , because they are on 4th page for example but there is no pagination to go to page 4
    if (searchInput?.length > 0) {
      setCurrentPage(1);
    }
  }, [dispatch, searchInput]);

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 50,
      }}
    />
  );

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
  const [movePaginationFromBottom, setmovePaginationFromBottom] =
    useState("220px");
  const [paginationClassName, setpaginationClassName] = useState(
    "pagination-content-loaded"
  );

  // console.log(workouts?.length);

  if (!workouts) {
    return (
      <div className="skeleton-content-not-loaded">
        <Pagination
          disabled
          className={"pagination-content-not-loaded"}
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
            <WorkoutsSection
              {...{
                workouts,
                currentPage,
                setmovePaginationFromBottom,
                setpaginationClassName,
                searchInput,
                setSearchInput,
                setCurrentPage,
              }}
            ></WorkoutsSection>
          </div>
          <div className="chest-form">
            <WorkoutForm {...{ setCurrentPage }} />
          </div>
          <BackTop />
        </div>

        {searchInput?.length === 0 && (
          <Pagination
            prevIcon={
              paginationClassName === "pagination-content-loaded-grid" ? (
                <PrevIcon />
              ) : (
                <LeftOutlined />
              )
            }
            nextIcon={
              paginationClassName === "pagination-content-loaded-grid" ? (
                <NextIcon />
              ) : (
                <RightOutlined />
              )
            }
            style={{
              border:
                paginationClassName === "pagination-content-loaded-grid"
                  ? ""
                  : `1px solid lightgray`,
              padding:
                paginationClassName === "pagination-content-loaded-grid"
                  ? "10px 0"
                  : `50px 0`,
              position: "relative",
              bottom: movePaginationFromBottom,
            }}
            className={paginationClassName}
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
        )}
      </>
    );
  }
};

export default Chest;
