import { IconButton } from "@mui/material";
import { Modal } from "antd";
import { useState } from "react";
import { SocialModalContent } from "./SocialModalContent";
import "./social_links.scss";

export function SocialIcon({ social, icon, workoutTitle }) {
  // console.log(workoutTitle, "here");
  const [openSocial, setopenSocial] = useState(false);
  const socialText = (text) => {
    switch (social) {
      case "fb":
        text = "facebook";
        break;
      case "yt":
        text = "youtube";
        break;
      case "insta":
        text = "instagram";
        break;
      case "pin":
        text = "pinterest";
        break;
      case "twitter":
        text = "twitter";
        break;
      default:
        break;
    }
    return text;
  };
  const setModalClassName = (className) => {
    switch (social) {
      case "fb":
        className = "modal-fb";
        break;
      case "yt":
        className = "modal-yt";
        break;
      case "insta":
        className = "modal-insta";
        break;
      case "pin":
        className = "modal-pin";
        break;
      case "twitter":
        className = "modal-twitter";
        break;
      default:
        break;
    }
    return className;
  };

  let exoImageUrl =
    workoutTitle === "Chest Flye"
      ? "https://cdn.mos.cms.futurecdn.net/YWaPGifbdz6dgiUSCmHp2E.jpg"
      : workoutTitle === "b"
      ? ""
      : workoutTitle === "c"
      ? ""
      : "";

  return (
    <div className="social-icon-modal-container">
      <div className="social-icon-btn">
        {icon && (
          <IconButton onClick={() => setopenSocial(true)}>
            <img src={icon} alt="" />
          </IconButton>
        )}
      </div>
      <Modal
        className={setModalClassName() + ` social-icon-ant-modal`}
        open={openSocial}
        maskClosable={true}
        closable={true}
        keyboard={true}
        mask={true}
        onOk={() => setopenSocial(false)}
        onCancel={() => setopenSocial(false)}
        width={"60%"}
        footer={null}
        title={
          <div className="social-modal-title">
            <span className="social-modal-title-span1">{`Share this Workout on :`}</span>
            <span className="social-modal-title-span2">{socialText()}</span>
          </div>
        }
        style={{ height: "100%" }}
      >
        <div className="modal-content">
          {social === "fb" ? (
            <div className="modal-content-fb">
              <SocialModalContent
                {...{ setopenSocial, workoutTitle, exoImageUrl }}
              ></SocialModalContent>
            </div>
          ) : social === "insta" ? (
            <div className="modal-content-ins">
              <SocialModalContent
                {...{ workoutTitle, exoImageUrl, setopenSocial }}
              ></SocialModalContent>
            </div>
          ) : social === "pin" ? (
            <div className="modal-content-pin">
              <SocialModalContent
                {...{ setopenSocial, workoutTitle, exoImageUrl }}
              ></SocialModalContent>
            </div>
          ) : social === "twitter" ? (
            <div className="modal-content-twitter">
              <SocialModalContent
                {...{ setopenSocial, workoutTitle, exoImageUrl }}
              ></SocialModalContent>
            </div>
          ) : social === "yt" ? (
            <div className="modal-content-yt">
              <SocialModalContent
                {...{ setopenSocial, workoutTitle, exoImageUrl }}
              ></SocialModalContent>
            </div>
          ) : null}
        </div>
      </Modal>
    </div>
  );
}
