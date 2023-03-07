import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

function Profile() {
  const { user } = useAuthContext();
  // let fullName = user?.fullName;
  let email = user?.email;

  // persist data after refresh
  const [country, setCountry] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setCountry(JSON.parse(localStorage.getItem("user_country"))); //from TextMobileStepper component
    let user_Name = JSON.parse(localStorage.getItem("user_fullName"));
    let user_Name_login_mobile = JSON.parse(
      localStorage.getItem("user_fullName_login_mobile")
    );
    setFullName(
      user_Name
        ? user_Name
        : user_Name_login_mobile
        ? user_Name_login_mobile
        : ""
    );
    // from LoginMobileForm component
  }, []);

  return (
    // add the possibility to edit the email , full name and country
    <div>
      <div>
        <img src={"at_logo"} alt="" />
        <span>{email} </span>
        ....
      </div>

      <div>
        <img src={"name_icon"} alt="" />
        <span>{fullName} </span>
        ....
      </div>

      <div>
        <img src={"country_icon"} alt="" />
        {/* display the exact icon of any country */}
        <span>{country} </span>
        ....
      </div>
    </div>
  );
}

export default Profile;
