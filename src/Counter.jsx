import useCounter from "./hooks/useCounter";
import React from 'react'

const Counter = () => {
    const [count , setCount] = 
    useCounter()
  return (
    <div>
        {count}
        <button onClick={() => setCount(count +1)}>plus one</button>
    </div>
  )
}

export default Counter