import React, { useState } from "react";


let count = 0
export default function ReactForm() {
  count++
  const [name, setname] = useState("");
  const [age, setage] = useState("");


  console.log(count);
  
  const handlename = (e) => {
    setname(e.target.value);
  };

  const handleage = (e) => {
    setage(e.target.value);
  };

  return (
    <div>
      <h1>Register</h1>

      <label>First Name : </label>
      <input onChange={handlename} placeholder="enter " />

      <br />
      <br />
      <br />

      <label>Age: </label>
      <input onChange={handleage} placeholder="enter " />

      <br />
      <br />
      <br />

` 1`      <label>Email : </label>
      <input placeholder="enter " />

      <br />
      <br />
      <br />

      <button>Submit</button>

      <h1>
        First Name = {name},{age}
      </h1>
    </div>
  );
}
