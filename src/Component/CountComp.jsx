import React,{useState} from "react";

function CountComp(){

    const[count,setcount] =  useState(2)

    const handleadd=()=>{
      
        setcount(count+1)
    }



    return(
        <>

        <h1>Count - {count}</h1>

        <button onClick={handleadd}>Add</button>
        
        </>
    )
}

export default CountComp