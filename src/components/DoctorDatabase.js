import React, { useState, useEffect } from "react";
import axios from "axios";
import PatientInfo from "../PatientInfo";

export default function DoctorDatabase() {
  const [doctor, setDoctor] = useState([]);
  const [sort_by, set_sort_by] = useState("");

  //checks for dr id value
  function doctorWasChanged(e) {
    console.log("event", e.target.value);
    set_sort_by(e.target.value);
  }

  async function getDoctor() {
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
      );
      console.log("doctors", response.data);

      setDoctor(response.data);
    } catch (error) {
      console.log("error message", error.message);
    }
  }
  useEffect(() => {
    getDoctor();
  }, []);

  return (
    <div>
      <h1>Patient Database</h1>
      <label>Doctor</label>
      <select onChange={doctorWasChanged}>
        {doctor.map(doc => {
          return (
            <option value={doc.id} key={doc.id}>
              {doc.doctor}
            </option>
          );
        })}
      </select>
      <PatientInfo />;
    </div>
  );
}
