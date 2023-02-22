import { Modal } from "antd";
import { useEffect, useState } from "react";
import successIcon from "../../assets/img/successIcon.svg";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { TrashIcon } from "../icons/Icons";
import { Spinner } from "../spinners/Spinner";
import "./delete_details_mobile.scss";

export function ShareWorkoutMobile({ setshowModal }) {
  const [showShareModal, setshowShareModal] = useState(false);
  const [loading, setlaoding] = useState(false);
  //at first render of this component, run the code below
  useEffect(() => {
    setlaoding(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setlaoding(false);
      setshowShareModal(true);
    }, 1000);
    setTimeout(() => {
      setshowShareModal(false);
      setshowModal(false);
    }, 2000);
  }, []);

  const is_less_than_700 = useMediaQuery("(max-width: 700px)");

  if (loading) {
    return (
      <div className="share-mobile-spinner">
        <Spinner></Spinner>
      </div>
    );
  }
  return (
    <div className="share-workout-mobile-container">
      <Modal
        destroyOnClose={true}
        className="share-mobile--modal"
        open={showShareModal}
        maskClosable={true}
        closable={is_less_than_700}
        keyboard={true}
        mask={true}
        onOk={() => setshowShareModal(false)}
        onCancel={() => setshowShareModal(false)}
        footer={null}
        closeIcon={<TrashIcon />}
      >
        <div className="share-mobile-modal-text">
          <img src={successIcon} alt="" />
          <span>Content shared !</span>
        </div>
      </Modal>
    </div>
  );
}
