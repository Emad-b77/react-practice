import React from 'react'
import {useState} from "react"

const Conditional = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(false)
  return (
    <>
    <p>
        {isLoggedIn ? "لطفا وارد شوید" : "خوش آمدید"}
    </p>
    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "ورود" : "خروج"}</button>
    </>
  )
}

export default Conditional