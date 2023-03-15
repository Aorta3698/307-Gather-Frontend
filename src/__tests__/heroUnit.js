import React from "react";
import ReactDOM from "react-dom/client";
import HeroUnit from "../HeroUnit";

it("Hero Unit renders without crashing.", () => {
  const div = document.createElement("div");
  ReactDOM.createRoot(div).render(<HeroUnit />);
});
