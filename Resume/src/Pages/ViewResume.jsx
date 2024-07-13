import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewResume = () => {
    const [data, setData] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios
            .get(`http://localhost:3000/view-resume/${id}`)
            .then((res) => {
                setData(res.data.data)
                console.log(res.data.data);
            })
            .catch((err) => {
                console.error(err.message);
            })
    }, [])
    return (
        <div>
            <h1>View Resume</h1>
            <p>{data.name}</p>
            <p>{data.phone}</p>
            <p>{data.email}</p>
            <p>{data.institution}</p>
            <p>{data.degree}</p>
            <p>{data.gpa}</p>
            <p>{data._id}</p>
            <Link to='/' className='btn btn-primary' >Home</Link>
            <Link to='/view-all-resume' className='btn btn-primary'>View and Edit</Link>
            <Link to="/create-resume" className='btn btn-primary'>Create Resume</Link>
        </div>
    )
}

export default ViewResume