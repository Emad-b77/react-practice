import { useEffect, useState } from "react"

const API = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchUsers = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      )

      if (!response.ok) {
        throw new Error("Request failed")
      }

      const data = await response.json()

      setUsers(data)
      setLoading(false)
    } catch (error) {
      setError("Error")
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      {error
        ? "Error"
        : loading
        ? "Loading..."
        : users.length === 0
        ? "No users found"
        : users.map((user) => {
            return <p key={user.name}>{user.name}</p>
          })}

      {error && (
        <button onClick={fetchUsers}>
          Retry
        </button>
      )}
    </>
  )
}

export default API