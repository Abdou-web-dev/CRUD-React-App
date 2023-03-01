import "animate.css";
import { Button, Tooltip } from "antd";
import { useContext, useEffect, useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { Link, useLocation } from "react-router-dom";
import avatarfemale1 from "../../assets/img/avatarfemale1.svg";
import avatarfemale2 from "../../assets/img/avatarfemale2.svg";
import avatarfemale3 from "../../assets/img/avatarfemale3.svg";
import avatarfemale4 from "../../assets/img/avatarfemale4.svg";
import avatarfemale5 from "../../assets/img/avatarfemale5.svg";
import avatarfemale6 from "../../assets/img/avatarfemale6.svg";
import avatarmale1 from "../../assets/img/avatarmale1.svg";
import avatarmale2 from "../../assets/img/avatarmale2.svg";
import avatarmale3 from "../../assets/img/avatarmale3.svg";
import avatarmale4 from "../../assets/img/avatarmale4.svg";
import avatarmale5 from "../../assets/img/avatarmale5.svg";
import avatarmale6 from "../../assets/img/avatarmale6.svg";
import edit from "../../assets/img/edit.svg";
import { AwesomeSpinner } from "../spinners/AwesomeSpinner";

import fallbackAvatar from "../../assets/img/fallbackAvatar.svg";
import femaleIcon from "../../assets/img/femaleIcon.svg";
import helpIcon from "../../assets/img/helpIcon.svg";
import home from "../../assets/img/home.svg";
import logout_circle from "../../assets/img/logout_circle.svg";
import maleIcon from "../../assets/img/maleIcon.svg";
import profil from "../../assets/img/profil.png";
import starred from "../../assets/img/starred.png";
import { MainVariablesContext } from "../../context/MainVariablesContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { AvatarModal } from "../modals/AvatarModal";
import { LogoutModal } from "../modals/LogoutModal";

import "./mobile_navbar.scss";

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
  const [avatar, setAvatar] = useState(null);
  const [showSelectedAvatar, setShowSelectedAvatar] = useState(false);

  const loggedGender = JSON.parse(localStorage.getItem("gender")); //an icon
  const avatars =
    loggedGender === "Male"
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

  // get the avatar and the fullName of the user from the browser local storage when the user tries to log in
  // from Login Page
  const loggedUser = JSON.parse(localStorage.getItem("user")); //we can acces email and fullName
  const loggedAvatar = JSON.parse(localStorage.getItem("avatar")); //an icon

  let loggedFName = loggedUser?.fullName;

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
      console.log(selectedItem, showSelectedAvatar);
      // setShowSelectedAvatar(true);
    }
  };

  const handleEditClick = () => {
    setshowAvatarModal(true);
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

  // add avatar on hamburger menu !!!!!!!!!!!!!!!

  return (
    <div className="workout-hamburger-navbar-container">
      <div className="workout-hamburger-navbar-container-inner">
        <div className="workout-hamburger-menu-wrapper">
          {/* when the user clicks on magnifying_glass-btn, the hamburgerMenu Icon is hidden, when not, it's shown */}
          {!openSearchInputModal && (
            <div className="workout-hamburger-menu-wrapper-inner">
              <HamburgerMenu
                className="workout-hamburger-menu"
                isOpen={hamburgerMenuIsOpen}
                menuClicked={handleHamburgerMenuClick}
                // width={18}
                // height={15}
                strokeWidth={2.5}
                rotate={0}
                color="black"
                borderRadius={0}
                animationDuration={0.5}
              />
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

        {hamburgerMenuIsOpen && (
          <div className="workout-hamburger-menu-home">
            <Link className="workout-hamburger-menu-home-link" to="/workouts">
              <img src={home} alt="" />
            </Link>
          </div>
        )}
      </div>

      <>
        {showLinks ? (
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
                  className="hamburger-menu-link profile-anchor"
                  to="/profile"
                >
                  <li className="hamburger-menu-profile-li">
                    {isMobileScreen && <img src={profil} alt="" />}
                    <span>Profile</span>
                  </li>
                </Link>

                <div
                  className={`hamburger-menu-profile-avatar-wrapper
                ${showAvatarModal ? `avatar-wrapper_modal_open` : ""}
                `}
                >
                  <>
                    {showSelectedAvatar ? (
                      <div className="hamburger-menu-selected-avatar">
                        {!showAvatarModal ? (
                          <img
                            width={`50px`}
                            className="hamburger-menu-selected-avatar-icon"
                            src={!showAvatarModal && avatar}
                            alt=""
                          />
                        ) : (
                          // when the modal is open, and while the user still decides which avatar to choose, display a spinner , instead of the avatar
                          <AwesomeSpinner></AwesomeSpinner>
                        )}
                      </div>
                    ) : (
                      <img
                        className="logged-avatar"
                        src={loggedAvatar}
                        alt=""
                      />
                    )}
                  </>
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
                </div>
              </div>

              <Link
                className="hamburger-menu-link starred-items-anchor"
                to="/starred-items"
              >
                <li>
                  {isMobileScreen && <img src={starred} alt="" />}
                  <span>Favorite Workouts</span>
                </li>
              </Link>

              <Button
                className="hamburger-menu-logout-btn"
                onClick={handleLogout}
              >
                {isMobileScreen && <img src={logout_circle} alt="" />}
                <span>Logout</span>
              </Button>

              <Link className="hamburger-menu-link help-anchor" to="/help">
                <li>
                  {isMobileScreen && <img src={helpIcon} alt="" />}
                  <span>Help</span>
                </li>
              </Link>
            </ul>
          </div>
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
