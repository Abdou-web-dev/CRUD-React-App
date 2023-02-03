import { Button, Tooltip } from "antd";

export const ButtonToggleModalForm = ({
  setShowFormNewWindow,
  showFormNewWindow,
}) => {
  return (
    <Button
      disableRipple
      onClick={() => setShowFormNewWindow(!showFormNewWindow)}
      className="up-btn-link"
      sx={{
        "&:hover": { background: "none" },
      }}
    >
      <Tooltip
        title={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span style={{ fontSize: "10px" }}>
              {showFormNewWindow
                ? `Minimize this form`
                : `Open this form in a new window.`}
            </span>
          </div>
        }
      >
        <img
          src={
            showFormNewWindow
              ? "https://cdn-icons-png.flaticon.com/512/109/109724.png"
              : `https://cdn-icons-png.flaticon.com/512/2989/2989869.png`
          }
          alt=""
          width={`34px`}
          height={`34px`}
        />
      </Tooltip>
    </Button>
  );
};
