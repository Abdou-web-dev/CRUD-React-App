import React, { useEffect, useState } from "react";
import Select from "react-select";
import { countries_list } from "../../assets/staticData/countriesData";
import { CloseBtn } from "../buttons/CloseBtn";
import { OkBtn } from "../buttons/OkBtn";
import { CloseX } from "../icons/Icons";

import "./select.scss";

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
  const [searchValue, setsearchValue] = useState("");

  useEffect(() => {
    // if (selectedCountry) console.log(selectedCountry);
    if (searchValue) console.log(searchValue);
  }, [searchValue]);
  return (
    <>
      {/* How to read what is typed in search bar of ReactSelect? */}
      {/* react-select.com/props you can control the search input using inputValue and onInputChange –  */}

      <div className="nice-react-select-container">
        <Select
          // menuIsOpen={true}
          inputValue={searchValue}
          onInputChange={(e) => setsearchValue(e)}
          // filterOption
          // loadingMessage
          className="nice-react-select"
          value={selectedCountry?.value}
          onChange={handleChange}
          options={countries_list}
          classNamePrefix="select"
          // defaultValue={countries[100].label ? countries[99] : null} //Iceland
          placeholder="Select a country..."
          defaultMenuIsOpen={false}
          components={{ ClearIndicator }}
          isClearable={true}
          isSearchable={true}
          isLoading={selectedCountry ? false : searchValue ? false : true}
          noOptionsMessage={() => "No country found"}
          // options={colourOptions}
          // isDisabled={isDisabled}
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
        <div>
          <CloseBtn setShowEditInput={setShowCountrySelect} />
        </div>
      </div>
    </>
  );
};
