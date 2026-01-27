import * as Sentry from "@sentry/react";

export const initSentry = () => {
  Sentry.init({
    dsn: "https://63ae7e3f7128eb70f4b022f8ec754dbc@o4510782282858496.ingest.de.sentry.io/4510782285283408",

    integrations: [
      Sentry.browserTracingIntegration({
        tracePropagationTargets: ["localhost", "127.0.0.1", "domain.com"],
      }),
      Sentry.replayIntegration(),
    ],

    /** Performance Monitoring */
    tracesSampleRate: import.meta.env.MODE === "production" ? 0.2 : 1.0,

    /** Session Replay */
    replaysSessionSampleRate: import.meta.env.MODE === "production" ? 0.1 : 0,
    replaysOnErrorSampleRate: 1.0,

    environment: import.meta.env.MODE,

    /** RGPD / sécurité */
    sendDefaultPii: false,
  });
};
