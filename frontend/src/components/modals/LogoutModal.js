import { Button, Modal } from "antd";
import logout_exit from "../../assets/img/logout_exit.svg";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { CloseX } from "../icons/Icons";
import "../Navbar/navbar.scss";

export function LogoutModal({ showLogOutModal, setshowLogOutModal, logout }) {
  const isMobileScreen = useMediaQuery("(max-width: 800px)");

  return (
    <>
      <Modal
        className={
          isMobileScreen ? "logout-modal-mobile logout-modal" : "logout-modal"
        }
        open={showLogOutModal}
        maskClosable={true}
        closable={true}
        keyboard={true}
        mask={true}
        onOk={() => setshowLogOutModal(false)}
        onCancel={() => setshowLogOutModal(false)}
        footer={null}
        closeIcon={<CloseX></CloseX>}
        // bodyStyle={{ background: "" }}
      >
        <div className="logout-modal-wrapper">
          <div
            className={
              isMobileScreen
                ? "logout-modal-inner exit_bg"
                : "logout-modal-inner"
            }
          >
            <Button
              className="logout-modal-cancelbtn"
              onClick={() => setshowLogOutModal(false)}
            >
              {isMobileScreen ? (
                <div className="logout-modal-cancelbtn-closeX">
                  <CloseX></CloseX>
                </div>
              ) : (
                <span>Cancel</span>
              )}
            </Button>
            <Button
              className="logout-modal-logoutbtn"
              onClick={() => {
                logout();
                setshowLogOutModal(false);
              }}
            >
              {isMobileScreen ? (
                <img
                  className="logout-modal-logoutbtn-icon"
                  src={logout_exit}
                  alt=""
                />
              ) : (
                <span>Logout</span>
              )}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
