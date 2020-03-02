import React, { useState } from "react";

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
      <form onSubmit={submitHandle}>
        <label>First name</label>
        <input
          type="text"
          value={firstName}
          onChange={event => {
            //console.log("firstName .value:", event.target.value);
            setFirstName(event.target.value);
          }}
        />{" "}
        <br />
        <label>Last name</label>
        <input
          type="text"
          value={lastName}
          onChange={event => {
            setLastName(event.target.value);
          }}
        />{" "}
        <br />
        <label>Birthdate</label>
        <input
          type="date"
          value={dateOfBirth}
          onChange={event => {
            setDateOfBirth(event.target.value);
          }}
        />{" "}
        <br />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
        />{" "}
        <br />
        <label>Phonenr.</label>
        <input
          type="number"
          value={phone}
          onChange={event => {
            setPhone(event.target.value);
          }}
        />{" "}
        <br />
        <label>Gender</label>
        <select
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
        <br />
        <input type="submit" value="submit" />
      </form>
      <p>{succesMessage}</p>
    </div>
  );
}
