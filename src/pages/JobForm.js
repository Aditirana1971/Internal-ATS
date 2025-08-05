import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JobForm() {
  const [job, setJob] = useState({
    title: '',
    department: '',
    location: '',
    hiringManager: '',
    description: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job submitted:', job);
    // For now we just log — later we can save to localStorage or backend
    navigate('/upload');
  };

  return (
    <div>
      <h2>Create a New Job</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Job Title" onChange={handleChange} required /><br />
        <input type="text" name="department" placeholder="Department" onChange={handleChange} required /><br />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} required /><br />
        <input type="text" name="hiringManager" placeholder="Hiring Manager" onChange={handleChange} required /><br />
        <textarea name="description" placeholder="Job Description" onChange={handleChange} required /><br />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default JobForm;
