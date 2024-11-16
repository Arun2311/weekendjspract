import React, { useEffect, useLayoutEffect ,useRef } from 'react'
import "./about.css"

export default function AboutComp({NAME}) {

  let inputref =  useRef(null)
  
  useEffect(()=>{

    console.log("useEffect");
    // alert("u r device not support")

    inputref.current.focus()
  },[])

  useLayoutEffect(()=>{

    console.log("useLayoutEffect");
  },[])



  return (
    <div>
      <h1>AboutComp ---{NAME}</h1>
      <input ref={inputref} />
    </div>
  )
}



