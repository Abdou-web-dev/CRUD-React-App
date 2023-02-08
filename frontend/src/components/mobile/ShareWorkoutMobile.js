import { Modal } from "antd";
import { useEffect, useState } from "react";
import { TrashIcon } from "../icons/Icons";
import { Spinner } from "../spinners/Spinner";
import "./delete_details_mobile.scss";

export function ShareWorkoutMobile({ showTopModal }) {
  const [showModal, setshowModal] = useState(false);
  const [loading, setlaoding] = useState(false);
  //at first render of this component, run the code below
  useEffect(() => {
    setlaoding(true);
  }, []);

  useEffect(() => {
    if (loading && !showModal) {
      setTimeout(() => {
        setlaoding(false);
        setshowModal(true);
      }, 500);
      setTimeout(() => {
        setshowModal(false);
      }, 1000);
    } else {
      setshowModal(false);
    }
  }, [loading, showModal]);

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="share-workout-mobile-container">
      <Modal
        className="logout-modal"
        open={showModal}
        maskClosable={true}
        closable={true}
        keyboard={true}
        mask={true}
        onOk={() => setshowModal(false)}
        onCancel={() => setshowModal(false)}
        // width={layoutGrid ? "50%" : "60%"}
        footer={null}
        closeIcon={<TrashIcon />}
      >
        <div>
          <span>Content shared!</span>
        </div>
      </Modal>
    </div>
  );
}
