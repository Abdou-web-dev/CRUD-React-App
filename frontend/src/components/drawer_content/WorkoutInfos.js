import { useEffect } from "react";
import "./drawer_content_styles.scss";

export function WorkoutInfos({ workoutTitle, infos, setsize }) {
  useEffect(() => {
    if (workoutTitle === `Dip`) {
      setsize("large");
    } else if (workoutTitle === `Svend Press`) {
      setsize("default");
    } else {
      setsize("large");
    }
  }, []);
  return (
    <div className="workout-infos">
      <div className="workout-infos-title">
        <span>{workoutTitle}</span>
      </div>

      <div className="workout-infos-other-infos">
        <div className="workout-infos-span1-wrapper">
          <span>{infos?.description}</span>
        </div>

        <div className="workout-infos-span2-wrapper">
          <span className="workout-infos-span1">The workout's benefits :</span>
          <span className="workout-infos-span2">{infos?.benefits?.b1}</span>

          <span className="workout-infos-span3">{infos?.benefits?.b2}</span>
          {infos?.benefits?.b3 && (
            <span className="workout-infos-span4">{infos?.benefits?.b3}</span>
          )}
        </div>

        <div className="workout-infos-howto-do">
          <span>{infos?.howToDo}</span>
        </div>
      </div>
    </div>
  );
}

// useEffect(() => {
//   if (width >= `100px`) {
//     console.log(width, "large");
//     setWidth(`${calculateTextWidth(infos?.description)}px`);
//     setsize("large");
//   } else if (width < `16px`) {
//     console.log(width, "default");
//     setWidth(`${calculateTextWidth(infos?.description)}px`);
//     setsize("default");
//   }
// }, [width]);
