import { Button, Input, message } from "antd";
import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import validator from "validator";
import { countries } from "../../src/assets/staticData/countries";
import at_logo from "../assets/img/at.png";
import cancelIcon from "../assets/img/cancelIcon.svg";
import name_icon from "../assets/img/signature.png";
import { CopyBtn } from "../components/buttons/CopyBtn";
import { EditBTn } from "../components/buttons/EditBtn";
import { useAuthContext } from "../hooks/useAuthContext";
import "./profile_styles.scss";

// https://stackoverflow.com/questions/28314368/how-to-maintain-state-after-a-page-refresh-in-react-js

function Profile() {
  const { user } = useAuthContext();
  // let email = user?.email;
  const [email, setEmail] = useState(user?.email);
  const [country, setCountry] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailValue, setEmailValue] = useState(``);
  const [fullNameValue, setFullNameValue] = useState(``);
  const [countryValue, setCountryValue] = useState(``);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showFullNameInput, setShowFullNameInput] = useState(false);
  const [okBtnClicked, setOkBtnClicked] = useState(false);
  // const [showFullNameInput, setShowFullNameInput] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(email); // Promise
    message.info("Email copied !", 0.85);
  }

  function handleEmailChange(e) {
    setEmailValue(e.target.value);
  }
  //validateEmail on the frontend
  let emailIsValid = emailValue && validator.isEmail(emailValue);
  function handleEmailOKClick() {
    if (showEmailInput) {
      setOkBtnClicked(true);
    } else {
      setOkBtnClicked(false);
    }
    if (emailIsValid) {
      setShowEmailInput(false);
      setEmailValue("");
      setEmail(emailValue);
      localStorage.setItem("email_adress", JSON.stringify(email));
    } else {
      return;
    }
  }

  // persist data after refresh and get it from local storage
  useEffect(() => {
    setFullName(JSON.parse(localStorage.getItem("user_fullName_from_signup")));
    setCountry(JSON.parse(localStorage.getItem("user_country_from_signup")));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("email_adress", JSON.stringify(email));
  // }, [email]);

  useEffect(() => {
    setEmail(JSON.parse(localStorage.getItem("email_adress")));
  }, []);

  function getCountryCode() {
    let code = "";
    let filtered_data = countries?.filter((countryElement) => {
      if (countryElement?.name === country) return countryElement?.code;
    });
    if (filtered_data) {
      let country_code = filtered_data[0]?.code;
      code = country_code;
    }
    return code;
  }

  // https://stackoverflow.com/questions/28314368/how-to-maintain-state-after-a-page-refresh-in-react-js

  return (
    // add the possibility to edit the email , full name and country
    <div className="profile-page-container">
      <div
        className={`profile-email-wrapper ${
          emailValue ? "user_typing_email" : ""
        } `}
      >
        <div className={`email_bloc1`}>
          <img src={at_logo} alt="" />
          <span>{email || user?.email} </span>
        </div>
        <div className="profile-copy-edit-btn-wrapper">
          <CopyBtn handleCopyClick={copyToClipboard}></CopyBtn>
          <EditBTn
            showInput={showEmailInput}
            inputValue={emailValue}
            handleEditclick={() => setShowEmailInput(true)}
          />
        </div>
      </div>

      <>
        {showEmailInput ? (
          <div className="profile-page-email-input-cancel_btn-not_valid-wrapper">
            <div className="profile-page-email-input-wrapper">
              <Input
                className={`profile-page-email-input
                ${
                  okBtnClicked && showEmailInput && emailValue && !emailIsValid
                    ? "ok_clicked_email_invalid"
                    : ""
                }
                `}
                value={emailValue}
                onChange={handleEmailChange}
                suffix={
                  <Button
                    className="ok_suffix-btn"
                    disabled={!emailValue}
                    onClick={handleEmailOKClick}
                  >
                    <span>OK</span>
                  </Button>
                }
                placeholder=" &nbsp;Email..."
                onPressEnter={handleEmailOKClick}
                disabled={null}
              />
              <Button
                className="x_icon-btn"
                onClick={() => {
                  setShowEmailInput(false);
                }}
              >
                <img className="x_icon" src={cancelIcon} alt="" />
              </Button>
            </div>
            <>
              {!emailIsValid && emailValue && (
                <div className="not_valid_sentence">
                  <span>This email address is not valid</span>
                </div>
              )}
            </>
          </div>
        ) : null}
      </>

      <div className="profile-fullName-wrapper">
        <img src={name_icon} alt="" />
        <span className="name">{fullName} </span>
        <CopyBtn
          handleCopyClick={() => {
            navigator.clipboard.writeText(fullName);
            message.info("Name copied !", 0.85);
          }}
        />
        <div className="profile-edit-btn-wrapper">
          <EditBTn
            showInput={showFullNameInput}
            inputValue={fullNameValue}
            // handleEditclick={() => setShowEmailInput(true)}
          />
        </div>
      </div>

      {/* {showfullNamenput ? ( // make this into a new component */}

      <div className="profile-country_icon-wrapper">
        {/* <img src={setCountryFlag()} alt={country} /> */}
        <div className="country_flag">
          <ReactCountryFlag
            className="country_code"
            countryCode={getCountryCode()}
            style={{
              fontSize: "3.25em",
              lineHeight: "2em",
            }}
            svg
          />
        </div>
        <span className="country_text">{country} </span>
        <CopyBtn
          handleCopyClick={() => {
            navigator.clipboard.writeText(country);
            message.info("Country copied !", 0.85);
          }}
        />
        <EditBTn
          EditDisabled={countryValue}
          // handleEditclick={() => setFullNameValue(true)}
        />
      </div>
    </div>
  );
}

export default Profile;

/* maybe, user a package that allows to display the country flag, later !!!! */
// const emailString = useRef("");
// const isMobileScreen = useMediaQuery("(max-width: 600px)");
/* display the exact icon of any country */
{
  /* ${emailValue ? "user_typing_email" : ""}  */
}
