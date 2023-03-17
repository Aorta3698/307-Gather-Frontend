import React from "react";
import ReactDOM from "react-dom/client";
import { Copyright } from "../components/Copyright";

it("Copyright footer renders without crashing.", () => {
  const div = document.createElement("div");
  ReactDOM.createRoot(div).render(<Copyright />);
});
