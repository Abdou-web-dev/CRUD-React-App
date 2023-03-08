import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { countries } from "../../src/assets/staticData/countries";
import at_logo from "../assets/img/at.png";
import name_icon from "../assets/img/signature.png";
import { CopyBtn } from "../components/buttons/CopyBtn";
import { EditBTn } from "../components/buttons/EditBtn";
import { useAuthContext } from "../hooks/useAuthContext";

import "./profile_styles.scss";

function Profile() {
  const { user } = useAuthContext();
  // let fullName = user?.fullName;
  let email = user?.email;
  // persist data after refresh
  const [country, setCountry] = useState("");
  const [fullName, setFullName] = useState("");
  const isMobileScreen = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    setCountry(JSON.parse(localStorage.getItem("user_country"))); //from TextMobileStepper component
    let user_Name = JSON.parse(localStorage.getItem("user_fullName"));
    let user_Name_login_mobile = JSON.parse(
      localStorage.getItem("user_fullName_login_mobile")
    );
    setFullName(isMobileScreen ? user_Name || user_Name_login_mobile : null);
    // from LoginMobileForm component
  }, []);

  function setCountryCode() {
    let code = "";
    let filtered_data = countries?.filter((countryElement) => {
      if (countryElement?.name === country) return countryElement?.code;
    });
    let country_code = filtered_data[0]?.code;
    code = country_code;
    // console.log(code);
    return code;
    // this error is solved by the  if (trailer) statement above :  Uncaught TypeError: Cannot read properties of undefined (reading '0')
  }

  return (
    // add the possibility to edit the email , full name and country
    <div className="profile-page-container">
      <div className="profile-email-wrapper">
        <div className="email_bloc1">
          <img src={at_logo} alt="" />
          <span>{email} </span>
        </div>
        <div className="profile-copy-edit-btn-wrapper">
          <CopyBtn></CopyBtn>
          <EditBTn />
        </div>
      </div>

      <div className="profile-fullName-wrapper">
        <img src={name_icon} alt="" />
        <span className="name">{fullName} </span>
        <CopyBtn />
        <div className="profile-edit-btn-wrapper">
          <EditBTn />
        </div>
      </div>

      <div className="profile-country_icon-wrapper">
        {/* <img src={setCountryFlag()} alt={country} /> */}
        <div className="country_flag">
          <ReactCountryFlag
            className="country_code"
            countryCode={setCountryCode()}
            style={{
              fontSize: "3.25em",
              lineHeight: "2em",
            }}
            svg
            // aria-label=""
          />
        </div>

        <span className="country_text">{country} </span>

        <CopyBtn />
        <EditBTn />
        {/* maybe, user a package that allows to display the country flag, later !!!! */}
        {/* display the exact icon of any country */}
      </div>
    </div>
  );
}

export default Profile;
