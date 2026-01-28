import { useState } from 'react'
import Gallery from './component/Gallery.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>ABES ENGINEERING COLLEGE</h2>
        <Gallery />
      </div>
      
    </>
  )
}

export default App
