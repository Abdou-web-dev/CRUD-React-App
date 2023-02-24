import "./sections_styles.scss";
import { WorkoutDetailsItemMobile } from "./WorkoutDetailsItemMobile";

// className={`${containerClass ?? ""} means that when containerClass is undefined, the className will be equal to ""

export function WorkoutsListFiltered({
  filteredResults,
  showMobileFormModal,
  is_between_700_and_800,
}) {
  return (
    <div
      className={
        is_between_700_and_800
          ? "workouts-list-filtered-container_700_800_not_modal workouts-list-filtered-container"
          : "workouts-list-filtered-container"
      }
    >
      <div
        className={`workouts-list-filtered-inner
    ${
      filteredResults?.length === 1
        ? "workouts-list-filtered-inner_one_element"
        : ""
    }  
      `}
      >
        <>
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
        </>
      </div>

      {/* <ScrollToTop className="toooop" smooth component={<TopArrow />} /> */}
    </div>
  );
}
