import "./sections_styles.scss";
import { WorkoutDetailsItemMobile } from "./WorkoutDetailsItemMobile";

export function WorkoutsListFiltered({ filteredResults, showMobileFormModal }) {
  return (
    <div className="workouts-list-filtered-container">
      <div
        className={`workouts-list-filtered-inner`}
        // className={`${containerClass ?? ""} means that when containerClass is undefined, the className will be equal to ""
      >
        {filteredResults &&
          filteredResults?.map((filteredResult, index) => (
            <WorkoutDetailsItemMobile
              workout={filteredResult}
              {...{
                showMobileFormModal,
              }}
              key={index}
            />
          ))}
      </div>
    </div>
  );
}
