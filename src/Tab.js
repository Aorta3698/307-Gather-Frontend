import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Tab(path, label) {
  return (
    <Button>
      <NavLink
        to={path}
        end
        className={({ isActive }) =>
          "nav-bar__tab " + (isActive ? "nav-bar__tab--active" : "")
        }
      >
        {label}
      </NavLink>
    </Button>
  );
}
