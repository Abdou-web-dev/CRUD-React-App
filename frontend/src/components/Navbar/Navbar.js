// import "@fontsource/open-sans";
import CircleIcon from "@mui/icons-material/Circle";
import { Stack } from "@mui/material";
import { Divider } from "antd";
import { Link } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="workout-app-navbar">
        <div className="workout-navbar-icon-and-exos">
          <div>
            <CircleIcon className="bullet-icon" fontSize="small" />
          </div>
          <ul className="navbar-ul">
            <Stack direction={"row"} spacing={5}>
              <li className="navbar-ul-li">
                <Link className="nav-router-link" to="/chest">
                  <span>Chest</span>
                </Link>
              </li>
              <li className="navbar-ul-li">
                <Link className="nav-router-link" to="/hamstrings">
                  <span>Hamstrings</span>
                </Link>
              </li>
              <li className="navbar-ul-li">
                <Link className="nav-router-link" to="/calves">
                  <span>Calves</span>
                </Link>
              </li>
              <li className="navbar-ul-li">
                <Link className="nav-router-link" to="/back">
                  <span>Back</span>
                </Link>
              </li>
              <li className="navbar-ul-li">
                <Link className="nav-router-link" to="/shoulders">
                  <span>Shoulders</span>
                </Link>
              </li>
              <li className="navbar-ul-li">
                <Link className="nav-router-link" to="/triceps">
                  <span>Triceps</span>
                </Link>
              </li>
              <li className="navbar-ul-li">
                <Link className="nav-router-link" to="/biceps">
                  <span>Biceps</span>
                </Link>
              </li>
              <li className="navbar-ul-li">
                <Link className="nav-router-link" to="/forearms">
                  <span>Forearms</span>
                </Link>
              </li>
              <li className="navbar-ul-li">
                <Link className="nav-router-link" to="/trapezius">
                  <span>Trapezius</span>
                </Link>
              </li>
              <li className="navbar-ul-li">
                <Link className="nav-router-link" to="/abs">
                  <span>Abdominals</span>
                </Link>
              </li>
            </Stack>
          </ul>
        </div>

        <div className="divider">
          <Divider
            className="the-divider"
            style={{
              backgroundColor: "darkgray",
              height: "1px",
              width: "1000px",
            }}
          />
        </div>
      </nav>
    </>
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
