import { useState, useEffect } from "react"

export default function StaleEffectDemo() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("count is:", count)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <h2>Stale Closure Demo</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  )
}