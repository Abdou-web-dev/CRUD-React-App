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
      <SocialIcon
        {...{ workoutTitle, layoutGrid }}
        social="fb"
        icon={fbIcon}
      ></SocialIcon>
      <SocialIcon
        {...{ workoutTitle, layoutGrid }}
        social="insta"
        icon={instaIcon}
      ></SocialIcon>
      <SocialIcon
        {...{ workoutTitle, layoutGrid }}
        social="pin"
        icon={pinIcon}
      ></SocialIcon>
      <SocialIcon
        {...{ workoutTitle, layoutGrid }}
        social="twitter"
        icon={twitterIcon}
      ></SocialIcon>
      <SocialIcon
        {...{ workoutTitle, layoutGrid }}
        social="yt"
        icon={youtubeIcon}
      ></SocialIcon>
    </div>
  );
}
