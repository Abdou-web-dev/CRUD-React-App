import { IconButton } from "@mui/material";
import { Modal } from "antd";
import { useState } from "react";
import { SocialModalContent } from "./SocialModalContent";
import "./social_links.scss";

export function SocialIcon({ social, icon, workoutTitle, layoutGrid }) {
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
  function imagePath() {
    let imagePath =
      workoutTitle === "Barbell Flat Bench Press"
        ? `https://cdn.muscleandstrength.com/sites/default/files/barbell-bench-press_0.jpg`
        : workoutTitle === "Barbell Incline Bench Press"
        ? `https://cdn.muscleandstrength.com/sites/default/files/incline-bench-press.jpg`
        : workoutTitle === "Barbell Decline Bench Press"
        ? `https://post.healthline.com/wp-content/uploads/2019/04/Decline_Bench_Press_1200x628-facebook.jpg`
        : workoutTitle === "Chest Flye"
        ? `https://cdn.mos.cms.futurecdn.net/YWaPGifbdz6dgiUSCmHp2E.jpg`
        : workoutTitle === "Dumbbell Bench Press"
        ? `https://static.strengthlevel.com/images/illustrations/dumbbell-bench-press-1000x1000.jpg`
        : workoutTitle === "Push-Up"
        ? `https://www.fitnesseducation.edu.au/wp-content/uploads/2020/10/Pushups.jpg`
        : workoutTitle === "Dip"
        ? `https://cdn.muscleandstrength.com/sites/default/files/chest-dip.jpg`
        : workoutTitle === "Svend Press"
        ? `https://www.oxygenmag.com/wp-content/uploads/2020/03/svend-press.jpg?width=730`
        : workoutTitle === "Cable Iron Cross"
        ? `https://newlife.com.cy/wp-content/uploads/2018/12/high-cable-cross-over-990x605-990x600.png`
        : workoutTitle === "Chaos Push-Up"
        ? `https://i.pinimg.com/564x/f3/52/b4/f352b4f0a9b40dc777b2237e8aee5b13.jpg`
        : workoutTitle === "Plyo Push-Up"
        ? `https://post.healthline.com/wp-content/uploads/2019/04/Pushup_Female_Steps-1200x628-Facebook.jpg`
        : workoutTitle === "Dumbbell Floor Press"
        ? `https://www.bodybuilding.com/fun/images/2014/dont-forget-the-floor-press-graphic-1b-700xh.jpg`
        : workoutTitle === "Pause Push-Up"
        ? `https://www.menshealth.com.au/wp-content/uploads/2021/05/main_0.jpg`
        : workoutTitle === "Side-to-Side Landmine Press"
        ? `https://i.ytimg.com/vi/MQ1BFTA2hRI/maxresdefault.jpg`
        : workoutTitle === "Close-Grip Push-Up"
        ? `https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_1957199755_1600x.jpg?v=1633718341`
        : "";
    return imagePath;
  }

  return (
    <div
      className={
        layoutGrid
          ? "social-icon-modal-container-grid"
          : "social-icon-modal-container"
      }
    >
      <div className="social-icon-btn">
        {icon && (
          <IconButton
            className="social-icon-btn-iconbtn"
            onClick={() => setopenSocial(true)}
          >
            <img src={icon} alt="" />
          </IconButton>
        )}
      </div>
      <Modal
        className={
          layoutGrid
            ? `${setModalClassName()} social-icon-ant-modal ant-modal-grid`
            : `${setModalClassName()} social-icon-ant-modal`
        }
        open={openSocial}
        maskClosable={true}
        closable={true}
        keyboard={true}
        mask={true}
        onOk={() => setopenSocial(false)}
        onCancel={() => setopenSocial(false)}
        width={layoutGrid ? "50%" : "60%"}
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
                imagePath={imagePath()}
                {...{ setopenSocial, workoutTitle, layoutGrid }}
              ></SocialModalContent>
            </div>
          ) : social === "insta" ? (
            <div className="modal-content-ins">
              <SocialModalContent
                imagePath={imagePath()}
                {...{ workoutTitle, setopenSocial, layoutGrid }}
              ></SocialModalContent>
            </div>
          ) : social === "pin" ? (
            <div className="modal-content-pin">
              <SocialModalContent
                imagePath={imagePath()}
                {...{ setopenSocial, workoutTitle, layoutGrid }}
              ></SocialModalContent>
            </div>
          ) : social === "twitter" ? (
            <div className="modal-content-twitter">
              <SocialModalContent
                imagePath={imagePath()}
                {...{ setopenSocial, workoutTitle, layoutGrid }}
              ></SocialModalContent>
            </div>
          ) : social === "yt" ? (
            <div className="modal-content-yt">
              <SocialModalContent
                imagePath={imagePath()}
                {...{ setopenSocial, workoutTitle, layoutGrid }}
              ></SocialModalContent>
            </div>
          ) : null}
        </div>
      </Modal>
    </div>
  );
}
