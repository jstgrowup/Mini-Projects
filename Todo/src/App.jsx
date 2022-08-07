import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Todo from './Components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Todo/>
    </div>
  )
}

export default App
