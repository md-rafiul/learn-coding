import React, { useState } from "react";
import "./BreakTime.css";

const BreakTime = (props) => {
  const [breakTime, setBreakTime] = useState(0);
  const breakTimeHandler = () => {
    setBreakTime(10);
    localStorage.setItem("breakTime", 10);
  };
  const breakTimeHandler1 = () => {
    setBreakTime(15);
    localStorage.setItem("breakTime", 15);
  };
  const breakTimeHandler2 = () => {
    setBreakTime(20);
    localStorage.setItem("breakTime", 20);
  };
  const breakTimeHandler3 = () => {
    setBreakTime(25);
    localStorage.setItem("breakTime", 25);
  };
  const breakTimeHandler4 = () => {
    setBreakTime(30);
    localStorage.setItem("breakTime", 30);
  };

  const localTime = localStorage.getItem("breakTime");

  return (
    <div>
      <div className="select-time">
        <h3>Add break time (in minutes)</h3>
        <div className="times">
          <button className="t-btn" onClick={breakTimeHandler}>
            10
          </button>
          <button className="t-btn" onClick={breakTimeHandler1}>
            15
          </button>
          <button className="t-btn" onClick={breakTimeHandler2}>
            20
          </button>
          <button className="t-btn" onClick={breakTimeHandler3}>
            25
          </button>
          <button className="t-btn" onClick={breakTimeHandler4}>
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
            Break Time: {localTime || breakTime || 0} <small>minutes</small>
          </h4>
        </div>
        <button className="a-btn">Activity Completed</button>
      </div>
    </div>
  );
};

export default BreakTime;
