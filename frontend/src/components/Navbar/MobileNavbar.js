import "animate.css";
import { Button, message, Tooltip } from "antd";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import edit from "../../assets/img/edit.svg";
import fallbackAvatar from "../../assets/img/fallbackAvatar.svg";
import femaleIcon from "../../assets/img/femaleIcon.svg";
import helpIcon from "../../assets/img/helpIcon.svg";
import home from "../../assets/img/home.svg";
import logout_circle from "../../assets/img/logout_circle.svg";
import maleIcon from "../../assets/img/maleIcon.svg";
import profil from "../../assets/img/profil.png";
import starred from "../../assets/img/starred.png";
import {
  femaleAvatarsAdditionalList,
  femaleAvatarsList,
  maleAvatarsAdditionalList,
  maleAvatarsList,
} from "../../assets/staticData/avatars";
import { MainVariablesContext } from "../../context/MainVariablesContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { AvatarsListMobile } from "../lists/AvatarsListMobile.js";
import { HamburgerMenuComponent } from "../menus/HamburgerMenu";
import { AvatarModal } from "../modals/AvatarModal";
import { LogoutModal } from "../modals/LogoutModal";
import { AwesomeSpinner } from "../spinners/AwesomeSpinner";

import "./mobile_navbar.scss";

//do the same , when the user tries to register through a device mobile
// const loggedAvatarMobile = JSON.parse(
//   localStorage.getItem("avatarMobileScreen")
// );
// loggedUserMobile to be added
// loggedFNameMobile to be added
// registeredGenderMobile to be added

// - implemet a dark mode.

const MobileNavbar = ({}) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const isMobileScreen = useMediaQuery("(max-width: 600px)");
  const [showLinks, setShowLinks] = useState(false);
  const {
    hamburgerMenuIsOpen,
    setHamburgerMenuIsOpen,
    openSearchInputModal,
    setopenSearchInputModal,
  } = useContext(MainVariablesContext);

  const currentLocation = useLocation();
  let currentLocat = currentLocation.pathname;
  const [showLogOutModal, setshowLogOutModal] = useState(false);
  const [showAvatarModal, setshowAvatarModal] = useState(false);
  const [showAvatarsSection, setShowAvatarsSection] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [showSelectedAvatar, setShowSelectedAvatar] = useState(false);

  const loggedGender = JSON.parse(localStorage.getItem("gender")); //an icon
  const loggedGenderMobileLogin = JSON.parse(
    localStorage.getItem("genderMobileScreen")
  ); //a string
  const loggedgenderMobileSignUp = JSON.parse(
    localStorage.getItem("genderMobileScreenSignUp")
  ); //a string

  const avatars =
    loggedGender === "Male" ||
    loggedGenderMobileLogin === "Male" ||
    loggedgenderMobileSignUp === `Male`
      ? isMobileScreen
        ? maleAvatarsList.concat(maleAvatarsAdditionalList)
        : maleAvatarsList
      : loggedGender === "Female" ||
        loggedGenderMobileLogin === "Female" ||
        loggedgenderMobileSignUp === `Female`
      ? isMobileScreen
        ? femaleAvatarsList.concat(femaleAvatarsAdditionalList)
        : femaleAvatarsList
      : [];

  // get the avatar and the fullName of the user from the browser local storage when the user tries to log in
  // from Login Page
  const loggedUser = JSON.parse(localStorage.getItem("user")); //we can acces email and fullName

  // loggedAvatar is the icon that it is choosen by the user , on login page , when he accesses the web applicatiion from a desktop device
  const loggedAvatar = JSON.parse(localStorage.getItem("avatar")); //an icon
  let loggedFName = loggedUser?.fullName;

  //do the same , when the user tries to register through a device mobile
  const loggedAvatarMobileLogin = JSON.parse(
    localStorage.getItem("avatarMobileScreen")
  );
  const avatarSignupStepper = JSON.parse(
    localStorage.getItem("avatarSignUpStepper")
  );

  // get the gender and fullName from Signup Page to local storage
  const registeredFullName = JSON.parse(
    localStorage.getItem("registeredFullName")
  ); //a string
  const registeredGender = JSON.parse(localStorage.getItem("registeredGender")); //a string

  let fallbackAvatarIcon =
    registeredGender === `Male`
      ? maleIcon
      : registeredGender === `Female`
      ? femaleIcon
      : fallbackAvatar;

  // get the avatar and the fullName of the user from the browser local storage when the user tries to log in
  // from Login Page

  function handleHamburgerMenuClick() {
    setHamburgerMenuIsOpen(!hamburgerMenuIsOpen);
    if (!hamburgerMenuIsOpen) {
      setShowLinks(true);
    } else {
      setTimeout(() => {
        setShowLinks(false);
      }, 800);
    }
  }
  function handleLogout() {
    setshowLogOutModal(true);
  }

  const handleAvatarClick = (index) => {
    const selectedItem = avatars[index];
    if (selectedItem) {
      setAvatar(selectedItem);
      // console.log(selectedItem);
    }
  };

  const handleAvatarClickMobile = (index) => {
    const selectedItem = avatars[index];
    if (selectedItem) {
      console.log(selectedItem);
      setShowSelectedAvatar(true);
      // setshowAvatarModal(false)
      setAvatar(selectedItem);
      setShowLinks(true);
      setShowAvatarsSection(false);
    }
  };

  // when the user clicks on the pen iconbtn
  const handleEditClick = () => {
    // when the viewport of the screen is smaller than 600px, show rather a section containing a list of avatars
    if (isMobileScreen) {
      setShowAvatarsSection(true);
      // when the viewport of the screen is larger than 600px, show rather a modal containing a list of avatars
    } else {
      setshowAvatarModal(true);
    }

    // so the avatars list wont show on the user is logged in through a mobile devicePixelRatio, because , the 'loggedGender' variable's value was an empty string, that's because it didnt get registered in the browser's local storage and then get retrieved here
    //hence , the avatars array is also empty ,
    // console.log(avatars, loggedGenderMobile && loggedGenderMobile, "avatars");
  };

  // a function that returns the selected avatar, the one that is displayed on the Ui once the user chooses it from the list
  const setSelectedAvatar = () => {
    let selectedAvatar = null;
    if (isMobileScreen) {
      selectedAvatar = avatar;
    } else {
      if (!showAvatarModal) {
        selectedAvatar = avatar;
      }
    }
    return selectedAvatar;
  };

  useEffect(() => {
    if (!openSearchInputModal) {
      setHamburgerMenuIsOpen(!hamburgerMenuIsOpen);
    }
  }, [openSearchInputModal]);

  useEffect(() => {
    if (hamburgerMenuIsOpen) console.log("menu open");
    else console.log("menu closed");
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    if (user) {
      if (loggedAvatar) console.log(loggedAvatar);
      else console.log("no avatar");
      if (loggedGenderMobileLogin) console.log(loggedGenderMobileLogin);
    }
    // showSelectedAvatar
  }, [user, loggedAvatar, loggedGenderMobileLogin]);

  function handleClickNoUser() {
    if (!user)
      message.info("You must be logged in to access your profile !", 1.5); // will disappear in 1.5 seconds
  }

  // add avatar on hamburger menu !!!!!!!!!!!!!!!

  return (
    <div className="workout-hamburger-navbar-container">
      {user && (
        <div className="hamburger-menu-logged-user-name">
          <span className="f_name">
            {loggedFName
              ? loggedFName
              : registeredFullName
              ? registeredFullName
              : null}
          </span>
        </div>
      )}

      <div className="workout-hamburger-navbar-container-inner">
        <div className="workout-hamburger-menu-wrapper">
          {/* when the user clicks on magnifying_glass-btn, the hamburgerMenu Icon is hidden, when not, it's shown */}
          {!openSearchInputModal && (
            <div className="workout-hamburger-menu-wrapper-inner">
              {!showAvatarsSection ? (
                <HamburgerMenuComponent
                  {...{
                    hamburgerMenuIsOpen,
                    handleHamburgerMenuClick,
                  }}
                />
              ) : (
                // when the users tries to click on the HamburgerMenu, if the list of avatars is visible, he wil not be able to click, the menu will be disabled
                <Button
                  disabled={true}
                  style={{ border: "none", height: "fit-content" }}
                >
                  <HamburgerMenuComponent
                    {...{
                      hamburgerMenuIsOpen,
                      handleHamburgerMenuClick,
                    }}
                  />
                </Button>
              )}
              {!hamburgerMenuIsOpen && (
                <div className="workout-hamburger-menu-text">
                  <span
                    className={`${
                      !hamburgerMenuIsOpen
                        ? "animate__fadeInUp animate__animated  animate__delay-1.5s"
                        : hamburgerMenuIsOpen
                        ? "animate__animated animate__fadeOut animate__delay-1.5s"
                        : ""
                    }`}
                  >
                    Menu
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* home icon */}
        <>
          {hamburgerMenuIsOpen && (
            <div className="workout-hamburger-menu-home">
              <Button
                disabled={!user}
                // meaning that when the user is logged out , this btn will be disabled
                style={{ height: "fit-content", border: "none" }}
              >
                <Link
                  className="workout-hamburger-menu-home-link"
                  to="/workouts"
                >
                  <img src={home} alt="" />
                </Link>
              </Button>
            </div>
          )}
        </>

        {/* avatar icon and edit icon, to be displayed only if the user is authenticated and logged in */}
        {user ? (
          <div
            className={`hamburger-menu-profile-avatar-wrapper
                ${showAvatarModal ? `avatar-wrapper_modal_open` : ""}
                ${
                  !hamburgerMenuIsOpen
                    ? `avatar-wrapper_hamburger_menu_closed`
                    : ""
                }
                `}
          >
            <>
              {/* the selected avatar or spinner */}
              {showSelectedAvatar ? (
                <div className="hamburger-menu-selected-avatar">
                  {!showAvatarModal ? (
                    <>
                      <img
                        width={`50px`}
                        className="hamburger-menu-selected-avatar-icon"
                        src={setSelectedAvatar()}
                        alt=""
                      />
                    </>
                  ) : (
                    // when the modal is open, and while the user still decides which avatar to choose, display a spinner , instead of the avatar
                    <AwesomeSpinner></AwesomeSpinner>
                  )}
                </div>
              ) : (
                <img
                  className="logged-avatar"
                  // src={loggedAvatar || loggedAvatarMobileLogin}
                  src={
                    loggedAvatar ||
                    loggedAvatarMobileLogin ||
                    avatarSignupStepper
                  }
                  alt="logged-avatar"
                />
              )}
            </>
            {/* edit pen icon */}
            {hamburgerMenuIsOpen && (
              <Tooltip title="Change this avatar">
                <Button
                  onClick={handleEditClick}
                  className="hamburger-menu-selected-avatar-edit-icon-btn"
                >
                  <img
                    className="hamburger-menu-selected-avatar-edit-icon"
                    src={edit}
                    alt=""
                  />
                </Button>
              </Tooltip>
            )}
          </div>
        ) : null}
      </div>

      <>
        {showLinks ? (
          <>
            {!showAvatarsSection ? (
              <div
                className={`workout-hamburger-menu-links ${
                  showLinks && hamburgerMenuIsOpen
                    ? "animate__animated animate__fadeInLeft animate__delay-0.5s"
                    : !hamburgerMenuIsOpen
                    ? "animate__animated animate__fadeOut"
                    : ""
                }`}
              >
                <ul className="hamburger-menu-list">
                  <div className="hamburger-menu-profile-link-wrapper">
                    <Link
                      className={`hamburger-menu-link profile-anchor ${
                        !user ? "no_user" : ""
                      }`}
                      to="/profile"
                      onClick={handleClickNoUser}
                    >
                      <li className="hamburger-menu-profile-li">
                        {isMobileScreen && <img src={profil} alt="" />}
                        <span>Profile</span>
                      </li>
                    </Link>
                  </div>
                  <Link
                    className={
                      user
                        ? "hamburger-menu-link starred-items-anchor"
                        : "starred-items-anchor hamburger-menu-link no_user"
                    }
                    to="/starred-items"
                    onClick={() => {
                      if (!user) {
                        message.info(
                          "You must be logged in to access your favorite workouts!",
                          1.5
                        );
                      }
                    }}
                  >
                    <li>
                      {isMobileScreen && <img src={starred} alt="" />}
                      <span>Favorite Workouts</span>
                    </li>
                  </Link>
                  <Button
                    disabled={!user}
                    style={{ filter: !user ? "blur(1.5px)" : "" }}
                    className="hamburger-menu-logout-btn"
                    onClick={handleLogout}
                  >
                    {isMobileScreen && <img src={logout_circle} alt="" />}
                    <span>Logout</span>
                  </Button>

                  <Link
                    className={`hamburger-menu-link help-anchor ${
                      !user ? "no_user" : ""
                    }`}
                    to="/help"
                    onClick={() => {
                      if (!user)
                        message.info(
                          "You must be logged in to access help!",
                          1.5
                        );
                    }}
                  >
                    <li>
                      {isMobileScreen && <img src={helpIcon} alt="" />}
                      <span>Help</span>
                    </li>
                  </Link>
                </ul>
              </div>
            ) : (
              <>
                <AvatarsListMobile
                  {...{
                    avatars,
                    openSearchInputModal,
                    setShowAvatarsSection,
                    handleAvatarClickMobile,
                  }}
                />
              </>
            )}
          </>
        ) : null}
      </>

      <AvatarModal
        {...{
          showAvatarModal,
          setshowAvatarModal,
          avatars,
          avatar,
          handleAvatarClick,
          setShowSelectedAvatar,
          showSelectedAvatar,
        }}
      ></AvatarModal>

      <>
        <LogoutModal {...{ showLogOutModal, setshowLogOutModal, logout }} />
      </>
    </div>
  );
};

export default MobileNavbar;
