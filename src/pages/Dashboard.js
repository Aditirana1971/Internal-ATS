import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      resumeFileName: 'John_Doe_CV.pdf',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '9876543210',
      resumeFileName: 'Jane_Smith_CV.pdf',
    }
  ]);

  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/candidate/${id}`);
  };

  return (
    <div>
      <h2>Candidate Dashboard</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Resume</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>{c.resumeFileName}</td>
              <td><button onClick={() => handleView(c.id)}>View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
