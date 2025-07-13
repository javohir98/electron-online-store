import React from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router";

const container = document.getElementById("root")!;
createRoot(container).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
