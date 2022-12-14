import { IconButton, Tooltip } from "@mui/material";

export function HeartIcon({
  icon,
  title,
  HandleFavorite,
  workout,
  selectedWorkouts,
}) {
  // const [icon, seticon] = useState(starIconGray);
  // const [title, setTitle] = useState("Save this workout as favorite.");
  function handleHover() {}
  function handleLeave() {}

  function handleStarredClick() {
    HandleFavorite(workout);
  }

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
