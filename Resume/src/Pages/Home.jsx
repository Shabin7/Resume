import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Home page</h1>
            <h3>Create your Resume Here without any effort</h3>
            <Link to='/create-resume' className="btn btn-primary">Creat resume</Link>
            <Link to='/view-all-resume' className='btn btn-primary'>View and Edit</Link>
        </div>
    )
}

export default Home