import React, { useState } from "react";

export default function OpeningTimes() {
  const [openclose, setOpenclose] = useState("");

  const checkTime = () => {
    let now = new Date();

    let dayOfWeek = now.getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat
    let hour = now.getHours(); // 0 = 12am, 1 = 1am, ... 18 = 6pm

    // check if it's a weekday between 9am and 6pm
    if (dayOfWeek > 0 && dayOfWeek < 6 && hour >= 8 && hour < 17) {
      setOpenclose("Open!");
    } else {
      setOpenclose("Closed!");
    }
  };

  setInterval(checkTime, 1000);
  //console.log(setInterval(checkTime, 1000));
  return <span className="openclose">{openclose}</span>;
}
