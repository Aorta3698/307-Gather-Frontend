import React from "react";
import ReactDOM from "react-dom/client";
import ImageUploader from "../ImageUploader";

it("Photo upload form renders without crashing.", () => {
  const div = document.createElement("div");
  ReactDOM.createRoot(div).render(<ImageUploader />);
});
