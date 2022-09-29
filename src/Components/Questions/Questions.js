import React from "react";
import "./Questions.css";

const Questions = () => {
  return (
    <div className="questions-container">
      <div className="question">
        <h3>How does react work?</h3>
        <p>
          ReactJS divides the UI into isolated reusable pieces of code known as
          components. React components work similarly to JavaScript functions as
          they accept arbitrary inputs called properties or props. It's possible
          to have as many components as necessary without cluttering your code.
        </p>
      </div>
      <div className="question">
        <h3>Difference between props and state</h3>
        <p>
          Props are used to pass data from one component to another. The state
          is a local data storage that is local to the component only and cannot
          be passed to other components. The this.setState property is used to
          update the state values in the component.
        </p>
      </div>
      <div className="question">
        <h3>Use cases of useEffect</h3>
        <p>
          useEffect use cases: 1. Running once on mount: fetch API data 2.
          Running on state change: validating input field 3. Running on state
          change: live filtering 4. Running on state change: trigger animation
          on new array value 5. Running on props change: update paragraph list
          on fetched API data update 6. Running on props change: updating
          fetched API data to get BTC updated price
        </p>
      </div>
    </div>
  );
};

export default Questions;
