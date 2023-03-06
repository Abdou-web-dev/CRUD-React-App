import "animate.css";
import { Button } from "antd";

export function AvatarsListMobile({
  avatars,
  openSearchInputModal,
  setShowAvatarsSection,
  handleAvatarClickMobile,
}) {
  return (
    <div
      className="animate__fadeInUp animate__animated  animate__delay-1.5s 
      workout-hamburger-list-of-avatars"
    >
      <>
        {avatars &&
          avatars?.map((singleAvatar, index) => {
            return (
              <div
                className={
                  openSearchInputModal
                    ? `workout-hamburger-avatar-wrapper workout-hamburger-avatar_search_modal_open`
                    : "workout-hamburger-avatar-wrapper"
                }
                key={index}
              >
                <Button
                  className="workout-hamburger-avatar-btn"
                  onClick={() => handleAvatarClickMobile(index)}
                >
                  <img
                    className="workout-hamburger-avatar"
                    width={`50px`}
                    src={singleAvatar}
                    alt="singleAvatar icon"
                  />
                </Button>
              </div>
            );
          })}
      </>
      <Button
        onClick={() => {
          setShowAvatarsSection(false);
        }}
        className="workout-hamburger-cancel-btn"
      >
        <span>Cancel</span>
      </Button>
    </div>
  );
}
