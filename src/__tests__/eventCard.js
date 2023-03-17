import React from "react";
import ReactDOM from "react-dom/client";
import { EventCards } from "../components/EventCards";

it("Event Cards renders without crashing.", () => {
  const div = document.createElement("div");
  ReactDOM.createRoot(div).render(<EventCards />);
});
