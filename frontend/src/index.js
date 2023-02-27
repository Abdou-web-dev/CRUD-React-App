import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { HamburgerMenuContextProvider } from "./context/HamburgerMenuContext";
import { WorkoutsContextProvider } from "./context/WorkoutsContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <HamburgerMenuContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HamburgerMenuContextProvider>
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
