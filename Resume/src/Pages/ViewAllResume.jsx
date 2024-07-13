import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ViewAllResume = () => {
  const [data, setData] = useState([])
  const [dataToDelete, setDataToDelete] = useState(null)
  useEffect(() => {
    axios
      .get('http://localhost:3000/view-all-resume')
      .then((res) => {
        setData(res.data.data)
        console.log(res.data.data);
      })
      .catch((err) => {
        console.error(err.message);
      })
  }, [])

  const deleteResume = () => {
    axios.delete(`http://localhost:3000/delete-resume/${dataToDelete}`)
      .then((res) => {
        setData(data.filter(resume => resume._id !== dataToDelete))
        console.log(dataToDelete);
      })
      .catch((err) => {
        console.error(err.message);
      })

  }
  return (
    <>
      <div>
        <h1>View all resume</h1>
        <table className='table table-bordered' >
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Qualification</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, index) => (
              <tr key={index}>
                <td>{d.name}</td>
                <td>{d.phone}</td>
                <td>{d.degree}</td>
                <td style={{
                  width: '250px',
                }}>
                  <div>
                    <Link to={`/edit-resume/${d._id}`} className='btn btn-warning mx-2' >Edit</Link>
                    <Link to={`/view-resume/${d._id}`} className='btn btn-success mx-2'>View</Link>
                    <button type='button' onClick={() => setDataToDelete(d._id)} className='btn btn-danger mx-2' data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to='/' className='btn btn-primary' >Home</Link>
        <Link to="/create-resume" className='btn btn-primary'>Create Resume</Link>

      </div>
      {/* Modal starts */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-md modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-danger" id="exampleModalLabel">Delete</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h5 className="text-warning">Do you really want to Delete this data?</h5>
            </div>
            <div className="modal-footer">
              <div className="d-flex">
                <button type="button" className="btn btn-success" data-bs-dismiss="modal">No</button>
                <button type="button" onClick={deleteResume} className="btn btn-danger ms-2" data-bs-dismiss="modal">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal ends */}
    </>
  )
}

export default ViewAllResume