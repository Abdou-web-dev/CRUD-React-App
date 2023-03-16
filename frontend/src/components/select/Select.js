import React, { useEffect } from "react";
import Select from "react-select";
import { OkBtn } from "../buttons/OkBtn";
import { CloseX } from "../icons/Icons";
import "./select.scss";
const countries = [
  { value: "Afghanistan", label: "Afghanistan", code: "AF" },
  { value: "land Islands", label: "land Islands", code: "AX" },
  { value: "Albania", label: "Albania", code: "AL" },
  { value: "Algeria", label: "Algeria", code: "DZ" },
  { value: "American Samoa", label: "American Samoa", code: "AS" },
  { value: "Andorra", label: "Andorra", code: "AD" },
  { value: "Angola", label: "Angola", code: "AO" },
  { value: "Anguilla", label: "Anguilla", code: "AI" },
  { value: "Antarctica", label: "Antarctica", code: "AQ" },
  { value: "Antigua and Barbuda", label: "Antigua and Barbuda", code: "AG" },
  { value: "Argentina", label: "Argentina", code: "AR" },
  { value: "Armenia", label: "Armenia", code: "AM" },
  { value: "Aruba", label: "Aruba", code: "AW" },
  { value: "Australia", label: "Australia", code: "AU" },
  { value: "Austria", label: "Austria", code: "AT" },
  { value: "Azerbaijan", label: "Azerbaijan", code: "AZ" },
  { value: "Bahamas", label: "Bahamas", code: "BS" },
  { value: "Bahrain", label: "Bahrain", code: "BH" },
  { value: "Bangladesh", label: "Bangladesh", code: "BD" },
  { value: "Barbados", label: "Barbados", code: "BB" },
  { value: "Belarus", label: "Belarus", code: "BY" },
  { value: "Belgium", label: "Belgium", code: "BE" },
  { value: "Belize", label: "Belize", code: "BZ" },
  { value: "Benin", label: "Benin", code: "BJ" },
  { value: "Bermuda", label: "Bermuda", code: "BM" },
  { value: "Bhutan", label: "Bhutan", code: "BT" },
  { value: "Bolivia", label: "Bolivia", code: "BO" },
  {
    value: "Bosnia and Herzegovina",
    label: "Bosnia and Herzegovina",
    code: "BA",
  },
  { value: "Botswana", label: "Botswana", code: "BW" },
  { value: "Bouvet Island", label: `Bouvet Island`, code: "BV" },
  { value: "Brazil", label: "Brazil", code: "BR" },
  {
    value: "British Indian Ocean Territory",
    label: "British Indian Ocean Territory",
    code: "IO",
  },
  { value: "Brunei Darussalam", label: "Brunei Darussalam", code: "BN" },
  { value: "Bulgaria", label: "Bulgaria", code: "BG" },
  { value: "Burkina Faso", label: "Burkina Faso", code: "BF" },
  { value: "Burundi", label: "Burundi", code: "BI" },
  { value: "Cambodia", label: "Cambodia", code: "KH" },
  { value: "Cameroon", label: "Cameroon", code: "CM" },
  { value: "Canada", label: "Canada", code: "CA" },
  { value: "Cape Verde", label: "Cape Verde", code: "CV" },
  { value: "Cayman Islands", label: "Cayman Islands", code: "KY" },
  {
    value: "Central African Republic",
    label: "Central African Republic",
    code: "CF",
  },
  { value: "Chad", label: "Chad", code: "TD" },
  { value: "Chile", label: "Chile", code: "CL" },
  { value: "China", label: "China", code: "CN" },
  { value: "Christmas Island", label: "Christmas Island", code: "CX" },
  {
    value: "Cocos (Keeling) Islands",
    label: "Cocos (Keeling) Islands",
    code: "CC",
  },
  { value: "Colombia", label: "Colombia", code: "CO" },
  { value: "Comoros", label: "Comoros", code: "KM" },
  { value: "Congo", label: "Congo", code: "CG" },
  {
    value: "Congo, The Democratic Republic of the",
    label: "Congo, The Democratic Republic of the",
    code: "CD",
  },
  { value: "Cook Islands", label: "Cook Islands", code: "CK" },
  { value: "Costa Rica", label: "Costa Rica", code: "CR" },
  { value: "Cote D'Ivoire", label: "Cote D'Ivoire", code: "CI" },
  { value: "Croatia", label: "Croatia", code: "HR" },
  { value: "Cuba", label: "Cuba", code: "CU" },
  { value: "Cyprus", label: "Cyprus", code: "CY" },
  { value: "Czech Republic", label: "Czech Republic", code: "CZ" },
  { value: "Denmark", label: "Denmark", code: "DK" },
  { value: "Djibouti", label: "Djibouti", code: "DJ" },
  { value: "Dominica", label: "Dominica", code: "DM" },
  { value: "Dominican Republic", label: "Dominican Republic", code: "DO" },
  { value: "Ecuador", label: "Ecuador", code: "EC" },
  { value: "Egypt", label: "Egypt", code: "EG" },
  { value: "El Salvador", label: "El Salvador", code: "SV" },
  { value: "Equatorial Guinea", label: "Equatorial Guinea", code: "GQ" },
  { value: "Eritrea", label: "Eritrea", code: "ER" },
  { value: "Estonia", label: "Estonia", code: "EE" },
  { value: "Ethiopia", label: "Ethiopia", code: "ET" },
  {
    value: "Falkland Islands (Malvinas)",
    label: "Falkland Islands (Malvinas)",
    code: "FK",
  },
  { value: "Faroe Islands", label: "Faroe Islands", code: "FO" },
  { value: "Fiji", label: "Fiji", code: "FJ" },
  { value: "Finland", label: "Finland", code: "FI" },
  { value: "France", label: "France", code: "FR" },
  { value: "French Guiana", label: "French Guiana", code: "GF" },
  { value: "French Polynesia", label: "French Polynesia", code: "PF" },
  {
    value: "French Southern Territories",
    label: "French Southern Territories",
    code: "TF",
  },
  { value: "Gabon", label: "Gabon", code: "GA" },
  { value: "Gambia", label: "Gambia", code: "GM" },
  { value: "Georgia", label: "Georgia", code: "GE" },
  { value: "Germany", label: "Germany", code: "DE" },
  { value: "Ghana", label: "Ghana", code: "GH" },
  { value: "Gibraltar", label: "Gibraltar", code: "GI" },
  { value: "Greece", label: "Greece", code: "GR" },
  { value: "Greenland", label: "Greenland", code: "GL" },
  { value: "Grenada", label: "Grenada", code: "GD" },
  { value: "Guadeloupe", label: "Guadeloupe", code: "GP" },
  { value: "Guam", label: "Guam", code: "GU" },
  { value: "Guatemala", label: "Guatemala", code: "GT" },
  { value: "Guernsey", label: "Guernsey", code: "GG" },
  { value: "Guinea", label: "Guinea", code: "GN" },
  { value: "Guinea-Bissau", label: "Guinea-Bissau", code: "GW" },
  { value: "Guyana", label: "Guyana", code: "GY" },
  { value: "Haiti", label: "Haiti", code: "HT" },
  {
    value: "Heard Island and Mcdonald Islands",
    label: "Heard Island and Mcdonald Islands",
    code: "HM",
  },
  {
    value: "Holy See (Vatican City State)",
    label: "Holy See (Vatican City State)",
    code: "VA",
  },
  { value: "Honduras", label: "Honduras", code: "HN" },
  { value: "Hong Kong", label: "Hong Kong", code: "HK" },
  { value: "Hungary", label: "Hungary", code: "HU" },
  { value: "Iceland", label: "Iceland", code: "IS" },
  { value: "India", label: "India", code: "IN" },
  { value: "Indonesia", label: "Indonesia", code: "ID" },
  {
    value: "Iran, Islamic Republic Of",
    label: "Iran, Islamic Republic Of",
    code: "IR",
  },
  { value: "Iraq", label: "Iraq", code: "IQ" },
  { value: "Ireland", label: "Ireland", code: "IE" },
  { value: "Isle of Man", label: "Isle of Man", code: "IM" },
  { value: "Israel", label: "Israel", code: "IL" },
  { value: "Italy", label: "Italy", code: "IT" },
  { value: "Jamaica", label: "Jamaica", code: "JM" },
  { value: "Japan", label: "Japan", code: "JP" },
  { value: "Jersey", label: "Jersey", code: "JE" },
  { value: "Jordan", label: "Jordan", code: "JO" },
  { value: "Kazakhstan", label: "Kazakhstan", code: "KZ" },
  { value: "Kenya", label: "Kenya", code: "KE" },
  { value: "Kiribati", label: "Kiribati", code: "KI" },
  {
    value: "Korea, Democratic People'S Republic of",
    label: "Korea, Democratic People'S Republic of",
    code: "KP",
  },
  { value: "Korea, Republic of", label: "Korea, Republic of", code: "KR" },
  { value: "Kuwait", label: "Kuwait", code: "KW" },
  { value: "Kyrgyzstan", label: "Kyrgyzstan", code: "KG" },
  {
    value: "Lao People'S Democratic Republic",
    label: "Lao People'S Democratic Republic",
    code: "LA",
  },
  { value: "Latvia", label: "Latvia", code: "LV" },
  { value: "Lebanon", label: "Lebanon", code: "LB" },
  { value: "Lesotho", label: "Lesotho", code: "LS" },
  { value: "Liberia", label: "Liberia", code: "LR" },
  {
    value: "Libyan Arab Jamahiriya",
    label: "Libyan Arab Jamahiriya",
    code: "LY",
  },
  { value: "Liechtenstein", label: "Liechtenstein", code: "LI" },
  { value: "Lithuania", label: "Lithuania", code: "LT" },
  { value: "Luxembourg", label: null, code: "LU" },
  { value: "Macao", label: null, code: "MO" },
  {
    value: "Macedonia, The Former Yugoslav Republic of",
    label: null,
    code: "MK",
  },
  { value: "Madagascar", label: null, code: "MG" },
  { value: "Malawi", label: null, code: "MW" },
  { value: "Malaysia", label: null, code: "MY" },
  { value: "Maldives", label: null, code: "MV" },
  { value: "Mali", label: null, code: "ML" },
  { value: "Malta", label: null, code: "MT" },
  { value: "Marshall Islands", label: null, code: "MH" },
  { value: "Martinique", label: null, code: "MQ" },
  { value: "Mauritania", label: null, code: "MR" },
  { value: "Mauritius", label: null, code: "MU" },
  { value: "Mayotte", label: null, code: "YT" },
  { value: "Mexico", label: null, code: "MX" },
  { value: "Micronesia, Federated States of", label: null, code: "FM" },
  { value: "Moldova, Republic of", label: null, code: "MD" },
  { value: "Monaco", label: null, code: "MC" },
  { value: "Mongolia", label: null, code: "MN" },
  { value: "Montenegro", label: null, code: "ME" },
  { value: "Montserrat", label: null, code: "MS" },
  { value: "Morocco", label: null, code: "MA" },
  { value: "Mozambique", label: null, code: "MZ" },
  { value: "Myanmar", label: null, code: "MM" },
  { value: "Namibia", label: null, code: "NA" },
  { value: "Nauru", label: null, code: "NR" },
  { value: "Nepal", label: null, code: "NP" },
  { value: "Netherlands", label: null, code: "NL" },
  { value: "Netherlands Antilles", label: null, code: "AN" },
  { value: "New Caledonia", label: null, code: "NC" },
  { value: "New Zealand", label: null, code: "NZ" },
  { value: "Nicaragua", label: null, code: "NI" },
  { value: "Niger", label: null, code: "NE" },
  { value: "Nigeria", label: null, code: "NG" },
  { value: "Niue", label: null, code: "NU" },
  { value: "Norfolk Island", label: null, code: "NF" },
  { value: "Northern Mariana Islands", label: null, code: "MP" },
  { value: "Norway", label: null, code: "NO" },
  { value: "Oman", label: null, code: "OM" },
  { value: "Pakistan", label: null, code: "PK" },
  { value: "Palau", label: null, code: "PW" },
  { value: "Palestinian Territory, Occupied", label: null, code: "PS" },
  { value: "Panama", label: null, code: "PA" },
  { value: "Papua New Guinea", label: null, code: "PG" },
  { value: "Paraguay", label: null, code: "PY" },
  { value: "Peru", label: null, code: "PE" },
  { value: "Philippines", label: null, code: "PH" },
  { value: "Pitcairn", label: null, code: "PN" },
  { value: "Poland", label: null, code: "PL" },
  { value: "Portugal", label: null, code: "PT" },
  { value: "Puerto Rico", label: null, code: "PR" },
  { value: "Qatar", label: null, code: "QA" },
  { value: "Reunion", label: null, code: "RE" },
  { value: "Romania", label: null, code: "RO" },
  { value: "Russian Federation", label: null, code: "RU" },
  { value: "RWANDA", label: null, code: "RW" },
  { value: "Saint Helena", label: null, code: "SH" },
  { value: "Saint Kitts and Nevis", label: null, code: "KN" },
  { value: "Saint Lucia", label: null, code: "LC" },
  { value: "Saint Pierre and Miquelon", label: null, code: "PM" },
  { value: "Saint Vincent and the Grenadines", label: null, code: "VC" },
  { value: "Samoa", label: null, code: "WS" },
  { value: "San Marino", label: null, code: "SM" },
  { value: "Sao Tome and Principe", label: null, code: "ST" },
  { value: "Saudi Arabia", label: null, code: "SA" },
  { value: "Senegal", label: null, code: "SN" },
  { value: "Serbia", label: null, code: "RS" },
  { value: "Seychelles", label: null, code: "SC" },
  { value: "Sierra Leone", label: null, code: "SL" },
  { value: "Singapore", label: null, code: "SG" },
  { value: "Slovakia", label: null, code: "SK" },
  { value: "Slovenia", label: null, code: "SI" },
  { value: "Solomon Islands", label: null, code: "SB" },
  { value: "Somalia", label: null, code: "SO" },
  { value: "South Africa", label: null, code: "ZA" },
  {
    value: "South Georgia and the South Sandwich Islands",
    label: null,
    code: "GS",
  },
  { value: "Spain", label: null, code: "ES" },
  { value: "Sri Lanka", label: null, code: "LK" },
  { value: "Sudan", label: null, code: "SD" },
  { value: "Suriname", label: null, code: "SR" },
  { value: "Svalbard and Jan Mayen", label: null, code: "SJ" },
  { value: "Swaziland", label: null, code: "SZ" },
  { value: "Sweden", label: null, code: "SE" },
  { value: "Switzerland", label: null, code: "CH" },
  { value: "Syrian Arab Republic", label: null, code: "SY" },
  { value: "Taiwan, Province of China", label: null, code: "TW" },
  { value: "Tajikistan", label: null, code: "TJ" },
  { value: "Tanzania, United Republic of", label: null, code: "TZ" },
  { value: "Thailand", label: null, code: "TH" },
  { value: "Timor-Leste", label: null, code: "TL" },
  { value: "Togo", label: null, code: "TG" },
  { value: "Tokelau", label: null, code: "TK" },
  { value: "Tonga", label: null, code: "TO" },
  { value: "Trinidad and Tobago", label: null, code: "TT" },
  { value: "Tunisia", label: null, code: "TN" },
  { value: "Turkey", label: null, code: "TR" },
  { value: "Turkmenistan", label: null, code: "TM" },
  { value: "Turks and Caicos Islands", label: null, code: "TC" },
  { value: "Tuvalu", label: null, code: "TV" },
  { value: "Uganda", label: null, code: "UG" },
  { value: "Ukraine", label: null, code: "UA" },
  { value: "United Arab Emirates", label: null, code: "AE" },
  { value: "United Kingdom", label: null, code: "GB" },
  { value: "United States", label: null, code: "US" },
  { value: "United States Minor Outlying Islands", label: null, code: "UM" },
  { value: "Uruguay", label: null, code: "UY" },
  { value: "Uzbekistan", label: null, code: "UZ" },
  { value: "Vanuatu", label: null, code: "VU" },
  { value: "Venezuela", label: null, code: "VE" },
  { value: "Viet Nam", label: null, code: "VN" },
  { value: "Virgin Islands, British", label: null, code: "VG" },
  { value: "Virgin Islands, U.S.", label: null, code: "VI" },
  { value: "Wallis and Futuna", label: null, code: "WF" },
  { value: "Western Sahara", label: null, code: "EH" },
  { value: "Yemen", label: null, code: "YE" },
  { value: "Zambia", label: null, code: "ZM" },
  { value: "Zimbabwe", label: null, code: "ZW" },
];

const ClearIndicator = (props) => {
  const {
    children = <CloseX />, //handleClick={() => console.log("clear icon clicked")}
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles("clearIndicator", props)}
    >
      <div style={{ padding: "0px 5px" }}>{children}</div>
    </div>
  );
};

export const NiceSelect = ({
  selectedCountry,
  setSelectedCountry,
  setShowCountrySelect,
  setCountry,
}) => {
  const handleChange = (selectedCountryItem) => {
    // selectedCountryItem is an Object , like this one : {value: 'American Samoa', label: 'American Samoa', code: 'AS'}
    setSelectedCountry(selectedCountryItem?.value);
    // console.log(selectedCountryItem.value, selectedCountry);
  };

  const handleChooseNewCountry = () => {
    if (selectedCountry) {
      setShowCountrySelect(false);
      setSelectedCountry("");
      setCountry(selectedCountry);
      // localStorage.setItem("full_name", JSON.stringify(fullNameValue));
      // setFullName(JSON.parse(localStorage.getItem("full_name")));
    } else {
      return;
    }
  };

  useEffect(() => {
    if (selectedCountry) console.log(selectedCountry);
  }, [selectedCountry]);

  return (
    <>
      <div className="nice-react-select-container">
        <Select
          // menuIsOpen={true}
          className="nice-react-select"
          placeholder="Select a country..."
          classNamePrefix="select"
          // defaultValue={countries[100].label ? countries[99] : null} //Iceland
          defaultMenuIsOpen={false}
          isClearable={true}
          components={{ ClearIndicator }}
          isSearchable={true}
          value={selectedCountry?.value}
          onChange={handleChange}
          options={countries}
          noOptionsMessage={() => "No country found"}
          // options={colourOptions}
          // isDisabled={isDisabled}
          isLoading={selectedCountry ? false : true}
          // isRtl={isRtl}
          // onMenuScrollToBottom={() => message.info("Select a country", 1)} //not working
        />
        <div className="nice-react-select-ok-btn-wrapper">
          <OkBtn
            {...{ selectedCountry }}
            value={selectedCountry}
            handleOkClick={handleChooseNewCountry}
          ></OkBtn>
        </div>
      </div>
    </>
  );
};
