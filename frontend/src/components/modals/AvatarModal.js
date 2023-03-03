import { Button, Modal } from "antd";
import { LoginAvatars } from "../../components/modals/modal_content/LoginAvatars";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import "../../pages/login_signup_styles.scss";
import { CloseX } from "../icons/Icons";

export function AvatarModal({
  showAvatarModal,
  setshowAvatarModal,
  avatar,
  avatars,
  handleAvatarClick,
  setShowNotification,
  setShowSelectedAvatar,
  showSelectedAvatar,
}) {
  const isMobileScreen = useMediaQuery("(max-width: 800px)");

  //   make this modal responsive !!!
  return (
    <>
      {/* Avatar modal */}
      <div>
        <Modal
          className="login-form-avatar-modal"
          open={showAvatarModal}
          maskClosable={true}
          closable={isMobileScreen || !isMobileScreen ? false : null}
          keyboard={true}
          mask={true}
          onOk={() => setshowAvatarModal(false)}
          onCancel={() => setshowAvatarModal(false)}
          footer={null}
          // this is how we display ant modal title and close Icon perfectly as flex , with the icon at the right , and the title on the left
          title={
            isMobileScreen || !isMobileScreen ? (
              <div className="login-form-modal-header">
                <span>Pick an avatar</span>
                <Button
                  onClick={() => setshowAvatarModal(false)}
                  className="login-form-modal-header-close-btn-wrapper"
                >
                  <CloseX></CloseX>
                </Button>
              </div>
            ) : null
          }
        >
          <LoginAvatars
            {...{
              avatars,
              avatar,
              handleAvatarClick,
              setshowAvatarModal,
              setShowNotification,
              setShowSelectedAvatar,
              showSelectedAvatar,
            }}
          ></LoginAvatars>
        </Modal>
      </div>
    </>
  );
}
