import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { Menu, MenuItem, Stack } from "@mui/material";
import { Button, Divider, Modal, Tooltip } from "antd";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import signUpIcon from "../../assets/img/add-user.png";
import fallbackAvatar from "../../assets/img/fallbackAvatar.svg";
import femaleIcon from "../../assets/img/femaleIcon.svg";
import gym from "../../assets/img/gymBold.png";
import helpIcon from "../../assets/img/helpIcon.png";
import lover from "../../assets/img/lover.png";
import maleIcon from "../../assets/img/maleIcon.svg";
import profil from "../../assets/img/profil.png";
import starred from "../../assets/img/starred.png";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import "./navbar.scss";

const Navbar = ({}) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const currentLocation = useLocation();
  let currentLocat = currentLocation.pathname;

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

  const [showLogOutModal, setshowLogOutModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleLogOutClick = () => {
    setshowLogOutModal(true);
  };

  const isDesktopScreen = useMediaQuery("(min-width: 576px)");

  return (
    <div className="workout-app-navbar-container">
      <nav
        className={
          user
            ? "workout-app-navbar navbar-user-logged-in"
            : "workout-app-navbar navbar-user-logged-out"
        }
      >
        <div
          className={
            user
              ? "workout-navbar-icon-user-logged-in"
              : "workout-navbar-icon-user-logged-out"
          }
        >
          <div className="nav-logo-and-lover-icon">
            <ul
              className={
                currentLocat === "/starred-items"
                  ? `navabar-logo navbar-ul`
                  : "navbar-ul"
              }
            >
              <Link className="nav-router-link" to="/workouts">
                <Stack className="app-nav-stack" direction={"row"} spacing={5}>
                  <li className="navbar-ul-li icon-and-word">
                    <img className="gym-img" src={gym} alt="" />
                    {isDesktopScreen && (
                      <span className="gym-word">The training gym</span>
                    )}
                  </li>
                </Stack>
              </Link>
            </ul>
            <>
              {currentLocat === "/starred-items" ? (
                <div className="nav-logo-lover-icon">
                  <img className="lover-logo" src={lover} alt="heart" />
                </div>
              ) : null}
            </>
          </div>
        </div>

        <div
          className={
            user
              ? "workout-app-navbar-user-profile-wrapper bg-gray"
              : "workout-app-navbar-user-profile-wrapper"
          }
        >
          {user && (
            <>
              <div
                className="workout-app-navbar-help-wrapper"
                id="scroll-container"
              >
                <Link to={`/help`}>
                  <Button className="workout-app-navbar-help-btn">
                    <span
                      className="workout-app-navbar-help-text"
                      id="scroll-text"
                    >
                      Need help
                    </span>
                    <div className="help-icon">
                      <img src={helpIcon} alt="" />
                    </div>
                  </Button>
                </Link>
              </div>

              <div className="workout-app-navbar-user-profile">
                <>
                  <span className="welcome-text">Welcome ,</span>
                  <span className="logged-user">
                    {loggedFName
                      ? loggedFName
                      : registeredFullName
                      ? registeredFullName
                      : ""}
                  </span>
                </>

                <Tooltip
                  title={
                    openMenu === true
                      ? `Close profile menu`
                      : `Open profile menu`
                  }
                  overlayInnerStyle={{
                    fontSize: "10px",
                  }}
                >
                  <Button className="logged-avatar-btn" onClick={handleClick}>
                    <img
                      className="logged-avatar"
                      src={loggedAvatar ? loggedAvatar : fallbackAvatarIcon}
                      alt=""
                    />
                  </Button>
                </Tooltip>

                <Tooltip
                  //Style of the tooltip inner content
                  overlayInnerStyle={{
                    fontSize: "10px",
                  }}
                  title="Log out"
                  className=""
                  // open
                >
                  <Button
                    className={
                      !loggedFName
                        ? "workout-app-navbar-logout-btn adjust-btn"
                        : "workout-app-navbar-logout-btn"
                    }
                    onClick={() => logout()}
                  >
                    <LogoutOutlined className="LogoutOutlined-icon" />
                  </Button>
                </Tooltip>
              </div>
            </>
          )}
          {!user && (
            <div className="workout-app-navbar-login-signup">
              <Link to="/login" className="LoginOutlined-link">
                <LoginOutlined className="LoginOutlined-icon" />
                <span className="login-text">login</span>
              </Link>
              <Link to="/signup" className="signUpIcon-link">
                <img src={signUpIcon} alt="" className="signup-icon" />
                <span className="signup-text">Sign up</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
      <div className="workout-app-navbar-divider">
        <Divider
          className="the-divider"
          style={{
            backgroundColor: "darkgray",
            height: "1px",
            width: "1000px",
          }}
        />
      </div>
      <Menu
        className="workout-app-navbar-avatar-menu"
        open={openMenu}
        id="basic-menu"
        anchorEl={anchorEl}
        onClose={handleCloseMenu}
      >
        <MenuItem className="avatar-menu-item" onClick={handleCloseMenu}>
          <Link className="avatar-menu-item-anchor" to={`profile`}>
            <img className="avatar-menu-profile-icon" src={profil} alt="" />
            <span className="avatar-menu-item-text">Profile</span>
          </Link>
        </MenuItem>
        <MenuItem className="avatar-menu-item" onClick={handleCloseMenu}>
          <Link className="avatar-menu-item-anchor" to={`/starred-items`}>
            <img className="avatar-menu-starred-icon" src={starred} alt="" />
            <span className="avatar-menu-item-text">Favorite Workouts</span>
          </Link>
        </MenuItem>
        <MenuItem
          className="avatar-menu-item"
          onClick={() => {
            handleCloseMenu();
            handleLogOutClick();
          }}
        >
          <span className="avatar-menu-item-text">Logout</span>
        </MenuItem>
      </Menu>
      <>
        <Modal
          className="logout-modal"
          open={showLogOutModal}
          maskClosable={true}
          closable={true}
          keyboard={true}
          mask={true}
          onOk={() => setshowLogOutModal(false)}
          onCancel={() => setshowLogOutModal(false)}
          // width={layoutGrid ? "50%" : "60%"}
          footer={null}
        >
          <div className="logout-modal-wrapper">
            <div className="logout-modal-inner">
              <Button
                className="logout-modal-cancelbtn"
                onClick={() => setshowLogOutModal(false)}
              >
                <span>Cancel</span>
              </Button>
              <Button
                className="logout-modal-logoutbtn"
                onClick={() => {
                  logout();
                  setshowLogOutModal(false);
                }}
              >
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default Navbar;
