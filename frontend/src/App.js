import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// pages & components
import Navbar from "./components/Navbar/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import ChestWorkouts from "./pages/Chest";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/Signup";

function App() {
  const { user } = useAuthContext();
  const [fullName, setFullName] = useState("");

  return (
    <div className="App">
      <Navbar {...{ fullName }} />

      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            index
            path="/chest"
            element={user ? <ChestWorkouts /> : <Navigate to="/login" />}
          />

          <Route
            path="/login"
            element={
              !user ? (
                <div className="pages-login">
                  <Login />
                </div>
              ) : (
                <Navigate to="/chest" />
              )
            }
          />
          <Route
            path="/signup"
            element={
              !user ? (
                <div className="pages-login">
                  <Signup {...{ fullName, setFullName }} />
                </div>
              ) : (
                <Navigate to="/chest" />
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
