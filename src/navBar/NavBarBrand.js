import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="https://i.imgur.com/W0GCDir.png"
          alt="Gather logo"
          width="108"
          height="36"
        />
      </NavLink>
    </div>
  );
};
