//icons
import fbIcon from "../../assets/img/fb.svg";
import instaIcon from "../../assets/img/instagram.svg";
import pinIcon from "../../assets/img/pinterest.svg";
import twitterIcon from "../../assets/img/twitter.svg";
import youtubeIcon from "../../assets/img/youtube.svg";
import { SocialIcon } from "./SocialIcon";
import "./social_links.scss";

export function SocialIcons({ workoutTitle, layoutGrid }) {
  return (
    <div
      className={
        layoutGrid ? "social-icons-container-grid" : "social-icons-container"
      }
    >
      <div className="social-icons-grp1">
        <div className="social-icon-wrapper1">
          <SocialIcon
            {...{ workoutTitle, layoutGrid }}
            social="fb"
            icon={fbIcon}
          ></SocialIcon>
        </div>

        <div className="social-icon-wrapper2">
          <SocialIcon
            {...{ workoutTitle, layoutGrid }}
            social="insta"
            icon={instaIcon}
          ></SocialIcon>
        </div>

        <div className="social-icon-wrapper3">
          <SocialIcon
            {...{ workoutTitle, layoutGrid }}
            social="pin"
            icon={pinIcon}
          ></SocialIcon>
        </div>
      </div>

      <div className="social-icons-grp2">
        <div className="social-icon-wrapper4">
          <SocialIcon
            {...{ workoutTitle, layoutGrid }}
            social="twitter"
            icon={twitterIcon}
          ></SocialIcon>
        </div>

        <div className="social-icon-wrapper5">
          <SocialIcon
            {...{ workoutTitle, layoutGrid }}
            social="yt"
            icon={youtubeIcon}
          ></SocialIcon>
        </div>
      </div>
    </div>
  );
}
