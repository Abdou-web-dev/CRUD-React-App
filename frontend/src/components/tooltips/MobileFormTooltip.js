import { Button, Tooltip } from "antd";
import infoIcon from "../../assets/img/info.png";
// import "./mobile_form_styles.scss";

export const MobileFormTooltip = ({
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
