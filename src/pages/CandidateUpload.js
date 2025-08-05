import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CandidateUpload() {
  const [candidates, setCandidates] = useState([]);
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const fakeCandidates = files.map((file, index) => ({
      id: index + 1,
      name: file.name.replace(/\.[^/.]+$/, ""),
      email: `fake${index + 1}@email.com`,
      phone: '9999999999',
      resumeFileName: file.name,
    }));
    setCandidates(fakeCandidates);
  };

  const handleSubmit = () => {
    console.log("Candidates uploaded:", candidates);
    // Later, we can persist this
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Upload Resumes</h2>
      <input type="file" multiple onChange={handleFileUpload} /><br /><br />
      {candidates.length > 0 && (
        <div>
          <h4>Preview:</h4>
          <ul>
            {candidates.map((c) => (
              <li key={c.id}>{c.name} ({c.email})</li>
            ))}
          </ul>
          <button onClick={handleSubmit}>Next</button>
        </div>
      )}
    </div>
  );
}

export default CandidateUpload;
