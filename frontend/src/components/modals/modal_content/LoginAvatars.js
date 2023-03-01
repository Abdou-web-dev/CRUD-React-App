import { Button } from "antd";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "../../../hooks/UseMediaQuery";

export function LoginAvatars({
  avatars,
  handleAvatarClick,
  setshowAvatarModal,
  setShowNotification,
  setShowSelectedAvatar,
  showSelectedAvatar,
  avatar,
}) {
  const currentLocation = useLocation();
  let currentLocat = currentLocation.pathname;
  const isMobileScreen = useMediaQuery("(max-width: 800px)");

  return (
    <>
      <div className="login-form-modal-content login-form-list-of-avatars">
        {avatars &&
          avatars?.map((avatarIcon, index) => (
            <div className="login-form-avatar-wrapper" key={index}>
              <Button
                onClick={() => handleAvatarClick(index)}
                className="login-form-avatar-btn"
              >
                <img
                  className="login-form-avatar-icon"
                  src={avatarIcon}
                  alt=""
                />
              </Button>
            </div>
          ))}
      </div>
      <>
        {avatar && (
          <div className="login-form-choose-btn-wrapper">
            <Button
              onClick={() => {
                setshowAvatarModal(false);
                if (currentLocat === `/workouts` && isMobileScreen) {
                  setShowSelectedAvatar(true);
                  console.log(showSelectedAvatar);
                }
                if (currentLocat === `login`) {
                  setShowNotification(false);
                }
              }}
              className="login-form-choose-btn"
            >
              <span>Choose</span>
            </Button>
          </div>
        )}
      </>
    </>
  );
}
