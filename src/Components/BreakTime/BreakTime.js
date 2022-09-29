import React from "react";
import "./BreakTime.css";

const BreakTime = (props) => {
  const breakTimeHandler = () => {
    console.log("hi");
  };
  return (
    <div>
      <div className="select-time">
        <h3>Add break time (in minutes)</h3>
        <div className="times">
          <button className="t-btn" onClick={breakTimeHandler}>
            10
          </button>
          <button className="t-btn" onClick={breakTimeHandler}>
            15
          </button>
          <button className="t-btn" onClick={breakTimeHandler}>
            20
          </button>
          <button className="t-btn" onClick={breakTimeHandler}>
            25
          </button>
          <button className="t-btn" onClick={breakTimeHandler}>
            30
          </button>
        </div>
      </div>
      <div className="time-calculation">
        <h3>Exercise Details: </h3>
        <div className="ex-time">
          <h4>
            Exercise Time: {props.time} <small>minutes</small>
          </h4>
        </div>
        <div className="ex-time">
          <h4>
            Break Time: {10 || 5} <small>minutes</small>
          </h4>
        </div>
        <button className="a-btn">Activity Completed</button>
      </div>
    </div>
  );
};

export default BreakTime;
