import React from 'react'
import { Link } from 'react-router-dom'
import "./Homepage.css"
const Homepage = () => {
  return (
    <div className='home'>
      <div className='head'>
        <h1>Explore Our Diverse Course Offerings</h1>
      </div>
      <div className='body'>
        <Link to="/courses">Courses</Link>
      </div>
    </div>
  )
}

export default Homepage;