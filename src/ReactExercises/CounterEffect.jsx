import React from 'react'
import { useEffect , useState } from 'react'

const CounterEffect = () => {
    const [count , setCount] = useState(0)
    useEffect (() => {
        document.title = `Count : ${count}`
    }, [count])
  return (
    <>
    <p>Count : {count}</p>
    <button onClick={() => setCount(count+1)}>+</button>
    <button onClick={() => setCount(count-1)}>-</button>

    </>
  )
}

export default CounterEffect