import "./sections_styles.scss";
import { WorkoutDetailsItemMobile } from "./WorkoutDetailsItemMobile";
// className={`${containerClass ?? ""} means that when containerClass is undefined, the className will be equal to ""

export function WorkoutsListFiltered({ filteredResults, showMobileFormModal }) {
  return (
    <div className="workouts-list-filtered-container">
      <div className={`workouts-list-filtered-inner`}>
        {filteredResults &&
          filteredResults?.map((filteredResult, index) => (
            <WorkoutDetailsItemMobile
              workout={filteredResult}
              {...{
                showMobileFormModal,
                filteredResult,
              }}
              key={index}
            />
          ))}
      </div>
    </div>
  );
}
