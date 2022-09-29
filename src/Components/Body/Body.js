import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Sidesection from "../SideSection/Sidesection";
import "./Body.css";
const Body = () => {
  const [fakeDatas, setFakeDatas] = useState([]);

  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setFakeDatas(data));
  }, []);

  const [time, setTime] = useState(0);
  const addDurationHandler = (duration) => {
    setTime(time + duration);
  };

  return (
    <div className="body">
      <div>
        <h2>Select language: </h2>
        <div className="cards-container">
          {fakeDatas.map((fakeData) => (
            <Cards
              fakedata={fakeData}
              addDurationHandler={addDurationHandler}
              key={fakeData.id}
            ></Cards>
          ))}
        </div>
      </div>
      <Sidesection time={time}></Sidesection>
    </div>
  );
};

export default Body;
