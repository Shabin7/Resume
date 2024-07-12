import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllResume = () => {
  return (
    <div>
        <h1>View all resume</h1>
        <Link to='/' className='btn btn-primary' >Home</Link>
        <Link to="/create-resume" className='btn btn-primary'>Create Resume</Link>
    </div>
  )
}

export default ViewAllResume