import React, { useEffect, useState } from "react";

const Effect = () => {
  const [number, setnumber] = useState(0);
  const [myName, setmyName] = useState("Moses");

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  });

  const handleIncrease = () => {
    setnumber(number + 1);
  };
  const changeName = () => {
    setmyName("Daniel");
  };
  return (
    <div className="d-flex justify-content-center align-items-center gap-3 my-3 p-4">
      <h1>Effect Page</h1>
      <h1>{number}</h1>
      <h1>{myName}</h1>
      <button onClick={handleIncrease}>Increase Number</button>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default Effect;
