import { useState } from "react"

// ========================================
// React Exercise 16 — Input State
// ========================================

function NameInput() {
  const [name, setName] = useState("")

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <h2>{name}</h2>
    </>
  )
}


// ========================================
// React Exercise 17 — Controlled Input
// ========================================

function ControlledInput() {
  const [name, setName] = useState("")

  return (
    <input
      type="text"
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
  )
}


// ========================================
// React Exercise 18 — Form + preventDefault
// ========================================

function BasicForm() {
  const [name, setName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <button type="submit">
        Submit
      </button>
    </form>
  )
}


// ========================================
// React Exercise 19 — Submit + State
// ========================================

function SubmitForm() {
  const [name, setName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <button type="submit">
        Submit
      </button>
    </form>
  )
}


// ========================================
// React Exercise 20 — Name + Age
// ========================================

function NameAgeForm() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(name, age)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="number"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />

      <button type="submit">
        Submit
      </button>
    </form>
  )
}


// ========================================
// React Exercise 21 — Object State
// ========================================

function UserObjectForm() {
  const [user, setUser] = useState({
    name: "",
    age: ""
  })

  return (
    <>
      <input
        value={user.name}
        onChange={(event) =>
          setUser({
            ...user,
            name: event.target.value
          })
        }
      />

      <input
        type="number"
        value={user.age}
        onChange={(event) =>
          setUser({
            ...user,
            age: event.target.value
          })
        }
      />
    </>
  )
}


// ========================================
// React Exercise 22 — Textarea
// ========================================

function MessageForm() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    message: ""
  })

  return (
    <>
      <textarea
        value={user.message}
        onChange={(event) =>
          setUser({
            ...user,
            message: event.target.value
          })
        }
      />
    </>
  )
}


// ========================================
// React Exercise 23 — Checkbox
// ========================================

function CheckboxForm() {
  const [user, setUser] = useState({
    accepted: false
  })

  return (
    <label>
      <input
        type="checkbox"
        checked={user.accepted}
        onChange={(event) =>
          setUser({
            ...user,
            accepted: event.target.checked
          })
        }
      />

      Accept
    </label>
  )
}


// ========================================
// React Exercise 24 — Radio
// ========================================

function RadioForm() {
  const [user, setUser] = useState({
    gender: ""
  })

  return (
    <>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={user.gender === "male"}
          onChange={(event) =>
            setUser({
              ...user,
              gender: event.target.value
            })
          }
        />

        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={user.gender === "female"}
          onChange={(event) =>
            setUser({
              ...user,
              gender: event.target.value
            })
          }
        />

        Female
      </label>
    </>
  )
}


// ========================================
// React Exercise 25 — Validation
// ========================================

function ValidationForm() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    message: "",
    accepted: false
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      user.name === "" ||
      user.age < 18 ||
      user.message === "" ||
      user.accepted === false
    ) {
      return
    }

    console.log("Form Submitted")
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
        Submit
      </button>
    </form>
  )
}


// ========================================
// React Exercise 26 — Error State
// ========================================

function ErrorForm() {
  const [errors, setErrors] = useState({
    name: "",
    age: "",
    message: "",
    accepted: ""
  })

  return (
    <>
      {errors.name && <p>{errors.name}</p>}
      {errors.age && <p>{errors.age}</p>}
      {errors.message && <p>{errors.message}</p>}
      {errors.accepted && <p>{errors.accepted}</p>}
    </>
  )
}


// آرشیو تمرین‌های ۱۶ تا ۲۶
export {
  NameInput,
  ControlledInput,
  BasicForm,
  SubmitForm,
  NameAgeForm,
  UserObjectForm,
  MessageForm,
  CheckboxForm,
  RadioForm,
  ValidationForm,
  ErrorForm
}