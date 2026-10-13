// ========================================
// React Exercise 6 — Props
// ========================================

function Welcome(props) {
  return <h1>Hello {props.name}</h1>
}


// ========================================
// React Exercise 7 — Multiple Props
// ========================================

function UserInfo(props) {
  return (
    <h1>
      {props.name} - {props.age}
    </h1>
  )
}


// ========================================
// React Exercise 8 — Destructuring Props
// ========================================

function UserInfoDestructured({ name, age }) {
  return (
    <h1>
      {name} - {age}
    </h1>
  )
}


// ========================================
// React Exercise 9 — Events
// ========================================

function EventExample() {
  const handleClick = () => {
    console.log("Button Clicked")
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  )
}


// ========================================
// React Exercise 10 — Event Object
// ========================================

function EventObject() {
  const handleClick = (event) => {
    console.log(event)
    console.log(event.target)
    console.log(event.target.textContent)
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  )
}


// آرشیو تمرین‌های ۶ تا ۱۰
export {
  Welcome,
  UserInfo,
  UserInfoDestructured,
  EventExample,
  EventObject
}