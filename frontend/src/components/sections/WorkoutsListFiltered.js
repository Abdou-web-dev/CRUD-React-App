import { useEffect, useState } from "react";
import "./sections_styles.scss";
import { WorkoutDetailsItemMobile } from "./WorkoutDetailsItemMobile";
// className={`${containerClass ?? ""} means that when containerClass is undefined, the className will be equal to ""

export function WorkoutsListFiltered({
  filteredResults,
  showMobileFormModal,
  is_between_700_and_800,
}) {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowBackToTopBtn(true);
      } else {
        setShowBackToTopBtn(false);
      }
    });
  }, []);

  return (
    <div
      className={
        is_between_700_and_800
          ? "workouts-list-filtered-container_700_800_not_modal workouts-list-filtered-container"
          : "workouts-list-filtered-container"
      }
    >
      <div className={`workouts-list-filtered-inner`}>
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

        {/* <div>
          <Button onClick={null}>
            <img width={`60px`} height="60px" src={top_arrow} alt="" />
            efefrf
          </Button>
        </div> */}
      </div>
    </div>
  );
}
