import { useEffect, useState } from "react";
import { StarredItem } from "../components/small_comp/StarredItem";
import "./pages_styles.scss";

function StarredItems({}) {
  const [favoriteWorkoutsData, setfavoriteWorkoutsData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("selectedWorkoutsState");
    if (data !== null) setfavoriteWorkoutsData(JSON.parse(data));
  }, []);

  return (
    <div className="starred-items-container">
      {favoriteWorkoutsData &&
        favoriteWorkoutsData?.map((favoriteWorkout, index) => (
          <StarredItem
            key={favoriteWorkout?.title}
            {...{ favoriteWorkout, index }}
          ></StarredItem>
        ))}
    </div>
  );
}

export default StarredItems;

// const favoriteWorkouts = JSON.parse(
//   localStorage.getItem("selectedWorkoutsState")
// );
