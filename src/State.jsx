// import React from 'react'

import { useState } from "react"

const State = () => {
    const [message , setMessage] = 
    useState("Hello Emad")

    const[count , setCount] = 
    useState(0)

    const[name , setName] = 
    useState("Emad")
  return (
    <>
    <h1>{message}</h1>
    <button onClick={()=> setMessage("Hello React")}>Change Text</button>
    <h2>{count}</h2>
    <button onClick={()=> setCount(count+1)}>Plus One</button>
    <button onClick={()=> setCount(count-1)}>Minus One</button>
    <button onClick={()=> setCount(0)}>Reset</button>
    <button onClick={()=> setCount((prevCount)=> prevCount+2)}>Plus Two</button>
    <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
    <h2>{name}</h2>

    </>
  )
}

export default State