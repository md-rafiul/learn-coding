import React from "react";
import BreakTime from "../BreakTime/BreakTime";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import "./Sidesection.css";

const Sidesection = (props) => {
  // console.log(props);
  return (
    <div className="side-section">
      <PersonalDetails></PersonalDetails>
      <BreakTime time={props.time}></BreakTime>
    </div>
  );
};

export default Sidesection;
