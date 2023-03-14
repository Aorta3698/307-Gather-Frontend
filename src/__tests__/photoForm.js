import React from "react";
import ReactDOM from "react-dom/client";
import PhotoForm from "../PhotoForm";

it("Photo upload form renders without crashing.", () => {
  const div = document.createElement("div");
  ReactDOM.createRoot(div).render(<PhotoForm />);
});
