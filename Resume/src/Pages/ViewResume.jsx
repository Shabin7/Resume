import React from 'react'
import { Link } from 'react-router-dom'

const ViewResume = () => {
    return (
        <div>
            <h1>View Resume</h1>
            <Link to='/' className='btn btn-primary' >Home</Link>
            <Link to='/view-all-resume' className='btn btn-primary'>View and Edit</Link>
            <Link to="/create-resume" className='btn btn-primary'>Create Resume</Link>
        </div>
    )
}

export default ViewResume