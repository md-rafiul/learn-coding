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

  const addDurationHandler = () => {};
  return (
    <div className="body">
      <div className="cards-container">
        {fakeDatas.map((fakeData) => (
          <Cards
            fakedata={fakeData}
            addDurationHandler={addDurationHandler}
            key={fakeData.id}
          ></Cards>
        ))}
      </div>
      <Sidesection></Sidesection>
    </div>
  );
};

export default Body;
