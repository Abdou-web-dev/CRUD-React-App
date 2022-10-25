import { Button } from "antd";
import shareIcon from "../../assets/img/shareIcon.svg";
import "./social_links.scss";

export function SocialModalContent({ workoutTitle, exoImageUrl }) {
  return (
    <div className="social-mod-cont">
      <div className="social-mod-cont-left">
        <p>
          {`Hey ! I want you to come take a look at this chest workout ! Thanks !`}
        </p>
        <span className="social-mod-cont-left-span1">It's called : </span>
        <span className="social-mod-cont-left-span2">{workoutTitle}</span>
      </div>

      <div className="social-mod-cont-right">
        <Button className="social-mod-cont-btn">
          <img src={shareIcon} alt="" />
          <span>Share</span>
        </Button>
      </div>
      <div className="social-mod-cont-right">
        <img src={exoImageUrl} alt="" />
      </div>
    </div>
  );
}
