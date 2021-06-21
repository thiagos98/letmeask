import { useState } from "react";

export function Button() {
  const [counter, setCounter] = useState(0)
  
  function increment() {
    // Conceito de imutabilidade -> não modificamos um counter,
    // sempre um novo counter é criado a partir do valor anterior
    setCounter(counter + 1)
  }

  return (
    <button onClick={increment}>
      {counter}
    </button>
  )
}

// Named Export