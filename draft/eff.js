@import "@fontsource/open-sans";
//defining screen breakpoints for responsivness
$x-small: 0px;
$small: 576px;
$medium: 768px;
$large: 992px;
$x-large: 1200px;
$xx-large: 1400px;

//468 768 m 1024 , 1366px

.workout-app-navbar-container {
  .workout-app-navbar {
    width: 100%;
    height: 190px;
    .workout-navbar-icon-user-logged-in {
      display: flex;
      justify-content: center;
      align-items: center;
      .nav-logo-and-lover-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: 40px;
        width: 300px;
        // border: 1px solid;

        &:hover {
          img.lover-logo {
            transform: scale(1.1);
          }
        }
        .navbar-ul {
          margin-bottom: 0px;
          padding-left: 0;
          .app-nav-stack {
            .icon-and-word {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              height: 180px;
              cursor: pointer;
              img.gym-img {
                width: 150px;
                height: 150px;
              }
              .gym-word {
                font-family: "Poppins";
                color: gray;
                font-size: 30px;
                text-decoration: none;
                position: relative;
                bottom: 25px;
              }
            }
          }
          .navbar-ul-li {
            list-style: none;
            .nav-router-link {
              text-decoration: none;

              span {
                font-family: "Open Sans";
                color: black;
              }
            }
          }
        }
        .navabar-logo {
          margin-right: 20px;
          .nav-router-link {
            .app-nav-stack {
              .navbar-ul-li {
                .gym-img {
                  width: 80px;
                  height: 80px;

                  margin-bottom: 10px;
                }
                .gym-word {
                  font-family: "Poppins";
                  color: gray;
                  font-size: 15px;
                  text-decoration: none;
                }
              }
            }
          }
        }
        .nav-logo-lover-icon {
          img {
            width: 80px;
            height: 80px;
          }
        }
      }
    }
    .workout-navbar-icon-user-logged-out {
      display: flex;
      justify-content: center;

      .navbar-ul {
        margin-bottom: 0px;
        padding-left: 0;
        .app-nav-stack {
          .icon-and-word {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 180px;
            cursor: pointer;
            img.gym-img {
              width: 64px;
              height: 64px;
            }
            .gym-word {
              font-family: "Poppins";
              color: gray;
              font-size: 15px;
              text-decoration: none;
              position: relative;
              bottom: 15px;
            }
          }
        }
        .navbar-ul-li {
          list-style: none;
          .nav-router-link {
            text-decoration: none;

            span {
              font-family: "Open Sans";
              color: black;
            }
          }
        }
      }
    }
    .workout-app-navbar-user-profile-wrapper {
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      position: relative;
      bottom: 180px;
      &.bg-gray {
        background: gray;
      }
      .workout-app-navbar-user-profile {
        // border: 1px solid;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;

        .welcome-text {
          font-family: "Poppins";
          color: white;
          font-weight: bold;
          font-size: 18px;
        }
        .logged-user {
          font-family: "Poppins";
          color: white;
          font-weight: bold;
          font-size: 18px;
        }
        .logged-avatar-btn {
          height: fit-content;
          margin-top: 1px;
          .logged-avatar {
            width: 35px;
            height: 35px;
            border-radius: 50%;
          }
        }

        .workout-app-navbar-logout-btn {
          margin-right: 5px;
          .LogoutOutlined-icon {
          }
          &.adjust-btn {
            // margin-top: 10px;
            margin-right: 20px;
          }
        }
      }
      .workout-app-navbar-help-wrapper {
        margin-right: 100px;
        margin-top: 5px;
        margin-bottom: 5px;
        overflow: hidden;

        .workout-app-navbar-help-btn {
          background: none;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          .workout-app-navbar-help-text {
            font-family: "Inconsolata";
            color: white;
            font-size: 16px;
            /* animation properties */
            -moz-transform: translateX(100%);
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
            -moz-animation: moveTextAnimation 5s linear infinite;
            -webkit-animation: moveTextAnimation 5s linear infinite;
            animation: moveTextAnimation 5s linear infinite;
          }
          .help-icon {
            img {
              width: 35px;
              height: 35px;
            }
          }
        }
      }
      .workout-app-navbar-login-signup {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        // margin-right: 30px;
        background: rgba(128, 128, 128, 0.15);
        padding: 5px 140px;
        padding-bottom: 12px;
        &:hover {
          background: rgba(128, 128, 128, 0.22);
          padding-bottom: 22px;
          transition: 0.5s ease;
        }
        .LoginOutlined-link {
          display: flex;
          flex-direction: column;
          .LoginOutlined-icon {
            &:hover {
              transform: scale(1.1);
            }
            svg {
              width: 34px;
              height: 34px;
            }
          }
        }

        span.login-text {
          font-family: "Poppins";
          color: rgba(128, 128, 128, 0.759);
          font-size: 13px;
        }

        .signUpIcon-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          .signup-icon {
            &:hover {
              transform: scale(1.1);
            }
            width: 34px;
            height: 34px;
          }
          span.signup-text {
            font-family: "Poppins";
            color: rgba(128, 128, 128, 0.759);
            font-size: 13px;
          }
        }
      }
    }
    &.navbar-user-logged-out {
      height: 110px;
    }
    &.navbar-user-logged-in {
    }
  }
  .workout-app-navbar-divider {
    display: flex;
    justify-content: center;

    .the-divider {
      min-width: auto !important;
    }
  }
  @media screen and (max-width: $small) {
    margin-bottom: 0px !important;
    .workout-app-navbar {
      width: 100%;
      height: 190px;

      .workout-navbar-icon-user-logged-in {
        .nav-logo-and-lover-icon {
          &:hover {
            img.lover-logo {
            }
          }
          .navbar-ul {
            .app-nav-stack {
              .icon-and-word {
                cursor: pointer;
                img.gym-img {
                }
                .gym-word {
                  font-size: 30px;
                }
              }
            }
            .navbar-ul-li {
              .nav-router-link {
                span {
                  font-family: "Open Sans";
                  color: black;
                }
              }
            }
          }
          .navabar-logo {
            margin-right: 20px;
            .nav-router-link {
              .app-nav-stack {
                .navbar-ul-li {
                  .gym-img {
                    width: 80px;
                    height: 80px;
                    margin-bottom: 10px;
                  }
                  .gym-word {
                    font-family: "Poppins";
                    color: gray;
                    font-size: 15px;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }
      .workout-navbar-icon-user-logged-out {
        // margin-top: 50px;
        // position: relative;
        // top: 115px;
        .navbar-ul {
          .app-nav-stack {
            .icon-and-word {
              cursor: pointer;
              // position: relative;
              // bottom: 20px;
              img.gym-img {
                width: 34px;
                height: 34px;
                position: relative;
                top: 18px;
              }
              .gym-word {
                font-family: "Mulish";
                color: rgb(118, 63, 63);
                font-size: 32px;
                font-weight: bolder;
                letter-spacing: 1.5px;
              }
            }
          }
          .navbar-ul-li {
            .nav-router-link {
              span {
                font-family: "Open Sans";
                color: black;
              }
            }
          }
        }
      }
      .workout-app-navbar-user-profile-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;

        .workout-app-navbar-login-signup {
          background: rgba(21, 13, 13, 0.55);
          gap: 20px;
          // padding: 0;

          .LoginOutlined-link {
            .LoginOutlined-icon {
              svg {
                // border: 1px solid red;
                width: 64px;
                height: 64px;
              }
            }
          }

          span.login-text {
            font-family: "Oswald";
            font-size: 30px;
            color: white;
          }

          .signUpIcon-link {
            .signup-icon {
              width: 64px;
              height: 64px;
            }
            span.signup-text {
              font-family: "Oswald";
              color: white;
              font-size: 30px;
            }
          }
        }
        .workout-app-navbar-user-profile {
          // border: 1px solid;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;

          .welcome-text {
            font-family: "Poppins";
            color: white;
            font-weight: bold;
            font-size: 18px;
          }
          .logged-user {
            font-family: "Poppins";
            color: white;
            font-weight: bold;
            font-size: 18px;
          }
          .logged-avatar-btn {
            height: fit-content;
            margin-top: 1px;
            .logged-avatar {
              width: 35px;
              height: 35px;
              border-radius: 50%;
            }
          }

          .workout-app-navbar-logout-btn {
            margin-right: 5px;
            .LogoutOutlined-icon {
            }
            &.adjust-btn {
              // margin-top: 10px;
              margin-right: 20px;
            }
          }
        }
        .workout-app-navbar-help-wrapper {
          margin-right: 100px;
          margin-top: 5px;
          margin-bottom: 5px;

          .workout-app-navbar-help-btn {
            background: none;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            .workout-app-navbar-help-text {
            }
            .help-icon {
              img {
                width: 35px;
                height: 35px;
              }
            }
          }
        }
        &.bg-gray {
          background: gray;
        }
      }
      &.navbar-user-logged-out {
        height: 110px;
      }
      &.navbar-user-logged-in {
      }
    }
    .workout-app-navbar-divider {
      margin: 10px 0;

      .the-divider {
        min-width: auto !important;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .workout-app-navbar {
      width: 100%;
      height: 190px;
      // login and logout icons
      .workout-app-navbar-user-profile-wrapper {
        margin-top: 5px;

        .workout-app-navbar-login-signup {
          // border: 1px solid ;
          background: rgba(21, 13, 13, 0.45);
          gap: 20px;
          width: 80%;
          padding: 25px 0;

          span.login-text {
            display: none;
          }

          .signUpIcon-link {
            .signup-icon {
              width: 64px;
              height: 64px;
            }
            span.signup-text {
              display: none;
            }
          }
        }
        .workout-app-navbar-user-profile {
          // border: 1px solid;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;

          .welcome-text {
            font-family: "Poppins";
            color: white;
            font-weight: bold;
            font-size: 18px;
          }
          .logged-user {
            font-family: "Poppins";
            color: white;
            font-weight: bold;
            font-size: 18px;
          }
          .logged-avatar-btn {
            height: fit-content;
            margin-top: 1px;
            .logged-avatar {
              width: 35px;
              height: 35px;
              border-radius: 50%;
            }
          }

          .workout-app-navbar-logout-btn {
            margin-right: 5px;
            .LogoutOutlined-icon {
            }
            &.adjust-btn {
              // margin-top: 10px;
              margin-right: 20px;
            }
          }
        }
        .workout-app-navbar-help-wrapper {
          margin-right: 100px;
          margin-top: 5px;
          margin-bottom: 5px;

          .workout-app-navbar-help-btn {
            background: none;
            height: fit-content;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            .workout-app-navbar-help-text {
            }
            .help-icon {
              img {
                width: 35px;
                height: 35px;
              }
            }
          }
        }
        &.bg-gray {
          background: gray;
        }
      }
      //Training Gym and logo
      .workout-navbar-icon-user-logged-in {
        .nav-logo-and-lover-icon {
          &:hover {
            img.lover-logo {
            }
          }
          .navbar-ul {
            .app-nav-stack {
              .icon-and-word {
                cursor: pointer;
                img.gym-img {
                }
                .gym-word {
                  font-size: 30px;
                }
              }
            }
            .navbar-ul-li {
              .nav-router-link {
                span {
                  font-family: "Open Sans";
                  color: black;
                }
              }
            }
          }
          .navabar-logo {
            margin-right: 20px;
            .nav-router-link {
              .app-nav-stack {
                .navbar-ul-li {
                  .gym-img {
                    width: 80px;
                    height: 80px;
                    margin-bottom: 10px;
                  }
                  .gym-word {
                    font-family: "Poppins";
                    color: gray;
                    font-size: 15px;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }
      .workout-navbar-icon-user-logged-out {
        // margin-top: 50px;
        // position: relative;
        // top: 115px;
        .navbar-ul {
          .navbar-ul-li {
            .nav-router-link {
              span {
                font-family: "Open Sans";
                color: black;
              }
            }
          }
        }
      }

      &.navbar-user-logged-out {
        height: 110px;
      }
      &.navbar-user-logged-in {
      }
    }
    .workout-app-navbar-divider {
      margin: 10px 0;

      .the-divider {
        min-width: auto !important;
      }
    }
  }

  //replace the menu with a collapsible menu when the user is logged in and when the screen is small < 450px
}
// do not nest this css rule inside the container
.workout-app-navbar-avatar-menu {
  .avatar-menu-item {
    .avatar-menu-item-anchor {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      span.avatar-menu-item-text {
        font-family: "Inconsolata";
        color: rgba(128, 128, 128, 1);
        font-size: 16px;
      }
      img.avatar-menu-starred-icon,
      img.avatar-menu-profile-icon {
        width: 20px;
        height: 20px;
      }
    }
  }
}
.logout-modal {
  &.ant-modal {
    width: 600px !important;
    .ant-modal-body {
      height: 400px !important;

      .logout-modal-wrapper {
        border: 1px solid;
        width: 100%;
        height: 100%;
        .logout-modal-inner {
          background: url(../../assets/img/log-out-bg.png) no-repeat center;
          background-size: contain;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
          .logout-modal-cancelbtn {
            height: fit-content;
            &:hover {
              border: 1px solid gray !important;
              background: rgba(128, 128, 128, 0.05);
            }
            span {
              font-family: "Poppins";
              color: gray;
              font-size: 30px;
              font-weight: lighter;
            }
            .logout-modal-cancelbtn-closeX {
              img {
                width: 64px !important;
                height: 64px !important;
              }
            }
          }
          .logout-modal-logoutbtn {
            height: fit-content;
            &:hover {
              border: 1px solid red !important;
              background: rgba(255, 0, 0, 0.05);
            }
            span {
              font-family: "Poppins";
              color: gray;
              font-size: 30px;
              font-weight: lighter;
            }
            .logout-modal-logoutbtn-icon {
              width: 64px;
              height: 64px;
            }
          }
          &.exit_bg {
            background: url(../../assets/img/out-exit-emergency-logout.png)
              no-repeat center;
            background-size: contain;
            // background: #ffffff url("img_tree.png") no-repeat right top;
          }
        }
      }
    }
    &.logout-modal-mobile {
      @media screen and (max-width: 700px) {
        width: 85% !important;
        .ant-modal-content {
          .ant-modal-body {
            .logout-modal-wrapper {
              border: 0;
            }
          }
        }
      }
      @media screen and (min-width: 0px) and (max-width: 800px) {
        width: 85% !important;
        .ant-modal-content {
          .ant-modal-body {
            .logout-modal-wrapper {
              border: 0;
            }
          }
          .ant-modal-close {
            .ant-modal-close-x {
              position: relative;
              bottom: 30px;
              left: 0px;
            }
          }
        }
      }
    }
  }
}

/* for Firefox */
@-moz-keyframes moveTextAnimation {
  from {
    -moz-transform: translateX(100%);
  }
  to {
    -moz-transform: translateX(-100%);
  }
}

/* for Chrome */
@-webkit-keyframes moveTextAnimation {
  from {
    -webkit-transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(-100%);
  }
}

@keyframes moveTextAnimation {
  from {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
****************
@import "@fontsource/convergence";
@import "@fontsource/hachi-maru-pop";

.workout-hamburger-navbar-container {
  .workout-hamburger-navbar-container-inner {
    display: flex;

    // the hamburger or X icon
    .workout-hamburger-menu-wrapper {
      margin: 15px 0;
      margin-left: 20px;
      display: inline-block;
      .workout-hamburger-menu-wrapper-inner {
        display: flex;
        align-items: center;
        flex-direction: column;
        .workout-hamburger-menu {
          cursor: pointer;
          width: 40px;
          height: 40px;
        }
        .workout-hamburger-menu-text {
          span {
            // font-family: "Convergence";
            font-family: "Hachi Maru Pop";
            // font-weight: bold;
            font-size: larger;
            text-transform: lowercase;
          }
        }
      }
    }
    .workout-hamburger-menu-home {
      align-self: center;
      margin: 0 auto;
      .workout-hamburger-menu-home-link {
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }

  //the li tags
  .workout-hamburger-menu-links {
    // border: 1px solid;
    .hamburger-menu-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 15px;
      padding-left: 25px;
      background: rgba(0, 179, 255, 0.3);
      .hamburger-menu-link {
        &:focus {
          span {
            border-bottom: 1px solid rgb(78, 76, 76);
          }
        }
        li {
          list-style-type: none;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;

          span {
            font-family: "Poppins";
            font-size: 26px;
            color: rgb(78, 76, 76);
          }
          img {
            width: 50px;
            height: 50px;
          }
        }
      }
      .hamburger-menu-logout-btn {
        padding-left: 0;
        height: fit-content;
        background: none !important;
        border: none;
        align-self: flex-start;
        //
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        &:focus {
          border-bottom: 1px solid rgb(78, 76, 76);
        }
        span {
          font-family: "Poppins";
          font-size: 26px;
          color: rgb(78, 76, 76);
        }
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    .workout-hamburger-menu-links {
      .hamburger-menu-list {
        background: rgba(0, 179, 255, 0.25);
        .hamburger-menu-link {
        }
        .hamburger-menu-logout-btn {
        }
      }
    }
  }
}

******************
import { IconButton } from "@mui/material";
import { Button, Input, message, Modal } from "antd";
import { formatDistanceToNow } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import magnifying_glass from "../../assets/img/magnifying_glass.svg";
import { MainVariablesContext } from "../../context/MainVariablesContext";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { ClearIcon, CloseX } from "../icons/Icons";
import { SearchInputModal } from "../inputs/SearchInputModal";
import { AwesomeSpinner } from "../spinners/AwesomeSpinner";
import "./sections_styles.scss";
import { WorkoutsList } from "./WorkoutsList";
import { WorkoutsListFiltered } from "./WorkoutsListFiltered";
import { WorkoutsListMobile as WorkoutsListMobileFiltered } from "./WorkoutsListMobile";

export const WorkoutsSection = ({
  workouts,
  currentPage,
  setCurrentPage,
  setmovePaginationFromBottom,
  setpaginationClassName,
  searchInput,
  setSearchInput,
  setDisplayPagination,
  detailsContClass,
  setdetailsContClass,
  filteredResults,
  setFilteredResults,
  showAllExistentWorkouts,
  setshowAllExistentWorkouts,
  showMobileFormModal, //the modal that opens when the users clicks on Add Workout btn
  filterBtnClicked,
  setfilterBtnClicked,
}) => {
  // openSearchInputModal, //the modal that opens when the users clicks on the search icon

  const [searchValue, setSearchValue] = useState(``);
  const [filteredResultsByMobileModal, setFilteredResultsByMobileModal] =
    useState([]);
  const [openFilteredListModal, setOpenFilteredListModal] = useState(false);
  const [displaySpinner, setdisplaySpinner] = useState(true);
  const [containerClass, setcontainerClass] = useState("chest-page-workouts");
  const [showAllWorkoutsCondensed, setshowAllWorkoutsCondensed] =
    useState(false);
  const [border, setBorder] = useState(``);
  const [showMsg, setshowMsg] = useState(false);
  // let layoutGrid = detailsContClass === "workout-details-container-as-grid"; //returns a boolean value
  // let layoutList = detailsContClass === "workout-details-container-as-list";
  let msg = `To search for an item, you need to click on the 1st button below !`;
  const isMobileScreen = useMediaQuery("(max-width: 992px)"); // returns true or false
  const isWideScreen = useMediaQuery(
    "(max-width: 800px) and (min-width: 1240px)"
  );
  const is_between_700_and_800 = useMediaQuery(
    "(min-width: 700px) and (max-width: 800px)"
  );
  const isDesktopScreen = useMediaQuery("(min-width: 1260px)");
  const is_less_than_700 = useMediaQuery("(max-width: 700px)");
  const is_more_than_700 = !is_less_than_700;
  const {
    hamburgerMenuIsOpen,
    setHamburgerMenuIsOpen,
    openSearchInputModal,
    setopenSearchInputModal,
  } = useContext(MainVariablesContext);

  // searchItems on Click on Ok Btn or on Enter keyboard key
  const searchItems = () => {
    if (searchInput !== "") {
      const filteredData = workouts.filter((workout) => {
        // const pureString = str.replace(/(?:\r\n|\r|\n)/g, '');

        const createdAtFormatted = formatDistanceToNow(
          new Date(workout.createdAt),
          {
            addSuffix: true,
          }
        );
        return (
          Object.values(createdAtFormatted).join("").toLowerCase().includes(
            searchInput.toString().toLowerCase()
            // .replace(/(?:\r\n|\r|\n)/g, "")
          ) ||
          Object.values(workout.title).join("").toLowerCase().includes(
            searchInput.toString().toLowerCase()
            // .replace(/(?:\r\n|\r|\n)/g, "")
          )
          // Object.values(user.userName).join("").toLowerCase() === searchInput.toString().toLowerCase() for exact search matching
        );
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(workouts);
    }
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleOKClick = (e) => {
    searchItems(e.target.value);
    if (filteredResults?.length >= 1) {
      setOpenFilteredListModal(true);
      setdisplaySpinner(true);
    } else {
      setOpenFilteredListModal(false);
    }
    if (!filteredResults?.length) {
      setTimeout(() => {
        message.info(`There is no result !`, 1); //This is a prompt message for success, and it will disappear in 0.6 seconds
      }, 800);
      setdisplaySpinner(false);
    }
  };
  const handlePressEnter = (e) => {
    handleOKClick(e);
  };

  const handleClearClick = () => {
    setSearchInput("");
  };
  function handleInputHover() {
    if (showAllExistentWorkouts) {
      setBorder(`1px solid red`);
      setshowMsg(true);
    }
  }

  useEffect(() => {
    if (showAllWorkoutsCondensed) {
      console.log(showAllWorkoutsCondensed, "showAllWorkoutsCondensed");
    }
    if (isMobileScreen) {
      setcontainerClass("chest-page-workouts showItemsAsGrid-one-per-line");
      setDisplayPagination("none");
    } else if (!isMobileScreen) {
      setcontainerClass("chest-page-workouts");
    } else if (isWideScreen) {
      setDisplayPagination("none");
    } else if (isDesktopScreen) {
      setDisplayPagination("flex");
    }
  }, [showAllWorkoutsCondensed, isMobileScreen]);

  useEffect(() => {
    // when the modal is closed and when there is no results regarding the search query, clear the input field, and if no result is found, display this msg : No Item was found
    if (!openSearchInputModal) {
      if (searchValue) {
        if (!filteredResultsByMobileModal?.length) {
          setSearchValue("");
          message.info("No Item was found !", 2.5); //This is a prompt message for success, and it will disappear in 0.6 seconds
        }
      }
    }
  }, [openSearchInputModal]);

  let result_word = filteredResults?.length === 1 ? `result` : "results";

  useEffect(() => {
    if (openFilteredListModal) {
      setTimeout(() => {
        message.info(
          `You have got ${filteredResults?.length} ${result_word}`,
          2.5
        ); //This is a prompt message for success, and it will disappear in 0.6 seconds
      }, 800);
    }
    if (filteredResults?.length === 0) {
      setOpenFilteredListModal(false);
    }
  }, [openFilteredListModal]);

  return (
    <div className="workouts-section">
      <div
        className={
          is_less_than_700
            ? "workouts-section-magnifying_glass"
            : "workouts-section-input"
        }
      >
        {is_more_than_700 ? (
          <Input
            value={searchInput}
            onChange={handleChange}
            className="workouts-search-ant-input"
            suffix={
              <div
                className={
                  searchInput
                    ? "workouts-search-input-suffix-btns user-typing-suffix"
                    : "workouts-search-input-suffix-btns"
                }
              >
                <Button
                  disabled={!searchInput}
                  className={
                    searchInput
                      ? "workouts-search-input-ok-btn user-typing"
                      : "workouts-search-input-ok-btn user-not-typing"
                  }
                  onClick={handleOKClick}
                >
                  <span>OK</span>
                </Button>
                {searchInput ? (
                  <IconButton
                    className={"workouts-search-input-delete-btn"}
                    onClick={handleClearClick}
                  >
                    <ClearIcon />
                  </IconButton>
                ) : null}
              </div>
            }
            placeholder=" &nbsp;Search a workout"
            onMouseOver={handleInputHover}
            onPressEnter={(e) => {
              handlePressEnter(e);
            }}
            disabled={
              showAllExistentWorkouts || showAllWorkoutsCondensed ? true : false
            }
          ></Input>
        ) : is_less_than_700 ? (
          <>
            {!showMobileFormModal && (
              //when the Add workout modal is closed, show this btn, if not : hide it
              <Button
                onClick={() => {
                  setopenSearchInputModal(true);
                  if (hamburgerMenuIsOpen) {
                    setHamburgerMenuIsOpen(!hamburgerMenuIsOpen);
                  }
                }}
                className="workouts-magnifying_glass-btn"
              >
                <img
                  className={openSearchInputModal ? `glass_clouded` : ""}
                  src={magnifying_glass}
                  alt=""
                />
              </Button>
            )}
          </>
        ) : null}

        {showMsg && showAllExistentWorkouts && (
          <div className="workouts-search-ant-input-msg">
            <span>{msg}</span>
          </div>
        )}
      </div>

      {/* the results and data when the user searches from the desktop text Field */}
      <>
        {/* display a spinner at the cneter of the page , when the user tries to find a workout , hide it , when the modal is open */}
        {is_more_than_700 && (
          <>
            <>
              {searchInput?.length >= 1 ? (
                <>
                  {is_between_700_and_800 ? (
                    <WorkoutsListFiltered
                      {...{
                        filteredResults,
                        showMobileFormModal,
                        is_between_700_and_800,
                      }}
                    />
                  ) : (
                    <>
                      <Modal
                        className={`workouts-list-filtered-modal 
                        ${
                          filteredResults?.length >= 2
                            ? `workouts-list-filtered-modal`
                            : "workouts-list-filtered-modal no_scroll_bar"
                        } 
                        ${filteredResults?.length === 1 ? "one_element" : ""}`}
                        open={openFilteredListModal}
                        maskClosable={true}
                        closable={filteredResults?.length >= 1}
                        keyboard={true}
                        mask={true}
                        onOk={() => setOpenFilteredListModal(false)}
                        onCancel={() => setOpenFilteredListModal(false)}
                        footer={null}
                        title={null}
                        bodyStyle={{
                          background: "rgba(211, 211, 211, 0.9)",
                        }}
                        maskStyle={{
                          background: "rgba(211, 211, 211, 0.44)",
                        }}
                        closeIcon={<CloseX></CloseX>}
                      >
                        <WorkoutsListFiltered
                          {...{
                            filteredResults,
                            showMobileFormModal,
                          }}
                        />
                      </Modal>

                      <>
                        {!openFilteredListModal && displaySpinner ? (
                          <AwesomeSpinner />
                        ) : null}
                      </>
                    </>
                  )}
                </>
              ) : (
                <>
                  <WorkoutsList
                    {...{
                      workouts, //all workouts
                      currentPage,
                      setCurrentPage,
                      searchInput,
                      setmovePaginationFromBottom,
                      setpaginationClassName,
                      setDisplayPagination,
                      detailsContClass,
                      setdetailsContClass,
                      setcontainerClass,
                      containerClass,
                      border,
                      setshowAllExistentWorkouts,
                      showAllExistentWorkouts,
                      showAllWorkoutsCondensed,
                      setshowAllWorkoutsCondensed,
                      showMobileFormModal,
                      filterBtnClicked,
                      setfilterBtnClicked,
                    }}
                  />
                </>
              )}
            </>
          </>
        )}
      </>

      {/* the results and data when the user searches from the mobile modal text Field */}
      <>
        {is_less_than_700 && (
          <>
            {searchValue?.length >= 1 && !openSearchInputModal ? (
              <WorkoutsListMobileFiltered
                {...{
                  filteredResultsByMobileModal,
                  searchValue,
                  showMobileFormModal,
                }}
              ></WorkoutsListMobileFiltered>
            ) : (
              <>
                <WorkoutsList
                  {...{
                    workouts,
                    showMobileFormModal,
                  }}
                />
              </>
            )}
          </>
        )}
      </>

      {/* when the viewport width is_less_than_700px , <SearchInputModal/>*/}
      <Modal
        className={`search-field-mobile-modal`}
        open={openSearchInputModal}
        maskClosable={true}
        closable={true}
        keyboard={true}
        mask={true}
        onOk={() => setopenSearchInputModal(false)}
        onCancel={() => {
          setopenSearchInputModal(false);

          setHamburgerMenuIsOpen(hamburgerMenuIsOpen);
          // console.log("onCancel clicked");
        }}
        footer={null}
        title={null}
        bodyStyle={{
          background: "rgba(211, 211, 211, 0.38)",
        }}
        maskStyle={{
          background: "rgba(211, 211, 211, 0.15)",
        }}
        closeIcon={<CloseX></CloseX>}
      >
        <SearchInputModal
          {...{
            workouts,
            searchValue,
            setSearchValue,
            filteredResultsByMobileModal,
            setFilteredResultsByMobileModal,
            openSearchInputModal,
            setopenSearchInputModal,
          }}
        ></SearchInputModal>
      </Modal>

      {/* {openFilteredListModal && (
        <>
          <BackTop />
          <span>BackTop</span>
        </>
      )} */}
    </div>
  );
};

// efljhejhfeik
