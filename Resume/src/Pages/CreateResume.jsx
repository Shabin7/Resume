import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const CreateResume = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        degree: '',
        institution: '',
        gpa: '',
    });
    const navigate = useNavigate()

    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3000/create-resume', form)
            .then((res) => {
                console.log(res.data);
                navigate('/view-all-resume')
            })
            .catch((err) => {
                console.error(err.message);
            });
    };

    return (
        <div>
            <h1>Create Resume Clone</h1>
            <form onSubmit={handleSubmit}>
                <div className="container m-0">
                    <h3>Contact Details</h3>
                    <div>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            value={form.name}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            value={form.email}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input
                            type="number"
                            name="phone"
                            id="phone"
                            className="form-control"
                            value={form.phone}
                            onChange={handleOnChange}
                        />
                    </div>
                    <h3>Educational Details</h3>
                    <div>
                        <label htmlFor="degree" className="form-label">Qualification</label>
                        <input
                            type="text"
                            name="degree"
                            id="degree"
                            className="form-control"
                            value={form.degree}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="institution" className="form-label">Institution</label>
                        <input
                            type="text"
                            name="institution"
                            id="institution"
                            className="form-control"
                            value={form.institution}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="gpa" className="form-label">GPA</label>
                        <input
                            type="number"
                            name="gpa"
                            id="gpa"
                            className="form-control"
                            value={form.gpa}
                            onChange={handleOnChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/" className="btn btn-primary">Home</Link>
                    <Link to="/view-all-resume" className="btn btn-primary">View and Edit</Link>
                </div>
            </form>
        </div>
    );
};

export default CreateResume;
