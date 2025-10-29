import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/profile.jsx' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      {/* <h2>Welcome to react work</h2> */}
      <div className='main'>
        {/* <h2 style={{color:'blue'}}>
        welcome to my profile page
        </h2> */}
        {/* <Profile/> */}
      </div>
    </div>
  )
}

export default App
