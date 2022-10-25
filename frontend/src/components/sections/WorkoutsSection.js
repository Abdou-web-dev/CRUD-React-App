import { WorkoutDetails } from "../details/WorkoutDetails";

export const WorkoutsSection = ({ workouts, currentPage }) => {
  return (
    <>
      <div className="chest-page-workouts">
        {workouts &&
          workouts.map((workout, index) => (
            <div key={index}>
              {index >= 0 && index <= 3 && currentPage === 1 ? (
                <WorkoutDetails {...{ workout, index }} key={workout._id} />
              ) : index >= 4 && index <= 7 && currentPage === 2 ? (
                <WorkoutDetails {...{ workout, index }} key={workout._id} />
              ) : index >= 7 && index <= 10 && currentPage === 3 ? (
                <WorkoutDetails {...{ workout, index }} key={workout._id} />
              ) : index >= 10 && index <= 13 && currentPage === 4 ? (
                <WorkoutDetails {...{ workout, index }} key={workout._id} />
              ) : index >= 13 && index <= 16 && currentPage === 5 ? (
                <WorkoutDetails {...{ workout, index }} key={workout._id} />
              ) : index > 16 && currentPage === 6 ? (
                <WorkoutDetails key={workout._id} {...{ workout, index }} />
              ) : null}
            </div>
          ))}
      </div>
    </>
  );
};

// key={workout._id}
