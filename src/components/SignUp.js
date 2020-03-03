import React, { useState } from "react";
import "./SignUp.css";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("Male");
  const [succesMessage, setSuccesMessage] = useState("");

  const submitHandle = event => {
    event.preventDefault();
    console.log(firstName, lastName, dateOfBirth, email, phone, gender);
    setSuccesMessage("You're added to the database. Thank you!");
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setEmail("");
    setPhone("");
    setGender("");
  };

  return (
    <div>
      <h1>Patient Signup</h1>
      <form onSubmit={submitHandle}>
        <label className="l1">First name</label>
        <input
          className="i1"
          type="text"
          value={firstName}
          onChange={event => {
            //console.log("firstName .value:", event.target.value);
            setFirstName(event.target.value);
          }}
        />{" "}
        <label className="l2">Last name</label>
        <input
          className="i2"
          type="text"
          value={lastName}
          onChange={event => {
            setLastName(event.target.value);
          }}
        />{" "}
        <label className="l3">Birthdate</label>
        <input
          className="i3"
          type="date"
          value={dateOfBirth}
          onChange={event => {
            setDateOfBirth(event.target.value);
          }}
        />{" "}
        <label className="l4">Email</label>
        <input
          className="i4"
          type="email"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
        />{" "}
        <label className="l5">Phonenr.</label>
        <input
          className="i5"
          type="number"
          value={phone}
          onChange={event => {
            setPhone(event.target.value);
          }}
        />{" "}
        <label className="l6">Gender</label>
        <select
          className="i6"
          value={gender}
          onChange={event => {
            setGender(event.target.value);
          }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        <input type="submit" value="submit" />
      </form>
      <p>{succesMessage}</p>
    </div>
  );
}
