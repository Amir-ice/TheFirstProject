import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <label for="name" className='Label'>
      Enter name :
    </label>
    <input id="name" type="text"/>
    <button type="button" style={{color:red}}>click</button>
  </div>
  )
}

export default App
 