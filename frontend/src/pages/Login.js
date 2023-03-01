import { Alert, Button, Checkbox, Form, Input, Tooltip } from "antd";
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
import edit from "../assets/img/edit.svg";
import { LoginMobileForm } from "../components/forms/LoginMobileForm";
import { ClearIcon } from "../components/icons/Icons";
import { AvatarModal } from "../components/modals/AvatarModal";
import { useLogin } from "../hooks/useLogin";
import { useMediaQuery } from "../hooks/UseMediaQuery";
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
  const [showCheckboxes, setshowCheckboxes] = useState(true);
  const [showSelectedAvatar, setShowSelectedAvatar] = useState(false);

  // save the avatar to local storage
  localStorage.setItem("avatar", JSON.stringify(avatar));
  localStorage.setItem("gender", JSON.stringify(gender));

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
    if (email === "")
      setemailClass(
        "login-form-email-item-input login-form-email-item-input-empty"
      );
    else if (email !== "") setemailClass("login-form-email-item-input");
    if (password === "")
      setPasswordClass(
        "login-form-password-item-input login-form-password-item-input-empty"
      );
    else if (password !== "")
      setPasswordClass("login-form-password-item-input");
    if (fullName === "") {
      setFullNameClass(
        "login-form-full-name-item-input login-form-full-name-item-input-empty"
      );
    } else if (fullName !== "") {
      setFullNameClass("login-form-full-name-item-input");
    }

    if (avatar) {
      await login(email, password, fullName, gender);
    }
    if (!avatar) {
      setShowNotification(true);
    }
  };
  const onChangeMale = (e, index) => {
    setCheckedMale(e.target.checked);
    if (checkedFemale === true) {
      //meaning if this female checkbox is checked by the user
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
    if (selectedItem) {
      setshowCheckboxes(false);
      setAvatar(selectedItem);
      setShowSelectedAvatar(true);
    }
  };

  //when the user closes the modal , show the selected avatar instead of the 2 checkboxes
  //but still allow him to modify it
  const handleEditAvatarClick = () => {
    setshowCheckboxes(true);
    setShowSelectedAvatar(false);
    setCheckedMale(false);
    setCheckedFemale(false);
  };
  const isMobileScreen = useMediaQuery("(max-width: 576px)"); // returns true or false
  let isDesktopScreen = !isMobileScreen;
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
    // console.log(isDesktopScreen);
  }, [checkedMale, checkedFemale]);

  return (
    <div
      className={
        isDesktopScreen
          ? "login-form-container"
          : "login-form-mobile-top-container"
      }
    >
      {isDesktopScreen ? (
        <div className="login-form-inner">
          <Form className="login-form" name="form" onFinish={handleSubmit}>
            <Form.Item
              className="login-form-email-item"
              label={
                <div className="login-form-email-item-label">
                  <span>Email address</span>
                </div>
              }
              name="Email address"
              //rules={[{ required: true }]}
            >
              <Input
                className={emailClass}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
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
              //rules={[{ required: true }]}
            >
              <Input
                className={fullNameClass}
                type="text"
                onChange={(e) => setFullName(e.target.value.trim())}
                value={fullName}
                placeholder="Full Name"
                allowClear
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    setFullName(e.target.value.trim());
                  }
                }}
                /**trim js method Removes the leading and trailing white space and line terminator characters from a string. */
              />
            </Form.Item>

            <Form.Item
              className="login-form-gender-item"
              label={
                <div className="login-form-gender-item-label">
                  <span>Avatar</span>
                </div>
              }
              // required
              // name="Gender"
              // //rules={[{ required: true }]}
              //when we remove name property , the asterisk marking that field is mandatory is removed
            >
              {showCheckboxes && (
                <div className="login-form-checkboxes">
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
                </div>
              )}

              {showSelectedAvatar && (
                <div className="login-form-selected-avatar">
                  <img
                    className="login-form-selected-avatar-icon"
                    src={avatar}
                    alt=""
                  />
                  <Tooltip title="Change this avatar">
                    <Button
                      onClick={handleEditAvatarClick}
                      className="login-form-selected-avatar-edit-icon-btn"
                    >
                      <img
                        className="login-form-selected-avatar-edit-icon"
                        src={edit}
                        alt=""
                      />
                    </Button>
                  </Tooltip>
                </div>
              )}
            </Form.Item>

            <Form.Item
              className="login-form-password-item"
              label={
                <div className="login-form-password-item-label">
                  <span>Password</span>
                </div>
              }
              name="password"
              //rules={[{ required: true }]}
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
                    {error ===
                    "This is not the full name you entered when you first registered, check if you typed an extra white space" ? (
                      <div className="errorMsg-wrapper">
                        <span className="errorMsg">{`This is not the full name you entered`}</span>
                        <span className="errorMsg">
                          {`when you first registered,  !`}
                        </span>
                        <span className="errorMsg">
                          {`check if you typed an extra white space`}
                        </span>
                      </div>
                    ) : (
                      <span
                        className={
                          error === "Please , type your email address"
                            ? "error-msg-text small-font"
                            : "error-msg-text"
                        }
                      >
                        {error}!
                      </span>
                    )}
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
          </Form>
        </div>
      ) : isMobileScreen ? (
        <div className="login-form-mobile-inner">
          <LoginMobileForm />
        </div>
      ) : null}

      {/* Avatar modal */}
      <>
        <AvatarModal
          {...{
            showAvatarModal,
            setshowAvatarModal,
            avatar,
            avatars,
            handleAvatarClick,
            setShowNotification,
          }}
        />
      </>

      {/* Notification */}
      <>
        {showNotification && (
          <div className="notification please-select-noti">
            <Alert
              type="info"
              className="ant-alert"
              closeIcon={<ClearIcon />}
              message={
                <span className="noti-text please-select">
                  Please, select an avatar !
                </span>
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
//const pureString = fullName.replace(/(?:\r\n|\r|\n)/g, '')
//const pureString = str.replace(/(?:\r\n|\r|\n)/g, '')

// mazih-sara@gmail.com
// d1efde0+e0fe+fe+feAAAA
