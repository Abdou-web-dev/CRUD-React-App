//icons
import fbIcon from "../../assets/img/fb.svg";
import instaIcon from "../../assets/img/instagram.svg";
import pinIcon from "../../assets/img/pinterest.svg";
import twitterIcon from "../../assets/img/twitter.svg";
import youtubeIcon from "../../assets/img/youtube.svg";
import { SocialIcon } from "./SocialIcon";
import "./social_links.scss";

export function SocialIcons({ workoutTitle }) {
  return (
    <div className="social-icons-container">
      <SocialIcon {...{ workoutTitle }} social="fb" icon={fbIcon}></SocialIcon>
      <SocialIcon
        {...{ workoutTitle }}
        social="insta"
        icon={instaIcon}
      ></SocialIcon>
      <SocialIcon
        {...{ workoutTitle }}
        social="pin"
        icon={pinIcon}
      ></SocialIcon>
      <SocialIcon
        {...{ workoutTitle }}
        social="twitter"
        icon={twitterIcon}
      ></SocialIcon>
      <SocialIcon
        {...{ workoutTitle }}
        social="yt"
        icon={youtubeIcon}
      ></SocialIcon>
    </div>
  );
}
