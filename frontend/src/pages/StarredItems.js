import { useEffect, useState } from "react";

function StarredItems() {
  const [favoriteWorkoutsData, setfavoriteWorkoutsData] = useState();

  useEffect(() => {
    const data = localStorage.getItem("selectedWorkoutsState");
    console.log(data);
    if (data !== null) setfavoriteWorkoutsData(JSON.parse(data));
  }, []);

  // const favoriteWorkouts = JSON.parse(
  //   localStorage.getItem("selectedWorkoutsState")
  // );

  return (
    <div>
      {favoriteWorkoutsData &&
        favoriteWorkoutsData?.map((favoriteWorkout, index) => (
          <div key={index}>
            <div>{favoriteWorkout?.title}</div>
            <div>{favoriteWorkout?.reps}</div>
            <div>{favoriteWorkout?.load}</div>
            <div>{favoriteWorkout?.createdAt}</div>
          </div>
        ))}
    </div>
  );
}

export default StarredItems;
