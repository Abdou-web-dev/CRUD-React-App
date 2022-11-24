// import "@fontsource/open-sans";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { Stack } from "@mui/material";
import { Button, Divider } from "antd";
import { Link } from "react-router-dom";
import signUpIcon from "../../assets/img/add-user.png";
import gym from "../../assets/img/gymBold.png";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

import "./navbar.scss";

const Navbar = ({ fullName }) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogOutClick = () => {
    logout();
  };

  return (
    <div className="workout-app-navbar-container">
      <nav
        className={
          user
            ? "workout-app-navbar"
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
          <ul className="navbar-ul">
            <Link className="nav-router-link" to="/chest">
              <Stack className="app-nav-stack" direction={"row"} spacing={5}>
                <li className="navbar-ul-li icon-and-word">
                  <img className="gym-img" src={gym} alt="" />
                  <span className="gym-word">The training gym</span>
                </li>
              </Stack>
            </Link>
          </ul>
        </div>

        <div className={"workout-app-navbar-login-logout-icons"}>
          {user && (
            <div className="workout-app-navbar-logout">
              <span>{user.email}</span> <br />
              <span className="aaa"> {fullName}</span>
              <Button
                className="workout-app-navbar-logout-btn"
                onClick={handleLogOutClick}
              >
                <LogoutOutlined className="LogoutOutlined-icon" />
              </Button>
            </div>
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
    </div>
  );
};

export default Navbar;

/* <div>
        <video width="30%" height="20%" autoPlay muted loop id="navbar-video">
          <source src={workoutVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div> */

/* <VideoPlayer
  className="video-test"
  src={
    "https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1d34728e1b77983805b34daad7&profile_id=165&oauth2_token_id=57447761"
  }
  autoPlay={true}
  muted={true}
/>; */

/* <img src={logOutIcon} alt="" /> */
