import React from 'react'

export default function PropsComp({apidata,handleapi,setcount}) {

  const handleadd=()=>{
    setcount(5)
  }
  return (
    <div>

      <h1>Arun - </h1>
   
 
 {console.log(apidata)}

 <button onClick={handleapi}>call api</button>
 


    </div>
  )
}
