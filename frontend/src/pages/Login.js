import { IconButton } from "@mui/material";
import { Alert, Button, Checkbox, Form, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import avatarfemale1 from "../assets/img/avatarfemale1.svg";
import avatarfemale2 from "../assets/img/avatarfemale2.svg";
import avatarfemale3 from "../assets/img/avatarfemale3.svg";
import avatarfemale4 from "../assets/img/avatarfemale4.svg";
import avatarfemale5 from "../assets/img/avatarfemale5.svg";
import avatarfemale6 from "../assets/img/avatarfemale6.svg";

import avatarmale1 from "../assets/img/avatarmale1.svg";
import avatarmale2 from "../assets/img/avatarmale2.svg";
import avatarmale3 from "../assets/img/avatarmale3.svg";
import avatarmale4 from "../assets/img/avatarmale4.svg";
import avatarmale5 from "../assets/img/avatarmale5.svg";
import avatarmale6 from "../assets/img/avatarmale6.svg";
import { ClearIcon } from "../components/icons/Icons";

import { useLogin } from "../hooks/useLogin";
import "./login_signup_styles.scss";

const Login = ({}) => {
  const { login, error, isLoading } = useLogin();
  const [showNotification, setShowNotification] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [checkedMale, setCheckedMale] = useState(false);
  const [checkedFemale, setCheckedFemale] = useState(false);

  // save the avatar to local storage
  localStorage.setItem("avatar", JSON.stringify(avatar));

  const [emailClass, setemailClass] = useState("login-form-email-item-input");
  const [passwordClass, setPasswordClass] = useState(
    "login-form-password-item-input"
  );
  const [fullNameClass, setFullNameClass] = useState(
    "login-form-full-name-item-input"
  );
  const [showAvatarModal, setshowAvatarModal] = useState(false);
  //open a modal containing the avatars once the user checks his gender
  // setshowAvatarModal(true);

  const avatars =
    gender === "Male"
      ? [
          avatarmale1,
          avatarmale2,
          avatarmale3,
          avatarmale4,
          avatarmale5,
          avatarmale6,
        ]
      : [
          avatarfemale1,
          avatarfemale2,
          avatarfemale3,
          avatarfemale4,
          avatarfemale5,
          avatarfemale6,
        ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "")
      setemailClass(
        "login-form-email-item-input login-form-email-item-input-empty"
      );
    if (password === "")
      setPasswordClass(
        "login-form-password-item-input login-form-password-item-input-empty"
      );
    if (fullName === "") {
      setFullNameClass(
        "login-form-full-name-item-input login-form-full-name-item-input-empty"
      );
    }

    //do not log in the user until the avatar is picked
    if (avatar) {
      await login(email, password, fullName, gender);
    }
    if (!avatar) {
      setShowNotification(true);
    }
  };

  const onChangeMale = (e) => {
    setCheckedMale(e.target.checked);
    if (checkedFemale === true) {
      setCheckedFemale(false);
    }
  };
  const onChangeFemale = (e) => {
    setCheckedFemale(e.target.checked);
    if (checkedMale === true) {
      setCheckedMale(false);
    }
  };
  const handleAvatarClick = (index) => {
    const selectedItem = avatars[index];
    setAvatar(selectedItem);
    // console.log(selectedItem, avatar);
  };

  useEffect(() => {
    if (checkedMale === true) {
      setGender("Male");
    }
    if (checkedFemale === true) {
      setGender("Female");
    }
    if (checkedMale || checkedFemale) {
      setshowAvatarModal(true);
    }
  }, [checkedMale, checkedFemale]);

  return (
    <div className="login-form-container">
      <div className="login-form-inner">
        <form className="login-form" name="form" onSubmit={handleSubmit}>
          <Form.Item
            className="login-form-email-item"
            label={
              <div className="login-form-email-item-label">
                <span>Email address</span>
              </div>
            }
            name="Email address"
            rules={[{ required: true }]}
            // wrapperCol={{
            //   offset: 8,
            //   span: 8,
            // }}
          >
            <Input
              className={emailClass}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
              allowClear
            />
          </Form.Item>

          <Form.Item
            className="login-form-full-name-item"
            label={
              <div className="login-form-full-name-item-label">
                <span>Full name</span>
              </div>
            }
            name="Full name"
            rules={[{ required: true }]}
          >
            <Input
              className={fullNameClass}
              type="text"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              placeholder="Full Name"
              allowClear
            />
          </Form.Item>

          <Form.Item
            className="login-form-gender-item"
            label={
              <div className="login-form-gender-item-label">
                <span>Gender</span>
              </div>
            }
            name="Gender"
            rules={[{ required: true }]}
          >
            <Checkbox
              className={""}
              checked={checkedMale}
              onChange={onChangeMale}
            >
              <span>Male</span>
            </Checkbox>
            <Checkbox
              className={""}
              checked={checkedFemale}
              onChange={onChangeFemale}
            >
              <span>Female</span>
            </Checkbox>
          </Form.Item>

          <Form.Item
            className="login-form-password-item"
            label={
              <div className="login-form-password-item-label">
                <span>Password</span>
              </div>
            }
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password
              className={passwordClass}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              allowClear
            />
          </Form.Item>

          <Form.Item
            className="login-form-btn-item"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <div className="login-form-btn-and-error">
              <Button
                className="login-form-btn-item-button"
                disabled={isLoading}
                type="primary"
                htmlType="submit"
              >
                <span> Login</span>
              </Button>
              {error && (
                <div className="text-error">
                  <span>{error} !</span>
                </div>
              )}
            </div>
          </Form.Item>
          <div className="login-form-not-a-member">
            <span className="login-form-text1"> not a member ?</span>
            <Button className="login-form-not-a-member-register-btn">
              <Link to="/signup">
                <span className="login-form-text2"> Register</span>
              </Link>
            </Button>
          </div>
        </form>
      </div>
      <>
        {showAvatarModal && (
          <div>
            <Modal
              className="login-form-avatar-modal"
              open={showAvatarModal}
              maskClosable={true}
              closable={true}
              keyboard={true}
              mask={true}
              onOk={() => setshowAvatarModal(false)}
              onCancel={() => setshowAvatarModal(false)}
              footer={null}
              title={`Pick an avatar`}
              width="60%"
            >
              <div className="login-form-modal-content login-form-list-of-avatars">
                {avatars &&
                  avatars?.map((avatar, index) => (
                    <div className="login-form-avatar-wrapper" key={index}>
                      <Button
                        onClick={() => handleAvatarClick(index)}
                        className="login-form-avatar-btn"
                      >
                        <img
                          className="login-form-avatar-icon"
                          src={avatar}
                          alt=""
                        />
                      </Button>
                    </div>
                  ))}
              </div>
              {avatar && (
                <div className="login-form-choose-btn-wrapper">
                  <Button
                    onClick={() => setshowAvatarModal(false)}
                    className="login-form-choose-btn"
                  >
                    <span>Choose</span>
                  </Button>
                </div>
              )}
            </Modal>
          </div>
        )}
      </>
      <>
        {showNotification && (
          <div className="notification">
            <Alert
              type="info"
              className="ant-alert"
              closeIcon={
                <IconButton onClick={() => setShowNotification(false)}>
                  <ClearIcon />
                </IconButton>
              }
              message={
                <span className="noti-text">Please, select an avatar !</span>
              }
              banner
              closable
            />
          </div>
        )}
      </>
    </div>
  );
};

export default Login;

// Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://docs.atlas.mongodb.com/security-whitelist/
