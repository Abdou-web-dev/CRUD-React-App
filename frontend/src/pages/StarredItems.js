function StarredItems() {
  // const favoriteWorkouts = JSON.parse(localStorage.getItem("favoriteWorkouts")); //we can acces email and fullName

  const selectedWorkoutss = JSON.parse(
    localStorage.getItem("selectedWorkouts")
  );

  console.log(selectedWorkoutss);
  return (
    <div>
      {selectedWorkoutss &&
        selectedWorkoutss?.map((selectedWorkout, index) => (
          <li key={index}>{selectedWorkout._id}</li>
        ))}
    </div>
  );
}

export default StarredItems;
