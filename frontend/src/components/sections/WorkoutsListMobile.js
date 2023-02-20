import "./sections_styles.scss";
import { WorkoutDetailsItemMobile } from "./WorkoutDetailsItemMobile";

export function WorkoutsListMobile({
  filteredResultsByMobileModal,
  showMobileFormModal,
  searchValue,
}) {
  let result =
    filteredResultsByMobileModal?.length === 1 ? `result` : `results`;

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

      <>
        {/* nbr of Results sentence */}
        {searchValue?.length !== 0 && (
          <div className="workouts-section-results">
            {filteredResultsByMobileModal?.length !== 0 ? (
              <span>
                You have got {filteredResultsByMobileModal?.length} {result} !
              </span>
            ) : filteredResultsByMobileModal?.length === 0 ? (
              <div>
                <span>
                  {`Sorry, there is no item with the search criteria!`}
                </span>
              </div>
            ) : null}
          </div>
        )}
      </>
    </div>
  );
}
