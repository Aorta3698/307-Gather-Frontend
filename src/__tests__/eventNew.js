import React from "react";
import ReactDOM from "react-dom/client";
import { EventNew } from "../pages/EventNew";

it("New event page renders without crashing.", () => {
  const div = document.createElement("div");
  ReactDOM.createRoot(div).render(<EventNew />);
});
