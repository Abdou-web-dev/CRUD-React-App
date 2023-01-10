import { Navigate, Route, Routes } from "react-router-dom";
// pages & components
import Navbar from "./components/Navbar/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import StarredItems from "./pages/StarredItems";
import Workouts from "./pages/Workouts";

function App() {
  const { user } = useAuthContext();
  // this usf in order to move the logo to the left, when the restore btn is clicked on the starred-items page
  return (
    <div className="App">
      <Navbar />

      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* this the main page of the app */}
          <Route
            index
            path="/workouts"
            element={user ? <Workouts /> : <Navigate to="/login" />}
          />

          <Route
            path="/login"
            element={
              !user ? (
                <div className="pages-login">
                  <Login />
                </div>
              ) : (
                <Navigate to="/workouts" />
              )
            }
          />
          <Route
            path="/signup"
            element={
              !user ? (
                <div className="pages-login pages-signup">
                  <Signup />
                </div>
              ) : (
                <Navigate to="/workouts" />
              )
            }
          />

          <Route
            path="/profile"
            element={
              user ? (
                <div className="pages-profile">
                  <Profile />
                </div>
              ) : (
                <Navigate to="/workouts" />
              )
            }
          />

          <Route
            path="/starred-items"
            element={
              user ? (
                <div className="pages-starred">
                  <StarredItems />
                </div>
              ) : (
                <Navigate to="/workouts" />
              )
            }
          />

          <Route
            path="/help"
            element={
              user ? (
                <div className="pages-help">
                  <Help />
                </div>
              ) : (
                <Navigate to="/workouts" />
              )
            }
          />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
