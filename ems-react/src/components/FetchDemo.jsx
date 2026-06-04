import { useState, useEffect } from "react"

export default function FetchDemo() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  console.log("FetchDemo rendered")

  useEffect(() => {
    console.log("useEffect started")

    const controller = new AbortController()

    async function loadUsers() {
      try {
        console.log("fetch started")

        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        )

        console.log("response received", res)

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`)
        }

        const data = await res.json()

        console.log("data received", data)

        setUsers(data)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("fetch aborted")
          return
        }

        console.log("error", err.message)
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    loadUsers()

    return () => {
      controller.abort()
    }
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      <h2>Users</h2>

      {users.map(user => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </div>
  )
}