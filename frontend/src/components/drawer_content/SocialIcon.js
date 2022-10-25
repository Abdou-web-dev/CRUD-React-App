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
    workoutTitle === "a"
      ? "https://cdn.sortiraparis.com/images/58/77153/554223-fete-anniversaire-pique-nique-rassemblement-ce-qu-on-aura-le-droit-de-faire-a-partir-du-11-mai.jpg"
      : workoutTitle === "b"
      ? "https://tra.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2FCAM.2F2021.2F09.2F04.2F102033a7-fd8f-4650-bd9c-a56d560939d4.2Ejpeg/1200x630/quality/80/pourquoi-faire-la-fete-nous-fait-du-bien.jpg"
      : workoutTitle === "c"
      ? "https://canaldelasiagne.fr/wp-content/uploads/2021/08/fete@2x.jpg"
      : "https://i0.wp.com/www.bigmoustache.com/blog/wp-content/uploads/2015/07/feu.jpg?resize=1024%2C700&ssl=1";

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
                {...{ workoutTitle, exoImage: exoImageUrl }}
              ></SocialModalContent>
            </div>
          ) : social === "insta" ? (
            <div className="modal-content-ins">
              <SocialModalContent
                {...{ workoutTitle, exoImage: exoImageUrl }}
              ></SocialModalContent>
            </div>
          ) : social === "pin" ? (
            <div className="modal-content-pin">
              <SocialModalContent
                {...{ workoutTitle, exoImage: exoImageUrl }}
              ></SocialModalContent>
            </div>
          ) : social === "twitter" ? (
            <div className="modal-content-twitter">
              <SocialModalContent
                {...{ workoutTitle, exoImage: exoImageUrl }}
              ></SocialModalContent>
            </div>
          ) : social === "yt" ? (
            <div className="modal-content-yt">
              <SocialModalContent
                {...{ workoutTitle, exoImage: exoImageUrl }}
              ></SocialModalContent>
            </div>
          ) : null}
        </div>
      </Modal>
    </div>
  );
}
