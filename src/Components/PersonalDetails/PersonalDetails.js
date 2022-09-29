import React from "react";
import rafi from "./rafi.jpg";
import "./PersonalDetails.css";

const PersonalDetails = () => {
  return (
    <div>
      <div className="Personal-details">
        <div className="personal-info">
          <h3>Md. Rafiul</h3>
          <p>Tangail</p>
        </div>
        <img src={rafi} alt="" />
      </div>
    </div>
  );
};

export default PersonalDetails;
