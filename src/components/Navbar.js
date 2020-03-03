import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            exact={true}
            activeStyle={{ fontWeight: "bold" }}
            to="/"
            className="navlink"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            activeStyle={{ fontWeight: "bold" }}
            to="/duty"
            className="navlink"
          >
            Doctors Schedule
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            activeStyle={{ fontWeight: "bold" }}
            to="/signup"
            className="navlink"
          >
            New Patients
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            activeStyle={{ fontWeight: "bold" }}
            to="/doctor"
            className="navlink"
          >
            Database per Doctor
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
