import React from "react";
import OpeningTimes from "./OpeningTimes";

export default function DutyPage() {
  return (
    <div>
      <div className="gp-info">
        <p>
          We are: <OpeningTimes />
        </p>
        <p>To maken an appointment, please call: 020-555 5555</p>
      </div>
    </div>
  );
}
