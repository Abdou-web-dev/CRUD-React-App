import { Button, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import "./login_signup_styles.scss";

const Signup = ({}) => {
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [fullName, setFullName] = useState("");

  // save the gender and fullName from Signup Page to local storage
  localStorage.setItem("registeredFullName", JSON.stringify(fullName));
  localStorage.setItem("registeredGender", JSON.stringify(gender));

  const [emailClass, setemailClass] = useState("signup-form-email-item-input");
  const [passwordClass, setPasswordClass] = useState(
    "signup-form-password-item-input"
  );
  const [fullNameClass, setFullNameClass] = useState(
    "signup-form-full-name-item-input"
  );
  const [genderClass, setgenderClass] = useState(
    "signup-form-gender-item-select"
  );
  const [countryClass, setCountryClass] = useState(
    "signup-form-country-item-select"
  );
  const [countryWidth, setcountryWidth] = useState("150px");

  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    // e.preventDefault();
    if (email.length === 0)
      setemailClass(
        "signup-form-email-item-input signup-form-email-item-input-empty"
      );
    else if (email.length !== 0) setemailClass("signup-form-email-item-input");

    if (!fullName.length)
      setFullNameClass(
        "signup-form-full-name-item-input signup-form-full-name-item-input-empty"
      );
    else if (fullName.length)
      setFullNameClass("signup-form-full-name-item-input");
    if (gender.length === 0)
      setgenderClass(
        "signup-form-gender-item-select signup-form-gender-item-select-empty"
      );
    else if (gender.length !== 0)
      setgenderClass("signup-form-gender-item-select");
    if (!country.length)
      setCountryClass(
        "signup-form-country-item-select signup-form-country-item-select-empty"
      );
    else if (country.length) setCountryClass("signup-form-country-item-select");
    if (!password.length)
      setPasswordClass(
        "signup-form-password-item-input signup-form-password-item-input-empty"
      );
    else if (password.length)
      setPasswordClass("signup-form-password-item-input"); //this means if a string has been typed in the pwd field, if not empty

    await signup(email, password, fullName, gender, country);
  };

  function handleCountryClick() {
    setcountryWidth("150px");
  }
  useEffect(() => {
    if (country !== "") {
      setcountryWidth("fit-content");
    }
  }, [country]);

  const errorMsg = (
    <div className="errorMsg-wrapper">
      <span className="errorMsg">
        {`Password must include one lowercase character, one`}
      </span>
      <span className="errorMsg">
        {` uppercase character,
      a number, and a special character and `}
      </span>
      <span className="errorMsg">
        {`have a minimum length of 8
      characters !`}
      </span>
      {/* did 3 spans in order to center the whole sentence */}
    </div>
  );

  return (
    <>
      <div className="signup-form-container">
        <div className="signup-form-inner">
          <Form
            className="signup-form"
            name="form"
            onFinish={handleSubmit}
            initialValues={{
              remember: true,
            }}
          >
            <>
              <label className="signup-form-email-label">Email :</label>
              <Input
                className={emailClass}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
                allowClear
              />
            </>
            <>
              <label className="signup-form-fullName-label">Full Name : </label>
              <Input
                className={fullNameClass}
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                type="text"
                placeholder="Full Name"
                allowClear
              />
            </>
            <>
              <label className="signup-form-gender-label">Gender : </label>
              <Select
                className={genderClass}
                value={gender}
                //strangely , when using antd Select, the event will hold the value of the value keys nested in options prop
                onChange={(value) => {
                  setGender(value);
                  // console.log(value)
                }}
                defaultValue=""
                size={"large"}
                options={[
                  {
                    value: "Male",
                    label: "Male",
                  },
                  {
                    value: "Female",
                    label: "Female",
                  },
                ]}
              />
            </>

            <>
              <label className="signup-form-country-label">Country : </label>
              <Select
                className={countryClass}
                value={country}
                onChange={(value) => setCountry(value)}
                onClick={handleCountryClick}
                style={{ width: countryWidth }}
                defaultValue="Morrco"
                size={"large"}
                filterOption={(input, option) =>
                  (option?.value ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  //if optionA.value is null ou undefined then "" will be returned instead, and if it has a value , this value will be returned and used
                  (optionA?.value ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.value ?? "").toLowerCase())
                }
                options={[
                  { value: "Afghanistan" },
                  { value: "Morocco" },
                  { value: "United States" },
                  { value: "Åland Islands" },
                  { value: "Albania" },
                  { value: "Algeria" },
                  { value: "American Samoa" },
                  { value: "Andorra" },
                  { value: "Angola" },
                  { value: "Anguilla" },
                  { value: "Antarctica" },
                  { value: "Antigua and Barbuda" },
                  { value: "Argentina" },
                  { value: "Armenia" },
                  { value: "Aruba" },
                  { value: "Australia" },
                  { value: "Austria" },
                  { value: "Azerbaijan" },
                  { value: "Bahamas" },
                  { value: "Bahrain" },
                  { value: "Bangladesh" },
                  { value: "Barbados" },
                  { value: "Belarus" },
                  { value: "Belgium" },
                  { value: "Belize" },
                  { value: "Benin" },
                  { value: "Bermuda" },
                  { value: "Bhutan" },
                  { value: "Bolivia" },
                  { value: "Bosnia and Herzegovina" },
                  { value: "Botswana" },
                  { value: "Bouvet Island" },
                  { value: "Brazil" },
                  { value: "British Indian Ocean Territory" },
                  { value: "Brunei Darussalam" },
                  { value: "Bulgaria" },
                  { value: "Burkina Faso" },
                  { value: "Burundi" },
                  { value: "Cambodia" },
                  { value: "Cameroon" },
                  { value: "Canada" },
                  { value: "Cape Verde" },
                  { value: "Cayman Islands" },
                  { value: "Central African Republic" },
                  { value: "Chad" },
                  { value: "Chile" },
                  { value: "China" },
                  { value: "Christmas Island" },
                  { value: "Cocos (Keeling) Islands" },
                  { value: "Colombia" },
                  { value: "Comoros" },
                  { value: "Congo" },
                  { value: "Congo, The Democratic Republic of The" },
                  { value: "Cook Islands" },
                  { value: "Costa Rica" },
                  { value: "Cote D'ivoire" },
                  { value: "Croatia" },
                  { value: "Cuba" },
                  { value: "Cyprus" },
                  { value: "Czech Republic" },
                  { value: "Denmark" },
                  { value: "Djibouti" },
                  { value: "Dominica" },
                  { value: "Dominican Republic" },
                  { value: "Ecuador" },
                  { value: "Egypt" },
                  { value: "El Salvador" },
                  { value: "Equatorial Guinea" },
                  { value: "Eritrea" },
                  { value: "Estonia" },
                  { value: "Ethiopia" },
                  { value: "Falkland Islands (Malvinas)" },
                  { value: "Faroe Islands" },
                  { value: "Fiji" },
                  { value: "Finland" },
                  { value: "France" },
                  { value: "French Guiana" },
                  { value: "French Polynesia" },
                  { value: "French Southern Territories" },
                ]}
              />
            </>
            <>
              <label className="signup-form-password-label">Password : </label>
              <Input.Password
                className={passwordClass}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                allowClear
              />
            </>

            <div className="signup-form-btn-and-error">
              <Button
                className="signup-form-btn-item-button"
                disabled={isLoading}
                type="primary"
                htmlType="submit"
              >
                <span>Sign up</span>
              </Button>
              {error && (
                <div className="text-error">
                  {error ===
                  "Password must include one lowercase character, one uppercase character, a number, and a special character and have a minimum length of 8 characters" ? (
                    errorMsg
                  ) : (
                    <span className="error-msg-text">{error}!</span>
                  )}
                </div>
              )}
            </div>

            <div className="signup-form-not-a-member">
              <span className="signup-form-text1">
                Have already an account ?
              </span>
              <Button className="signup-form-not-a-member-register-btn">
                <Link to="/login">
                  <span className="signup-form-text2"> Login</span>
                </Link>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Signup;

// L' opérateur de coalescence nul ( ??) est un opérateur logique qui renvoie son opérande de droite lorsque son opérande de gauche est nullou undefined, et sinon renvoie son opérande de gauche.
