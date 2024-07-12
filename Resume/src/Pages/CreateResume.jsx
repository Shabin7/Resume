import React from 'react'
import { Link } from 'react-router-dom'

const CreateResume = () => {
    return (
        <div>
            <h1>Create Resume</h1>
            <form>
                <div className='container m-0'>
                    <h3>Contact Details</h3>
                    <div>
                        <label htmlFor="name" className='form-label'>Name</label>
                        <input type="text" name="name" id="name" className='form-control' />
                    </div>
                    <div>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" name="email" id="email" className='form-control' />
                    </div>
                    <div>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" name="email" id="email" className='form-control' />
                    </div>
                    <h3>Educational Details</h3>
                    <div>
                        <label htmlFor="degree" className='form-label'>Email</label>
                        <input type="text" name="degree" id="degree" className='form-control' />
                    </div>
                    <div>
                        <label htmlFor="institution" className='form-label'>Email</label>
                        <input type="text" name="institution" id="institution" className='form-control' />
                    </div>
                    <div>
                        <label htmlFor="gpa" className='form-label'>Email</label>
                        <input type="number" name="gpa" id="gpa" className='form-control' />
                    </div>
                    <h3>Work Experiance</h3>
                    <div>
                        <label htmlFor="companyName" className='form-label'>Email</label>
                        <input type="text" name="companyName" id="companyName" className='form-control' />
                    </div>
                    <div>
                        <label htmlFor="position" className='form-label'>Email</label>
                        <input type="text" name="position" id="position" className='form-control' />
                    </div>
                    <div>
                        <label htmlFor="duration" className='form-label'>Email</label>
                        <input type="text" name="duration" id="duration" className='form-control' />
                    </div>
                    <Link to='/' className='btn btn-primary' >Home</Link>
                    <Link to='/view-all-resume' className='btn btn-primary'>View and Edit</Link>
                </div>

            </form>

        </div>
    )
}

export default CreateResume