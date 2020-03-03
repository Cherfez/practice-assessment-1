import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import DutyPage from "./components/DutyPage";
import SignUp from "./components/SignUp";
import DoctorDatabase from "./components/DoctorDatabase";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/doctor" component={DoctorDatabase} />
        <Route path="/signup" component={SignUp} />
        <Route path="/duty" component={DutyPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
