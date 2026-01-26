import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./app.css";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/helpers/ErrorHandler/ErrrorBoundry";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
);
