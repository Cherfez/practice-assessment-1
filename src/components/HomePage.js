import React from "react";
import { Link } from "react-router-dom";
import OpeningTimes from "./OpeningTimes";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to AMS GPs</h1>
      <div className="gp-info">
        <p>
          We are: <OpeningTimes />
        </p>
        <p>
          To maken an appointment <br />
          call: 020-555 5555
        </p>
      </div>
      <Link to="/duty" className="link">
        <button>Who is on duty?</button>
      </Link>
      <Link to="/signup" className="link">
        <button>I am a new patient</button>
      </Link>
    </div>
  );
}
