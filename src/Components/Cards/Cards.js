import React, { useEffect, useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setFakeData(data));
  }, []);

  return <div></div>;
};

export default Cards;
