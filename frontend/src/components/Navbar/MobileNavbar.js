import "animate.css";
import { Button } from "antd";
import { useContext, useEffect, useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { Link, useLocation } from "react-router-dom";
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
import { LogoutModal } from "../modals/LogoutModal";
import "./mobile_navbar.scss";

const MobileNavbar = ({}) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const currentLocation = useLocation();
  let currentLocat = currentLocation.pathname;
  const [showLogOutModal, setshowLogOutModal] = useState(false);

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

  const isMobileScreen = useMediaQuery("(max-width: 600px)");

  const [showLinks, setShowLinks] = useState(false);

  const {
    hamburgerMenuIsOpen,
    setHamburgerMenuIsOpen,
    openSearchInputModal,
    setopenSearchInputModal,
  } = useContext(MainVariablesContext);

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

  useEffect(() => {
    if (!openSearchInputModal) {
      setHamburgerMenuIsOpen(!hamburgerMenuIsOpen);
    }
  }, [openSearchInputModal]);

  useEffect(() => {
    if (hamburgerMenuIsOpen) console.log("menu open");
    else console.log("menu closed");
  }, [hamburgerMenuIsOpen]);

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
              <Link className="hamburger-menu-link" to="/profile">
                <li>
                  {isMobileScreen && <img src={profil} alt="" />}
                  <span>Profile</span>
                </li>
              </Link>

              <Link className="hamburger-menu-link" to="/starred-items">
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

              <Link className="hamburger-menu-link" to="/help">
                <li>
                  {isMobileScreen && <img src={helpIcon} alt="" />}
                  <span>Help</span>
                </li>
              </Link>
            </ul>
          </div>
        ) : null}
      </>

      <>
        <LogoutModal {...{ showLogOutModal, setshowLogOutModal, logout }} />
      </>
    </div>
  );
};

export default MobileNavbar;
