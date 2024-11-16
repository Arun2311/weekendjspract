import React, { useState } from "react";

function NameChange() {
  const [name, setname] = useState("Arun");

  const handlename = () => {
    if (name === "Arun") {
      setname("ram");
    } else {
      setname("Arun");
    }
  };
  return (
    <>
      <h1>{name}</h1>
      <button onClick={handlename}>Change</button>
    </>
  );
}

export default NameChange;
