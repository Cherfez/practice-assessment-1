import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OpeningTimes from "./OpeningTimes";

export default function HomePage() {
  // const [openclose, setOpenclose] = useState("");

  // const checkTime = () => {
  //   let now = new Date();

  //   let dayOfWeek = now.getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat
  //   let hour = now.getHours(); // 0 = 12am, 1 = 1am, ... 18 = 6pm

  //   // check if it's a weekday between 9am and 6pm
  //   if (dayOfWeek > 0 && dayOfWeek < 6 && hour >= 8 && hour < 12) {
  //     setOpenclose("Open!");
  //   } else {
  //     setOpenclose("Closed!");
  //   }
  // };

  // setInterval(checkTime, 1000);
  // console.log(setInterval(checkTime, 1000));
  // //checkTime();

  return (
    <div>
      <h1>Welcome to AMS GPs</h1>
      <div className="gp-info">
        <p>
          We are: {/*<span className="open-close">{openclose}</span>*/}{" "}
          <OpeningTimes />
        </p>
        <p>To maken an appointment, please call: 020-555 5555</p>
      </div>
      <Link to="/duty">
        <button>Who is on duty?</button>
      </Link>
      <Link to="/signup">
        <button>I am a new patient</button>
      </Link>
    </div>
  );
}
