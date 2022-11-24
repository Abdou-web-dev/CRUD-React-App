import { Checkbox } from "antd";
import { useState } from "react";
import avatarmale1 from "../../assets/img/avatarmale1.svg";
import avatarmale2 from "../../assets/img/avatarmale2.svg";

export function Avatars({ gender }) {
  const [avatarIcon, setavatarIcon] = useState(avatarmale2);
  function handleAvatarChange() {
    setavatarIcon(avatarIcon);
  }
  const [checked, setChecked] = useState(true);

  const onChange = (e) => {
    // console.log("checked = ", e.target.checked);
    setChecked(e.target.checked);
  };
  return (
    <div>
      <div>
        <div>
          <img src={avatarmale1} alt="" />
          <Checkbox checked={checked} onChange={onChange}></Checkbox>
        </div>

        <div>
          <img src={avatarmale2} alt="" />
          <Checkbox checked={checked} onChange={onChange}></Checkbox>
        </div>
      </div>
    </div>
  );
}

// sifelhak.abdelmounim400@gmail.com
// (GLUXJqeyE*7W6#5
