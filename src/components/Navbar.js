import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact={true} activeStyle={{ color: "yellow" }} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact={true} activeStyle={{ color: "green" }} to="/duty">
            Doctors on Duty
          </NavLink>
        </li>
        <li>
          <NavLink exact={true} activeStyle={{ color: "red" }} to="/signup">
            New Patients
          </NavLink>
        </li>
        <li>
          <NavLink exact={true} activeStyle={{ color: "purple" }} to="/doctor">
            Database per Doctor
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
