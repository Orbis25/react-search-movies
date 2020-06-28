import React from "react";
import { useSelector } from "react-redux";
const HomePage = () => {
  const data = useSelector((state) => {
    console.log(state)
  })
  return (
    <div>
      <p>HOME PAGE</p>
    </div>
  );
};

export default HomePage;
