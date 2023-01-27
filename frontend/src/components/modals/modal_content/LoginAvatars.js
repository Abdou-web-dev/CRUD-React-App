import { Button } from "antd";

export function LoginAvatars({
  avatars,
  handleAvatarClick,
  setshowAvatarModal,
  setShowNotification,
  avatar,
}) {
  return (
    <>
      <div className="login-form-modal-content login-form-list-of-avatars">
        {avatars &&
          avatars?.map((avatar, index) => (
            <div className="login-form-avatar-wrapper" key={index}>
              <Button
                onClick={() => handleAvatarClick(index)}
                className="login-form-avatar-btn"
              >
                <img className="login-form-avatar-icon" src={avatar} alt="" />
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
                setShowNotification(false);
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
