import React, { useEffect, useState } from "react";

function ApiCallWithBtn() {
  const [apidata, setapidata] = useState([]);
  const [count, setcount] = useState(0);

  const handleapi = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    setapidata(data);
    console.log(data);
  };

  useEffect(() => {
    console.log("mount");
    handleapi();

    return()=>{
      console.log("die unmounting ar");
      
    }

  }, [count]);

  const handleadd = () => {
    setcount(count + 1);
  };

  return (
    <div>
      <h1>ApiCallWithBtn - {count}</h1>

      <button onClick={handleadd}>ADD</button>
      {/* <button onClick={handleapi}>Call Api</button> */}

      {apidata.map((as,i) => (
        <div key={i}>
          <h1>{as.title}</h1>
          <img height={200} width={200} src={as.image} />
        </div>
      ))}
    </div>
  );
}

export default ApiCallWithBtn;

// born - mounting

// living - updating

// die - unmounting
