import React from "react";
import ReactDOM from "react-dom/client";
import { Review } from "../components/Review";

it("Review Page renders without crashing.", () => {
  const div = document.createElement("div");
  ReactDOM.createRoot(div).render(<Review />);
});
