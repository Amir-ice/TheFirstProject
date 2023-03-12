import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const btn = 'hi click me'
  return (
  <div>
    <label for='name' className='label'>
      Enter Name :
    </label>
    <input id="name" type="text"/>
    <button type="button" style={{backgroundcoler: 'red'}}>
      {btn}
    </button>
  </div>
  )
}

export default App
 