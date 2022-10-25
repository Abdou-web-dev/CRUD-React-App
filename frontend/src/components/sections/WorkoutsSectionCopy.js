import { WorkoutDetails } from "../details/WorkoutDetails";

export const WorkoutsSection = ({ workouts, currentPage, setCurrentPage }) => {
  // console.log(indexValue);

  const Details = (
    <div className="chest-page-workouts">
      {workouts &&
        workouts.map((workout, index) => (
          <WorkoutDetails
            key={workout._id}
            index={index}
            workout={workout}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ))}
    </div>
  );
  return <>{Details}</>;
};

// key={workout._id}
