import React from "react";
import ReactDOM from "react-dom/client";
import LocationForm from "../LocationForm";

it("Location Form renders without crashing.", () => {
  const div = document.createElement("div");
  ReactDOM.createRoot(div).render(<LocationForm />);
});
