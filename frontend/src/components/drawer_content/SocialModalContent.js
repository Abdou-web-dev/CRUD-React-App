import { Button, Image, Modal } from "antd";
import { useState } from "react";
import shareIcon from "../../assets/img/shareIcon.svg";
import success from "../../assets/img/success.svg";
import "./social_links.scss";

export function SocialModalContent({
  workoutTitle,
  imagePath,
  setopenSocial,
  layoutGrid,
}) {
  const [showSharedModal, setShowSharedModal] = useState();
  const handleShare = () => {
    setShowSharedModal(true);
    setopenSocial(false);
  };
  return (
    <div
      className={
        layoutGrid ? "social-mod-cont-grid social-mod-cont" : "social-mod-cont"
      }
    >
      <div className="social-mod-cont-left">
        <p>
          {`Hey ! I want you to come take a look at this chest workout ! Thanks !`}
        </p>
        <span className="social-mod-cont-left-span1">It's called : </span>
        <span className="social-mod-cont-left-span2">{workoutTitle}</span>
      </div>

      <div className="social-mod-cont-right">
        <Button onClick={handleShare} className="social-mod-cont-btn">
          <img src={shareIcon} alt="" />
          <span>Share</span>
        </Button>
        <div className="social-mod-cont-right-img-wrapper">
          <Image
            loading={"lazy"}
            width={layoutGrid ? 350 : 500}
            src={imagePath}
          />
        </div>
      </div>

      <Modal
        className={"social-mod-cont-modal"}
        open={showSharedModal}
        maskClosable={true}
        closable={true}
        keyboard={true}
        mask={true}
        onOk={() => setShowSharedModal(false)}
        onCancel={() => setShowSharedModal(false)}
        width={"60%"}
        footer={null}
        title={""}
        style={{ height: "516px" }}
      >
        <span className="soc-mod-span1">Congratulations !</span>
        <span className="soc-mod-span2">Workout shared successfully !</span>
        <img className="soc-mod-img" src={success} alt="" />
      </Modal>
    </div>
  );
}
