import React, { useState, useEffect } from "react";
import axios from "axios";
import OpeningTimes from "./OpeningTimes";
import "./DutyPage.css";

export default function DutyPage() {
  const [doctors, setDoctors] = useState([]);
  const [load, setLoad] = useState("");

  async function getDoctors() {
    try {
      setLoad("Loading");
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
      );
      console.log(response.data);

      setLoad("");
      setDoctors(response.data);
    } catch (error) {
      console.log("error message", error.message);
    }
  }

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <div>
      <h1>Who is on Duty?</h1>
      <p>{load}</p>
      <table>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctor => {
            if (doctor.onDuty === true) {
              return (
                <tr key={doctor.id}>
                  <td>{doctor.doctor}</td>
                  <td>Available</td>
                </tr>
              );
            } else {
              return (
                <tr key={doctor.id}>
                  <td>{doctor.doctor}</td>
                  <td>Not Available</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <div className="gp-info">
        <p>
          We are: <OpeningTimes />
        </p>
        <p>
          To make an appointment <br />
          call: 020-555 5555
        </p>
      </div>
    </div>
  );
}
