import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Login } from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
        <nav>
        <Login/>
        </nav>
        <Routes>
          <Router path="/api/auth/login" element={<Home/>}/>
          <Router path="" element={<Home/>/>
        </Routes>
    </div>
  )
}

export default App
