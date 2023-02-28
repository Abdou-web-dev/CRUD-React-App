import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { MainVariablesContextProvider } from "./context/MainVariablesContext";
import { WorkoutsContextProvider } from "./context/WorkoutsContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <MainVariablesContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MainVariablesContextProvider>
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
