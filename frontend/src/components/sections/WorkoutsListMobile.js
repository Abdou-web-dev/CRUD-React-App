// import "./sections_styles.scss";

import { WorkoutDetails } from "../details/WorkoutDetails";

export function WorkoutsListMobile({
  filteredResultsByMobileModal,
  workouts,
  searchValue,
}) {
  let result =
    filteredResultsByMobileModal?.length === 1 ? `result` : `results`;

  return (
    <div className="workouts-section-container">
      <>
        {filteredResultsByMobileModal?.map((element, index) => (
          <WorkoutDetails workout={element} key={index}></WorkoutDetails>
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
