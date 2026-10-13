// ========================================
// React Exercise 1 — Component
// ========================================

function Welcome() {
  return <h1>Hello Emad</h1>
}


// ========================================
// React Exercise 2 — JSX + Variable
// ========================================

function WelcomeWithName() {
  const name = "Emad"

  return <h1>Hello {name}</h1>
}


// ========================================
// React Exercise 3 — Multiple Variables
// ========================================

function UserInfo() {
  const name = "Emad"
  const age = 27

  return (
    <h1>
      Hello {name}, you are {age} years old.
    </h1>
  )
}


// ========================================
// React Exercise 4 — Conditional Rendering
// ========================================

function UserAge() {
  const name = "Emad"
  const age = 27

  return (
    <h1>
      Hello {name}, {age >= 18 ? "You Are An Adult" : "You Are A Minor"}
    </h1>
  )
}


// ========================================
// React Exercise 5 — map + key
// ========================================

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React"]

  return (
    <ul>
      {skills.map(function (skill) {
        return <li key={skill}>{skill}</li>
      })}
    </ul>
  )
}


// برای آرشیو تمرین‌ها
export {
  Welcome,
  WelcomeWithName,
  UserInfo,
  UserAge,
  Skills
}