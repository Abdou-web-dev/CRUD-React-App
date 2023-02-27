import { Button, Modal } from "antd";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
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
      >
        <div className="logout-modal-wrapper">
          <div className="logout-modal-inner">
            <Button
              className="logout-modal-cancelbtn"
              onClick={() => setshowLogOutModal(false)}
            >
              <span>Cancel</span>
            </Button>
            <Button
              className="logout-modal-logoutbtn"
              onClick={() => {
                logout();
                setshowLogOutModal(false);
              }}
            >
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
