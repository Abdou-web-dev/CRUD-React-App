import { message } from "antd";
import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import validator from "validator";
import { countries } from "../../src/assets/staticData/countries";
import at_logo from "../assets/img/at.png";
import name_icon from "../assets/img/signature.png";
import { CopyBtn } from "../components/buttons/CopyBtn";
import { EditBTn } from "../components/buttons/EditBtn";
import { EditInput } from "../components/inputs/EditInput";
import { NiceSelect } from "../components/select/Select";

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
  const [showCountrySelect, setShowCountrySelect] = useState(false);

  const [okBtnClicked, setOkBtnClicked] = useState(false);
  // const [showFullNameInput, setShowFullNameInput] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(email); // Promise
    message.info("Email copied !", 0.85);
  }

  function handleEmailChange(e) {
    setEmailValue(e.target.value);
  }
  function handleFullNameChange(e) {
    setFullNameValue(e.target.value);
  }
  //validateEmail on the frontend,  * Check if the string is an email.
  let emailIsValid = emailValue && validator.isEmail(emailValue);
  function handleEmailSubmit() {
    if (showEmailInput) {
      setOkBtnClicked(true);
    } else {
      setOkBtnClicked(false);
    }
    if (emailIsValid) {
      setShowEmailInput(false);
      setEmailValue("");
      setEmail(emailValue);
      localStorage.setItem("email_adress", JSON.stringify(emailValue));
      setEmail(JSON.parse(localStorage.getItem("email_adress")));
    } else {
      return;
    }
  }

  //for fullName
  // * isAlpha : Check if the string contains only letters (a-zA-Z).
  let fullNameIsValid = fullNameValue && validator.isAlpha(fullNameValue);
  function handleFullNameSubmit() {
    if (showFullNameInput) {
      setOkBtnClicked(true);
    } else {
      setOkBtnClicked(false);
    }
    if (fullNameIsValid) {
      setShowFullNameInput(false);
      setFullNameValue("");
      setFullName(fullNameValue);
      localStorage.setItem("full_name", JSON.stringify(fullNameValue));
      setFullName(JSON.parse(localStorage.getItem("full_name")));
    } else {
      return;
    }
  }

  // persist data after refresh and get it from local storage
  useEffect(() => {
    setFullName(JSON.parse(localStorage.getItem("user_fullName_from_signup")));
    setCountry(JSON.parse(localStorage.getItem("user_country_from_signup")));
  }, []);

  // at first render
  useEffect(() => {
    setEmail(user?.email);
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
          <span>{email} </span>
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
          <EditInput
            {...{
              okBtnClicked,
            }}
            showEditInput={showEmailInput}
            setShowEditInput={setShowEmailInput}
            value={emailValue}
            setValue={setEmailValue}
            valueIsValid={emailIsValid}
            handleChange={handleEmailChange}
            handleOkClick={handleEmailSubmit}
          />
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
            handleEditclick={() => setShowFullNameInput(true)}
          />
        </div>
      </div>

      <>
        {showFullNameInput ? (
          <EditInput
            {...{
              okBtnClicked,
              fullNameValue,
            }}
            showEditInput={showFullNameInput}
            setShowEditInput={setShowFullNameInput}
            value={fullNameValue}
            setValue={setFullNameValue}
            valueIsValid={fullNameIsValid}
            handleChange={handleFullNameChange}
            handleOkClick={handleFullNameSubmit}
          />
        ) : null}
      </>

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
          showCountrySelect={showCountrySelect}
          handleEditclick={() => setShowCountrySelect(true)}
        />
      </div>

      <>{showCountrySelect === true ? <NiceSelect></NiceSelect> : null}</>
      {/* <NiceSelect /> */}
    </div>
  );
}

export default Profile;

/* maybe, user a package that allows to display the country flag, later !!!! */
// const emailString = useRef("");
// const isMobileScreen = useMediaQuery("(max-width: 600px)");
/* display the exact icon of any country */

/* ${emailValue ? "user_typing_email" : ""}  */

// localStorage.setItem("email_adress", JSON.stringify(emailValue));
//       const new_email_adress = JSON.parse(localStorage.getItem("email_adress"));
//       if (new_email_adress !== null) {
//         setEmail(new_email_adress);
//       }

//       // const data = localStorage.g
//this useEffect code must be placed in this component , not in App.js
//  useEffect(() => {
//   if (!user) {
//     // localStorage.clear(); //to be used only if there is a need to remove all data from local storage
//     // localStorage.removeItem("name of localStorage variable you want to remove");
//     localStorage.removeItem("email_adress");
//   }
// }, [user]);
// useEffect(() => {
//   if (user) {
//     const new_email = JSON.parse(localStorage.getItem("email_adress"));
//     setEmail(new_email);
//   }
// }, [user]);
