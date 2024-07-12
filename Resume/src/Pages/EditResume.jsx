import React from 'react'
import { Link } from 'react-router-dom'

const EditResume = () => {
  return (
    <div>
        <h3>Edit Resume</h3>
        <Link to='/' className='btn btn-primary' >Home</Link>
        <Link to='/view-all-resume' className='btn btn-primary'>View and Edit</Link>
        <Link to="/create-resume" className='btn btn-primary'>Create Resume</Link>
    </div>
  )
}

export default EditResume