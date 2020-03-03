import React, { useState } from "react";

export default function PatientInfo(props) {
  const [show, setShow] = useState(false);

  const showDetails = () => {
    return (
      <div>
        <p>email: {props.patient.email}</p>
        <p>phonenr: {props.patient.phoneNumber}</p>
        <p>gender: {props.patient.gender}</p>
        <p>prescriptions: {props.patient.prescriptions.join(", ")}</p>
      </div>
    );
  };

  function clickHandle() {
    setShow(!show);
  }

  return (
    <div className="show-patients" id="patients" key={props.patient.id}>
      <div value={props.patient.doctorId} key={props.patient.id}>
        <p>name: {`${props.patient.firstName}  ${props.patient.lastName}`}</p>
        <p>id: {props.patient.id}</p>
        <p>Date of Birth: {props.patient.dateOfBirth}</p>
        {show && showDetails()}
        <button onClick={clickHandle}>Show Details</button>
      </div>
    </div>
  );
}
