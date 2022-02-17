import { useState } from 'react'
import './Counter.css'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="Counter">
      <button className="button" type="button" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
    </div>
  )
}
