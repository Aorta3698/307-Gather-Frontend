import React from "react";
import ReactDOM from "react-dom/client";
import ResetPass from "../ResetPass";

it("Reset Password page renders without crashing.", () => {
  const div = document.createElement("div");
  ReactDOM.createRoot(div).render(<ResetPass />);
});
