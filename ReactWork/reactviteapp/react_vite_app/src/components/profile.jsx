import React from 'react'
import './profile.css'
const profile = () => {
  return (
    <div className='parent'>
      <h2>Welcome to react work</h2>
      <div>
        <h2 style={{color:'blue'}}>
        welcome to my profile page
        </h2>
        <img src="https://media.licdn.com/dms/image/v2/D5635AQFZQKOP7fQWQg/profile-framedphoto-shrink_400_400/B56ZaQuKG9HgAg-/0/1746184741596?e=1762146000&v=beta&t=VHO5V9YyScO9ZomOb7OjIWo40qnuOWuSvawCSH2ZVh0" style={{width:'200px',height:'200px'}} alt="img"/>
        <div>
            <h2>Name: Aaron</h2>
            <h2>Roll Number: 2300321530001</h2>
            <h2>Branch: CSE AIML</h2>
            <h2>Section: B</h2>
            <h2>College: ABES Engineering College</h2>
        </div>
      </div>
    </div>
  )
}

export default profile
