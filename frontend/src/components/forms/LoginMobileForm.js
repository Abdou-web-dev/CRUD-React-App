import { Button, Form, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import avatarFemale from "../../assets/img/avatarFemale.svg";
import avatarfemale1 from "../../assets/img/avatarfemale1.svg";
import avatarfemale2 from "../../assets/img/avatarfemale2.svg";
import avatarfemale3 from "../../assets/img/avatarfemale3.svg";
import avatarfemale4 from "../../assets/img/avatarfemale4.svg";
import avatarfemale5 from "../../assets/img/avatarfemale5.svg";
import avatarfemale6 from "../../assets/img/avatarfemale6.svg";
import avatarMale from "../../assets/img/avatarMale.svg";
import avatarmale1 from "../../assets/img/avatarmale1.svg";
import avatarmale2 from "../../assets/img/avatarmale2.svg";
import avatarmale3 from "../../assets/img/avatarmale3.svg";
import avatarmale4 from "../../assets/img/avatarmale4.svg";
import avatarmale5 from "../../assets/img/avatarmale5.svg";
import avatarmale6 from "../../assets/img/avatarmale6.svg";
import { useLogin } from "../../hooks/useLogin";
import { EmailIcon, PasswordIcon, UserIcon } from "../icons/Icons";
import "./login_signup_mobile_styles.scss";

export const LoginMobileForm = ({}) => {
  const { login, error, isLoading, setError } = useLogin();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [showGenderIcon, setShowGenderIcon] = useState(true);
  const [showAvatars, setshowAvatars] = useState(false);
  const [showMaleAvatars, setshowMaleAvatars] = useState(false);
  const [showFemaleAvatars, setshowFemaleAvatars] = useState(false);
  const [selectedMaleAvatar, setselectedMaleAvatar] = useState(null);
  const [selectedFemaleAvatar, setselectedFemaleAvatar] = useState(null);

  const [showSelectedAvatar, setshowSelectedAvatar] = useState(false);
  const maleAvatars = [
    avatarmale1,
    avatarmale2,
    avatarmale3,
    avatarmale4,
    avatarmale5,
    avatarmale6,
  ];
  const femaleAvatars = [
    avatarfemale1,
    avatarfemale2,
    avatarfemale3,
    avatarfemale4,
    avatarfemale5,
    avatarfemale6,
  ];
  const handleSubmit = async (e) => {
    if (!selectedMaleAvatar || !selectedFemaleAvatar) {
      setError("Please, pick an avatar");
    }
    if (selectedMaleAvatar || selectedFemaleAvatar) {
      await login(email, password, fullName);
    }
  };
  let prfx = "login-mobile-form";

  function handleMaleAvatarClick() {
    setshowAvatars(true);
    setshowMaleAvatars(true);
    setShowGenderIcon(false);
  }
  function handleFemaleAvatarClick() {
    setshowAvatars(true);
    setshowFemaleAvatars(true);
    setShowGenderIcon(false);
  }

  const handleMaleAvatarChoose = (index) => {
    const selectedItem = maleAvatars[index];
    setselectedMaleAvatar(selectedItem);
    setshowSelectedAvatar(true);
    setshowAvatars(false);
    setShowGenderIcon(false);
  };
  const handleFemaleAvatarChoose = (index) => {
    const selectedItem = femaleAvatars[index];
    setselectedFemaleAvatar(selectedItem);
    setshowSelectedAvatar(true);
    setshowAvatars(false);
    setShowGenderIcon(false);
  };

  // useEffect(() => {}, [selectedMaleAvatar, selectedFemaleAvatar]);
  return (
    <div className="login-mobile-form-container">
      <Form className="login-mobile-form" name="form" onFinish={handleSubmit}>
        <Form.Item
          className={`${prfx}-email-item`}
          name="Email address"
          // rules={[{ required: true }]}
        >
          <Input
            className={`${prfx}-email-input`}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            allowClear
            prefix={<EmailIcon></EmailIcon>}
          />
        </Form.Item>

        <Form.Item
          className={`${prfx}-name-item`}
          name="Full name"
          // rules={[{ required: true }]}
        >
          <Input
            className={`${prfx}-name-input`}
            type="text"
            onChange={(e) => setFullName(e.target.value.trim())}
            value={fullName}
            placeholder="Full Name"
            allowClear
            prefix={<UserIcon></UserIcon>}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setFullName(e.target.value.trim());
              }
            }}
            /**trim js method Removes the leading and trailing white space and line terminator characters from a string. */
          />
        </Form.Item>

        <Form.Item className={`${prfx}-gender-wrapper`}>
          {showGenderIcon ? (
            <div className={`${prfx}-gender-buttons`}>
              <Button
                className={`${prfx}-gender-male-button`}
                onClick={handleMaleAvatarClick}
                style={{ height: "fit-content" }}
              >
                <img width={`50px`} height="50px" src={avatarMale} alt="" />
              </Button>
              <Button
                className={`${prfx}-gender-female-button`}
                onClick={handleFemaleAvatarClick}
                style={{ height: "fit-content" }}
              >
                <img
                  className=""
                  width={`50px`}
                  height="50px"
                  src={avatarFemale}
                  alt=""
                />
              </Button>
            </div>
          ) : showAvatars ? (
            <div className={`${prfx}-list-of-avatars`}>
              {showMaleAvatars === true ? (
                <div className={`${prfx}-male-avatars-list`}>
                  {maleAvatars &&
                    maleAvatars?.map((avatar, index) => (
                      <Button
                        className={`${prfx}-male-avatars-list-avatar ${
                          index === 5 ? `last-avatar` : ``
                        }`}
                        key={index}
                        //never forget to declare a callback function here, and pass the index as arugment
                        onClick={() => handleMaleAvatarChoose(index)}
                        style={{ height: "fit-content" }}
                      >
                        <img
                          width={`60px`}
                          height={`60px`}
                          src={avatar}
                          alt=""
                        />
                      </Button>
                    ))}
                </div>
              ) : (
                <div className={`${prfx}-female-avatars-list`}>
                  {femaleAvatars &&
                    femaleAvatars?.map((avatar, index) => (
                      <Button
                        key={index}
                        className={`${prfx}-female-avatars-list-avatar
                        ${index === 5 ? `last-avatar` : ``}
                        `}
                        //never forget to declare a callback function here, and pass the index as arugment
                        onClick={() => handleFemaleAvatarChoose(index)}
                        style={{ height: "fit-content" }}
                      >
                        <img
                          width={`60px`}
                          height={`60px`}
                          src={avatar}
                          alt=""
                        />
                      </Button>
                    ))}
                </div>
              )}
            </div>
          ) : showSelectedAvatar ? (
            <div className={`${prfx}-selected-avatar-wrapper`}>
              <img
                className={`${prfx}-selected-avatar-wrapper-icon`}
                src={
                  showMaleAvatars ? selectedMaleAvatar : selectedFemaleAvatar
                }
                alt=""
              />
            </div>
          ) : null}
        </Form.Item>

        <Form.Item
          className={`${prfx}-password-item`}
          name="password"
          // rules={[{ required: true }]}
        >
          <Input.Password
            className={`${prfx}-password-input`}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            allowClear
            prefix={<PasswordIcon></PasswordIcon>}
          />
        </Form.Item>

        <Form.Item
          className={`${prfx}-login-btn-item`}
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            className={`${prfx}-login-btn`}
            disabled={isLoading}
            type="primary"
            htmlType="submit"
          >
            <span> Login</span>
          </Button>
        </Form.Item>

        <div className={`${prfx}-error-wrapper`}>
          {error && (
            <div className={`${prfx}-error-inner`}>
              <span>{error} !</span>
            </div>
          )}
        </div>

        <div className={`${prfx}-not-a-member`}>
          <span className="login-form-text1"> not a member ?</span>
          <Button className="login-form-not-a-member-register-btn">
            <Link to="/signup">
              <span className="login-form-text2"> Register</span>
            </Link>
          </Button>
        </div>
      </Form>
    </div>
  );
};
