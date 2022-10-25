import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { WorkoutsContextProvider } from "./context/WorkoutsContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WorkoutsContextProvider>
  </React.StrictMode>
);
