import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./app.css";
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/react";
import "aos/dist/aos.css";
import SentryFallback from "./components/helpers/ErrorHandler/ErrrorBoundry";
import { initSentry } from "./components/helpers/sentry";



initSentry();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Sentry.ErrorBoundary fallback={SentryFallback}>
        <App />
      </Sentry.ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
);
