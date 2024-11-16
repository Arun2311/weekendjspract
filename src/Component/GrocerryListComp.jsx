import axios from "axios";
import React, { useEffect, useState } from "react";

export default function GrocerryListComp() {
  const [inputdata, setinputdata] = useState("");
  const [apidata, setapidata] = useState([]);

  const handlelist = (e) => {
    setinputdata(e.target.value);
  };

  const handlepost = async () => {
    let body = {
      task: inputdata,
    };

    let res = await axios.post("http://localhost:3000/todoList", body);

    alert("grocery added");

    handleget();
  };

  const handleget = async () => {
    let res = await axios.get("http://localhost:3000/todoList");

    setapidata(res.data);
  };

  useEffect(() => {
    handleget();
  }, []);

const handledelete = async (id)=>{
  let res  =  await axios.delete("http://localhost:3000/todoList/" + id)
  
  handleget();
}

const handleupdate = async (ind) =>{

let newda =  prompt("enter ur updated text" ,apidata[ind].task )

let newbody = {
  id : apidata[ind].id,
  task: newda,
};

let res = await axios.put("http://localhost:3000/todoList/" + apidata[ind].id, newbody);

handleget();


}

  return (
    <div>
      <h1>Grocerry List </h1>

      {/* CRUD  - CREATE,READ/RETRIVE,UPDATE,DELETE */}

      <input onChange={handlelist} placeholder="enter grocery" />
      <button onClick={handlepost}>Add</button>

      {apidata.map((da,i) => (
        <div>
          <h1>{da.task}</h1>
          <button onClick={()=>handledelete(da.id)} > delete </button>
          <button onClick={()=>handleupdate(i)} >Update</button>
        </div>
      ))}
    </div>
  );
}
