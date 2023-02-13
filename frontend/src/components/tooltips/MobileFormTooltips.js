import { Button, Tooltip } from "antd";
import infoIcon from "../../assets/img/info.png";
import list from "../../assets/img/list.svg";

export const MobileFormTypeTooltip = ({
  handleCustomExo,
  exoCategory,
  isMobileScreen,
}) => {
  //   const isMobileScreen = useMediaQuery("(max-width: 600px)"); // returns true or false

  return (
    <>
      <Tooltip title="Type a custom exercise">
        <Button
          className={
            isMobileScreen
              ? "mobile-form-select-exo-title-info-btn tooltip-mobile-btn"
              : "mobile-form-select-exo-title-info-btn"
          }
          onClick={handleCustomExo}
          disabled={!exoCategory ? true : false}
          style={{ marginRight: "10px", height: "fit-content" }}
        >
          <img
            className={"mobile-form-select-exo-title-info-btn-icon"}
            src={infoIcon}
            alt=""
          />
        </Button>
      </Tooltip>
    </>
  );
};

export const MobileFormChooseTooltip = ({
  handleListIconClick,
  isMobileScreen,
}) => {
  //   const isMobileScreen = useMediaQuery("(max-width: 600px)"); // returns true or false

  return (
    <>
      <Tooltip title="Choose from a list of workouts">
        <Button
          className={
            isMobileScreen
              ? "mobile-form-input-title-icon-btn tooltip-mobile-btn"
              : "mobile-form-input-title-icon-btn"
          }
          onClick={handleListIconClick}
          style={{ marginRight: "10px", height: "fit-content" }}
        >
          <img
            className={"mobile-form-input-title-list-icon"}
            src={list}
            alt=""
          />
        </Button>
      </Tooltip>
    </>
  );
};
