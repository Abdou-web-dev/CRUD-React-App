import "./sections_styles.scss";
import { WorkoutDetailsItemMobile } from "./WorkoutDetailsItemMobile";

export function WorkoutsListMobile({
  filteredResultsByMobileModal,
  showMobileFormModal,
  searchValue,
}) {
  return (
    <div className="workouts-section-container workouts-section-container-mobile">
      <>
        {filteredResultsByMobileModal?.map((element, index) => (
          <WorkoutDetailsItemMobile
            workout={element}
            key={index}
            {...{ searchValue, showMobileFormModal }}
          ></WorkoutDetailsItemMobile>
        ))}
      </>
    </div>
  );
}
