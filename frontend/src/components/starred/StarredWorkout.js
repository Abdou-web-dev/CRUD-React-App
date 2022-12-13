import { IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import starIconGray from "../../assets/img/starIconGray.svg";
import starIconYellow from "../../assets/img/starIconYellow.svg";

export function StarredWorkout({ workout }) {
  const [icon, seticon] = useState(starIconGray);
  const [title, setTitle] = useState("Save this workout as favorite.");
  function handleHover() {}
  function handleLeave() {}
  const [favoriteWorkouts, setfavoriteWorkouts] = useState([]);
  //   let favoriteWorkouts = [];

  function handleStarredClick() {
    if (icon === starIconGray) {
      seticon(starIconYellow);
      setTitle(`Saved as favorite !`);
      //   setfavoriteWorkouts(favoriteWorkouts.push(workout._id));
    } else {
      seticon(starIconGray);
      setTitle(`No longer favorite !`);
    }
    setfavoriteWorkouts(favoriteWorkouts?.push(workout._id));
    setfavoriteWorkouts([...favoriteWorkouts]);

    // console.log(favoriteWorkouts);
  }
  localStorage.setItem("favoriteWorkouts", JSON.stringify(favoriteWorkouts));

  return (
    <>
      <Tooltip title={title}>
        <IconButton
          className="work-details-right-inner-iconbtn star-icon"
          onClick={handleStarredClick}
          onMouseOver={handleHover}
          onMouseLeave={handleLeave}
        >
          <img src={icon} alt="" />
        </IconButton>
      </Tooltip>
    </>
  );
}

/* star icon */
