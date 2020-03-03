import React, { useState, useEffect } from "react";
import axios from "axios";
import PatientInfo from "./PatientInfo";

export default function DoctorDatabase() {
  const [doctor, setDoctor] = useState([]);
  const [patients, setPatients] = useState([]);
  const [selectedDocterId, set_selectedDocterId] = useState(null);

  async function getDoctor() {
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
      );

      setDoctor(response.data);
    } catch (error) {
      console.log("error message", error.message);
    }
  }
  useEffect(() => {
    getDoctor();
  }, []);

  async function getPatients() {
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
      );

      setPatients(response.data);
    } catch (error) {
      console.log("error message", error.message);
    }
  }
  useEffect(() => {
    getPatients();
  }, []);

  //checks for dr id value
  function doctorWasChanged(e) {
    console.log(e.target.value);
    set_selectedDocterId(e.target.value);
  }

  const filteredPatients = patients.filter(patient => {
    return patient.doctorId == selectedDocterId;
  });

  //sorting on last name
  const sorting = (a, b) => {
    return a.lastName.localeCompare(b.lastName);
  };
  filteredPatients.sort(sorting);

  return (
    <div>
      <h1>Patient Database</h1>
      <label>Doctor</label>
      <select onChange={doctorWasChanged} id="select">
        {doctor.map(doc => {
          return (
            <option value={doc.id} key={doc.id}>
              {doc.doctor}
            </option>
          );
        })}
      </select>
      <div>
        {filteredPatients.map(patient => {
          return <PatientInfo patient={patient} key={patient.id} />;
        })}
      </div>
    </div>
  );
}
