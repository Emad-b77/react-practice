import { useState } from "react"

// ========================================
// React Exercise 11 — useState
// ========================================

function MessageState() {
  const [message, setMessage] = useState("Hello Emad")

  return (
    <>
      <h1>{message}</h1>

      <button onClick={() => setMessage("Hello React")}>
        Change Text
      </button>
    </>
  )
}


// ========================================
// React Exercise 12 — Counter
// ========================================

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Plus One
      </button>

      <button onClick={() => setCount(count - 1)}>
        Minus One
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  )
}


// ========================================
// React Exercise 13 — Multiple State Updates
// ========================================

function CounterMultiple() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>{count}</h2>

      <button
        onClick={() => {
          setCount(count + 1)
          setCount(count + 1)
        }}
      >
        Plus Two
      </button>
    </>
  )
}


// ========================================
// React Exercise 14 — Functional Update
// ========================================

function CounterFunctional() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>{count}</h2>

      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1)
          setCount((prevCount) => prevCount + 1)
        }}
      >
        Plus Two
      </button>
    </>
  )
}


// ========================================
// React Exercise 15 — When to use prev
// ========================================

function CounterPrev() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>{count}</h2>

      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 3)
        }}
      >
        Plus Three
      </button>
    </>
  )
}


// آرشیو تمرین‌های ۱۱ تا ۱۵
export {
  MessageState,
  Counter,
  CounterMultiple,
  CounterFunctional,
  CounterPrev
}